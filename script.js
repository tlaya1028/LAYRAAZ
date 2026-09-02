"use strict";

/* =========================================================
   LAYRAAZ
   ========================================================= */

const STORAGE_KEY = "LAYRAAZ_DATA_V4";


/* =========================================================
   PALETTES
   ========================================================= */

const palettes = {

    forest:{
        name:"Palette 1",
        background:"#1D251C",
        main:"#101411",
        font:"#D0D4CE"
    },

    butter:{
        name:"Palette 2",
        background:"#F3E7A3",
        main:"#8CB8D0",
        font:"#4A2C20"
    },

    almond:{
        name:"Palette 3",
        background:"#E8D8C3",
        main:"#8DBFA9",
        font:"#8E2636"
    },

    sage:{
        name:"Palette 4",
        background:"#B8C5B1",
        main:"#6D2026",
        font:"#3B2922"
    },

    navy:{
        name:"Palette 5",
        background:"#111D38",
        main:"#C8A85C",
        font:"#F5F1E8"
    },

    champagne:{
        name:"Palette 6",
        background:"#722F37",
        main:"#70752F",
        font:"#F3E6D0"
    },

    gunmetal:{
        name:"Palette 7",
        background:"#D8E84B",
        main:"#8399B9",
        font:"#475418"
    },

    cadet:{
        name:"Palette 8",
        background:"#919FA5",
        main:"#EEEAE2",
        font:"#30251F"
    },

    pink:{
        name:"Palette 9",
        background:"#C47F7B",
        main:"#722F37",
        font:"#F7F2E7"
    },

    lavender:{
        name:"Palette 10",
        background:"#BCC2F4",
        main:"#B0BC68",
        font:"#FFFEECD"
    }

};


/* =========================================================
   DEFAULT DATA
   ========================================================= */

const defaultData = {

    profile:{
        name:"Laya",
        dob:"2002-08-28",

        mbti:"INTJ",

        strengths:"Ambitious, self-motivated, hardworking",

        weaknesses:"Social anxiety, procrastination, overthinking",

        favouriteColours:"Forest Green, Charcoal Black, Silver",

        favouriteFood:"Dahi Puri",

        favouritePlaces:"Hill Stations",

        favouriteMusic:"Melody",

        favouriteBeverages:"Buttermilk",

        favouriteAnimal:"Dog",

        favouriteBird:"Peacock",

        skinType:"Sensitive Skin",

        bodyType:"Rectangular",

        bloodGroup:"",

        familyMembers:"4",

        height:"5'1\"",

        hobbies:
            "Singing, Crocheting, Travelling, Poetry, Kuchipudi, Photography, Cooking, Gardening",

        occupation:
            "Executive Assistant to Terminal Head",

        businessGoal:
            "Start an Edible Cutlery Business in 2 years",

        achievements:
            "Playback singer, sang in a movie"
    },


    character:{

        name:"Character",

        personality:
            "Calm, intelligent, firm and caring.",

        traits:
            [
                "Calm",
                "Intelligent",
                "Firm",
                "Caring"
            ],

        sticker:"",

        lastMessage:
            "I am here."
    },


    appearance:"forest",


    reminders:[],

    todos:[],

    goals:[],

    notes:[],

    notifications:[]


};


let data = loadData();


/* =========================================================
   STORAGE
   ========================================================= */

function clone(obj){
    return JSON.parse(JSON.stringify(obj));
}


function loadData(){

    try{

        const saved =
            JSON.parse(localStorage.getItem(STORAGE_KEY));

        if(!saved){
            return clone(defaultData);
        }

        return mergeData(
            clone(defaultData),
            saved
        );

    }catch(error){

        console.error(error);

        return clone(defaultData);
    }
}


function mergeData(base,saved){

    const result = {...base,...saved};

    result.profile = {
        ...base.profile,
        ...(saved.profile || {})
    };

    result.character = {
        ...base.character,
        ...(saved.character || {})
    };

    result.reminders =
        Array.isArray(saved.reminders)
        ? saved.reminders
        : [];

    result.todos =
        Array.isArray(saved.todos)
        ? saved.todos
        : [];

    result.goals =
        Array.isArray(saved.goals)
        ? saved.goals
        : [];

    result.notes =
        Array.isArray(saved.notes)
        ? saved.notes
        : [];

    result.notifications =
        Array.isArray(saved.notifications)
        ? saved.notifications
        : [];

    return result;
}


function saveData(){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}


/* =========================================================
   HELPERS
   ========================================================= */

function esc(value){

    return String(value ?? "")
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");
}


function uid(prefix="id"){

    return prefix + "_" +
        Date.now().toString(36) +
        Math.random().toString(36).slice(2,8);
}


function formatDate(date){

    return new Intl.DateTimeFormat(
        "en-IN",
        {
            day:"2-digit",
            month:"short",
            year:"numeric"
        }
    ).format(new Date(date));
}


function calculateAge(dob){

    if(!dob) return "";

    const birth = new Date(dob);
    const today = new Date();

    let age =
        today.getFullYear() -
        birth.getFullYear();

    const month =
        today.getMonth() -
        birth.getMonth();

    if(
        month < 0 ||
        (
            month === 0 &&
            today.getDate() < birth.getDate()
        )
    ){
        age--;
    }

    return age;
}


function toast(message){

    const el =
        document.getElementById("toast");

    if(!el) return;

    el.textContent = message;

    el.classList.add("show");

    clearTimeout(toast.timer);

    toast.timer =
        setTimeout(
            () => el.classList.remove("show"),
            2200
        );
}


/* =========================================================
   ICON SYSTEM
   ========================================================= */

const ICONS = {

    menu:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
            <path d="M4 7h16M4 12h16M4 17h16"/>
        </svg>`,

    home:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3.5 10.5 12 3l8.5 7.5"/>
            <path d="M5.5 9.5V20h13V9.5"/>
            <path d="M9.5 20v-6h5v6"/>
        </svg>`,

    profile:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
            <circle cx="12" cy="8" r="3.5"/>
            <path d="M5 20c.8-3.5 3.2-5.3 7-5.3s6.2 1.8 7 5.3"/>
        </svg>`,

    character:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="8.5"/>
            <circle cx="9" cy="10" r=".7" fill="currentColor"/>
            <circle cx="15" cy="10" r=".7" fill="currentColor"/>
            <path d="M8.5 14c1 1.4 2.1 2 3.5 2s2.5-.6 3.5-2"/>
            <path d="M5.2 6.5 4 4l3 .8"/>
            <path d="M18.8 6.5 20 4l-3 .8"/>
        </svg>`,

    bell:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
            <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/>
            <path d="M10 21h4"/>
        </svg>`,

    check:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="4"/>
            <path d="m8 12 2.5 2.5L16 9"/>
        </svg>`,

    target:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="12" cy="12" r="1"/>
        </svg>`,

    note:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 4h12v16H6z"/>
            <path d="M9 8h6M9 12h6M9 16h4"/>
        </svg>`,

    notification:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
            <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/>
            <path d="M10 21h4"/>
        </svg>`,

    palette:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
            <path d="M12 3a9 9 0 0 0 0 18h1.2c1.1 0 1.8-1.2 1.2-2.2-.7-1.1.1-2.5 1.4-2.5H17a4 4 0 0 0 4-4A9.3 9.3 0 0 0 12 3Z"/>
            <circle cx="7.5" cy="10" r=".8"/>
            <circle cx="10" cy="7" r=".8"/>
            <circle cx="14" cy="7" r=".8"/>
            <circle cx="17" cy="10" r=".8"/>
        </svg>`,

    search:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
            <circle cx="10.8" cy="10.8" r="6.5"/>
            <path d="m16 16 4.5 4.5"/>
        </svg>`,

    star:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">
            <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>
        </svg>`,

    heart:
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">
            <path d="M20 8.8c0 5-8 10-8 10S4 13.8 4 8.8A4.2 4.2 0 0 1 12 6a4.2 4.2 0 0 1 8 2.8Z"/>
        </svg>`,

    sparkle:
        `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.5 13.7 9l6.3 3-6.3 3-1.7 6.5L10.3 15 4 12l6.3-3L12 2.5Z"/>
        </svg>`
};


function paintIcons(){

    document.querySelectorAll(
        ".icon,.nav-icon"
    ).forEach(el=>{

        const classes =
            [...el.classList];

        const found =
            classes.find(
                c =>
                    c.startsWith("icon-") &&
                    c !== "icon" &&
                    c !== "nav-icon"
            );

        if(!found) return;

        const name =
            found.replace("icon-","");

        if(ICONS[name]){
            el.innerHTML = ICONS[name];
        }

    });
}


/* =========================================================
   APPEARANCE
   ========================================================= */

function applyAppearance(){

    const palette =
        palettes[data.appearance] ||
        palettes.forest;

    document.documentElement.style.setProperty(
        "--bg",
        palette.background
    );

    document.documentElement.style.setProperty(
        "--main",
        palette.main
    );

    document.documentElement.style.setProperty(
        "--font",
        palette.font
    );

    document.documentElement.style.setProperty(
        "--muted",
        getMutedColour(palette.font)
    );

    document.querySelector(
        'meta[name="theme-color"]'
    )?.setAttribute(
        "content",
        palette.background
    );
}


function getMutedColour(font){

    return font === "#F7F2E7"
        ? "#E5D8D3"
        : font;
}


/* =========================================================
   NAVIGATION
   ========================================================= */

const pageNames = {

    dashboard:["Dashboard","A small space for everything that matters."],

    profile:["Profile","Your details, preferences and personal information."],

    character:["Character","Shape the little personality living inside LAYRAAZ."],

    reminders:["Reminders","Things LAYRAAZ should remember for you."],

    todos:["To-do List","Small tasks. One at a time."],

    goals:["Goals","Give your ambitions somewhere to go."],

    notes:["Notes","Keep thoughts, ideas and tiny discoveries here."],

    notifications:["Notifications","Your LAYRAAZ notification history."],

    appearance:["Appearance","Choose the atmosphere of your little digital space."]
};


function showSection(section){

    document.querySelectorAll(
        ".page-section"
    ).forEach(page=>{

        page.classList.toggle(
            "active",
            page.id === section
        );

    });


    document.querySelectorAll(
        ".nav-item"
    ).forEach(item=>{

        item.classList.toggle(
            "active",
            item.dataset.section === section
        );

    });


    const title =
        pageNames[section]?.[0] ||
        "LAYRAAZ";

    const subtitle =
        pageNames[section]?.[1] ||
        "";

    document.getElementById(
        "pageTitle"
    ).textContent = title;

    document.getElementById(
        "pageSubtitle"
    ).textContent = subtitle;


    renderSection(section);

    paintIcons();
}


function renderSection(section){

    switch(section){

        case "dashboard":
            renderDashboard();
            break;

        case "profile":
            renderProfile();
            break;

        case "character":
            renderCharacter();
            break;

        case "reminders":
            renderReminders();
            break;

        case "todos":
            renderTodos();
            break;

        case "goals":
            renderGoals();
            break;

        case "notes":
            renderNotes();
            break;

        case "notifications":
            renderNotifications();
            break;

        case "appearance":
            renderAppearance();
            break;
    }
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard(){

    const root =
        document.getElementById("dashboard");

    const age =
        calculateAge(data.profile.dob);

    const completedTodos =
        data.todos.filter(
            t=>t.done
        ).length;

    const openTodos =
        data.todos.length -
        completedTodos;

    const completedGoals =
        data.goals.filter(
            g=>Number(g.progress) >= 100
        ).length;

    const nextReminder =
        [...data.reminders]
            .filter(r=>!r.done)
            .sort(
                (a,b)=>
                    new Date(a.when) -
                    new Date(b.when)
            )[0];


    root.innerHTML = `

        <div class="grid dashboard-top">

            <div class="card hero">

                <span class="card-decoration dec-top-right">✦</span>
                <span class="card-decoration dec-bottom-right">♡</span>

                <div class="hero-copy">

                    <div class="script">
                        a little space for you
                    </div>

                    <h2>
                        Welcome back, ${esc(data.profile.name)}.
                    </h2>

                    <p>
                        Plan your day, keep your thoughts,
                        track your goals and let LAYRAAZ
                        remember the little things.
                    </p>

                    <div class="actions">

                        <button
                            class="btn primary"
                            data-go="todos"
                            type="button">
                            See my tasks
                        </button>

                        <button
                            class="btn"
                            data-go="reminders"
                            type="button">
                            My reminders
                        </button>

                    </div>

                </div>

                <div class="decor">
                    ✧ ♡ ✧
                </div>

            </div>


            <div class="card profile-card">

                <span class="card-decoration dec-top-right">
                    ♧
                </span>

                <div class="card-title">
                    <h3>About Me</h3>
                </div>

                <div class="profile-head">

                    <span
                        class="avatar"
                        style="${avatarStyle()}">
                    </span>

                    <div>
                        <div class="profile-name">
                            ${esc(data.profile.name)}
                        </div>

                        <div class="meta">
                            ${esc(data.profile.mbti || "MBTI not set")}
                        </div>
                    </div>

                </div>

                <div class="role">
                    ${esc(data.profile.occupation)}
                </div>

                <button
                    class="btn"
                    data-go="profile"
                    type="button">
                    View profile
                </button>

            </div>


            <div class="card character">

                <span class="card-decoration dec-top-right">
                    ✦
                </span>

                <div class="card-title">
                    <h3>${esc(data.character.name || "Character")}</h3>
                </div>

                <div class="character-stage">

                    ${
                        data.character.sticker
                        ?
                        `<img
                            class="sticker"
                            src="${data.character.sticker}"
                            alt="Character sticker">`
                        :
                        `<div class="placeholder">
                            Upload a character
                        </div>`
                    }

                    <div class="character-bubble">
                        ${esc(
                            generateCharacterMessage(
                                nextReminder?.title ||
                                "your day"
                            )
                        )}
                    </div>

                </div>

                <div class="mood">
                    ${esc(
                        data.character.personality ||
                        "Personality not set."
                    )}
                </div>

            </div>


            <div class="card">

                <span class="card-decoration dec-top-right">
                    ☼
                </span>

                <div class="card-title">
                    <h3>Today</h3>
                </div>

                <div class="quote">
                    One step at a time.
                </div>

                <p class="meta">
                    ${age ? `Age ${age}` : ""}
                </p>

            </div>

        </div>


        <div class="grid stats">

            <div class="card stat">

                <div class="stat-icon">
                    <span class="icon icon-check"></span>
                </div>

                <div>
                    <div class="stat-number">
                        ${openTodos}
                    </div>

                    <div class="stat-label">
                        Open tasks
                    </div>
                </div>

            </div>


            <div class="card stat">

                <div class="stat-icon">
                    <span class="icon icon-bell"></span>
                </div>

                <div>
                    <div class="stat-number">
                        ${data.reminders.filter(r=>!r.done).length}
                    </div>

                    <div class="stat-label">
                        Reminders
                    </div>
                </div>

            </div>


            <div class="card stat">

                <div class="stat-icon">
                    <span class="icon icon-target"></span>
                </div>

                <div>
                    <div class="stat-number">
                        ${completedGoals}
                    </div>

                    <div class="stat-label">
                        Goals completed
                    </div>
                </div>

            </div>


            <div class="card stat">

                <div class="stat-icon">
                    <span class="icon icon-note"></span>
                </div>

                <div>
                    <div class="stat-number">
                        ${data.notes.length}
                    </div>

                    <div class="stat-label">
                        Notes
                    </div>
                </div>

            </div>


            <div class="card stat">

                <div class="stat-icon">
                    <span class="icon icon-star"></span>
                </div>

                <div>
                    <div class="stat-number">
                        ${data.goals.length}
                    </div>

                    <div class="stat-label">
                        Goals
                    </div>
                </div>

            </div>

        </div>


        <div class="grid lower">

            <div class="card">

                <span class="card-decoration dec-top-right">
                    ♡
                </span>

                <div class="card-title">
                    <h3>Next Reminder</h3>
                </div>

                ${
                    nextReminder
                    ?
                    `
                    <div class="mini">

                        <div>
                            <strong>
                                ${esc(nextReminder.title)}
                            </strong>

                            <small>
                                ${formatDate(nextReminder.when)}
                            </small>
                        </div>

                    </div>
                    `
                    :
                    `<div class="empty">
                        Nothing waiting for you.
                    </div>`
                }

            </div>


            <div class="card">

                <span class="card-decoration dec-top-right">
                    ✿
                </span>

                <div class="card-title">
                    <h3>Little Note</h3>
                </div>

                ${
                    data.notes[0]
                    ?
                    `
                    <div class="note-paper">
                        ${esc(data.notes[0].text)}
                    </div>
                    `
                    :
                    `
                    <div class="note-paper">
                        Write something worth remembering.
                    </div>
                    `
                }

            </div>


            <div class="card">

                <span class="card-decoration dec-top-right">
                    ✧
                </span>

                <div class="card-title">
                    <h3>Little Plans</h3>
                </div>

                <div class="affirmation">
                    Small plans.<br>
                    Big direction.
                </div>

                <div class="actions" style="margin-top:13px">

                    <button
                        class="btn"
                        data-go="goals"
                        type="button">
                        Goals
                    </button>

                    <button
                        class="btn"
                        data-go="notes"
                        type="button">
                        Notes
                    </button>

                </div>

            </div>

        </div>
    `;

    paintIcons();
}


/* =========================================================
   PROFILE
   ========================================================= */

function renderProfile(){

    const root =
        document.getElementById("profile");

    const p = data.profile;

    root.innerHTML = `

        <div class="section-head">

            <div>
                <h2>Profile</h2>

                <p>
                    Everything here can be edited.
                </p>
            </div>

        </div>


        <div class="profile-grid">

            <div class="card">

                <div class="card-title">
                    <h3>Personal Details</h3>
                    <span>♡</span>
                </div>


                <div class="form-grid">

                    ${field("Name","profile-name",p.name)}

                    ${field("Date of Birth","profile-dob",p.dob,"date")}

                    ${field("MBTI","profile-mbti",p.mbti)}

                    ${field("Blood Group","profile-blood",p.bloodGroup)}

                    ${field("Height","profile-height",p.height)}

                    ${field("Family Members","profile-family",p.familyMembers)}

                    ${field("Skin Type","profile-skin",p.skinType)}

                    ${field("Body Type","profile-body",p.bodyType)}

                    ${field("Favourite Food","profile-food",p.favouriteFood)}

                    ${field("Favourite Beverages","profile-beverages",p.favouriteBeverages)}

                    ${field("Favourite Animal","profile-animal",p.favouriteAnimal)}

                    ${field("Favourite Bird","profile-bird",p.favouriteBird)}

                    ${field("Favourite Places","profile-places",p.favouritePlaces)}

                    ${field("Favourite Music","profile-music",p.favouriteMusic)}

                    ${field("Favourite Colours","profile-colours",p.favouriteColours)}

                    <div class="field full">

                        <label>Strengths</label>

                        <textarea
                            id="profile-strengths">${esc(p.strengths)}</textarea>

                    </div>

                    <div class="field full">

                        <label>Weaknesses</label>

                        <textarea
                            id="profile-weaknesses">${esc(p.weaknesses)}</textarea>

                    </div>

                    <div class="field full">

                        <label>Hobbies</label>

                        <textarea
                            id="profile-hobbies">${esc(p.hobbies)}</textarea>

                    </div>

                    <div class="field full">

                        <label>Occupation</label>

                        <textarea
                            id="profile-occupation">${esc(p.occupation)}</textarea>

                    </div>

                    <div class="field full">

                        <label>Business Goal</label>

                        <textarea
                            id="profile-business">${esc(p.businessGoal)}</textarea>

                    </div>

                    <div class="field full">

                        <label>Achievements</label>

                        <textarea
                            id="profile-achievements">${esc(p.achievements)}</textarea>

                    </div>

                </div>


                <div class="button-row">

                    <button
                        class="btn primary"
                        id="saveProfile"
                        type="button">
                        Save Profile
                    </button>

                </div>

            </div>


            <div class="card">

                <div class="card-title">
                    <h3>Profile Picture</h3>
                </div>

                <div
                    class="sticker-preview"
                    id="profilePreview">

                    <span
                        class="avatar"
                        style="
                            width:120px;
                            height:120px;
                            ${avatarStyle()}
                        ">
                    </span>

                </div>

                <input
                    id="profileImage"
                    type="file"
                    accept="image/*">

                <p class="field-note">
                    This picture stays inside your browser.
                </p>

            </div>

        </div>
    `;
}


function field(label,id,value,type="text"){

    return `
        <div class="field">

            <label for="${id}">
                ${esc(label)}
            </label>

            <input
                id="${id}"
                type="${type}"
                value="${esc(value)}">

        </div>
    `;
}


function avatarStyle(){

    if(!data.profile.image){
        return "";
    }

    return `
        background-image:url("${data.profile.image}");
    `;
}


/* =========================================================
   CHARACTER
   ========================================================= */

function renderCharacter(){

    const root =
        document.getElementById("character");

    const traits =
        Array.isArray(data.character.traits)
        ? data.character.traits
        : [];


    root.innerHTML = `

        <div class="section-head">

            <div>
                <h2>Character</h2>

                <p>
                    Your little digital companion.
                </p>
            </div>

        </div>


        <div class="character-settings">

            <div class="card">

                <div class="card-title">
                    <h3>Character Personality</h3>
                    <span>✦</span>
                </div>


                <div class="personality-box">

                    <div class="field">

                        <label>
                            Character Name
                        </label>

                        <input
                            id="characterName"
                            value="${esc(data.character.name)}">

                    </div>


                    <div class="field">

                        <label>
                            Personality
                        </label>

                        <textarea
                            id="characterPersonality"
                            placeholder="Example: Calm, intelligent, firm and caring.">${esc(data.character.personality)}</textarea>

                    </div>


                    <div class="field">

                        <label>
                            Personality Traits
                        </label>

                        <input
                            id="characterTraits"
                            value="${esc(traits.join(", "))}"
                            placeholder="Calm, Firm, Caring">

                    </div>


                    <div class="trait-tags">

                        ${
                            traits.map(
                                t =>
                                `<span class="trait">
                                    ${esc(t)}
                                </span>`
                            ).join("")
                        }

                    </div>


                    <button
                        class="btn primary"
                        id="saveCharacter"
                        type="button">
                        Save Personality
                    </button>

                </div>

            </div>


            <div class="card">

                <div class="card-title">
                    <h3>Character Sticker</h3>
                    <span>♡</span>
                </div>


                <div class="upload-box">

                    <p>
                        Upload the character image.
                    </p>

                    <p class="field-note">
                        LAYRAAZ will automatically remove
                        the white background and create a
                        transparent sticker.
                    </p>

                    <input
                        id="characterImage"
                        type="file"
                        accept="image/*">

                </div>


                <div class="sticker-preview">

                    ${
                        data.character.sticker
                        ?
                        `<img
                            src="${data.character.sticker}"
                            alt="Character sticker">`
                        :
                        `<div class="placeholder">
                            Your sticker will appear here.
                        </div>`
                    }

                </div>

            </div>

        </div>


        <div class="card" style="margin-top:15px">

            <div class="card-title">
                <h3>Personality Test</h3>
            </div>

            <p class="meta">
                This lets you preview how ${esc(data.character.name || "Character")}
                talks to you.
            </p>

            <div class="actions">

                <button
                    class="btn primary"
                    id="testCharacter"
                    type="button">
                    Test Character
                </button>

            </div>

            <div
                id="characterTestResult"
                style="margin-top:14px">
            </div>

        </div>
    `;
}


/* =========================================================
   STICKER PROCESSING
   ========================================================= */

async function createSticker(file){

    return new Promise(
        (resolve,reject)=>{

            const reader =
                new FileReader();

            reader.onload = ()=>{

                const img =
                    new Image();

                img.onload = ()=>{

                    try{

                        const maxSize = 900;

                        const scale =
                            Math.min(
                                1,
                                maxSize /
                                Math.max(
                                    img.width,
                                    img.height
                                )
                            );

                        const canvas =
                            document.createElement("canvas");

                        canvas.width =
                            Math.round(
                                img.width * scale
                            );

                        canvas.height =
                            Math.round(
                                img.height * scale
                            );

                        const ctx =
                            canvas.getContext(
                                "2d",
                                {
                                    willReadFrequently:true
                                }
                            );

                        ctx.drawImage(
                            img,
                            0,
                            0,
                            canvas.width,
                            canvas.height
                        );


                        const imageData =
                            ctx.getImageData(
                                0,
                                0,
                                canvas.width,
                                canvas.height
                            );

                        const pixels =
                            imageData.data;

                        const width =
                            canvas.width;

                        const height =
                            canvas.height;

                        const visited =
                            new Uint8Array(
                                width * height
                            );

                        const queue = [];


                        function isBackground(x,y){

                            const i =
                                (y * width + x) * 4;

                            const r = pixels[i];
                            const g = pixels[i+1];
                            const b = pixels[i+2];

                            /*
                               White/near-white background.
                               The uploaded image has a clean
                               white background.
                            */

                            return (
                                r > 215 &&
                                g > 215 &&
                                b > 215 &&
                                Math.max(r,g,b) -
                                Math.min(r,g,b) < 25
                            );
                        }


                        function addSeed(x,y){

                            if(
                                x < 0 ||
                                y < 0 ||
                                x >= width ||
                                y >= height
                            ){
                                return;
                            }

                            const index =
                                y * width + x;

                            if(
                                visited[index] ||
                                !isBackground(x,y)
                            ){
                                return;
                            }

                            visited[index] = 1;

                            queue.push([x,y]);
                        }


                        /* Seed all four edges */

                        for(let x=0;x<width;x++){

                            addSeed(x,0);

                            addSeed(
                                x,
                                height-1
                            );
                        }

                        for(let y=0;y<height;y++){

                            addSeed(0,y);

                            addSeed(
                                width-1,
                                y
                            );
                        }


                        /* Flood-fill background */

                        let pointer = 0;

                        while(
                            pointer <
                            queue.length
                        ){

                            const [x,y] =
                                queue[pointer++];

                            const i =
                                (y * width + x) * 4;

                            pixels[i+3] = 0;


                            addSeed(x+1,y);
                            addSeed(x-1,y);
                            addSeed(x,y+1);
                            addSeed(x,y-1);
                        }


                        /*
                           Remove faint white fringe around
                           already transparent areas.
                        */

                        for(
                            let y=1;
                            y<height-1;
                            y++
                        ){

                            for(
                                let x=1;
                                x<width-1;
                                x++
                            ){

                                const i =
                                    (y * width + x) * 4;

                                if(
                                    pixels[i+3] === 0
                                ){
                                    continue;
                                }

                                const r = pixels[i];
                                const g = pixels[i+1];
                                const b = pixels[i+2];

                                if(
                                    r > 238 &&
                                    g > 238 &&
                                    b > 238
                                ){

                                    const neighbours = [

                                        ((y-1)*width+x)*4,
                                        ((y+1)*width+x)*4,
                                        (y*width+x-1)*4,
                                        (y*width+x+1)*4

                                    ];

                                    const nearTransparent =
                                        neighbours.some(
                                            n =>
                                            pixels[n+3] === 0
                                        );

                                    if(nearTransparent){
                                        pixels[i+3] = 0;
                                    }
                                }
                            }
                        }


                        ctx.putImageData(
                            imageData,
                            0,
                            0
                        );


                        resolve(
                            canvas.toDataURL(
                                "image/png"
                            )
                        );

                    }catch(error){

                        reject(error);
                    }
                };


                img.onerror =
                    () =>
                    reject(
                        new Error(
                            "Could not read image."
                        )
                    );

                img.src =
                    reader.result;
            };


            reader.onerror =
                () =>
                reject(
                    new Error(
                        "Could not read file."
                    )
                );

            reader.readAsDataURL(file);
        }
    );
}


/* =========================================================
   CHARACTER PERSONALITY ENGINE
   ========================================================= */

function personalityWords(){

    const text =
        (
            data.character.personality +
            " " +
            (data.character.traits || []).join(" ")
        ).toLowerCase();

    return text;
}


function generateCharacterMessage(reminderTitle){

    const personality =
        personalityWords();

    const name =
        data.character.name ||
        "Character";

    const title =
        reminderTitle ||
        "your plans";


    const firm =
        /firm|strict|dominant|disciplined|direct|bold|commanding/.test(
            personality
        );

    const calm =
        /calm|quiet|composed|stoic|peaceful/.test(
            personality
        );

    const caring =
        /caring|kind|gentle|sweet|supportive|affectionate/.test(
            personality
        );

    const intelligent =
        /intelligent|smart|logical|analytical|clever/.test(
            personality
        );


    if(firm && caring){

        return `${title} is waiting. Handle it now. I’ll be nice about it, but I am still watching.`;
    }


    if(firm){

        return `${title} is due. No negotiations. Go handle it.`;
    }


    if(intelligent && calm){

        return `Your reminder is "${title}". Keep it simple, do it properly, then move on.`;
    }


    if(caring){

        return `A small reminder: "${title}". Take it one step at a time. You’ve got this.`;
    }


    if(intelligent){

        return `"${title}" is on your list. Deal with it before it becomes tomorrow’s problem.`;
    }


    if(calm){

        return `A quiet reminder about "${title}".`;
    }


    return `${title} is waiting for you.`;
}


/* =========================================================
   REMINDERS
   ========================================================= */

function renderReminders(){

    const root =
        document.getElementById("reminders");

    root.innerHTML = `

        <div class="section-head">

            <div>
                <h2>Reminders</h2>
                <p>
                    LAYRAAZ can remind you in the browser.
                </p>
            </div>

            <button
                class="btn primary"
                id="addReminder"
                type="button">
                + Reminder
            </button>

        </div>


        <div class="list-page">

            ${
                data.reminders.length
                ?
                data.reminders
                    .sort(
                        (a,b)=>
                            new Date(a.when) -
                            new Date(b.when)
                    )
                    .map(reminderCard)
                    .join("")
                :
                `<div class="card empty">
                    No reminders yet.
                </div>`
            }

        </div>
    `;
}


function reminderCard(r){

    return `

        <div class="card item-card">

            <div class="main">

                <h3>
                    ${esc(r.title)}
                </h3>

                <p>
                    ${formatDate(r.when)}
                </p>

                ${
                    r.category
                    ?
                    `<p>${esc(r.category)}</p>`
                    :
                    ""
                }

            </div>

            <div class="item-actions">

                <button
                    class="btn"
                    data-reminder-done="${r.id}"
                    type="button">
                    Done
                </button>

                <button
                    class="btn"
                    data-reminder-snooze="${r.id}"
                    type="button">
                    Snooze 5 min
                </button>

                <button
                    class="btn"
                    data-reminder-edit="${r.id}"
                    type="button">
                    Edit
                </button>

                <button
                    class="btn danger"
                    data-reminder-delete="${r.id}"
                    type="button">
                    Delete
                </button>

            </div>

        </div>
    `;
}


function openReminderForm(reminder=null){

    const root =
        document.getElementById("modalRoot");

    const defaultWhen =
        reminder?.when ||
        new Date(
            Date.now() + 10*60*1000
        )
        .toISOString()
        .slice(0,16);


    root.innerHTML = `

        <div class="modal-backdrop">

            <div class="modal">

                <div class="modal-head">

                    <h2>
                        ${reminder ? "Edit Reminder" : "New Reminder"}
                    </h2>

                    <button
                        class="close"
                        id="closeModal"
                        type="button">
                        ×
                    </button>

                </div>


                <div class="form-grid">

                    <div class="field full">

                        <label>
                            Reminder
                        </label>

                        <input
                            id="reminderTitle"
                            value="${esc(reminder?.title || "")}"
                            placeholder="Example: Practice singing">

                    </div>


                    <div class="field">

                        <label>
                            Date & Time
                        </label>

                        <input
                            id="reminderWhen"
                            type="datetime-local"
                            value="${esc(defaultWhen)}">

                    </div>


                    <div class="field">

                        <label>
                            Category
                        </label>

                        <select id="reminderCategory">

                            ${categoryOptions(reminder?.category)}

                        </select>

                    </div>

                </div>


                <div class="button-row">

                    <button
                        class="btn primary"
                        id="saveReminder"
                        data-id="${reminder?.id || ""}"
                        type="button">
                        Save Reminder
                    </button>

                </div>

            </div>

        </div>
    `;
}


function categoryOptions(selected){

    const categories = [
        "Work",
        "Personal",
        "Finance",
        "Learning"
    ];

    return categories
        .map(
            c =>
            `<option
                ${c === selected ? "selected" : ""}
                value="${c}">
                ${c}
            </option>`
        )
        .join("");
}


function completeReminder(id){

    const reminder =
        data.reminders.find(
            r=>r.id === id
        );

    if(!reminder) return;

    reminder.done = true;

    saveData();

    addNotification(
        "Reminder completed",
        reminder.title
    );

    renderReminders();
    renderDashboard();

    toast("Done ✓");
}


function snoozeReminder(id){

    const reminder =
        data.reminders.find(
            r=>r.id === id
        );

    if(!reminder) return;

    reminder.done = false;

    reminder.when =
        new Date(
            Date.now() + 5*60*1000
        ).toISOString();

    reminder.notified = false;

    saveData();

    renderReminders();
    renderDashboard();

    toast("Snoozed for 5 minutes.");
}


/* =========================================================
   BROWSER NOTIFICATIONS
   ========================================================= */

async function requestNotificationPermission(){

    if(!("Notification" in window)){

        toast(
            "This browser does not support notifications."
        );

        return false;
    }


    if(Notification.permission === "granted"){
        return true;
    }


    if(Notification.permission === "denied"){

        toast(
            "Notifications are blocked in browser settings."
        );

        return false;
    }


    const permission =
        await Notification.requestPermission();

    return permission === "granted";
}


async function registerServiceWorker(){

    if(!("serviceWorker" in navigator)){
        return null;
    }

    try{

        const registration =
            await navigator.serviceWorker.register(
                "./sw.js"
            );

        return registration;

    }catch(error){

        console.error(
            "Service Worker registration failed:",
            error
        );

        return null;
    }
}


async function showBrowserReminder(reminder){

    const allowed =
        await requestNotificationPermission();

    if(!allowed){
        return;
    }


    const registration =
        await navigator.serviceWorker.ready;


    const message =
        generateCharacterMessage(
            reminder.title
        );


    try{

        await registration.showNotification(
            data.character.name || "LAYRAAZ",
            {

                body:message,

                icon:
                    data.character.sticker ||
                    undefined,

                badge:
                    data.character.sticker ||
                    undefined,

                tag:
                    "layraaz-reminder-" +
                    reminder.id,

                renotify:true,

                requireInteraction:true,

                actions:[
                    {
                        action:"done",
                        title:"DONE"
                    },
                    {
                        action:"snooze",
                        title:"SNOOZE 5 MIN"
                    }
                ],

                data:{
                    reminderId:reminder.id
                }

            }
        );

    }catch(error){

        console.error(
            "Notification failed:",
            error
        );
    }
}


async function checkReminders(){

    const now =
        Date.now();


    for(const reminder of data.reminders){

        if(
            reminder.done ||
            reminder.notified
        ){
            continue;
        }


        const when =
            new Date(
                reminder.when
            ).getTime();


        if(
            Number.isFinite(when) &&
            when <= now
        ){

            reminder.notified = true;

            saveData();


            addNotification(
                data.character.name ||
                "Character",
                generateCharacterMessage(
                    reminder.title
                )
            );


            showCharacterPopup(
                reminder
            );


            showBrowserReminder(
                reminder
            );
        }
    }


    updateNotificationCount();
}


function showCharacterPopup(reminder){

    const existing =
        document.getElementById(
            "floatingCharacter"
        );

    existing?.remove();


    if(!data.character.sticker){
        return;
    }


    const el =
        document.createElement("div");

    el.id =
        "floatingCharacter";


    el.innerHTML = `

        <div class="character-float-image">
            <img
                src="${data.character.sticker}"
                alt="Character">
        </div>

        <div class="character-float-bubble">

            ${esc(
                generateCharacterMessage(
                    reminder.title
                )
            )}

            <div class="actions" style="margin-top:7px">

                <button
                    class="btn"
                    data-floating-done="${reminder.id}"
                    type="button">
                    Done
                </button>

                <button
                    class="btn"
                    data-floating-snooze="${reminder.id}"
                    type="button">
                    5 min
                </button>

            </div>

        </div>
    `;


    Object.assign(
        el.style,
        {
            position:"fixed",
            right:"22px",
            bottom:"22px",
            zIndex:"999",
            display:"flex",
            alignItems:"flex-end",
            gap:"8px",
            maxWidth:"350px"
        }
    );


    document.body.appendChild(el);


    setTimeout(
        ()=>{
            el.remove();
        },
        20000
    );
}


/* =========================================================
   NOTIFICATIONS HISTORY
   ========================================================= */

function addNotification(title,message){

    data.notifications.unshift({

        id:uid("notification"),

        title,

        message,

        createdAt:
            new Date().toISOString(),

        read:false

    });


    data.notifications =
        data.notifications.slice(
            0,
            100
        );

    saveData();

    updateNotificationCount();
}


function updateNotificationCount(){

    const count =
        data.notifications.filter(
            n=>!n.read
        ).length;

    const el =
        document.getElementById(
            "notificationCount"
        );

    if(el){
        el.textContent =
            count > 99
            ? "99+"
            : count || "";
    }
}


function renderNotifications(){

    const root =
        document.getElementById(
            "notifications"
        );


    root.innerHTML = `

        <div class="section-head">

            <div>
                <h2>Notifications</h2>
                <p>
                    Your LAYRAAZ history.
                </p>
            </div>

            <button
                class="btn"
                id="markAllRead"
                type="button">
                Mark all read
            </button>

        </div>


        <div class="card">

            ${
                data.notifications.length
                ?
                data.notifications
                    .map(
                        n =>
                        `
                        <div class="notice ${n.read ? "" : "unread"}">

                            <div>

                                <strong>
                                    ${esc(n.title)}
                                </strong>

                                <small>
                                    ${esc(n.message)}
                                </small>

                                <small>
                                    ${formatDate(n.createdAt)}
                                </small>

                            </div>

                        </div>
                        `
                    )
                    .join("")
                :
                `<div class="empty">
                    No notifications yet.
                </div>`
            }

        </div>
    `;
}


/* =========================================================
   TODO
   ========================================================= */

function renderTodos(){

    const root =
        document.getElementById("todos");

    root.innerHTML = `

        <div class="section-head">

            <div>
                <h2>To-do List</h2>
                <p>
                    Categories only. No priority clutter.
                </p>
            </div>

            <button
                class="btn primary"
                id="addTodo"
                type="button">
                + Task
            </button>

        </div>


        <div class="card">

            ${
                data.todos.length
                ?
                data.todos
                    .map(
                        t =>
                        `
                        <div class="check-row">

                            <label class="custom-check">

                                <input
                                    type="checkbox"
                                    data-todo-check="${t.id}"
                                    ${t.done ? "checked" : ""}>

                                <span class="check-box"></span>

                            </label>

                            <span
                                class="todo-text ${t.done ? "done" : ""}">
                                ${esc(t.text)}
                            </span>

                            <small>
                                ${esc(t.category)}
                            </small>

                            <button
                                class="btn danger"
                                data-todo-delete="${t.id}"
                                type="button">
                                ×
                            </button>

                        </div>
                        `
                    )
                    .join("")
                :
                `<div class="empty">
                    No tasks yet.
                </div>`
            }

        </div>
    `;
}


function openTodoForm(){

    const root =
        document.getElementById("modalRoot");


    root.innerHTML = `

        <div class="modal-backdrop">

            <div class="modal">

                <div class="modal-head">

                    <h2>
                        New Task
                    </h2>

                    <button
                        class="close"
                        id="closeModal"
                        type="button">
                        ×
                    </button>

                </div>


                <div class="form-grid">

                    <div class="field full">

                        <label>
                            Task
                        </label>

                        <input
                            id="todoText"
                            placeholder="What needs to be done?">

                    </div>


                    <div class="field">

                        <label>
                            Category
                        </label>

                        <select id="todoCategory">

                            ${categoryOptions()}

                        </select>

                    </div>

                </div>


                <div class="button-row">

                    <button
                        class="btn primary"
                        id="saveTodo"
                        type="button">
                        Save Task
                    </button>

                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   GOALS
   ========================================================= */

function renderGoals(){

    const root =
        document.getElementById("goals");


    root.innerHTML = `

        <div class="section-head">

            <div>
                <h2>Goals</h2>
                <p>
                    Progress, not perfection.
                </p>
            </div>

            <button
                class="btn primary"
                id="addGoal"
                type="button">
                + Goal
            </button>

        </div>


        <div class="list-page">

            ${
                data.goals.length
                ?
                data.goals
                    .map(
                        g =>
                        `
                        <div class="card item-card">

                            <div class="main">

                                <h3>
                                    ${esc(g.title)}
                                </h3>

                                <p>
                                    ${esc(g.category)}
                                </p>

                                <div class="progress">

                                    <span
                                        style="
                                            width:${Math.min(
                                                100,
                                                Math.max(
                                                    0,
                                                    Number(g.progress)||0
                                                )
                                            )}%
                                        ">
                                    </span>

                                </div>

                            </div>

                            <div>

                                <strong>
                                    ${Number(g.progress)||0}%
                                </strong>

                                <br>

                                <button
                                    class="btn danger"
                                    data-goal-delete="${g.id}"
                                    type="button">
                                    Delete
                                </button>

                            </div>

                        </div>
                        `
                    )
                    .join("")
                :
                `<div class="card empty">
                    No goals yet.
                </div>`
            }

        </div>
    `;
}


function openGoalForm(){

    const root =
        document.getElementById("modalRoot");


    root.innerHTML = `

        <div class="modal-backdrop">

            <div class="modal">

                <div class="modal-head">

                    <h2>
                        New Goal
                    </h2>

                    <button
                        class="close"
                        id="closeModal"
                        type="button">
                        ×
                    </button>

                </div>


                <div class="form-grid">

                    <div class="field full">

                        <label>
                            Goal
                        </label>

                        <input
                            id="goalTitle"
                            placeholder="What are you building?">

                    </div>


                    <div class="field">

                        <label>
                            Category
                        </label>

                        <select id="goalCategory">

                            ${categoryOptions()}

                        </select>

                    </div>


                    <div class="field">

                        <label>
                            Progress %
                        </label>

                        <input
                            id="goalProgress"
                            type="number"
                            min="0"
                            max="100"
                            value="0">

                    </div>

                </div>


                <div class="button-row">

                    <button
                        class="btn primary"
                        id="saveGoal"
                        type="button">
                        Save Goal
                    </button>

                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   NOTES
   ========================================================= */

function renderNotes(){

    const root =
        document.getElementById("notes");


    root.innerHTML = `

        <div class="section-head">

            <div>
                <h2>Notes</h2>

                <p>
                    Thoughts, ideas and reminders to yourself.
                </p>

            </div>

            <button
                class="btn primary"
                id="addNote"
                type="button">
                + Note
            </button>

        </div>


        <div class="list-page">

            ${
                data.notes.length
                ?
                data.notes
                    .map(
                        n =>
                        `
                        <div class="card">

                            <span class="card-decoration dec-top-right">
                                ✿
                            </span>

                            <div class="note-paper">
                                ${esc(n.text)}
                            </div>

                            <div class="actions" style="margin-top:12px">

                                <small class="meta">
                                    ${formatDate(n.createdAt)}
                                </small>

                                <button
                                    class="btn danger"
                                    data-note-delete="${n.id}"
                                    type="button">
                                    Delete
                                </button>

                            </div>

                        </div>
                        `
                    )
                    .join("")
                :
                `<div class="card empty">
                    Nothing written yet.
                </div>`
            }

        </div>
    `;
}


function openNoteForm(){

    const root =
        document.getElementById("modalRoot");


    root.innerHTML = `

        <div class="modal-backdrop">

            <div class="modal">

                <div class="modal-head">

                    <h2>
                        New Note
                    </h2>

                    <button
                        class="close"
                        id="closeModal"
                        type="button">
                        ×
                    </button>

                </div>


                <div class="field">

                    <label>
                        Note
                    </label>

                    <textarea
                        id="noteText"
                        placeholder="Write it down..."></textarea>

                </div>


                <div class="button-row">

                    <button
                        class="btn primary"
                        id="saveNote"
                        type="button">
                        Save Note
                    </button>

                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   APPEARANCE
   ========================================================= */

function renderAppearance(){

    const root =
        document.getElementById(
            "appearance"
        );


    root.innerHTML = `

        <div class="section-head">

            <div>
                <h2>Appearance</h2>

                <p>
                    Ten little atmospheres for LAYRAAZ.
                </p>
            </div>

        </div>


        <div class="card">

            <div class="palette-grid">

                ${
                    Object.entries(palettes)
                        .map(
                            ([key,palette]) =>
                            `
                            <button
                                class="palette ${
                                    data.appearance === key
                                    ? "selected"
                                    : ""
                                }"
                                data-palette="${key}"
                                type="button">

                                <div class="swatches">

                                    <i style="background:${palette.background}"></i>

                                    <i style="background:${palette.main}"></i>

                                    <i style="background:${palette.font}"></i>

                                </div>

                                <strong>
                                    ${palette.name}
                                </strong>

                            </button>
                            `
                        )
                        .join("")
                }

            </div>

        </div>
    `;
}


/* =========================================================
   SEARCH
   ========================================================= */

function searchEverything(query){

    const q =
        query.trim().toLowerCase();

    const root =
        document.getElementById(
            "searchResults"
        );


    if(!q){

        root.classList.add("hidden");

        return;
    }


    const results = [];


    data.todos.forEach(t=>{

        if(
            `${t.text} ${t.category}`
                .toLowerCase()
                .includes(q)
        ){

            results.push({
                type:"To-do",
                title:t.text,
                section:"todos"
            });
        }
    });


    data.reminders.forEach(r=>{

        if(
            `${r.title} ${r.category}`
                .toLowerCase()
                .includes(q)
        ){

            results.push({
                type:"Reminder",
                title:r.title,
                section:"reminders"
            });
        }
    });


    data.goals.forEach(g=>{

        if(
            `${g.title} ${g.category}`
                .toLowerCase()
                .includes(q)
        ){

            results.push({
                type:"Goal",
                title:g.title,
                section:"goals"
            });
        }
    });


    data.notes.forEach(n=>{

        if(
            n.text
                .toLowerCase()
                .includes(q)
        ){

            results.push({
                type:"Note",
                title:n.text.slice(0,80),
                section:"notes"
            });
        }
    });


    root.innerHTML =
        results.length
        ?
        results
            .slice(0,12)
            .map(
                (r,index)=>
                `
                <div
                    class="search-result"
                    data-search-section="${r.section}">

                    <strong>
                        ${esc(r.title)}
                    </strong>

                    <span>
                        ${esc(r.type)}
                    </span>

                </div>
                `
            )
            .join("")
        :
        `
        <div class="search-result">
            <strong>No results</strong>
            <span>Try another word.</span>
        </div>
        `;


    root.classList.remove("hidden");
}


/* =========================================================
   EVENTS
   ========================================================= */

document.addEventListener(
    "click",
    async event=>{

        const nav =
            event.target.closest(
                ".nav-item"
            );

        if(nav){

            showSection(
                nav.dataset.section
            );

            return;
        }


        const go =
            event.target.closest(
                "[data-go]"
            );

        if(go){

            showSection(
                go.dataset.go
            );

            return;
        }


        const searchResult =
            event.target.closest(
                "[data-search-section]"
            );

        if(searchResult){

            showSection(
                searchResult.dataset.searchSection
            );

            document
                .getElementById("searchResults")
                .classList.add("hidden");

            return;
        }


        if(
            event.target.id ===
            "sidebarToggle"
        ){

            document
                .getElementById("sidebar")
                .classList.toggle(
                    "collapsed"
                );

            return;
        }


        if(
            event.target.id ===
            "profileBtn"
        ){

            showSection("profile");

            return;
        }


        if(
            event.target.closest(
                "#notificationBtn"
            )
        ){

            data.notifications.forEach(
                n=>n.read=true
            );

            saveData();

            showSection(
                "notifications"
            );

            updateNotificationCount();

            return;
        }


        if(
            event.target.id ===
            "addReminder"
        ){

            openReminderForm();

            return;
        }


        if(
            event.target.id ===
            "closeModal" ||
            event.target.closest(
                ".modal-backdrop"
            ) === event.target
        ){

            document
                .getElementById("modalRoot")
                .innerHTML = "";

            return;
        }


        if(
            event.target.id ===
            "saveReminder"
        ){

            const title =
                document
                    .getElementById("reminderTitle")
                    .value.trim();

            const when =
                document
                    .getElementById("reminderWhen")
                    .value;

            const category =
                document
                    .getElementById("reminderCategory")
                    .value;

            if(!title || !when){

                toast(
                    "Please enter the reminder and time."
                );

                return;
            }


            const id =
                event.target.dataset.id;


            if(id){

                const reminder =
                    data.reminders.find(
                        r=>r.id === id
                    );

                if(reminder){

                    reminder.title =
                        title;

                    reminder.when =
                        new Date(
                            when
                        ).toISOString();

                    reminder.category =
                        category;

                    reminder.done =
                        false;

                    reminder.notified =
                        false;
                }

            }else{

                data.reminders.push({

                    id:uid("reminder"),

                    title,

                    when:
                        new Date(
                            when
                        ).toISOString(),

                    category,

                    done:false,

                    notified:false
                });
            }


            saveData();

            document
                .getElementById("modalRoot")
                .innerHTML = "";

            renderReminders();

            renderDashboard();

            toast("Reminder saved.");

            return;
        }


        const editReminder =
            event.target.closest(
                "[data-reminder-edit]"
            );

        if(editReminder){

            const reminder =
                data.reminders.find(
                    r =>
                    r.id ===
                    editReminder.dataset.reminderEdit
                );

            if(reminder){

                openReminderForm(
                    reminder
                );
            }

            return;
        }


        const deleteReminder =
            event.target.closest(
                "[data-reminder-delete]"
            );

        if(deleteReminder){

            data.reminders =
                data.reminders.filter(
                    r =>
                    r.id !==
                    deleteReminder.dataset.reminderDelete
                );

            saveData();

            renderReminders();
            renderDashboard();

            return;
        }


        const doneReminder =
            event.target.closest(
                "[data-reminder-done]"
            );

        if(doneReminder){

            completeReminder(
                doneReminder.dataset.reminderDone
            );

            return;
        }


        const snoozeReminderButton =
            event.target.closest(
                "[data-reminder-snooze]"
            );

        if(snoozeReminderButton){

            snoozeReminder(
                snoozeReminderButton.dataset.reminderSnooze
            );

            return;
        }


        const floatingDone =
            event.target.closest(
                "[data-floating-done]"
            );

        if(floatingDone){

            completeReminder(
                floatingDone.dataset.floatingDone
            );

            document
                .getElementById(
                    "floatingCharacter"
                )
                ?.remove();

            return;
        }


        const floatingSnooze =
            event.target.closest(
                "[data-floating-snooze]"
            );

        if(floatingSnooze){

            snoozeReminder(
                floatingSnooze.dataset.floatingSnooze
            );

            document
                .getElementById(
                    "floatingCharacter"
                )
                ?.remove();

            return;
        }


        if(
            event.target.id ===
            "saveProfile"
        ){

            saveProfile();

            return;
        }


        if(
            event.target.id ===
            "saveCharacter"
        ){

            saveCharacter();

            return;
        }


        if(
            event.target.id ===
            "testCharacter"
        ){

            const result =
                document.getElementById(
                    "characterTestResult"
                );

            result.innerHTML = `

                <div class="quote">

                    ${esc(
                        generateCharacterMessage(
                            "your next goal"
                        )
                    )}

                </div>
            `;

            return;
        }


        if(
            event.target.id ===
            "addTodo"
        ){

            openTodoForm();

            return;
        }


        if(
            event.target.id ===
            "saveTodo"
        ){

            const text =
                document
                    .getElementById("todoText")
                    .value.trim();

            const category =
                document
                    .getElementById("todoCategory")
                    .value;

            if(!text){

                toast(
                    "Write the task first."
                );

                return;
            }


            data.todos.push({

                id:uid("todo"),

                text,

                category,

                done:false

            });


            saveData();

            document
                .getElementById("modalRoot")
                .innerHTML = "";

            renderTodos();
            renderDashboard();

            return;
        }


        const deleteTodo =
            event.target.closest(
                "[data-todo-delete]"
            );

        if(deleteTodo){

            data.todos =
                data.todos.filter(
                    t =>
                    t.id !==
                    deleteTodo.dataset.todoDelete
                );

            saveData();

            renderTodos();
            renderDashboard();

            return;
        }


        if(
            event.target.matches(
                "[data-todo-check]"
            )
        ){

            const todo =
                data.todos.find(
                    t =>
                    t.id ===
                    event.target.dataset.todoCheck
                );

            if(todo){

                todo.done =
                    event.target.checked;

                saveData();

                renderTodos();
                renderDashboard();
            }

            return;
        }


        if(
            event.target.id ===
            "addGoal"
        ){

            openGoalForm();

            return;
        }


        if(
            event.target.id ===
            "saveGoal"
        ){

            const title =
                document
                    .getElementById("goalTitle")
                    .value.trim();

            const category =
                document
                    .getElementById("goalCategory")
                    .value;

            const progress =
                Number(
                    document
                        .getElementById("goalProgress")
                        .value
                ) || 0;


            if(!title){

                toast(
                    "Write the goal first."
                );

                return;
            }


            data.goals.push({

                id:uid("goal"),

                title,

                category,

                progress:
                    Math.max(
                        0,
                        Math.min(
                            100,
                            progress
                        )
                    )

            });


            saveData();

            document
                .getElementById("modalRoot")
                .innerHTML = "";

            renderGoals();
            renderDashboard();

            return;
        }


        const deleteGoal =
            event.target.closest(
                "[data-goal-delete]"
            );

        if(deleteGoal){

            data.goals =
                data.goals.filter(
                    g =>
                    g.id !==
                    deleteGoal.dataset.goalDelete
                );

            saveData();

            renderGoals();
            renderDashboard();

            return;
        }


        if(
            event.target.id ===
            "addNote"
        ){

            openNoteForm();

            return;
        }


        if(
            event.target.id ===
            "saveNote"
        ){

            const text =
                document
                    .getElementById("noteText")
                    .value.trim();

            if(!text){

                toast(
                    "Write something first."
                );

                return;
            }


            data.notes.unshift({

                id:uid("note"),

                text,

                createdAt:
                    new Date().toISOString()

            });


            saveData();

            document
                .getElementById("modalRoot")
                .innerHTML = "";

            renderNotes();
            renderDashboard();

            return;
        }


        const deleteNote =
            event.target.closest(
                "[data-note-delete]"
            );

        if(deleteNote){

            data.notes =
                data.notes.filter(
                    n =>
                    n.id !==
                    deleteNote.dataset.noteDelete
                );

            saveData();

            renderNotes();
            renderDashboard();

            return;
        }


        if(
            event.target.id ===
            "markAllRead"
        ){

            data.notifications.forEach(
                n=>n.read=true
            );

            saveData();

            renderNotifications();
            updateNotificationCount();

            return;
        }


        const palette =
            event.target.closest(
                "[data-palette]"
            );

        if(palette){

            data.appearance =
                palette.dataset.palette;

            saveData();

            applyAppearance();

            renderAppearance();

            return;
        }

    }
);


/* =========================================================
   PROFILE SAVE
   ========================================================= */

function saveProfile(){

    const p =
        data.profile;


    const value = id =>
        document.getElementById(id)?.value || "";


    p.name =
        value("profile-name");

    p.dob =
        value("profile-dob");

    p.mbti =
        value("profile-mbti");

    p.bloodGroup =
        value("profile-blood");

    p.height =
        value("profile-height");

    p.familyMembers =
        value("profile-family");

    p.skinType =
        value("profile-skin");

    p.bodyType =
        value("profile-body");

    p.favouriteFood =
        value("profile-food");

    p.favouriteBeverages =
        value("profile-beverages");

    p.favouriteAnimal =
        value("profile-animal");

    p.favouriteBird =
        value("profile-bird");

    p.favouritePlaces =
        value("profile-places");

    p.favouriteMusic =
        value("profile-music");

    p.favouriteColours =
        value("profile-colours");

    p.strengths =
        value("profile-strengths");

    p.weaknesses =
        value("profile-weaknesses");

    p.hobbies =
        value("profile-hobbies");

    p.occupation =
        value("profile-occupation");

    p.businessGoal =
        value("profile-business");

    p.achievements =
        value("profile-achievements");


    saveData();

    document.getElementById(
        "topName"
    ).textContent =
        p.name || "Laya";


    renderDashboard();

    toast(
        "Profile updated."
    );
}


/* =========================================================
   CHARACTER SAVE
   ========================================================= */

function saveCharacter(){

    const name =
        document
            .getElementById("characterName")
            .value.trim();


    const personality =
        document
            .getElementById(
                "characterPersonality"
            )
            .value.trim();


    const traits =
        document
            .getElementById(
                "characterTraits"
            )
            .value
            .split(",")
            .map(
                x=>x.trim()
            )
            .filter(Boolean);


    data.character.name =
        name || "Character";

    data.character.personality =
        personality ||
        "Calm, intelligent, firm and caring.";

    data.character.traits =
        traits;


    saveData();

    renderCharacter();
    renderDashboard();

    toast(
        "Character personality saved."
    );
}


/* =========================================================
   IMAGE UPLOADS
   ========================================================= */

document.addEventListener(
    "change",
    async event=>{

        if(
            event.target.id ===
            "profileImage"
        ){

            const file =
                event.target.files?.[0];

            if(!file) return;


            const reader =
                new FileReader();

            reader.onload = ()=>{

                data.profile.image =
                    reader.result;

                saveData();

                renderProfile();
                renderDashboard();

                updateTopAvatar();

                toast(
                    "Profile picture updated."
                );
            };

            reader.readAsDataURL(file);

            return;
        }


        if(
            event.target.id ===
            "characterImage"
        ){

            const file =
                event.target.files?.[0];

            if(!file) return;


            toast(
                "Creating your sticker..."
            );


            try{

                const sticker =
                    await createSticker(
                        file
                    );

                data.character.sticker =
                    sticker;

                saveData();

                renderCharacter();
                renderDashboard();

                toast(
                    "Sticker created."
                );

            }catch(error){

                console.error(error);

                toast(
                    "I couldn't create the sticker."
                );
            }
        }

    }
);


/* =========================================================
   SEARCH INPUT
   ========================================================= */

document.addEventListener(
    "input",
    event=>{

        if(
            event.target.id ===
            "globalSearch"
        ){

            searchEverything(
                event.target.value
            );
        }
    }
);


/* =========================================================
   SERVICE WORKER MESSAGES
   ========================================================= */

navigator.serviceWorker?.addEventListener(
    "message",
    event=>{

        const message =
            event.data;

        if(!message){
            return;
        }


        if(
            message.type ===
            "DONE_REMINDER"
        ){

            completeReminder(
                message.reminderId
            );

            return;
        }


        if(
            message.type ===
            "SNOOZE_REMINDER"
        ){

            snoozeReminder(
                message.reminderId
            );

            return;
        }

    }
);


/* =========================================================
   TOP UI
   ========================================================= */

function updateTopAvatar(){

    const el =
        document.getElementById(
            "topAvatar"
        );

    if(!el) return;

    el.style.backgroundImage =
        data.profile.image
        ? `url("${data.profile.image}")`
        : "";
}


function initializeTopUI(){

    document.getElementById(
        "topName"
    ).textContent =
        data.profile.name ||
        "Laya";

    updateTopAvatar();

    updateNotificationCount();
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

async function init(){

    applyAppearance();

    paintIcons();

    initializeTopUI();

    renderDashboard();

    await registerServiceWorker();


    /*
       Ask only after the user interacts with LAYRAAZ.
       The first reminder or notification action will
       request permission if necessary.
    */


    setInterval(
        checkReminders,
        15000
    );


    /*
       Check immediately too.
    */

    checkReminders();

}


document.addEventListener(
    "DOMContentLoaded",
    init
);
