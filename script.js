"use strict";


/* =========================================================
   LAYRAAZ
   ========================================================= */

const STORAGE_KEY = "LAYRAAZ_DATA_V4";

const OLD_KEYS = [
    "LAYRAAZ_DATA_V3",
    "LAYRAAZ_DATA_V2",
    "LAYRAAZ_DATA"
];


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
        background:"#DC9F2A",
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
        background:"#D3A6A3",
        main:"#70702E",
        font:"#C7BEB3"
    },

    lavender:{
        name:"Palette 10",
        background:"#BCC2F4",
        main:"#B0BC68",
        font:"#FFFecd"
    }

};


/* =========================================================
   CUSTOM SVG ICONS
   ========================================================= */

const ICONS = {

    menu:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.8"
         stroke-linecap="round">
        <path d="M5 7h14M5 12h14M5 17h14"/>
    </svg>`,

    home:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linejoin="round">
        <path d="m3.5 10.5 8.5-7 8.5 7v9a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19.5v-9Z"/>
        <path d="M9 21v-6h6v6"/>
    </svg>`,

    profile:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linecap="round">
        <circle cx="12" cy="8" r="3.5"/>
        <path d="M4.5 20c.8-3.3 3.3-5 7.5-5s6.7 1.7 7.5 5"/>
    </svg>`,

    character:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linecap="round">
        <circle cx="12" cy="12" r="8.5"/>
        <circle cx="9" cy="11" r=".7" fill="currentColor"/>
        <circle cx="15" cy="11" r=".7" fill="currentColor"/>
        <path d="M9 15c1.8 1.4 4.2 1.4 6 0"/>
    </svg>`,

    bell:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linecap="round">
        <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"/>
        <path d="M10 21h4"/>
    </svg>`,

    check:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linejoin="round">
        <rect x="4" y="3.5" width="16" height="17" rx="2"/>
        <path d="m8 12 2.5 2.5L16 9"/>
    </svg>`,

    target:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7">
        <circle cx="12" cy="12" r="8.5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
        <path d="m15.5 8.5 4-4M16.5 4.5h3v3"/>
    </svg>`,

    note:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linejoin="round">
        <path d="M6 3.5h9l3 3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/>
        <path d="M14 3.5V7h4M8 11h8M8 15h8M8 18h5"/>
    </svg>`,

    notification:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linecap="round">
        <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"/>
        <path d="M10 21h4"/>
    </svg>`,

    palette:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linejoin="round">
        <path d="M12 4a8 8 0 0 0 0 16h1.2a1.8 1.8 0 0 0 1.2-3.1c-.8-.8-.2-2.2 1-2.2h1.1A3.5 3.5 0 0 0 21 11.2C20.6 7.1 17 4 12 4Z"/>
        <circle cx="7.5" cy="10" r=".8"/>
        <circle cx="10" cy="7.5" r=".8"/>
        <circle cx="14" cy="7.5" r=".8"/>
        <circle cx="17" cy="10" r=".8"/>
    </svg>`,

    search:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.8"
         stroke-linecap="round">
        <circle cx="10.8" cy="10.8" r="6.8"/>
        <path d="m16 16 5 5"/>
    </svg>`,

    edit:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linecap="round"
         stroke-linejoin="round">
        <path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5 4 16.5Z"/>
        <path d="m13.8 6.7 3.5 3.5"/>
    </svg>`,

    trash:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linecap="round">
        <path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/>
    </svg>`,

    plus:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.8"
         stroke-linecap="round">
        <path d="M12 5v14M5 12h14"/>
    </svg>`,

    spark:`
    <svg viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.7"
         stroke-linejoin="round">
        <path d="m12 3 1.2 5.8L19 10l-5.8 1.2L12 17l-1.2-5.8L5 10l5.8-1.2L12 3Z"/>
    </svg>`
};


/* =========================================================
   DEFAULT DATA
   ========================================================= */

const defaultData = {

    profile:{
        name:"Laya",
        dob:"2002-08-28",
        mbti:"INTJ",

        hobbies:
            "Singing, Crocheting, Travelling, Poetry, Kuchipudi Dancing",

        occupation:
            "Executive Assistant to Terminal Head",

        goal:
            "Start an Edible Cutlery Business in 2 years",

        favoriteColors:
            "Forest Green, Charcoal Black, Silver",

        favoriteFood:
            "Dahi Puri",

        favoritePlaces:
            "Hill stations",

        favoriteMusic:
            "Melody",

        skinType:
            "Sensitive Skin",

        bodyType:
            "Rectangular Body",

        familyMembers:"4",

        image:""
    },

    character:{
        name:"Character",

        personality:
            "Calm, intelligent, firm and caring.",

        sticker:"",

        online:true
    },

    appearance:"forest",

    reminders:[],
    todos:[],
    goals:[],
    notes:[],
    notifications:[]
};


let data = loadData();

let activeSection = "dashboard";

let timer = null;

let toastTimer = null;


/* =========================================================
   HELPERS
   ========================================================= */

const $ = id => document.getElementById(id);

const clone = value =>
    JSON.parse(JSON.stringify(value));


const esc = value =>
    String(value ?? "").replace(
        /[&<>"']/g,
        char => ({
            "&":"&amp;",
            "<":"&lt;",
            ">":"&gt;",
            '"':"&quot;",
            "'":"&#39;"
        }[char])
    );


const uid = prefix =>
    `${prefix}_${Date.now()}_${Math.random()
        .toString(36)
        .slice(2,8)}`;


function merge(base,incoming){

    const result = clone(base);

    if(!incoming || typeof incoming !== "object"){
        return result;
    }

    result.profile = {
        ...result.profile,
        ...(incoming.profile || {})
    };

    result.character = {
        ...result.character,
        ...(incoming.character || {})
    };

    if(incoming.appearance){
        result.appearance = incoming.appearance;
    }

    [
        "reminders",
        "todos",
        "goals",
        "notes",
        "notifications"
    ].forEach(key => {

        if(Array.isArray(incoming[key])){
            result[key] = incoming[key];
        }

    });

    return result;
}


/* =========================================================
   LOAD / SAVE
   ========================================================= */

function loadData(){

    let raw = localStorage.getItem(STORAGE_KEY);

    if(!raw){

        for(const key of OLD_KEYS){

            raw = localStorage.getItem(key);

            if(raw){
                break;
            }

        }

    }


    try{

        const result = merge(
            defaultData,
            raw ? JSON.parse(raw) : null
        );


        /* Compatibility with older palette IDs */

        const paletteMap = {
            palette1:"forest",
            palette2:"butter",
            palette3:"almond",
            palette4:"sage",
            palette5:"navy",
            palette6:"champagne",
            palette7:"gunmetal",
            palette8:"cadet",
            palette9:"pink",
            palette10:"lavender"
        };


        if(paletteMap[result.appearance]){
            result.appearance =
                paletteMap[result.appearance];
        }


        return result;

    }catch{

        return clone(defaultData);

    }

}


function save(){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}


/* =========================================================
   DATE / AGE
   ========================================================= */

function age(dob){

    if(!dob){
        return "";
    }

    const birth =
        new Date(dob + "T00:00:00");

    const now = new Date();

    if(isNaN(birth)){
        return "";
    }

    let value =
        now.getFullYear() -
        birth.getFullYear();

    if(
        now.getMonth() < birth.getMonth() ||
        (
            now.getMonth() === birth.getMonth() &&
            now.getDate() < birth.getDate()
        )
    ){
        value--;
    }

    return value;
}


function fmt(value){

    const date = new Date(value);

    if(isNaN(date)){
        return String(value || "");
    }

    return date.toLocaleString(
        [],
        {
            month:"short",
            day:"numeric",
            hour:"2-digit",
            minute:"2-digit"
        }
    );

}


function sameDay(value){

    const date = new Date(value);
    const now = new Date();

    return (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate()
    );

}


function localDate(value=""){

    if(!value){
        return "";
    }

    const date = new Date(value);

    if(isNaN(date)){
        return "";
    }

    const pad =
        number => String(number).padStart(2,"0");

    return (
        date.getFullYear() +
        "-" +
        pad(date.getMonth()+1) +
        "-" +
        pad(date.getDate()) +
        "T" +
        pad(date.getHours()) +
        ":" +
        pad(date.getMinutes())
    );

}


/* =========================================================
   APPEARANCE
   ========================================================= */

function applyPalette(){

    const palette =
        palettes[data.appearance] ||
        palettes.forest;


    document.documentElement.style
        .setProperty(
            "--bg",
            palette.background
        );

    document.documentElement.style
        .setProperty(
            "--main",
            palette.main
        );

    document.documentElement.style
        .setProperty(
            "--font",
            palette.font
        );


    const hex =
        palette.background.replace("#","");


    const r =
        parseInt(hex.slice(0,2),16);

    const g =
        parseInt(hex.slice(2,4),16);

    const b =
        parseInt(hex.slice(4,6),16);


    const brightness =
        (
            .2126*r +
            .7152*g +
            .0722*b
        ) / 255;


    document.documentElement.style
        .setProperty(
            "--muted",
            brightness < .62
                ? "rgba(255,255,255,.65)"
                : "rgba(50,35,30,.68)"
        );


    const notificationCount =
        $("notificationCount");

    if(notificationCount){

        notificationCount.style.color =
            brightness < .62
                ? palette.background
                : palette.font;

    }


    document
        .querySelector('meta[name="theme-color"]')
        .content =
        palette.background;

}


/* =========================================================
   ICONS
   ========================================================= */

function icons(){

    document
        .querySelectorAll(".nav-icon")
        .forEach(element => {

            const className =
                [...element.classList]
                    .find(
                        value =>
                            value.startsWith("icon-") &&
                            value !== "icon-button"
                    );


            if(!className){
                return;
            }


            const key =
                className.slice(5);


            if(ICONS[key]){
                element.innerHTML =
                    ICONS[key];
            }

        });


    document
        .querySelectorAll(".icon-search")
        .forEach(element => {

            element.innerHTML =
                ICONS.search;

        });


    document
        .querySelectorAll(".icon-menu")
        .forEach(element => {

            element.innerHTML =
                ICONS.menu;

        });

}


/* =========================================================
   AVATAR
   ========================================================= */

function avatar(element,src){

    if(!element){
        return;
    }

    element.style.backgroundImage =
        src
            ? `url("${src}")`
            : "none";

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function navigate(section){

    activeSection = section;


    document
        .querySelectorAll(".page-section")
        .forEach(element => {

            element.classList.toggle(
                "active",
                element.id === section
            );

        });


    document
        .querySelectorAll(".nav-item")
        .forEach(element => {

            element.classList.toggle(
                "active",
                element.dataset.section === section
            );

        });


    render(section);


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


function render(section){

    const pages = {

        dashboard:renderDashboard,
        profile:renderProfile,
        character:renderCharacter,
        reminders:renderReminders,
        todos:renderTodos,
        goals:renderGoals,
        notes:renderNotes,
        notifications:renderNotifications,
        appearance:renderAppearance

    };


    (
        pages[section] ||
        renderDashboard
    )();


    updateTop();

}


/* =========================================================
   TOP BAR
   ========================================================= */

function updateTop(){

    const name =
        data.profile.name || "Laya";


    $("topName").textContent =
        name;


    $("pageTitle").innerHTML =
        `Welcome back, ${esc(name)}
        <span style="color:var(--main)">✦</span>`;


    $("pageSubtitle").textContent =
        "Take a deep breath. You've got this. ♡";


    const unread =
        data.notifications
            .filter(notification => !notification.read)
            .length;


    $("notificationCount").textContent =
        unread || "";


    avatar(
        $("topAvatar"),
        data.profile.image
    );

}


/* =========================================================
   UI HELPERS
   ========================================================= */

function head(title,subtitle,button=""){

    return `
        <div class="section-head">

            <div>

                <h2>${title}</h2>

                <p>${subtitle}</p>

            </div>

            ${button}

        </div>
    `;

}


function btn(text,action,classes="btn"){

    return `
        <button
            class="${classes}"
            data-action="${action}"
            type="button">
            ${text}
        </button>
    `;

}


function stat(icon,number,label,sub){

    return `
        <article class="card stat">

            <span class="stat-icon">
                ${ICONS[icon]}
            </span>

            <div>

                <div class="stat-number">
                    ${number}
                </div>

                <div class="stat-label">
                    ${label}<br>
                    ${sub}
                </div>

            </div>

        </article>
    `;

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard(){

    const element =
        $("dashboard");


    const name =
        data.profile.name || "Laya";


    const todayReminders =
        data.reminders.filter(
            reminder =>
                sameDay(reminder.when) &&
                !reminder.completed
        ).length;


    const pendingTodos =
        data.todos.filter(
            todo => !todo.done
        ).length;


    const activeGoals =
        data.goals.filter(
            goal =>
                Number(goal.progress || 0) < 100
        ).length;


    const upcoming =
        [...data.reminders]
            .filter(
                reminder =>
                    !reminder.completed &&
                    new Date(reminder.when).getTime()
                        >= Date.now() - 86400000
            )
            .sort(
                (a,b) =>
                    new Date(a.when) -
                    new Date(b.when)
            )
            .slice(0,3);


    const todayTodos =
        data.todos
            .filter(todo => !todo.done)
            .slice(0,5);


    const latestNote =
        [...data.notes]
            .sort(
                (a,b) =>
                    new Date(b.createdAt) -
                    new Date(a.createdAt)
            )[0];


    element.innerHTML = `

        <div class="grid dashboard-top">

            <!-- HERO -->

            <article class="card hero soft">

                <div class="hero-copy">

                    <div class="script">
                        Hey ${esc(name)},
                    </div>

                    <h2>
                        Small steps every day<br>
                        lead to big changes.
                    </h2>

                    <p>
                        Keep building the version of
                        yourself you want to meet.
                        One little box at a time.
                    </p>

                </div>

                <div class="decor">
                    ✿ ✦
                </div>

            </article>


            <!-- PROFILE -->

            <article class="card">

                <div class="card-title">
                    <h3>Your little profile</h3>
                </div>

                <div class="profile-head">

                    <span
                        class="avatar"
                        id="dashAvatar">
                    </span>

                    <div>

                        <div class="profile-name">
                            ${esc(name)} ♡
                        </div>

                        <div class="meta">

                            ${esc(
                                data.profile.mbti ||
                                "MBTI not set"
                            )}

                            ·

                            ${
                                age(data.profile.dob)
                                || "Age not set"
                            }

                            ${
                                age(data.profile.dob)
                                ? " years old"
                                : ""
                            }

                        </div>

                    </div>

                </div>


                <div class="role">
                    ${esc(
                        data.profile.occupation ||
                        "Occupation not set"
                    )}
                </div>


                ${btn(
                    "View full profile →",
                    "profile"
                )}

            </article>


            <!-- TODAY -->

            <article class="card">

                <div class="card-title">

                    <h3>Today</h3>

                    <small>
                        ${
                            new Date().toLocaleDateString(
                                [],
                                {
                                    month:"short",
                                    day:"numeric",
                                    year:"numeric"
                                }
                            )
                        }
                    </small>

                </div>


                <div class="quote">

                    “Discipline today,<br>
                    freedom tomorrow.” ♡

                </div>


                <p class="meta">

                    You've got
                    ${todayReminders}
                    reminder
                    ${todayReminders === 1 ? "" : "s"}
                    today.

                </p>


                ${btn(
                    "View reminders →",
                    "reminders"
                )}

            </article>


            <!-- CHARACTER -->

            <article class="card character">

                <div class="card-title">

                    <h3>
                        ${esc(
                            data.character.name ||
                            "Character"
                        )}
                    </h3>

                    <small>✦</small>

                </div>


                <div class="sticker-stage">

                    ${
                        data.character.sticker

                        ? `
                            <img
                                class="sticker"
                                src="${data.character.sticker}"
                                alt="Character sticker">
                          `

                        : `
                            <div class="placeholder">
                                Upload a character image<br>
                                to make your sticker.
                            </div>
                          `
                    }

                </div>


                <span class="pill">
                    ${
                        data.character.online
                            ? "Online"
                            : "Quiet mode"
                    }
                </span>


                <div class="mood">
                    ${esc(
                        data.character.personality
                    )}
                </div>

            </article>

        </div>


        <!-- STATS -->

        <div class="grid stats">

            ${stat(
                "bell",
                todayReminders,
                "Reminders",
                "Due Today"
            )}

            ${stat(
                "check",
                pendingTodos,
                "To-do's",
                "Pending"
            )}

            ${stat(
                "target",
                activeGoals,
                "Goals",
                "In Progress"
            )}

            ${stat(
                "note",
                data.notes.length,
                "Notes",
                "Saved"
            )}

            ${stat(
                "spark",
                data.notifications.length,
                "Notifications",
                "Logged"
            )}

        </div>


        <!-- LOWER AREA -->

        <div class="grid lower">


            <!-- REMINDERS -->

            <article class="card">

                <div class="card-title">

                    <h3>
                        Upcoming Reminders
                    </h3>

                    ${btn(
                        "View all",
                        "reminders"
                    )}

                </div>


                ${
                    upcoming.length

                    ? upcoming.map(
                        reminder => `

                            <div class="mini">

                                <div>

                                    <strong>
                                        ${esc(
                                            reminder.title
                                        )}
                                    </strong>

                                    <small>
                                        ${fmt(
                                            reminder.when
                                        )}
                                        ·
                                        ${esc(
                                            reminder.category
                                        )}
                                    </small>

                                </div>

                            </div>

                        `
                    ).join("")

                    : `
                        <div class="empty">
                            Nothing pressing.
                            The little bell is resting.
                        </div>
                    `
                }


                ${btn(
                    `${ICONS.plus} Add Reminder`,
                    "add-reminder"
                )}

            </article>


            <!-- TODOS -->

            <article class="card">

                <div class="card-title">

                    <h3>
                        Today's To-dos
                    </h3>

                    ${btn(
                        "View all",
                        "todos"
                    )}

                </div>


                ${
                    todayTodos.length

                    ? todayTodos.map(
                        todo => `

                            <label class="check-row">

                                <input
                                    type="checkbox"
                                    data-toggle-todo="${todo.id}">

                                <span>
                                    ${esc(todo.title)}
                                </span>

                            </label>

                        `
                    ).join("")

                    : `
                        <div class="empty">
                            A clean list. Nice.
                        </div>
                    `
                }


                ${btn(
                    `${ICONS.plus} Add To-do`,
                    "add-todo"
                )}

            </article>


            <!-- NOTE -->

            <article class="card">

                <div class="card-title">

                    <h3>
                        Today's Note
                    </h3>

                    ${btn(
                        "View all",
                        "notes"
                    )}

                </div>


                <div class="note-paper">

                    ${
                        latestNote

                        ? esc(latestNote.content)

                        : "Write something worth remembering."
                    }

                </div>


                <div style="margin-top:12px">

                    ${btn(
                        `${ICONS.plus} New Note`,
                        "add-note"
                    )}

                </div>

            </article>


        </div>

    `;


    avatar(
        $("dashAvatar"),
        data.profile.image
    );

}


/* =========================================================
   PROFILE
   ========================================================= */

const profileFields = [

    ["name","Name","text"],
    ["dob","Date of Birth","date"],
    ["mbti","MBTI","text"],
    ["hobbies","Hobbies","text"],
    ["occupation","Occupation","text"],
    ["goal","Main Goal","text"],
    ["favoriteColors","Favourite Colours","text"],
    ["favoriteFood","Favourite Food","text"],
    ["favoritePlaces","Favourite Places","text"],
    ["favoriteMusic","Favourite Music Genres","text"],
    ["skinType","Skin Type","text"],
    ["bodyType","Body Type","text"],
    ["familyMembers","Family Members","number"]

];


function renderProfile(){

    const profile =
        data.profile;


    $("profile").innerHTML =

        head(
            "Profile",
            "Your details are saved on this device."
        )

        +

        `

        <div class="profile-grid">


            <article class="card">

                <div class="card-title">
                    <h3>Your profile</h3>
                </div>


                <form
                    id="profileForm"
                    class="form-grid">


                    ${
                        profileFields
                            .map(
                                ([key,label,type]) => `

                                    <div class="field">

                                        <label>
                                            ${label}
                                        </label>

                                        <input
                                            name="${key}"
                                            type="${type}"
                                            value="${esc(
                                                profile[key] || ""
                                            )}">

                                    </div>

                                `
                            )
                            .join("")
                    }


                    <div class="field full">

                        <span class="field-note">

                            Age is calculated automatically
                            from your date of birth:

                            <b>
                                ${age(profile.dob) || "not set"}
                            </b>

                        </span>

                    </div>


                    <div class="field full">

                        <div class="button-row">

                            <button
                                class="btn primary"
                                type="submit">

                                Save Profile

                            </button>

                        </div>

                    </div>


                </form>

            </article>


            <article class="card">

                <div class="card-title">
                    <h3>Profile picture</h3>
                </div>


                <div class="upload-box">

                    <div
                        class="avatar"
                        id="profilePreview"
                        style="
                            width:100px;
                            height:100px;
                            margin:auto;
                        ">
                    </div>


                    <p class="field-note">
                        This picture is used only
                        as your profile avatar.
                    </p>


                    <input
                        id="profileImage"
                        type="file"
                        accept="image/*">

                </div>

            </article>


        </div>

        `;


    avatar(
        $("profilePreview"),
        profile.image
    );

}


/* =========================================================
   CHARACTER
   ========================================================= */

function renderCharacter(){

    const character =
        data.character;


    const notificationsSupported =
        typeof Notification !== "undefined";


    const notificationsGranted =
        notificationsSupported &&
        Notification.permission === "granted";


    $("character").innerHTML =

        head(
            "Character",
            "Your companion is stored locally. The original rectangle is never displayed."
        )

        +

        `

        <div class="character-settings">


            <article class="card">

                <div class="card-title">
                    <h3>Character settings</h3>
                </div>


                <form
                    id="characterForm"
                    class="form-grid">


                    <div class="field">

                        <label>
                            Character name
                        </label>

                        <input
                            name="name"
                            value="${esc(
                                character.name ||
                                "Character"
                            )}"
                            maxlength="40">

                    </div>


                    <div class="field">

                        <label>
                            Personality
                        </label>

                        <input
                            name="personality"
                            value="${esc(
                                character.personality ||
                                ""
                            )}"
                            maxlength="120">

                    </div>


                    <div class="field full">

                        <label>
                            Character image
                        </label>

                        <input
                            id="characterImage"
                            type="file"
                            accept="image/*">

                    </div>


                    <div class="field full">

                        <span class="field-note">

                            Upload the character image.
                            LAYRAAZ will remove the connected
                            background, crop it and create
                            a transparent sticker.

                        </span>

                    </div>


                    <div class="field full">

                        <div class="button-row">

                            <button
                                class="btn primary"
                                type="submit">

                                Save Character

                            </button>


                            ${btn(
                                "Test notification",
                                "test-notification"
                            )}

                        </div>

                    </div>


                </form>

            </article>


            <article class="card">

                <div class="card-title">
                    <h3>Sticker preview</h3>
                </div>


                <div class="sticker-preview">

                    ${
                        character.sticker

                        ? `
                            <img
                                src="${character.sticker}"
                                alt="Character sticker">
                          `

                        : `
                            <div class="placeholder">
                                Your sticker will appear here.
                            </div>
                          `
                    }

                </div>

            </article>


        </div>


        <div
            class="card"
            style="margin-top:15px">


            <strong>
                Browser notifications
            </strong>


            <p class="field-note">

                Allow LAYRAAZ to send reminders
                through your browser. You can switch
                to another website while LAYRAAZ
                stays open in a background tab.

            </p>


            ${
                btn(
                    notificationsGranted
                        ? "Notifications enabled"
                        : "Allow browser notifications",
                    "request-notifications",
                    "btn primary"
                )
            }


        </div>

        `;

}


/* =========================================================
   REMINDERS
   ========================================================= */

function renderReminders(){

    const sorted =
        [...data.reminders]
            .sort(
                (a,b) =>
                    new Date(a.when) -
                    new Date(b.when)
            );


    $("reminders").innerHTML =

        head(
            "Reminders",
            "Due reminders can appear as browser/system notifications.",
            btn(
                `${ICONS.plus} Add Reminder`,
                "add-reminder"
            )
        )

        +

        `

        <div class="list-page">


            ${
                sorted.length

                ? sorted.map(
                    reminder => `

                        <article class="card item-card">

                            <div class="main">

                                <h3>
                                    ${esc(
                                        reminder.title
                                    )}
                                </h3>

                                <p>

                                    ${fmt(
                                        reminder.when
                                    )}

                                    ·

                                    ${esc(
                                        reminder.category
                                    )}

                                    ${
                                        reminder.completed
                                            ? " · completed"
                                            : ""
                                    }

                                </p>

                            </div>


                            <div class="item-actions">

                                ${btn(
                                    reminder.completed
                                        ? "Undo"
                                        : "Done",
                                    `complete-reminder:${reminder.id}`
                                )}

                                ${btn(
                                    ICONS.edit,
                                    `edit-reminder:${reminder.id}`
                                )}

                                ${btn(
                                    ICONS.trash,
                                    `delete-reminder:${reminder.id}`,
                                    "btn danger"
                                )}

                            </div>

                        </article>

                    `
                ).join("")

                : `

                    <article class="card empty">
                        No reminders yet.
                    </article>

                  `
            }


        </div>

        `;

}


/* =========================================================
   TO-DOS
   ========================================================= */

function renderTodos(){

    $("todos").innerHTML =

        head(
            "To-do List",
            "Four simple categories: Work, Personal, Finance and Learning.",
            btn(
                `${ICONS.plus} Add To-do`,
                "add-todo"
            )
        )

        +

        `

        <div class="list-page">


            ${
                data.todos.length

                ? data.todos.map(
                    todo => `

                        <article class="card item-card">

                            <div class="main">

                                <label
                                    class="check-row"
                                    style="border:0;padding:0">

                                    <input
                                        type="checkbox"
                                        data-toggle-todo="${todo.id}"
                                        ${
                                            todo.done
                                                ? "checked"
                                                : ""
                                        }>

                                    <span
                                        class="${
                                            todo.done
                                                ? "done"
                                                : ""
                                        }">

                                        ${esc(
                                            todo.title
                                        )}

                                    </span>

                                </label>


                                <p>

                                    ${esc(
                                        todo.category
                                    )}

                                    ${
                                        todo.due
                                            ? ` · Due ${esc(todo.due)}`
                                            : ""
                                    }

                                </p>

                            </div>


                            <div class="item-actions">

                                ${btn(
                                    ICONS.edit,
                                    `edit-todo:${todo.id}`
                                )}

                                ${btn(
                                    ICONS.trash,
                                    `delete-todo:${todo.id}`,
                                    "btn danger"
                                )}

                            </div>

                        </article>

                    `
                ).join("")

                : `

                    <article class="card empty">
                        Your list is empty.
                    </article>

                  `
            }


        </div>

        `;

}


/* =========================================================
   GOALS
   ========================================================= */

function renderGoals(){

    $("goals").innerHTML =

        head(
            "Goals",
            "Track progress without turning your life into a spreadsheet.",
            btn(
                `${ICONS.plus} Add Goal`,
                "add-goal"
            )
        )

        +

        `

        <div class="list-page">


            ${
                data.goals.length

                ? data.goals.map(
                    goal => {

                        const progress =
                            Math.max(
                                0,
                                Math.min(
                                    100,
                                    Number(
                                        goal.progress || 0
                                    )
                                )
                            );


                        return `

                            <article
                                class="card item-card">

                                <div
                                    class="main"
                                    style="width:100%">

                                    <h3>
                                        ${esc(
                                            goal.title
                                        )}
                                    </h3>

                                    <p>

                                        ${esc(
                                            goal.category
                                        )}

                                        ·

                                        ${progress}%

                                    </p>


                                    <div class="progress">

                                        <span
                                            style="
                                                width:${progress}%;
                                            ">
                                        </span>

                                    </div>

                                </div>


                                <div class="item-actions">

                                    ${btn(
                                        ICONS.edit,
                                        `edit-goal:${goal.id}`
                                    )}

                                    ${btn(
                                        ICONS.trash,
                                        `delete-goal:${goal.id}`,
                                        "btn danger"
                                    )}

                                </div>

                            </article>

                        `;

                    }
                ).join("")

                : `

                    <article class="card empty">
                        No goals yet.
                    </article>

                  `
            }


        </div>

        `;

}


/* =========================================================
   NOTES
   ========================================================= */

function renderNotes(){

    const notes =
        [...data.notes]
            .sort(
                (a,b) =>
                    new Date(b.createdAt) -
                    new Date(a.createdAt)
            );


    $("notes").innerHTML =

        head(
            "Notes",
            "Little thoughts, ideas and things worth keeping.",
            btn(
                `${ICONS.plus} New Note`,
                "add-note"
            )
        )

        +

        `

        <div class="list-page">


            ${
                notes.length

                ? notes.map(
                    note => `

                        <article
                            class="card item-card">

                            <div class="main">

                                <h3>
                                    ${esc(
                                        note.title
                                    )}
                                </h3>

                                <p>
                                    ${fmt(
                                        note.createdAt
                                    )}
                                </p>


                                <div
                                    class="note-paper"
                                    style="
                                        margin-top:10px;
                                        min-height:90px;
                                    ">

                                    ${esc(
                                        note.content
                                    )}

                                </div>

                            </div>


                            <div class="item-actions">

                                ${btn(
                                    ICONS.edit,
                                    `edit-note:${note.id}`
                                )}

                                ${btn(
                                    ICONS.trash,
                                    `delete-note:${note.id}`,
                                    "btn danger"
                                )}

                            </div>

                        </article>

                    `
                ).join("")

                : `

                    <article class="card empty">
                        No notes yet.
                    </article>

                  `
            }


        </div>

        `;

}


/* =========================================================
   NOTIFICATIONS PAGE
   ========================================================= */

function renderNotifications(){

    $("notifications").innerHTML =

        head(
            "Notifications",
            "Browser notifications are external; this page keeps their history."
        )

        +

        `

        <div class="card">


            <div
                class="actions"
                style="margin-bottom:12px">

                ${btn(
                    "Allow browser notifications",
                    "request-notifications",
                    "btn primary"
                )}

                ${btn(
                    "Mark all read",
                    "read-all"
                )}

            </div>


            ${
                data.notifications.length

                ? [...data.notifications]
                    .reverse()
                    .map(
                        notification => `

                            <div
                                class="notice ${
                                    notification.read
                                        ? ""
                                        : "unread"
                                }">

                                <div>

                                    <strong>
                                        ${esc(
                                            notification.title
                                        )}
                                    </strong>

                                    <small>

                                        ${esc(
                                            notification.body
                                        )}

                                        ·

                                        ${fmt(
                                            notification.createdAt
                                        )}

                                    </small>

                                </div>


                                ${
                                    notification.read
                                        ? ""
                                        : btn(
                                            "Read",
                                            `read:${notification.id}`
                                        )
                                }

                            </div>

                        `
                    )
                    .join("")

                : `

                    <div class="empty">
                        No notifications yet.
                    </div>

                  `
            }


        </div>

        `;

}


/* =========================================================
   APPEARANCE PAGE
   ========================================================= */

function renderAppearance(){

    $("appearance").innerHTML =

        head(
            "Appearance",
            "Choose one of the ten fixed LAYRAAZ palettes."
        )

        +

        `

        <div class="palette-grid">

            ${
                Object.entries(palettes)
                    .map(
                        ([key,palette]) => `

                            <button
                                class="palette ${
                                    data.appearance === key
                                        ? "selected"
                                        : ""
                                }"
                                data-palette="${key}"
                                type="button">


                                <div class="swatches">

                                    <i
                                        style="
                                            background:${palette.background};
                                        ">
                                    </i>

                                    <i
                                        style="
                                            background:${palette.main};
                                        ">
                                    </i>

                                    <i
                                        style="
                                            background:${palette.font};
                                        ">
                                    </i>

                                </div>


                                <strong>
                                    ${palette.name}
                                </strong>


                                <div class="meta">
                                    Background · Main · Font
                                </div>


                            </button>

                        `
                    )
                    .join("")
            }

        </div>

        `;

}


/* =========================================================
   FORM HELPERS
   ========================================================= */

function field(
    name,
    label,
    value,
    type="text",
    required=false
){

    return `

        <div class="field">

            <label>
                ${label}
            </label>

            <input
                name="${name}"
                type="${type}"
                value="${esc(value)}"
                ${required ? "required" : ""}>

        </div>

    `;

}


function category(value="Personal"){

    return `

        <div class="field">

            <label>
                Category
            </label>

            <select name="category">

                ${
                    [
                        "Work",
                        "Personal",
                        "Finance",
                        "Learning"
                    ]
                    .map(
                        item => `

                            <option
                                ${
                                    item === value
                                        ? "selected"
                                        : ""
                                }>

                                ${item}

                            </option>

                        `
                    )
                    .join("")
                }

            </select>

        </div>

    `;

}


/* =========================================================
   MODAL
   ========================================================= */

function modal(
    title,
    html,
    submit
){

    $("modalRoot").innerHTML = `

        <div
            class="modal-backdrop"
            data-close-modal>

            <div class="modal">

                <div class="modal-head">

                    <h2>
                        ${title}
                    </h2>

                    <button
                        class="close"
                        data-close-modal
                        type="button">

                        ×

                    </button>

                </div>


                ${html}

            </div>

        </div>

    `;


    const form =
        $("modalRoot").querySelector("form");


    if(form){

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                submit(
                    new FormData(form)
                );

            }
        );

    }

}


function closeModal(){

    $("modalRoot").innerHTML = "";

}


/* =========================================================
   ADD / EDIT
   ========================================================= */

function openAdd(type,id=null){

    const collectionName =
        `${type}s`;


    const collection =
        data[collectionName] || [];


    const existing =
        id
            ? collection.find(
                item => item.id === id
            )
            : null;


    /* REMINDER */

    if(type === "reminder"){

        const reminder =
            existing || {};


        modal(

            existing
                ? "Edit Reminder"
                : "Add Reminder",

            `

                <form class="form-grid">

                    ${field(
                        "title",
                        "Reminder",
                        reminder.title || "",
                        "text",
                        true
                    )}


                    <div class="field">

                        <label>
                            Date & time
                        </label>

                        <input
                            name="when"
                            type="datetime-local"
                            value="${localDate(
                                reminder.when
                            )}"
                            required>

                    </div>


                    ${category(
                        reminder.category
                    )}


                    <div class="field full">

                        <div class="button-row">

                            <button
                                class="btn primary"
                                type="submit">

                                Save Reminder

                            </button>

                        </div>

                    </div>

                </form>

            `,

            formData => {

                const title =
                    String(
                        formData.get("title") || ""
                    ).trim();


                const when =
                    String(
                        formData.get("when") || ""
                    );


                if(!title || !when){

                    toast(
                        "Please enter a reminder and time."
                    );

                    return;

                }


                const object = {

                    title,

                    when:
                        new Date(when)
                            .toISOString(),

                    category:
                        String(
                            formData.get("category") ||
                            "Personal"
                        ),

                    completed:false,

                    lastNotifiedAt:
                        existing
                            ? existing.lastNotifiedAt
                            : null

                };


                if(existing){

                    Object.assign(
                        existing,
                        object
                    );

                }else{

                    data.reminders.push({

                        id:uid("reminder"),

                        ...object

                    });

                }


                save();

                closeModal();

                renderReminders();

                renderDashboard();

                scheduleNext();

                toast(
                    "Reminder saved."
                );

            }

        );

    }


    /* TODO */

    if(type === "todo"){

        const todo =
            existing || {};


        modal(

            existing
                ? "Edit To-do"
                : "Add To-do",

            `

                <form class="form-grid">

                    ${field(
                        "title",
                        "Task",
                        todo.title || "",
                        "text",
                        true
                    )}

                    ${category(
                        todo.category
                    )}

                    ${field(
                        "due",
                        "Due date",
                        todo.due || "",
                        "date"
                    )}


                    <div class="field full">

                        <div class="button-row">

                            <button
                                class="btn primary"
                                type="submit">

                                Save To-do

                            </button>

                        </div>

                    </div>

                </form>

            `,

            formData => {

                const title =
                    String(
                        formData.get("title") || ""
                    ).trim();


                if(!title){

                    toast(
                        "Please enter a task."
                    );

                    return;

                }


                const object = {

                    title,

                    category:
                        String(
                            formData.get("category") ||
                            "Personal"
                        ),

                    due:
                        String(
                            formData.get("due") ||
                            ""
                        ),

                    done:
                        existing
                            ? existing.done
                            : false

                };


                if(existing){

                    Object.assign(
                        existing,
                        object
                    );

                }else{

                    data.todos.push({

                        id:uid("todo"),

                        ...object

                    });

                }


                save();

                closeModal();

                renderTodos();

                renderDashboard();

                toast(
                    "To-do saved."
                );

            }

        );

    }


    /* GOAL */

    if(type === "goal"){

        const goal =
            existing || {};


        modal(

            existing
                ? "Edit Goal"
                : "Add Goal",

            `

                <form class="form-grid">

                    ${field(
                        "title",
                        "Goal",
                        goal.title || "",
                        "text",
                        true
                    )}

                    ${category(
                        goal.category
                    )}


                    <div class="field">

                        <label>
                            Progress %
                        </label>

                        <input
                            name="progress"
                            type="number"
                            min="0"
                            max="100"
                            value="${
                                Number(
                                    goal.progress || 0
                                )
                            }">

                    </div>


                    <div class="field full">

                        <div class="button-row">

                            <button
                                class="btn primary"
                                type="submit">

                                Save Goal

                            </button>

                        </div>

                    </div>

                </form>

            `,

            formData => {

                const title =
                    String(
                        formData.get("title") || ""
                    ).trim();


                if(!title){

                    toast(
                        "Please enter a goal."
                    );

                    return;

                }


                const object = {

                    title,

                    category:
                        String(
                            formData.get("category") ||
                            "Personal"
                        ),

                    progress:
                        Math.max(
                            0,
                            Math.min(
                                100,
                                Number(
                                    formData.get(
                                        "progress"
                                    )
                                ) || 0
                            )
                        )

                };


                if(existing){

                    Object.assign(
                        existing,
                        object
                    );

                }else{

                    data.goals.push({

                        id:uid("goal"),

                        ...object

                    });

                }


                save();

                closeModal();

                renderGoals();

                renderDashboard();

                toast(
                    "Goal saved."
                );

            }

        );

    }


    /* NOTE */

    if(type === "note"){

        const note =
            existing || {};


        modal(

            existing
                ? "Edit Note"
                : "New Note",

            `

                <form class="form-grid">

                    ${field(
                        "title",
                        "Title",
                        note.title || "Note",
                        "text",
                        true
                    )}


                    <div class="field full">

                        <label>
                            Note
                        </label>

                        <textarea
                            name="content"
                            required>${esc(
                                note.content || ""
                            )}</textarea>

                    </div>


                    <div class="field full">

                        <div class="button-row">

                            <button
                                class="btn primary"
                                type="submit">

                                Save Note

                            </button>

                        </div>

                    </div>

                </form>

            `,

            formData => {

                const content =
                    String(
                        formData.get("content") || ""
                    ).trim();


                if(!content){

                    toast(
                        "Please write something first."
                    );

                    return;

                }


                const object = {

                    title:
                        String(
                            formData.get("title") ||
                            "Note"
                        ).trim() || "Note",

                    content,

                    createdAt:
                        existing
                            ? existing.createdAt
                            : new Date().toISOString()

                };


                if(existing){

                    Object.assign(
                        existing,
                        object
                    );

                }else{

                    data.notes.push({

                        id:uid("note"),

                        ...object

                    });

                }


                save();

                closeModal();

                renderNotes();

                renderDashboard();

                toast(
                    "Note saved."
                );

            }

        );

    }

}


/* =========================================================
   CHARACTER STICKER PROCESSOR
   ========================================================= */

/*
    This works completely inside the browser.

    It:
    1. Reads the uploaded image.
    2. Samples the four corners.
    3. Removes connected pixels similar to those
       background colours.
    4. Finds the remaining character.
    5. Crops the transparent space.
    6. Adds a small white sticker edge.
    7. Saves the result as a PNG data URL.

    The original rectangular image is therefore
    never displayed as the character.
*/

function makeSticker(dataURL){

    return new Promise(
        (resolve,reject) => {

            const image =
                new Image();


            image.onload = () => {

                const scale =
                    Math.min(
                        700 / image.width,
                        700 / image.height,
                        1
                    );


                const width =
                    Math.max(
                        1,
                        Math.round(
                            image.width * scale
                        )
                    );


                const height =
                    Math.max(
                        1,
                        Math.round(
                            image.height * scale
                        )
                    );


                const canvas =
                    document.createElement(
                        "canvas"
                    );


                const context =
                    canvas.getContext(
                        "2d",
                        {
                            willReadFrequently:true
                        }
                    );


                canvas.width = width;
                canvas.height = height;


                context.drawImage(
                    image,
                    0,
                    0,
                    width,
                    height
                );


                const imageData =
                    context.getImageData(
                        0,
                        0,
                        width,
                        height
                    );


                const pixels =
                    imageData.data;


                const visited =
                    new Uint8Array(
                        width * height
                    );


                const queue = [];


                const index =
                    (x,y) =>
                        (y * width + x) * 4;


                const getRGB =
                    (x,y) => {

                        const i =
                            index(x,y);

                        return [
                            pixels[i],
                            pixels[i+1],
                            pixels[i+2]
                        ];

                    };


                const corners = [

                    [0,0],

                    [width - 1,0],

                    [0,height - 1],

                    [width - 1,height - 1]

                ];


                const backgroundColours =
                    corners.map(
                        ([x,y]) =>
                            getRGB(x,y)
                    );


                corners.forEach(
                    ([x,y]) => {

                        const position =
                            y * width + x;

                        visited[position] = 1;

                        queue.push(position);

                    }
                );


                const tolerance = 55;


                function similarToBackground(
                    r,
                    g,
                    b
                ){

                    return backgroundColours.some(
                        colour => {

                            const difference =
                                Math.abs(
                                    r - colour[0]
                                )
                                +
                                Math.abs(
                                    g - colour[1]
                                )
                                +
                                Math.abs(
                                    b - colour[2]
                                );

                            return (
                                difference <
                                tolerance * 3
                            );

                        }
                    );

                }


                let pointer = 0;


                while(
                    pointer < queue.length
                ){

                    const position =
                        queue[pointer++];


                    const x =
                        position % width;


                    const y =
                        Math.floor(
                            position / width
                        );


                    const pixelIndex =
                        position * 4;


                    const r =
                        pixels[pixelIndex];

                    const g =
                        pixels[pixelIndex + 1];

                    const b =
                        pixels[pixelIndex + 2];


                    if(
                        !similarToBackground(
                            r,
                            g,
                            b
                        )
                    ){

                        continue;

                    }


                    pixels[pixelIndex] = 0;
                    pixels[pixelIndex + 1] = 0;
                    pixels[pixelIndex + 2] = 0;
                    pixels[pixelIndex + 3] = 0;


                    const neighbours = [

                        [x + 1,y],
                        [x - 1,y],
                        [x,y + 1],
                        [x,y - 1]

                    ];


                    neighbours.forEach(
                        ([nx,ny]) => {

                            if(
                                nx < 0 ||
                                nx >= width ||
                                ny < 0 ||
                                ny >= height
                            ){

                                return;

                            }


                            const next =
                                ny * width + nx;


                            if(!visited[next]){

                                visited[next] = 1;

                                queue.push(next);

                            }

                        }
                    );

                }


                context.putImageData(
                    imageData,
                    0,
                    0
                );


                const finalData =
                    context.getImageData(
                        0,
                        0,
                        width,
                        height
                    ).data;


                let minX = width;
                let minY = height;
                let maxX = -1;
                let maxY = -1;


                for(
                    let y = 0;
                    y < height;
                    y++
                ){

                    for(
                        let x = 0;
                        x < width;
                        x++
                    ){

                        const alpha =
                            finalData[
                                (y * width + x) * 4 + 3
                            ];


                        if(alpha > 12){

                            minX =
                                Math.min(
                                    minX,
                                    x
                                );

                            minY =
                                Math.min(
                                    minY,
                                    y
                                );

                            maxX =
                                Math.max(
                                    maxX,
                                    x
                                );

                            maxY =
                                Math.max(
                                    maxY,
                                    y
                                );

                        }

                    }

                }


                if(maxX < 0){

                    reject(
                        new Error(
                            "Character could not be detected."
                        )
                    );

                    return;

                }


                const padding = 18;


                minX =
                    Math.max(
                        0,
                        minX - padding
                    );

                minY =
                    Math.max(
                        0,
                        minY - padding
                    );

                maxX =
                    Math.min(
                        width - 1,
                        maxX + padding
                    );

                maxY =
                    Math.min(
                        height - 1,
                        maxY + padding
                    );


                const stickerWidth =
                    maxX - minX + 1;


                const stickerHeight =
                    maxY - minY + 1;


                const output =
                    document.createElement(
                        "canvas"
                    );


                const outputContext =
                    output.getContext("2d");


                output.width =
                    stickerWidth;

                output.height =
                    stickerHeight;


                outputContext.drawImage(
                    canvas,
                    minX,
                    minY,
                    stickerWidth,
                    stickerHeight,
                    0,
                    0,
                    stickerWidth,
                    stickerHeight
                );


                /*
                    Add a soft white sticker edge.
                */

                const stickerPixels =
                    outputContext.getImageData(
                        0,
                        0,
                        stickerWidth,
                        stickerHeight
                    );


                const dataPixels =
                    stickerPixels.data;


                for(
                    let y = 1;
                    y < stickerHeight - 1;
                    y++
                ){

                    for(
                        let x = 1;
                        x < stickerWidth - 1;
                        x++
                    ){

                        const pixel =
                            (y * stickerWidth + x) * 4;


                        if(
                            dataPixels[pixel + 3] > 20
                        ){

                            const neighbours = [

                                [x + 1,y],
                                [x - 1,y],
                                [x,y + 1],
                                [x,y - 1]

                            ];


                            const nearTransparent =
                                neighbours.some(
                                    ([nx,ny]) => {

                                        const n =
                                            (
                                                ny *
                                                stickerWidth +
                                                nx
                                            ) * 4;

                                        return (
                                            dataPixels[
                                                n + 3
                                            ] === 0
                                        );

                                    }
                                );


                            if(nearTransparent){

                                outputContext.fillStyle =
                                    "rgba(255,255,255,.9)";

                                outputContext.beginPath();

                                outputContext.arc(
                                    x,
                                    y,
                                    1.8,
                                    0,
                                    Math.PI * 2
                                );

                                outputContext.fill();

                            }

                        }

                    }

                }


                resolve(
                    output.toDataURL(
                        "image/png"
                    )
                );

            };


            image.onerror =
                reject;


            image.src =
                dataURL;

        }
    );

}


/* =========================================================
   FILE READER
   ========================================================= */

function fileData(file){

    return new Promise(
        (resolve,reject) => {

            const reader =
                new FileReader();


            reader.onload =
                () => resolve(
                    reader.result
                );


            reader.onerror =
                reject;


            reader.readAsDataURL(file);

        }
    );

}


/* =========================================================
   BROWSER NOTIFICATIONS
   ========================================================= */

async function requestNotifications(){

    if(
        typeof Notification ===
        "undefined"
    ){

        toast(
            "This browser does not support browser notifications."
        );

        return;

    }


    try{

        const permission =
            await Notification.requestPermission();


        if(permission === "granted"){

            toast(
                "Browser notifications enabled."
            );

        }else{

            toast(
                "Notification permission was not granted."
            );

        }


        renderCharacter();

        renderNotifications();

    }catch{

        toast(
            "Could not request notification permission."
        );

    }

}


function notify(
    title,
    body
){

    if(
        typeof Notification ===
        "undefined"
    ){

        return;

    }


    if(
        Notification.permission !==
        "granted"
    ){

        return;

    }


    try{

        const notification =
            new Notification(
                title,
                {

                    body,

                    /*
                        This is the generated
                        transparent sticker.
                    */

                    icon:
                        data.character.sticker ||
                        undefined,

                    tag:
                        "layraaz-reminder"

                }
            );


        notification.onclick =
            () => {

                window.focus();

            };

    }catch{

        /* Browser refused notification. */

    }

}


/* =========================================================
   NOTIFICATION HISTORY
   ========================================================= */

function addNotification(
    title,
    body
){

    data.notifications.push({

        id:
            uid("notification"),

        title,

        body,

        createdAt:
            new Date().toISOString(),

        read:false

    });


    /*
        Keep the history manageable.
    */

    if(
        data.notifications.length > 100
    ){

        data.notifications =
            data.notifications.slice(-100);

    }


    save();

}


/* =========================================================
   REMINDER ENGINE
   ========================================================= */

function fireReminder(reminder){

    const body =
        `${reminder.title} is due now. · ${
            reminder.category || "Personal"
        }`;


    /*
        External browser/system notification.
    */

    notify(
        "LAYRAAZ Reminder",
        body
    );


    /*
        Internal notification history.
    */

    addNotification(
        "Reminder due",
        body
    );


    reminder.lastNotifiedAt =
        new Date().toISOString();

}


function checkDue(){

    let changed = false;

    const now =
        Date.now();


    for(
        const reminder of data.reminders
    ){

        const due =
            new Date(
                reminder.when
            ).getTime();


        if(
            reminder.completed ||
            !Number.isFinite(due) ||
            due > now
        ){

            continue;

        }


        const last =
            reminder.lastNotifiedAt
                ? new Date(
                    reminder.lastNotifiedAt
                  ).getTime()
                : 0;


        /*
            Prevent the same reminder from firing
            repeatedly every few seconds.
        */

        if(
            now - last <
            12 * 60 * 60 * 1000
        ){

            continue;

        }


        fireReminder(
            reminder
        );


        changed = true;

    }


    if(changed){

        save();

        renderDashboard();

        if(
            activeSection ===
            "reminders"
        ){

            renderReminders();

        }

        updateTop();

    }

}


function scheduleNext(){

    clearInterval(timer);


    /*
        Check frequently enough to catch
        reminders while the tab is open.

        The browser may throttle background
        JavaScript, but Notification itself
        is system-level.
    */

    timer =
        setInterval(
            checkDue,
            10000
        );


    checkDue();

}


/* =========================================================
   TOAST
   ========================================================= */

function toast(message){

    const element =
        $("toast");


    element.textContent =
        message;


    element.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () =>
                element.classList.remove(
                    "show"
                ),
            2300
        );

}


/* =========================================================
   DELETE
   ========================================================= */

function remove(
    collection,
    id,
    message
){

    const array =
        data[collection];


    const index =
        array.findIndex(
            item => item.id === id
        );


    if(index < 0){
        return;
    }


    array.splice(
        index,
        1
    );


    save();

    render(
        activeSection
    );

    renderDashboard();

    toast(
        message
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

function search(query){

    const box =
        $("searchResults");


    const value =
        query.trim().toLowerCase();


    if(!value){

        box.classList.add(
            "hidden"
        );

        return;

    }


    const results = [];


    data.reminders.forEach(
        reminder => {

            if(
                `${reminder.title} ${reminder.category}`
                    .toLowerCase()
                    .includes(value)
            ){

                results.push([
                    "Reminder",
                    reminder.title,
                    "reminders"
                ]);

            }

        }
    );


    data.todos.forEach(
        todo => {

            if(
                `${todo.title} ${todo.category}`
                    .toLowerCase()
                    .includes(value)
            ){

                results.push([
                    "To-do",
                    todo.title,
                    "todos"
                ]);

            }

        }
    );


    data.goals.forEach(
        goal => {

            if(
                `${goal.title} ${goal.category}`
                    .toLowerCase()
                    .includes(value)
            ){

                results.push([
                    "Goal",
                    goal.title,
                    "goals"
                ]);

            }

        }
    );


    data.notes.forEach(
        note => {

            if(
                `${note.title} ${note.content}`
                    .toLowerCase()
                    .includes(value)
            ){

                results.push([
                    "Note",
                    note.title,
                    "notes"
                ]);

            }

        }
    );


    box.innerHTML =

        results.length

        ? results
            .slice(0,12)
            .map(
                result => `

                    <div
                        class="search-result"
                        data-search="${result[2]}">

                        <strong>
                            ${esc(result[1])}
                        </strong>

                        <span>
                            ${result[0]}
                        </span>

                    </div>

                `
            )
            .join("")

        : `

            <div class="empty">
                Nothing found.
            </div>

          `;


    box.classList.remove(
        "hidden"
    );

}


/* =========================================================
   EVENTS
   ========================================================= */

function events(){

    /* Sidebar */

    $("sidebarToggle").onclick =
        () => {

            $("sidebar")
                .classList
                .toggle("collapsed");

        };


    /* Navigation */

    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.onclick =
                () =>
                    navigate(
                        button.dataset.section
                    );

        });


    /* Top notification button */

    $("notificationBtn").onclick =
        () =>
            navigate(
                "notifications"
            );


    /* Profile button */

    $("profileBtn").onclick =
        () =>
            navigate(
                "profile"
            );


    /* Search */

    $("globalSearch").oninput =
        event =>
            search(
                event.target.value
            );


    /* Click delegation */

    document.addEventListener(
        "click",
        async event => {

            const actionElement =
                event.target.closest(
                    "[data-action]"
                );


            if(actionElement){

                const action =
                    actionElement.dataset.action;


                if(
                    action === "profile" ||
                    action === "reminders" ||
                    action === "todos" ||
                    action === "goals" ||
                    action === "notes"
                ){

                    navigate(action);

                    return;

                }


                if(
                    action === "add-reminder"
                ){

                    openAdd(
                        "reminder"
                    );

                    return;

                }


                if(
                    action === "add-todo"
                ){

                    openAdd(
                        "todo"
                    );

                    return;

                }


                if(
                    action === "add-goal"
                ){

                    openAdd(
                        "goal"
                    );

                    return;

                }


                if(
                    action === "add-note"
                ){

                    openAdd(
                        "note"
                    );

                    return;

                }


                if(
                    action ===
                    "request-notifications"
                ){

                    requestNotifications();

                    return;

                }


                if(
                    action ===
                    "test-notification"
                ){

                    if(
                        typeof Notification ===
                        "undefined"
                    ){

                        toast(
                            "This browser does not support notifications."
                        );

                        return;

                    }


                    if(
                        Notification.permission !==
                        "granted"
                    ){

                        await requestNotifications();

                    }


                    if(
                        Notification.permission ===
                        "granted"
                    ){

                        notify(
                            "LAYRAAZ Test",
                            "Your character sticker can appear in browser notifications."
                        );

                    }


                    return;

                }


                if(
                    action === "read-all"
                ){

                    data.notifications
                        .forEach(
                            notification =>
                                notification.read = true
                        );


                    save();

                    renderNotifications();

                    updateTop();

                    return;

                }


                if(
                    action.startsWith(
                        "complete-reminder:"
                    )
                ){

                    const id =
                        action.split(":")[1];


                    const reminder =
                        data.reminders.find(
                            item =>
                                item.id === id
                        );


                    if(reminder){

                        reminder.completed =
                            !reminder.completed;

                        save();

                        renderReminders();

                        renderDashboard();

                        scheduleNext();

                    }


                    return;

                }


                if(
                    action.startsWith(
                        "edit-reminder:"
                    )
                ){

                    openAdd(
                        "reminder",
                        action.split(":")[1]
                    );

                    return;

                }


                if(
                    action.startsWith(
                        "delete-reminder:"
                    )
                ){

                    remove(
                        "reminders",
                        action.split(":")[1],
                        "Reminder deleted."
                    );

                    return;

                }


                if(
                    action.startsWith(
                        "edit-todo:"
                    )
                ){

                    openAdd(
                        "todo",
                        action.split(":")[1]
                    );

                    return;

                }


                if(
                    action.startsWith(
                        "delete-todo:"
                    )
                ){

                    remove(
                        "todos",
                        action.split(":")[1],
                        "To-do deleted."
                    );

                    return;

                }


                if(
                    action.startsWith(
                        "edit-goal:"
                    )
                ){

                    openAdd(
                        "goal",
                        action.split(":")[1]
                    );

                    return;

                }


                if(
                    action.startsWith(
                        "delete-goal:"
                    )
                ){

                    remove(
                        "goals",
                        action.split(":")[1],
                        "Goal deleted."
                    );

                    return;

                }


                if(
                    action.startsWith(
                        "edit-note:"
                    )
                ){

                    openAdd(
                        "note",
                        action.split(":")[1]
                    );

                    return;

                }


                if(
                    action.startsWith(
                        "delete-note:"
                    )
                ){

                    remove(
                        "notes",
                        action.split(":")[1],
                        "Note deleted."
                    );

                    return;

                }


                if(
                    action.startsWith(
                        "read:"
                    )
                ){

                    const id =
                        action.split(":")[1];


                    const notification =
                        data.notifications.find(
                            item =>
                                item.id === id
                        );


                    if(notification){

                        notification.read =
                            true;

                    }


                    save();

                    renderNotifications();

                    updateTop();

                    return;

                }

            }


            /* Palette */

            const palette =
                event.target.closest(
                    "[data-palette]"
                );


            if(palette){

                data.appearance =
                    palette.dataset.palette;


                save();

                applyPalette();

                renderAppearance();

                toast(
                    `${palettes[
                        data.appearance
                    ].name} selected.`
                );

                return;

            }


            /* To-do checkbox */

            const todoCheckbox =
                event.target.closest(
                    "[data-toggle-todo]"
                );


            if(todoCheckbox){

                const todo =
                    data.todos.find(
                        item =>
                            item.id ===
                            todoCheckbox.dataset.toggleTodo
                    );


                if(todo){

                    todo.done =
                        todoCheckbox.checked;

                    save();

                    renderTodos();

                    renderDashboard();

                }

                return;

            }


            /* Search result */

            const searchResult =
                event.target.closest(
                    "[data-search]"
                );


            if(searchResult){

                $("globalSearch").value =
                    "";

                $("searchResults")
                    .classList
                    .add("hidden");


                navigate(
                    searchResult.dataset.search
                );


                return;

            }


            /* Modal backdrop / close button */

            if(
                event.target.matches(
                    "[data-close-modal]"
                )
            ){

                closeModal();

            }

        }
    );


    /* PROFILE + CHARACTER FORMS */

    document.addEventListener(
        "submit",
        async event => {

            /* PROFILE */

            if(
                event.target.id ===
                "profileForm"
            ){

                event.preventDefault();


                const form =
                    new FormData(
                        event.target
                    );


                profileFields.forEach(
                    ([key]) => {

                        data.profile[key] =
                            String(
                                form.get(key) || ""
                            );

                    }
                );


                save();

                renderProfile();

                renderDashboard();

                updateTop();

                toast(
                    "Profile saved."
                );

            }


            /* CHARACTER */

            if(
                event.target.id ===
                "characterForm"
            ){

                event.preventDefault();


                const form =
                    new FormData(
                        event.target
                    );


                data.character.name =
                    String(
                        form.get("name") ||
                        "Character"
                    ).trim() ||
                    "Character";


                data.character.personality =
                    String(
                        form.get("personality") ||
                        ""
                    ).trim() ||
                    "Calm, intelligent, firm and caring.";


                const imageInput =
                    $("characterImage");


                const file =
                    imageInput &&
                    imageInput.files[0];


                if(file){

                    try{

                        toast(
                            "Making your sticker..."
                        );


                        const image =
                            await fileData(
                                file
                            );


                        data.character.sticker =
                            await makeSticker(
                                image
                            );

                    }catch{

                        toast(
                            "I could not detect the character in that image."
                        );

                        return;

                    }

                }


                save();

                renderCharacter();

                renderDashboard();

                toast(
                    "Character saved."
                );

            }

        }
    );


    /* PROFILE IMAGE */

    $("profile").addEventListener(
        "change",
        async event => {

            if(
                event.target.id ===
                "profileImage" &&
                event.target.files[0]
            ){

                data.profile.image =
                    await fileData(
                        event.target.files[0]
                    );


                save();

                renderProfile();

                renderDashboard();

                updateTop();

                toast(
                    "Profile picture saved."
                );

            }

        }
    );

}


/* =========================================================
   INITIALISE
   ========================================================= */

function init(){

    applyPalette();

    icons();

    events();

    render(
        "dashboard"
    );

    scheduleNext();

}


document.addEventListener(
    "DOMContentLoaded",
    init
);
