/* =========================================================
   LAYRAAZ
   MAIN APPLICATION
========================================================= */

"use strict";


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "LAYRAAZ_DATA_V3";


/* =========================================================
   PALETTES
   Internal names stay stable so old data does not break.
========================================================= */

const palettes = {

    forest: {
        name: "Palette 1",
        background: "#1D251C",
        main: "#101411",
        font: "#D0D4CE"
    },

    butter: {
        name: "Palette 2",
        background: "#F3E7A3",
        main: "#8CB8D0",
        font: "#4A2C20"
    },

    almond: {
        name: "Palette 3",
        background: "#E8D8C3",
        main: "#8DBFA9",
        font: "#8E2636"
    },

    sage: {
        name: "Palette 4",
        background: "#B8C5B1",
        main: "#6D2026",
        font: "#3B2922"
    },

    navy: {
        name: "Palette 5",
        background: "#111D38",
        main: "#C8A85C",
        font: "#F5F1E8"
    },

    champagne: {
        name: "Palette 6",
        background: "#722F37",
        main: "#70752F",
        font: "#F3E6D0"
    },

    gunmetal: {
        name: "Palette 7",
        background: "#DC9F2A",
        main: "#8399B9",
        font: "#475418"
    },

    cadet: {
        name: "Palette 8",
        background: "#919FA5",
        main: "#EEEAE2",
        font: "#30251F"
    },

    pink: {
        name: "Palette 9",
        background: "#D3A6A3",
        main: "#70702E",
        font: "#C7BEB3"
    },

    lavender: {
        name: "Palette 10",
        background: "#BCC2F4",
        main: "#B0BC68",
        font: "#FFF ECD".replace(" ","")
    }
};


/* =========================================================
   DEFAULT DATA
========================================================= */

const defaultData = {

    profile: {

        name: "Laya",

        dob: "2002-08-28",

        mbti: "INTJ",

        hobbies:
            "Singer, Crocheting, Travelling, Poetry, Kuchipudi",

        occupation:
            "Executive Assistant to Terminal Head",

        goals:
            "Start an Edible Cutlery Business in 2 years",

        favouriteColours:
            "Forest Green, Charcoal Black, Silver",

        favouriteFood:
            "Dahi Puri",

        favouritePlaces:
            "Hill Stations",

        favouriteMusic:
            "Melody",

        skinType:
            "Sensitive Skin",

        bodyType:
            "Rectangular",

        familyMembers:
            "4",

        strengths:
            "Ambitious, self-motivated, hardworking",

        weaknesses:
            "Social anxiety, procrastination, fear of failure",

        favouriteBeverages:
            "Buttermilk",

        bloodGroup:
            "",

        favouriteAnimal:
            "Dog",

        favouriteBird:
            "",

        image:
            ""
    },

    character: {

        name:
            "Character",

        personality:
            "Calm, Intelligent, Firm, Caring",

        sticker:
            "",

        sourceImage:
            "",

        mood:
            "Ready to help",

        lastMessage:
            ""
    },

    appearance:
        "forest",

    reminders: [],

    todos: [],

    goals: [],

    notes: [],

    notifications: []

};


let data = loadData();


/* =========================================================
   SAFE STORAGE
========================================================= */

function loadData() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(STORAGE_KEY)
            );

        if (!saved) {

            return structuredClone(defaultData);
        }

        const merged = {

            ...structuredClone(defaultData),

            ...saved,

            profile: {
                ...defaultData.profile,
                ...(saved.profile || {})
            },

            character: {
                ...defaultData.character,
                ...(saved.character || {})
            },

            reminders:
                Array.isArray(saved.reminders)
                    ? saved.reminders
                    : [],

            todos:
                Array.isArray(saved.todos)
                    ? saved.todos
                    : [],

            goals:
                Array.isArray(saved.goals)
                    ? saved.goals
                    : [],

            notes:
                Array.isArray(saved.notes)
                    ? saved.notes
                    : [],

            notifications:
                Array.isArray(saved.notifications)
                    ? saved.notifications
                    : []
        };


        /* OLD PALETTE COMPATIBILITY */

        const aliases = {

            palette1: "forest",
            palette2: "butter",
            palette3: "almond",
            palette4: "sage",
            palette5: "navy",
            palette6: "champagne",
            palette7: "gunmetal",
            palette8: "cadet",
            palette9: "pink",
            palette10: "lavender"
        };

        if (aliases[merged.appearance]) {

            merged.appearance =
                aliases[merged.appearance];
        }


        return merged;

    } catch (error) {

        console.error(
            "LAYRAAZ storage error:",
            error
        );

        return structuredClone(defaultData);
    }
}


function saveData() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

    } catch (error) {

        console.error(
            "Could not save LAYRAAZ data:",
            error
        );

        toast(
            "Storage is full. Some changes could not be saved."
        );
    }
}


/* =========================================================
   UTILITIES
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function uid(prefix = "id") {

    return (
        prefix +
        "_" +
        Date.now() +
        "_" +
        Math.random()
            .toString(36)
            .slice(2, 8)
    );
}


function get(id) {

    return document.getElementById(id);
}


function formatDate(dateString) {

    if (!dateString) {
        return "";
    }

    const date =
        new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString(
        undefined,
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );
}


function calculateAge(dob) {

    if (!dob) {
        return "";
    }

    const birth =
        new Date(dob + "T00:00:00");

    if (Number.isNaN(birth.getTime())) {
        return "";
    }

    const today =
        new Date();

    let age =
        today.getFullYear() -
        birth.getFullYear();

    const monthDifference =
        today.getMonth() -
        birth.getMonth();

    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birth.getDate()
        )
    ) {

        age--;
    }

    return age;
}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function toast(message) {

    const el = get("toast");

    if (!el) {
        return;
    }

    el.textContent = message;

    el.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(
            () => el.classList.remove("show"),
            2500
        );
}


/* =========================================================
   SVG ICONS
========================================================= */

const ICONS = {

    menu: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round">
            <path d="M5 7h14"/>
            <path d="M5 12h14"/>
            <path d="M5 17h14"/>
        </svg>
    `,

    home: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M3.5 10.5 12 3.8l8.5 6.7"/>
            <path d="M5.5 9.8V20h13V9.8"/>
            <path d="M9.5 20v-6h5v6"/>
        </svg>
    `,

    profile: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <circle cx="12" cy="8" r="3.2"/>
            <path d="M5.5 20c.7-4 2.9-6 6.5-6s5.8 2 6.5 6"/>
        </svg>
    `,

    character: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M8 5.5c1.2-2 6.8-2 8 0"/>
            <path d="M6.5 9c0-2.2 2.5-4 5.5-4s5.5 1.8 5.5 4v5c0 3-2.5 5-5.5 5s-5.5-2-5.5-5V9Z"/>
            <path d="M9.5 12h.01"/>
            <path d="M14.5 12h.01"/>
            <path d="M9.5 15c1.6 1 3.4 1 5 0"/>
        </svg>
    `,

    bell: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M6.5 17.5h11"/>
            <path d="M8 17.5V11a4 4 0 0 1 8 0v6.5"/>
            <path d="M10 20h4"/>
        </svg>
    `,

    check: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="4"/>
            <path d="m8 12 2.5 2.5L16 9"/>
        </svg>
    `,

    target: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round">
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="12" cy="12" r="1"/>
        </svg>
    `,

    note: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M6 4.5h12v15H6z"/>
            <path d="M9 8h6"/>
            <path d="M9 12h6"/>
            <path d="M9 16h4"/>
        </svg>
    `,

    notification: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M7 16.5h10"/>
            <path d="M8.5 16.5V10a3.5 3.5 0 0 1 7 0v6.5"/>
            <path d="M10.5 19h3"/>
        </svg>
    `,

    palette: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M12 4a8 8 0 1 0 0 16h1.2c1.2 0 1.8-1.4 1-2.3-.7-.8-.1-2 1-2h1.3A4.5 4.5 0 0 0 21 11.2C20.6 7.1 17 4 12 4Z"/>
            <circle cx="8" cy="10" r=".8"/>
            <circle cx="11" cy="7.5" r=".8"/>
            <circle cx="15" cy="8" r=".8"/>
        </svg>
    `,

    search: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round">
            <circle cx="10.8" cy="10.8" r="5.8"/>
            <path d="m15.2 15.2 4.2 4.2"/>
        </svg>
    `,

    plus: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round">
            <path d="M12 5v14"/>
            <path d="M5 12h14"/>
        </svg>
    `,

    trash: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M5 7h14"/>
            <path d="M9 7V4.5h6V7"/>
            <path d="M7 7l.7 13h8.6L17 7"/>
            <path d="M10 11v5"/>
            <path d="M14 11v5"/>
        </svg>
    `,

    edit: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="m15.5 5.5 3 3"/>
            <path d="M5 19l1.2-4.4L15.5 5.3a1.7 1.7 0 0 1 2.4 0l.8.8a1.7 1.7 0 0 1 0 2.4L9.4 18.8 5 19Z"/>
        </svg>
    `,

    clock: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round">
            <circle cx="12" cy="12" r="8"/>
            <path d="M12 7v5l3 2"/>
        </svg>
    `,

    close: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round">
            <path d="m7 7 10 10"/>
            <path d="m17 7-10 10"/>
        </svg>
    `
};


function renderIcons() {

    document
        .querySelectorAll(".icon, .nav-icon")
        .forEach(el => {

            const classes =
                [...el.classList];

            const iconClass =
                classes.find(
                    c => c.startsWith("icon-") &&
                         c !== "icon"
                );

            if (!iconClass) {
                return;
            }

            const name =
                iconClass
                    .replace("icon-", "");

            if (ICONS[name]) {

                el.innerHTML =
                    ICONS[name];
            }
        });
}


/* =========================================================
   APPEARANCE
========================================================= */

function applyAppearance() {

    let key =
        data.appearance;

    if (!palettes[key]) {
        key = "forest";
        data.appearance = key;
    }

    const palette =
        palettes[key];

    const root =
        document.documentElement;

    root.style.setProperty(
        "--bg",
        palette.background
    );

    root.style.setProperty(
        "--main",
        palette.main
    );

    root.style.setProperty(
        "--font",
        palette.font
    );

    root.style.setProperty(
        "--muted",
        palette.font
    );

    saveData();
}


/* =========================================================
   NAVIGATION
========================================================= */

function showSection(sectionId) {

    document
        .querySelectorAll(".page-section")
        .forEach(section => {

            section.classList.toggle(
                "active",
                section.id === sectionId
            );
        });


    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.toggle(
                "active",
                item.dataset.section === sectionId
            );
        });


    const titles = {

        profile: [
            "Your Profile",
            "A little map of you."
        ],

        dashboard: [
            `Welcome back, ${data.profile.name} ✦`,
            "Take a deep breath. You've got this. ♡"
        ],

        character: [
            data.character.name || "Character",
            "A little companion, shaped by your rules."
        ],

        reminders: [
            "Reminders",
            "Things you don't want slipping through the cracks."
        ],

        todos: [
            "To-do List",
            "Small tasks. Visible progress."
        ],

        goals: [
            "Goals",
            "Give the future somewhere to go."
        ],

        notes: [
            "Notes",
            "Ideas, thoughts and little things worth keeping."
        ],

        notifications: [
            "Notifications",
            "Your recent reminders and character messages."
        ],

        appearance: [
            "Appearance",
            "Choose the atmosphere of your little digital space."
        ]
    };


    const title =
        titles[sectionId] ||
        titles.dashboard;

    get("pageTitle").textContent =
        title[0];

    get("pageSubtitle").textContent =
        title[1];

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   SIDEBAR
========================================================= */

function setupSidebar() {

    const sidebar =
        get("sidebar");

    get("sidebarToggle")
        .addEventListener(
            "click",
            () => {

                sidebar.classList.toggle(
                    "collapsed"
                );
            }
        );


    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    showSection(
                        button.dataset.section
                    );
                }
            );
        });
}


/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {

    const p =
        data.profile;

    const age =
        calculateAge(p.dob);

    get("profile").innerHTML = `

        <div class="section-head">

            <div>
                <h2>Profile</h2>

                <p>
                    Everything that makes you, you.
                </p>
            </div>

        </div>


        <div class="profile-grid">

            <div class="card">

                <div class="card-title">
                    <h3>Personal Details</h3>
                </div>

                <div class="form-grid">

                    <div class="field">
                        <label>Name</label>

                        <input
                            id="profileName"
                            value="${escapeHTML(p.name)}">
                    </div>


                    <div class="field">
                        <label>Date of Birth</label>

                        <input
                            id="profileDob"
                            type="date"
                            value="${escapeHTML(p.dob)}">

                        <span class="field-note">
                            Age is calculated automatically.
                        </span>
                    </div>


                    <div class="field">
                        <label>MBTI</label>

                        <input
                            id="profileMbti"
                            value="${escapeHTML(p.mbti)}">
                    </div>


                    <div class="field">
                        <label>Blood Group</label>

                        <input
                            id="profileBlood"
                            placeholder="e.g. O+"
                            value="${escapeHTML(p.bloodGroup)}">
                    </div>


                    <div class="field">
                        <label>Height</label>

                        <input
                            id="profileHeight"
                            value="${escapeHTML(p.height || "5'1")}">
                    </div>


                    <div class="field">
                        <label>Skin Type</label>

                        <input
                            id="profileSkin"
                            value="${escapeHTML(p.skinType)}">
                    </div>


                    <div class="field">
                        <label>Body Type</label>

                        <input
                            id="profileBody"
                            value="${escapeHTML(p.bodyType)}">
                    </div>


                    <div class="field">
                        <label>Family Members</label>

                        <input
                            id="profileFamily"
                            value="${escapeHTML(p.familyMembers)}">
                    </div>


                    <div class="field full">

                        <label>Occupation</label>

                        <input
                            id="profileOccupation"
                            value="${escapeHTML(p.occupation)}">

                    </div>


                    <div class="field full">

                        <label>Hobbies</label>

                        <textarea id="profileHobbies">${escapeHTML(p.hobbies)}</textarea>

                    </div>

                </div>

            </div>


            <div class="card">

                <div class="card-title">
                    <h3>Favorites</h3>
                </div>

                <div class="form-grid">

                    <div class="field full">

                        <label>Favourite Colours</label>

                        <input
                            id="profileColours"
                            value="${escapeHTML(p.favouriteColours)}">

                    </div>


                    <div class="field">

                        <label>Favourite Food</label>

                        <input
                            id="profileFood"
                            value="${escapeHTML(p.favouriteFood)}">

                    </div>


                    <div class="field">

                        <label>Favourite Beverages</label>

                        <input
                            id="profileBeverages"
                            value="${escapeHTML(p.favouriteBeverages)}">

                    </div>


                    <div class="field">

                        <label>Favourite Places</label>

                        <input
                            id="profilePlaces"
                            value="${escapeHTML(p.favouritePlaces)}">

                    </div>


                    <div class="field">

                        <label>Favourite Music Genres</label>

                        <input
                            id="profileMusic"
                            value="${escapeHTML(p.favouriteMusic)}">

                    </div>


                    <div class="field">

                        <label>Favourite Animal</label>

                        <input
                            id="profileAnimal"
                            value="${escapeHTML(p.favouriteAnimal)}">

                    </div>


                    <div class="field">

                        <label>Favourite Bird</label>

                        <input
                            id="profileBird"
                            value="${escapeHTML(p.favouriteBird)}">

                    </div>


                    <div class="field full">

                        <label>Strengths</label>

                        <textarea id="profileStrengths">${escapeHTML(p.strengths)}</textarea>

                    </div>


                    <div class="field full">

                        <label>Weaknesses</label>

                        <textarea id="profileWeaknesses">${escapeHTML(p.weaknesses)}</textarea>

                    </div>


                    <div class="field full">

                        <label>Long-Term Goal</label>

                        <textarea id="profileGoals">${escapeHTML(p.goals)}</textarea>

                    </div>


                    <div class="field full">

                        <label>Profile Picture</label>

                        <input
                            id="profileImage"
                            type="file"
                            accept="image/*">

                    </div>


                    <div class="button-row field full">

                        <button
                            class="btn primary"
                            id="saveProfile"
                            type="button">

                            Save Profile

                        </button>

                    </div>

                </div>

            </div>

        </div>
    `;


    if (p.image) {

        get("topAvatar").style.backgroundImage =
            `url("${p.image}")`;
    }


    get("saveProfile")
        .addEventListener(
            "click",
            saveProfile
        );


    get("profileImage")
        .addEventListener(
            "change",
            handleProfileImage
        );
}


function saveProfile() {

    const p =
        data.profile;

    p.name =
        get("profileName").value.trim();

    p.dob =
        get("profileDob").value;

    p.mbti =
        get("profileMbti").value.trim();

    p.bloodGroup =
        get("profileBlood").value.trim();

    p.height =
        get("profileHeight").value.trim();

    p.skinType =
        get("profileSkin").value.trim();

    p.bodyType =
        get("profileBody").value.trim();

    p.familyMembers =
        get("profileFamily").value.trim();

    p.occupation =
        get("profileOccupation").value.trim();

    p.hobbies =
        get("profileHobbies").value.trim();

    p.favouriteColours =
        get("profileColours").value.trim();

    p.favouriteFood =
        get("profileFood").value.trim();

    p.favouriteBeverages =
        get("profileBeverages").value.trim();

    p.favouritePlaces =
        get("profilePlaces").value.trim();

    p.favouriteMusic =
        get("profileMusic").value.trim();

    p.favouriteAnimal =
        get("profileAnimal").value.trim();

    p.favouriteBird =
        get("profileBird").value.trim();

    p.strengths =
        get("profileStrengths").value.trim();

    p.weaknesses =
        get("profileWeaknesses").value.trim();

    p.goals =
        get("profileGoals").value.trim();


    saveData();

    get("topName").textContent =
        p.name || "Laya";

    renderDashboard();

    showSection("dashboard");

    toast("Profile saved.");
}


function handleProfileImage(event) {

    const file =
        event.target.files?.[0];

    if (!file) {
        return;
    }

    const reader =
        new FileReader();

    reader.onload =
        function () {

            data.profile.image =
                reader.result;

            saveData();

            get("topAvatar").style.backgroundImage =
                `url("${reader.result}")`;

            toast("Profile picture saved.");

            renderProfile();
        };

    reader.readAsDataURL(file);
}


/* =========================================================
   DASHBOARD DECORATIVE SVG
========================================================= */

function tinyPlantSVG() {

    return `
        <svg viewBox="0 0 80 80"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round">

            <path d="M30 57h20"/>
            <path d="M34 57V68h12V57"/>
            <path d="M40 57V34"/>
            <path d="M40 43c-11 0-14-8-14-14 8 0 14 4 14 14Z"/>
            <path d="M40 39c11 0 14-8 14-14-8 0-14 4-14 14Z"/>

        </svg>
    `;
}


function tinyMoonSVG() {

    return `
        <svg viewBox="0 0 80 80"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round">

            <path d="M52 19c-9 1-16 9-16 19 0 11 8 20 19 20 7 0 13-4 17-10-3 1-5 2-8 2-11 0-20-9-20-20 0-4 1-8 3-11 2-1 3-1 5 0Z"/>

            <path d="M17 18v8"/>
            <path d="M13 22h8"/>

            <path d="M62 16v5"/>
            <path d="M59.5 18.5h5"/>

        </svg>
    `;
}


function tinySparkSVG() {

    return `
        <svg viewBox="0 0 80 80"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round">

            <path d="M40 10c2 18 5 21 23 23-18 2-21 5-23 23-2-18-5-21-23-23 18-2 21-5 23-23Z"/>

        </svg>
    `;
}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    const p =
        data.profile;

    const age =
        calculateAge(p.dob);

    const pendingTodos =
        data.todos.filter(
            todo => !todo.done
        ).length;

    const activeGoals =
        data.goals.filter(
            goal => !goal.done
        ).length;

    const unread =
        data.notifications.filter(
            n => !n.read
        ).length;


    const latestReminder =
        data.reminders
            .slice()
            .sort(
                (a,b) =>
                    new Date(a.datetime) -
                    new Date(b.datetime)
            )[0];


    get("dashboard").innerHTML = `

        <div class="section-head">

            <div>
                <h2>Today, gently.</h2>

                <p>
                    A little structure without making your day feel crowded.
                </p>
            </div>

        </div>


        <div class="grid dashboard-top">


            <!-- HERO -->

            <div class="card hero">

                <div class="hero-copy">

                    <div class="script">
                        plan softly ✦
                    </div>

                    <h2>
                        You don't need to do everything today.
                    </h2>

                    <p>
                        Pick what matters, make some room,
                        and let the rest wait its turn.
                    </p>

                </div>


                <div class="decor-sticker decor-star">
                    ✦
                </div>

                <div class="decor-sticker decor-doodle">
                    ${tinySparkSVG()}
                </div>

            </div>


            <!-- PROFILE -->

            <div class="card">

                <div class="card-title">
                    <h3>You</h3>
                </div>

                <div class="profile-head">

                    <span
                        class="avatar"
                        style="
                            ${p.image
                                ? `background-image:url("${p.image}")`
                                : ""}
                        ">
                    </span>

                    <div>

                        <div class="profile-name">
                            ${escapeHTML(p.name || "Laya")}
                        </div>

                        <div class="meta">
                            ${escapeHTML(p.mbti || "")}
                            ${age ? ` · ${age} years` : ""}
                        </div>

                    </div>

                </div>


                <div class="role">
                    ${escapeHTML(p.occupation || "")}
                </div>


                <div class="mini">

                    <div>
                        <strong>Strengths</strong>
                        <small>
                            ${escapeHTML(p.strengths || "Add some strengths")}
                        </small>
                    </div>

                </div>


                <div class="mini">

                    <div>
                        <strong>Favourite</strong>
                        <small>
                            ${escapeHTML(p.favouriteFood || "")}
                        </small>
                    </div>

                </div>

                <div class="decor-sticker decor-heart">
                    ♡
                </div>

            </div>


            <!-- CHARACTER -->

            <div class="card character">

                <div class="card-title">

                    <h3>
                        ${escapeHTML(
                            data.character.name || "Character"
                        )}
                    </h3>

                </div>

                <div class="sticker-stage">

                    ${
                        data.character.sticker

                        ?

                        `<img
                            class="sticker"
                            src="${data.character.sticker}"
                            alt="Character sticker">`

                        :

                        `<div class="placeholder">
                            Add your sticker
                        </div>`
                    }

                </div>

                <span class="pill">
                    ${escapeHTML(data.character.mood)}
                </span>

                <div class="mood">
                    ${escapeHTML(data.character.personality)}
                </div>

            </div>


            <!-- TODAY -->

            <div class="card">

                <div class="card-title">

                    <h3>Little note</h3>

                </div>

                <div class="quote">
                    Small progress still counts.
                </div>

                <div class="decor-sticker decor-doodle">
                    ${tinyMoonSVG()}
                </div>

            </div>

        </div>


        <!-- STATS -->

        <div class="grid stats">

            <div class="card stat">

                <div class="stat-icon">
                    <span class="icon icon-check"></span>
                </div>

                <div>

                    <div class="stat-number">
                        ${pendingTodos}
                    </div>

                    <div class="stat-label">
                        Tasks left
                    </div>

                </div>

            </div>


            <div class="card stat">

                <div class="stat-icon">
                    <span class="icon icon-bell"></span>
                </div>

                <div>

                    <div class="stat-number">
                        ${data.reminders.length}
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
                        ${activeGoals}
                    </div>

                    <div class="stat-label">
                        Active goals
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
                    <span class="icon icon-notification"></span>
                </div>

                <div>

                    <div class="stat-number">
                        ${unread}
                    </div>

                    <div class="stat-label">
                        Unread
                    </div>

                </div>

            </div>

        </div>


        <!-- LOWER -->

        <div class="grid lower">


            <!-- REMINDER -->

            <div class="card">

                <div class="card-title">
                    <h3>Next reminder</h3>

                    <span class="icon icon-clock"></span>
                </div>

                ${
                    latestReminder

                    ?

                    `
                    <div class="mini">

                        <div>

                            <strong>
                                ${escapeHTML(latestReminder.title)}
                            </strong>

                            <small>
                                ${formatDateTime(
                                    latestReminder.datetime
                                )}
                            </small>

                        </div>

                    </div>
                    `

                    :

                    `
                    <div class="empty">
                        Nothing scheduled yet.
                    </div>
                    `
                }

            </div>


            <!-- TO DO -->

            <div class="card">

                <div class="card-title">

                    <h3>To-do</h3>

                    <button
                        class="btn"
                        id="dashboardTodoBtn"
                        type="button">

                        Add

                    </button>

                </div>

                ${
                    data.todos.length

                    ?

                    data.todos
                        .slice(0,4)
                        .map(todo => `

                            <label class="check-row">

                                <input
                                    type="checkbox"
                                    data-dashboard-todo="${todo.id}"
                                    ${todo.done ? "checked" : ""}>

                                <span
                                    class="check-label ${
                                        todo.done
                                            ? "done"
                                            : ""
                                    }">

                                    ${escapeHTML(todo.text)}

                                </span>

                            </label>

                        `)
                        .join("")

                    :

                    `
                    <div class="empty">
                        Your list is wonderfully empty.
                    </div>
                    `
                }

                <div class="decor-sticker decor-heart">
                    ♡
                </div>

            </div>


            <!-- SOFT PANEL -->

            <div class="card soft">

                <div class="card-title">
                    <h3>A tiny reminder</h3>
                </div>

                <div class="note-paper">

                    You are allowed to move slowly
                    without standing still.

                </div>

                <div class="affirmation">

                    one step at a time ✦

                </div>

            </div>

        </div>
    `;


    renderIcons();


    get("dashboardTodoBtn")
        ?.addEventListener(
            "click",
            () => showSection("todos")
        );


    document
        .querySelectorAll(
            "[data-dashboard-todo]"
        )
        .forEach(box => {

            box.addEventListener(
                "change",
                () => {

                    const id =
                        box.dataset.dashboardTodo;

                    const todo =
                        data.todos.find(
                            item => item.id === id
                        );

                    if (!todo) {
                        return;
                    }

                    todo.done =
                        box.checked;

                    saveData();

                    renderDashboard();

                    updateNotificationCount();
                }
            );
        });
}


/* =========================================================
   DATE/TIME
========================================================= */

function formatDateTime(value) {

    const date =
        new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return date.toLocaleString(
        undefined,
        {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


/* =========================================================
   CHARACTER
========================================================= */

function renderCharacter() {

    const c =
        data.character;

    const personalities = [
        "Calm",
        "Intelligent",
        "Firm",
        "Caring",
        "Playful",
        "Motivating",
        "Direct",
        "Protective"
    ];


    get("character").innerHTML = `

        <div class="section-head">

            <div>
                <h2>Character</h2>

                <p>
                    Give your companion a personality instead of a script.
                </p>
            </div>

        </div>


        <div class="character-settings">


            <!-- SETTINGS -->

            <div class="card">

                <div class="card-title">
                    <h3>Character Settings</h3>
                </div>


                <div class="form-grid">


                    <div class="field full">

                        <label>
                            Character Name
                        </label>

                        <input
                            id="characterName"
                            value="${escapeHTML(c.name)}">

                        <span class="field-note">
                            Everyone can rename their character.
                            The default is Character.
                        </span>

                    </div>


                    <div class="field full">

                        <label>
                            Personality
                        </label>

                        <div
                            class="personality-grid"
                            id="personalityGrid">

                            ${personalities
                                .map(personality => `

                                    <button
                                        class="
                                            personality-chip
                                            ${
                                                c.personality
                                                    .toLowerCase()
                                                    .includes(
                                                        personality.toLowerCase()
                                                    )
                                                    ? "selected"
                                                    : ""
                                            }
                                        "
                                        type="button"
                                        data-personality="${personality}">

                                        ${personality}

                                    </button>

                                `)
                                .join("")}

                        </div>

                    </div>


                    <div class="field full">

                        <label>
                            Current personality
                        </label>

                        <input
                            id="personalityText"
                            value="${escapeHTML(c.personality)}">

                    </div>


                    <div class="button-row field full">

                        <button
                            class="btn primary"
                            id="saveCharacter"
                            type="button">

                            Save Character

                        </button>

                    </div>


                    <div class="button-row field full">

                        <button
                            class="btn"
                            id="testCharacter"
                            type="button">

                            Test Character

                        </button>

                    </div>

                </div>

            </div>


            <!-- STICKER -->

            <div class="card">

                <div class="card-title">

                    <h3>Character Sticker</h3>

                </div>


                <div class="upload-box">

                    <p>
                        Upload the original character picture.
                    </p>

                    <p class="field-note">

                        LAYRAAZ will remove the
                        edge-connected background and
                        create a transparent sticker.

                    </p>


                    <input
                        id="characterImage"
                        type="file"
                        accept="image/*">


                    <div class="sticker-preview">

                        ${
                            c.sticker

                            ?

                            `
                            <img
                                src="${c.sticker}"
                                alt="Character sticker preview">
                            `

                            :

                            `
                            <div class="placeholder">
                                Your sticker will appear here.
                            </div>
                            `
                        }

                    </div>

                </div>

            </div>

        </div>


        <!-- TEST MESSAGE -->

        <div class="card" style="margin-top:15px;">

            <div class="card-title">
                <h3>Personality Preview</h3>
            </div>

            <div class="quote" id="characterPreview">

                ${
                    c.lastMessage
                        ? escapeHTML(c.lastMessage)
                        : "Set a reminder and let Character respond in its own voice."
                }

            </div>

        </div>
    `;


    document
        .querySelectorAll(
            "[data-personality]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const value =
                        button.dataset.personality;

                    const input =
                        get("personalityText");

                    let current =
                        input.value
                            .split(",")
                            .map(x => x.trim())
                            .filter(Boolean);

                    if (
                        current
                            .map(x => x.toLowerCase())
                            .includes(
                                value.toLowerCase()
                            )
                    ) {

                        current =
                            current.filter(
                                x =>
                                    x.toLowerCase() !==
                                    value.toLowerCase()
                            );

                    } else {

                        current.push(value);
                    }

                    input.value =
                        current.join(", ");

                    button.classList.toggle(
                        "selected"
                    );
                }
            );
        });


    get("saveCharacter")
        .addEventListener(
            "click",
            saveCharacter
        );


    get("testCharacter")
        .addEventListener(
            "click",
            () => {

                const message =
                    characterSpeak({
                        title: "your test reminder",
                        category: "Personal"
                    });

                get("characterPreview")
                    .textContent = message;

                data.character.lastMessage =
                    message;

                saveData();
            }
        );


    get("characterImage")
        .addEventListener(
            "change",
            handleCharacterImage
        );
}


function saveCharacter() {

    data.character.name =
        get("characterName")
            .value
            .trim() ||
        "Character";

    data.character.personality =
        get("personalityText")
            .value
            .trim() ||
        "Calm, Intelligent, Firm, Caring";

    saveData();

    renderCharacter();

    renderDashboard();

    toast("Character settings saved.");
}


/* =========================================================
   CHARACTER PERSONALITY ENGINE
========================================================= */

function characterHas(word) {

    return data.character.personality
        .toLowerCase()
        .includes(word.toLowerCase());
}


function characterSpeak(reminder) {

    const name =
        data.character.name ||
        "Character";

    const title =
        reminder.title ||
        "that reminder";

    const category =
        reminder.category ||
        "Personal";


    /*
       IMPORTANT:
       The reminder title is NOT simply repeated.
       Personality changes the actual wording.
    */

    const calm =
        characterHas("calm");

    const intelligent =
        characterHas("intelligent");

    const firm =
        characterHas("firm") ||
        characterHas("direct");

    const caring =
        characterHas("caring") ||
        characterHas("protective");

    const playful =
        characterHas("playful");

    const motivating =
        characterHas("motivating");


    if (firm && caring) {

        return `${title} is due. Handle it now, then you can move on with your day. I'm keeping you accountable because I know you can handle it.`;

    }


    if (firm) {

        return `${title} is due. No negotiating with the clock. Go take care of it.`;

    }


    if (caring && calm) {

        return `A small nudge from me: ${title} is due. Take care of it when you're ready, and don't forget to breathe.`;

    }


    if (intelligent && firm) {

        return `${title} is due. You've already decided this matters, so follow through. One completed action is better than another round of thinking about it.`;

    }


    if (motivating) {

        return `${title} is due. This is your next small win. Go get it done. ✦`;

    }


    if (playful) {

        return `Tiny interruption: ${title} is due. Your future self is waiting for you to tick this one off.`;

    }


    if (caring) {

        return `Just checking in. ${title} is due. Take care of yourself and this little task too. ♡`;

    }


    if (calm) {

        return `A gentle reminder: ${title} is due. Take it one step at a time.`;

    }


    return `${title} is due. Time to take care of it.`;
}


/* =========================================================
   CHARACTER IMAGE -> TRANSPARENT STICKER
========================================================= */

function handleCharacterImage(event) {

    const file =
        event.target.files?.[0];

    if (!file) {
        return;
    }

    const reader =
        new FileReader();


    reader.onload =
        function () {

            data.character.sourceImage =
                reader.result;

            createSticker(
                reader.result
            );
        };


    reader.readAsDataURL(file);
}


/*
    This creates a sticker rather than simply displaying
    the original rectangular image.

    It:
    1. Loads the image.
    2. Resizes it.
    3. Samples pixels around the border.
    4. Flood-fills from the edges.
    5. Removes pixels sufficiently similar to the
       detected background.
    6. Adds a tiny transparent margin.
    7. Saves the resulting PNG.
*/

function createSticker(src) {

    const img =
        new Image();

    img.onload =
        function () {

            const MAX =
                600;

            const scale =
                Math.min(
                    1,
                    MAX / Math.max(
                        img.width,
                        img.height
                    )
                );

            const width =
                Math.max(
                    1,
                    Math.round(img.width * scale)
                );

            const height =
                Math.max(
                    1,
                    Math.round(img.height * scale)
                );


            const canvas =
                document.createElement("canvas");

            canvas.width =
                width;

            canvas.height =
                height;


            const ctx =
                canvas.getContext(
                    "2d",
                    {
                        willReadFrequently: true
                    }
                );

            ctx.drawImage(
                img,
                0,
                0,
                width,
                height
            );


            const imageData =
                ctx.getImageData(
                    0,
                    0,
                    width,
                    height
                );

            const pixels =
                imageData.data;


            /*
               Estimate background from the
               four corners and nearby edge pixels.
            */

            const samples = [];

            const samplePoints = [

                [0,0],

                [width - 1,0],

                [0,height - 1],

                [width - 1,height - 1],

                [Math.floor(width / 2),0],

                [Math.floor(width / 2),height - 1],

                [0,Math.floor(height / 2)],

                [width - 1,Math.floor(height / 2)]
            ];


            samplePoints.forEach(
                ([x,y]) => {

                    const i =
                        (y * width + x) * 4;

                    samples.push([
                        pixels[i],
                        pixels[i + 1],
                        pixels[i + 2]
                    ]);
                }
            );


            const bg =
                averageColor(samples);


            /*
               Background tolerance.
               Increase if the original background
               is strongly uneven.
            */

            const tolerance =
                68;


            const visited =
                new Uint8Array(
                    width * height
                );


            const queue = [];


            function pushIfBackground(x,y) {

                if (
                    x < 0 ||
                    y < 0 ||
                    x >= width ||
                    y >= height
                ) {
                    return;
                }

                const index =
                    y * width + x;

                if (visited[index]) {
                    return;
                }

                const pixel =
                    index * 4;

                const distance =
                    colorDistance(
                        pixels[pixel],
                        pixels[pixel + 1],
                        pixels[pixel + 2],
                        bg[0],
                        bg[1],
                        bg[2]
                    );

                if (
                    distance <= tolerance
                ) {

                    visited[index] = 1;

                    queue.push([
                        x,
                        y
                    ]);
                }
            }


            /*
               Start from every border point.
            */

            for (let x = 0; x < width; x++) {

                pushIfBackground(x,0);

                pushIfBackground(
                    x,
                    height - 1
                );
            }


            for (let y = 0; y < height; y++) {

                pushIfBackground(0,y);

                pushIfBackground(
                    width - 1,
                    y
                );
            }


            /*
               Flood fill.
            */

            let pointer = 0;

            while (
                pointer <
                queue.length
            ) {

                const [
                    x,
                    y
                ] =
                    queue[pointer++];

                pushIfBackground(
                    x + 1,
                    y
                );

                pushIfBackground(
                    x - 1,
                    y
                );

                pushIfBackground(
                    x,
                    y + 1
                );

                pushIfBackground(
                    x,
                    y - 1
                );
            }


            /*
               Remove detected background.
            */

            for (
                let i = 0;
                i < visited.length;
                i++
            ) {

                if (visited[i]) {

                    pixels[
                        i * 4 + 3
                    ] = 0;
                }
            }


            ctx.putImageData(
                imageData,
                0,
                0
            );


            /*
               Crop transparent edges.
            */

            const cropped =
                cropTransparentCanvas(
                    canvas
                );


            /*
               Add transparent breathing room.
            */

            const padded =
                addTransparentPadding(
                    cropped,
                    20
                );


            const sticker =
                padded.toDataURL(
                    "image/png"
                );


            data.character.sticker =
                sticker;

            saveData();

            renderCharacter();

            renderDashboard();

            toast(
                "Character sticker created."
            );
        };


    img.onerror =
        function () {

            toast(
                "I couldn't process that image."
            );
        };


    img.src = src;
}


function averageColor(samples) {

    if (!samples.length) {

        return [
            255,
            255,
            255
        ];
    }

    let r = 0;
    let g = 0;
    let b = 0;

    samples.forEach(
        color => {

            r += color[0];
            g += color[1];
            b += color[2];
        }
    );

    return [

        Math.round(r / samples.length),

        Math.round(g / samples.length),

        Math.round(b / samples.length)
    ];
}


function colorDistance(
    r1,
    g1,
    b1,
    r2,
    g2,
    b2
) {

    return Math.sqrt(

        Math.pow(r1 - r2, 2) +

        Math.pow(g1 - g2, 2) +

        Math.pow(b1 - b2, 2)
    );
}


function cropTransparentCanvas(canvas) {

    const ctx =
        canvas.getContext(
            "2d",
            {
                willReadFrequently: true
            }
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


    let minX =
        canvas.width;

    let minY =
        canvas.height;

    let maxX =
        -1;

    let maxY =
        -1;


    for (
        let y = 0;
        y < canvas.height;
        y++
    ) {

        for (
            let x = 0;
            x < canvas.width;
            x++
        ) {

            const alpha =
                pixels[
                    (y * canvas.width + x) * 4 + 3
                ];

            if (alpha > 8) {

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


    if (maxX === -1) {

        return canvas;
    }


    const width =
        maxX - minX + 1;

    const height =
        maxY - minY + 1;


    const result =
        document.createElement("canvas");

    result.width =
        width;

    result.height =
        height;


    result
        .getContext("2d")
        .drawImage(
            canvas,
            minX,
            minY,
            width,
            height,
            0,
            0,
            width,
            height
        );


    return result;
}


function addTransparentPadding(
    canvas,
    padding
) {

    const result =
        document.createElement("canvas");

    result.width =
        canvas.width + padding * 2;

    result.height =
        canvas.height + padding * 2;


    result
        .getContext("2d")
        .drawImage(
            canvas,
            padding,
            padding
        );


    return result;
}


/* =========================================================
   REMINDERS
========================================================= */

function renderReminders() {

    get("reminders").innerHTML = `

        <div class="section-head">

            <div>
                <h2>Reminders</h2>

                <p>
                    Character will speak when one becomes due.
                </p>
            </div>

            <button
                class="btn primary"
                id="addReminder"
                type="button">

                + Add Reminder

            </button>

        </div>


        <div class="list-page">

            ${
                data.reminders.length

                ?

                data.reminders
                    .slice()
                    .sort(
                        (a,b) =>
                            new Date(a.datetime) -
                            new Date(b.datetime)
                    )
                    .map(reminder => `

                        <div class="card item-card">

                            <div class="main">

                                <h3>
                                    ${escapeHTML(
                                        reminder.title
                                    )}
                                </h3>

                                <p>

                                    ${escapeHTML(
                                        reminder.category
                                    )}

                                    ·

                                    ${formatDateTime(
                                        reminder.datetime
                                    )}

                                </p>

                            </div>


                            <div class="item-actions">

                                <button
                                    class="btn"
                                    type="button"
                                    data-edit-reminder="${reminder.id}">

                                    Edit

                                </button>

                                <button
                                    class="btn danger"
                                    type="button"
                                    data-delete-reminder="${reminder.id}">

                                    Delete

                                </button>

                            </div>

                        </div>

                    `)
                    .join("")

                :

                `
                <div class="card empty">
                    No reminders yet.
                </div>
                `
            }

        </div>
    `;


    get("addReminder")
        .addEventListener(
            "click",
            () => openReminderModal()
        );


    document
        .querySelectorAll(
            "[data-edit-reminder]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const reminder =
                        data.reminders.find(
                            r =>
                                r.id ===
                                button.dataset.editReminder
                        );

                    if (reminder) {

                        openReminderModal(
                            reminder
                        );
                    }
                }
            );
        });


    document
        .querySelectorAll(
            "[data-delete-reminder]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    data.reminders =
                        data.reminders.filter(
                            r =>
                                r.id !==
                                button.dataset.deleteReminder
                        );

                    saveData();

                    renderReminders();

                    renderDashboard();

                    toast(
                        "Reminder deleted."
                    );
                }
            );
        });
}


function openReminderModal(reminder = null) {

    const existing =
        reminder
            ? toDateTimeLocal(
                reminder.datetime
            )
            : toDateTimeLocal(
                new Date(
                    Date.now() + 10 * 60000
                )
            );


    get("modalRoot").innerHTML = `

        <div class="modal-backdrop">

            <div class="modal">

                <div class="modal-head">

                    <h2>
                        ${reminder
                            ? "Edit Reminder"
                            : "New Reminder"}
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
                            placeholder="What should I remind you about?"
                            value="${
                                escapeHTML(
                                    reminder?.title || ""
                                )
                            }">

                    </div>


                    <div class="field">

                        <label>
                            Date & Time
                        </label>

                        <input
                            id="reminderDatetime"
                            type="datetime-local"
                            value="${existing}">

                    </div>


                    <div class="field">

                        <label>
                            Category
                        </label>

                        <select id="reminderCategory">

                            ${[
                                "Work",
                                "Personal",
                                "Finance",
                                "Learning"
                            ]
                                .map(
                                    category => `

                                        <option
                                            ${
                                                (
                                                    reminder?.category ||
                                                    "Personal"
                                                ) === category
                                                    ? "selected"
                                                    : ""
                                            }
                                        >
                                            ${category}
                                        </option>

                                    `
                                )
                                .join("")}

                        </select>

                    </div>


                    <div class="button-row field full">

                        <button
                            class="btn"
                            id="cancelReminder"
                            type="button">

                            Cancel

                        </button>


                        <button
                            class="btn primary"
                            id="saveReminder"
                            type="button">

                            Save Reminder

                        </button>

                    </div>

                </div>

            </div>

        </div>
    `;


    get("closeModal")
        .addEventListener(
            "click",
            closeModal
        );

    get("cancelReminder")
        .addEventListener(
            "click",
            closeModal
        );


    get("saveReminder")
        .addEventListener(
            "click",
            () => {

                const title =
                    get("reminderTitle")
                        .value
                        .trim();

                const datetime =
                    get("reminderDatetime")
                        .value;

                const category =
                    get("reminderCategory")
                        .value;


                if (!title || !datetime) {

                    toast(
                        "Please enter the reminder and time."
                    );

                    return;
                }


                if (reminder) {

                    reminder.title =
                        title;

                    reminder.datetime =
                        datetime;

                    reminder.category =
                        category;

                    reminder.triggered = false;

                } else {

                    data.reminders.push({

                        id: uid("reminder"),

                        title,

                        datetime,

                        category,

                        triggered: false,

                        done: false
                    });
                }


                saveData();

                closeModal();

                renderReminders();

                renderDashboard();

                toast(
                    reminder
                        ? "Reminder updated."
                        : "Reminder saved."
                );
            }
        );
}


function closeModal() {

    get("modalRoot")
        .innerHTML = "";
}


function toDateTimeLocal(date) {

    const d =
        new Date(date);

    const pad =
        n =>
            String(n).padStart(
                2,
                "0"
            );

    return [

        d.getFullYear(),

        "-",

        pad(
            d.getMonth() + 1
        ),

        "-",

        pad(
            d.getDate()
        ),

        "T",

        pad(
            d.getHours()
        ),

        ":",

        pad(
            d.getMinutes()
        )

    ].join("");
}


/* =========================================================
   REMINDER WATCHER
========================================================= */

let reminderWatcherStarted =
    false;


function startReminderWatcher() {

    if (reminderWatcherStarted) {
        return;
    }

    reminderWatcherStarted = true;


    checkReminders();

    setInterval(
        checkReminders,
        15000
    );
}


function checkReminders() {

    const now =
        Date.now();


    data.reminders.forEach(
        reminder => {

            if (reminder.done) {
                return;
            }

            if (reminder.snoozedUntil) {

                if (
                    now <
                    new Date(
                        reminder.snoozedUntil
                    ).getTime()
                ) {

                    return;
                }

                reminder.snoozedUntil =
                    null;
            }


            if (reminder.triggered) {
                return;
            }


            const due =
                new Date(
                    reminder.datetime
                ).getTime();


            if (
                Number.isNaN(due)
            ) {
                return;
            }


            if (
                now >= due &&
                now < due + 120000
            ) {

                triggerReminder(
                    reminder
                );
            }
        }
    );
}


function triggerReminder(reminder) {

    reminder.triggered =
        true;


    const message =
        characterSpeak(
            reminder
        );


    data.character.lastMessage =
        message;


    data.notifications.unshift({

        id: uid("notification"),

        reminderId:
            reminder.id,

        title:
            data.character.name ||
            "Character",

        message,

        createdAt:
            new Date().toISOString(),

        read: false,

        done: false
    });


    saveData();


    /*
       This browser notification appears outside
       the LAYRAAZ webpage, including while the user
       is browsing another site, as long as the browser
       has permission and the page is running.
    */

    sendBrowserNotification(
        reminder,
        message
    );


    renderDashboard();

    renderNotifications();

    updateNotificationCount();


    toast(
        `${data.character.name || "Character"} has a reminder for you.`
    );
}


/* =========================================================
   BROWSER NOTIFICATIONS
========================================================= */

async function requestNotificationPermission() {

    if (
        !("Notification" in window)
    ) {

        toast(
            "This browser does not support notifications."
        );

        return;
    }


    if (
        Notification.permission ===
        "granted"
    ) {

        toast(
            "Browser notifications are already enabled."
        );

        return;
    }


    try {

        const permission =
            await Notification.requestPermission();

        if (
            permission ===
            "granted"
        ) {

            toast(
                "Browser notifications enabled."
            );

        } else {

            toast(
                "Browser notification permission was not granted."
            );
        }

    } catch (error) {

        console.error(error);

        toast(
            "Could not request notification permission."
        );
    }
}


function sendBrowserNotification(
    reminder,
    message
) {

    if (
        !("Notification" in window)
    ) {
        return;
    }


    if (
        Notification.permission !==
        "granted"
    ) {
        return;
    }


    try {

        const notification =
            new Notification(
                data.character.name ||
                "Character",
                {

                    body: message,

                    icon:
                        data.character.sticker ||
                        undefined,

                    badge:
                        data.character.sticker ||
                        undefined,

                    tag:
                        `layraaz-${reminder.id}`,

                    renotify: true
                }
            );


        notification.onclick =
            function () {

                window.focus();

                showSection(
                    "notifications"
                );

                notification.close();
            };


    } catch (error) {

        console.error(
            "Notification error:",
            error
        );
    }
}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function renderNotifications() {

    get("notifications").innerHTML = `

        <div class="section-head">

            <div>

                <h2>Notifications</h2>

                <p>
                    Your Character's recent nudges.
                </p>

            </div>


            <button
                class="btn"
                id="enableNotifications"
                type="button">

                Enable Browser Notifications

            </button>

        </div>


        <div class="list-page">

            ${
                data.notifications.length

                ?

                data.notifications
                    .map(notification => `

                        <div
                            class="
                                card
                                notice
                                ${
                                    notification.read
                                        ? ""
                                        : "unread"
                                }
                            "
                        >

                            <div>

                                <strong>
                                    ${escapeHTML(
                                        notification.title
                                    )}
                                </strong>

                                <div>
                                    ${escapeHTML(
                                        notification.message
                                    )}
                                </div>

                                <small>
                                    ${formatDateTime(
                                        notification.createdAt
                                    )}
                                </small>

                            </div>


                            <div class="notice-actions">

                                <button
                                    class="btn"
                                    type="button"
                                    data-notice-done="${notification.id}">

                                    Done

                                </button>


                                <button
                                    class="btn"
                                    type="button"
                                    data-notice-snooze="${notification.id}">

                                    Snooze 5 min

                                </button>

                            </div>

                        </div>

                    `)
                    .join("")

                :

                `
                <div class="card empty">
                    No notifications yet.
                </div>
                `
            }

        </div>
    `;


    get("enableNotifications")
        .addEventListener(
            "click",
            requestNotificationPermission
        );


    document
        .querySelectorAll(
            "[data-notice-done]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    finishNotification(
                        button.dataset.noticeDone
                    );
                }
            );
        });


    document
        .querySelectorAll(
            "[data-notice-snooze]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    snoozeNotification(
                        button.dataset.noticeSnooze
                    );
                }
            );
        });
}


function finishNotification(
    notificationId
) {

    const notification =
        data.notifications.find(
            n =>
                n.id ===
                notificationId
        );

    if (!notification) {
        return;
    }


    notification.read =
        true;

    notification.done =
        true;


    const reminder =
        data.reminders.find(
            r =>
                r.id ===
                notification.reminderId
        );


    if (reminder) {

        reminder.done =
            true;
    }


    saveData();

    renderNotifications();

    renderReminders();

    renderDashboard();

    updateNotificationCount();

    toast("Done. ✓");
}


function snoozeNotification(
    notificationId
) {

    const notification =
        data.notifications.find(
            n =>
                n.id ===
                notificationId
        );

    if (!notification) {
        return;
    }


    const reminder =
        data.reminders.find(
            r =>
                r.id ===
                notification.reminderId
        );


    if (reminder) {

        reminder.snoozedUntil =
            new Date(
                Date.now() +
                5 * 60 * 1000
            ).toISOString();

        reminder.triggered =
            false;
    }


    notification.read =
        true;


    saveData();

    renderNotifications();

    renderReminders();

    renderDashboard();

    updateNotificationCount();

    toast(
        "Snoozed for 5 minutes."
    );
}


function updateNotificationCount() {

    const count =
        data.notifications.filter(
            n => !n.read
        ).length;

    const el =
        get("notificationCount");

    if (!el) {
        return;
    }

    el.textContent =
        count > 0
            ? count
            : "";
}


/* =========================================================
   TODO LIST
========================================================= */

function renderTodos() {

    const categories = [
        "Work",
        "Personal",
        "Finance",
        "Learning"
    ];


    get("todos").innerHTML = `

        <div class="section-head">

            <div>

                <h2>To-do List</h2>

                <p>
                    Four categories. No unnecessary priority ladder.
                </p>

            </div>

        </div>


        <div class="card">

            <div class="form-grid">

                <div class="field">

                    <label>
                        Task
                    </label>

                    <input
                        id="todoText"
                        placeholder="What needs doing?">

                </div>


                <div class="field">

                    <label>
                        Category
                    </label>

                    <select id="todoCategory">

                        ${categories
                            .map(
                                category =>
                                    `<option>${category}</option>`
                            )
                            .join("")}

                    </select>

                </div>


                <div class="button-row field full">

                    <button
                        class="btn primary"
                        id="addTodo"
                        type="button">

                        Add Task

                    </button>

                </div>

            </div>

        </div>


        <div
            class="list-page"
            style="margin-top:15px;">

            ${
                data.todos.length

                ?

                data.todos
                    .map(todo => `

                        <div class="card item-card">

                            <label
                                class="check-row"
                                style="
                                    flex:1;
                                    border:0;
                                    padding:0;
                                "
                            >

                                <input
                                    type="checkbox"
                                    data-todo-check="${todo.id}"
                                    ${todo.done ? "checked" : ""}>

                                <span
                                    class="check-label ${
                                        todo.done
                                            ? "done"
                                            : ""
                                    }"
                                >
                                    ${escapeHTML(todo.text)}
                                </span>

                            </label>


                            <div class="item-actions">

                                <span class="pill">
                                    ${escapeHTML(todo.category)}
                                </span>

                                <button
                                    class="btn danger"
                                    type="button"
                                    data-delete-todo="${todo.id}">

                                    Delete

                                </button>

                            </div>

                        </div>

                    `)
                    .join("")

                :

                `
                <div class="card empty">
                    Nothing here yet.
                </div>
                `
            }

        </div>
    `;


    get("addTodo")
        .addEventListener(
            "click",
            addTodo
        );


    document
        .querySelectorAll(
            "[data-todo-check]"
        )
        .forEach(box => {

            box.addEventListener(
                "change",
                () => {

                    const todo =
                        data.todos.find(
                            item =>
                                item.id ===
                                box.dataset.todoCheck
                        );

                    if (!todo) {
                        return;
                    }

                    todo.done =
                        box.checked;

                    saveData();

                    renderTodos();

                    renderDashboard();
                }
            );
        });


    document
        .querySelectorAll(
            "[data-delete-todo]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    data.todos =
                        data.todos.filter(
                            todo =>
                                todo.id !==
                                button.dataset.deleteTodo
                        );

                    saveData();

                    renderTodos();

                    renderDashboard();

                    toast(
                        "Task deleted."
                    );
                }
            );
        });
}


function addTodo() {

    const text =
        get("todoText")
            .value
            .trim();

    const category =
        get("todoCategory")
            .value;


    if (!text) {

        toast(
            "Write the task first."
        );

        return;
    }


    data.todos.unshift({

        id: uid("todo"),

        text,

        category,

        done: false
    });


    saveData();

    renderTodos();

    renderDashboard();

    toast(
        "Task added."
    );
}


/* =========================================================
   GOALS
========================================================= */

function renderGoals() {

    get("goals").innerHTML = `

        <div class="section-head">

            <div>

                <h2>Goals</h2>

                <p>
                    Keep the future visible.
                </p>

            </div>

        </div>


        <div class="card">

            <div class="form-grid">

                <div class="field">

                    <label>
                        Goal
                    </label>

                    <input
                        id="goalText"
                        placeholder="What are you working toward?">

                </div>


                <div class="field">

                    <label>
                        Target
                    </label>

                    <input
                        id="goalTarget"
                        type="date">

                </div>


                <div class="button-row field full">

                    <button
                        class="btn primary"
                        id="addGoal"
                        type="button">

                        Add Goal

                    </button>

                </div>

            </div>

        </div>


        <div
            class="list-page"
            style="margin-top:15px;">

            ${
                data.goals.length

                ?

                data.goals
                    .map(goal => `

                        <div class="card">

                            <div class="item-card">

                                <div class="main">

                                    <h3>
                                        ${escapeHTML(
                                            goal.text
                                        )}
                                    </h3>

                                    <p>
                                        ${
                                            goal.target
                                                ? `Target: ${formatDate(goal.target)}`
                                                : "No target date"
                                        }
                                    </p>

                                </div>


                                <div class="item-actions">

                                    <button
                                        class="btn"
                                        type="button"
                                        data-goal-done="${goal.id}">

                                        ${
                                            goal.done
                                                ? "Reopen"
                                                : "Done"
                                        }

                                    </button>


                                    <button
                                        class="btn danger"
                                        type="button"
                                        data-goal-delete="${goal.id}">

                                        Delete

                                    </button>

                                </div>

                            </div>

                        </div>

                    `)
                    .join("")

                :

                `
                <div class="card empty">
                    No goals yet.
                </div>
                `
            }

        </div>
    `;


    get("addGoal")
        .addEventListener(
            "click",
            addGoal
        );


    document
        .querySelectorAll(
            "[data-goal-done]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const goal =
                        data.goals.find(
                            g =>
                                g.id ===
                                button.dataset.goalDone
                        );

                    if (!goal) {
                        return;
                    }

                    goal.done =
                        !goal.done;

                    saveData();

                    renderGoals();

                    renderDashboard();
                }
            );
        });


    document
        .querySelectorAll(
            "[data-goal-delete]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    data.goals =
                        data.goals.filter(
                            g =>
                                g.id !==
                                button.dataset.goalDelete
                        );

                    saveData();

                    renderGoals();

                    renderDashboard();

                    toast(
                        "Goal deleted."
                    );
                }
            );
        });
}


function addGoal() {

    const text =
        get("goalText")
            .value
            .trim();

    const target =
        get("goalTarget")
            .value;


    if (!text) {

        toast(
            "Write the goal first."
        );

        return;
    }


    data.goals.unshift({

        id: uid("goal"),

        text,

        target,

        done: false
    });


    saveData();

    renderGoals();

    renderDashboard();

    toast(
        "Goal added."
    );
}


/* =========================================================
   NOTES
========================================================= */

function renderNotes() {

    get("notes").innerHTML = `

        <div class="section-head">

            <div>

                <h2>Notes</h2>

                <p>
                    Keep thoughts without turning them into clutter.
                </p>

            </div>

        </div>


        <div class="card">

            <div class="form-grid">

                <div class="field full">

                    <label>
                        New Note
                    </label>

                    <textarea
                        id="noteText"
                        placeholder="Write something..."></textarea>

                </div>


                <div class="button-row field full">

                    <button
                        class="btn primary"
                        id="addNote"
                        type="button">

                        Save Note

                    </button>

                </div>

            </div>

        </div>


        <div
            class="list-page"
            style="margin-top:15px;">

            ${
                data.notes.length

                ?

                data.notes
                    .map(note => `

                        <div class="card">

                            <div class="note-paper">

                                ${escapeHTML(
                                    note.text
                                )}

                            </div>

                            <div
                                class="mini"
                                style="
                                    margin-top:10px;
                                "
                            >

                                <small>
                                    ${formatDateTime(
                                        note.createdAt
                                    )}
                                </small>

                                <button
                                    class="btn danger"
                                    type="button"
                                    data-delete-note="${note.id}">

                                    Delete

                                </button>

                            </div>

                        </div>

                    `)
                    .join("")

                :

                `
                <div class="card empty">
                    No notes yet.
                </div>
                `
            }

        </div>
    `;


    get("addNote")
        .addEventListener(
            "click",
            addNote
        );


    document
        .querySelectorAll(
            "[data-delete-note]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    data.notes =
                        data.notes.filter(
                            note =>
                                note.id !==
                                button.dataset.deleteNote
                        );

                    saveData();

                    renderNotes();

                    renderDashboard();

                    toast(
                        "Note deleted."
                    );
                }
            );
        });
}


function addNote() {

    const text =
        get("noteText")
            .value
            .trim();


    if (!text) {

        toast(
            "Write something first."
        );

        return;
    }


    data.notes.unshift({

        id: uid("note"),

        text,

        createdAt:
            new Date().toISOString()
    });


    saveData();

    renderNotes();

    renderDashboard();

    toast(
        "Note saved."
    );
}


/* =========================================================
   APPEARANCE
========================================================= */

function renderAppearance() {

    get("appearance").innerHTML = `

        <div class="section-head">

            <div>

                <h2>Appearance</h2>

                <p>
                    Ten atmospheres. Same LAYRAAZ.
                </p>

            </div>

        </div>


        <div class="card">

            <div class="palette-grid">

                ${Object.entries(palettes)
                    .map(
                        ([key,palette]) => `

                            <button
                                class="
                                    palette
                                    ${
                                        data.appearance === key
                                            ? "selected"
                                            : ""
                                    }
                                "
                                type="button"
                                data-palette="${key}">

                                <div class="swatches">

                                    <i
                                        style="
                                            background:${palette.background}
                                        ">
                                    </i>

                                    <i
                                        style="
                                            background:${palette.main}
                                        ">
                                    </i>

                                    <i
                                        style="
                                            background:${palette.font}
                                        ">
                                    </i>

                                </div>

                                <strong>
                                    ${palette.name}
                                </strong>

                            </button>

                        `
                    )
                    .join("")}

            </div>

        </div>
    `;


    document
        .querySelectorAll(
            "[data-palette]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    data.appearance =
                        button.dataset.palette;

                    applyAppearance();

                    renderAppearance();

                    renderDashboard();

                    renderProfile();

                    renderCharacter();

                    toast(
                        `${palettes[data.appearance].name} applied.`
                    );
                }
            );
        });
}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    const input =
        get("globalSearch");

    input.addEventListener(
        "input",
        performSearch
    );


    document.addEventListener(
        "click",
        event => {

            const results =
                get("searchResults");

            if (
                !results.contains(event.target) &&
                event.target !== input
            ) {

                results.classList.add(
                    "hidden"
                );
            }
        }
    );
}


function performSearch() {

    const query =
        get("globalSearch")
            .value
            .trim()
            .toLowerCase();


    const results =
        get("searchResults");


    if (!query) {

        results.classList.add(
            "hidden"
        );

        return;
    }


    const matches = [];


    data.reminders.forEach(
        reminder => {

            if (
                reminder.title
                    .toLowerCase()
                    .includes(query)
            ) {

                matches.push({

                    type: "Reminder",

                    title:
                        reminder.title,

                    section:
                        "reminders",

                    detail:
                        reminder.category
                });
            }
        }
    );


    data.todos.forEach(
        todo => {

            if (
                todo.text
                    .toLowerCase()
                    .includes(query)
            ) {

                matches.push({

                    type: "To-do",

                    title:
                        todo.text,

                    section:
                        "todos",

                    detail:
                        todo.category
                });
            }
        }
    );


    data.goals.forEach(
        goal => {

            if (
                goal.text
                    .toLowerCase()
                    .includes(query)
            ) {

                matches.push({

                    type: "Goal",

                    title:
                        goal.text,

                    section:
                        "goals",

                    detail:
                        "Goal"
                });
            }
        }
    );


    data.notes.forEach(
        note => {

            if (
                note.text
                    .toLowerCase()
                    .includes(query)
            ) {

                matches.push({

                    type: "Note",

                    title:
                        note.text.slice(
                            0,
                            80
                        ),

                    section:
                        "notes",

                    detail:
                        "Note"
                });
            }
        }
    );


    if (!matches.length) {

        results.innerHTML = `
            <div class="search-result">
                <strong>No results</strong>
                <span>Nothing matched that search.</span>
            </div>
        `;

    } else {

        results.innerHTML =
            matches
                .slice(0,10)
                .map(
                    (match,index) => `

                        <div
                            class="search-result"
                            data-search-index="${index}">

                            <strong>
                                ${escapeHTML(
                                    match.title
                                )}
                            </strong>

                            <span>
                                ${escapeHTML(
                                    match.type
                                )}
                                ·
                                ${escapeHTML(
                                    match.detail
                                )}
                            </span>

                        </div>
                    `
                )
                .join("");
    }


    results.classList.remove(
        "hidden"
    );


    results
        .querySelectorAll(
            "[data-search-index]"
        )
        .forEach(
            (item,index) => {

                item.addEventListener(
                    "click",
                    () => {

                        const match =
                            matches[index];

                        if (!match) {
                            return;
                        }

                        showSection(
                            match.section
                        );

                        results.classList.add(
                            "hidden"
                        );

                        get("globalSearch")
                            .value = "";
                    }
                );
            }
        );
}


/* =========================================================
   TOP BUTTONS
========================================================= */

function setupTopButtons() {

    get("notificationBtn")
        .addEventListener(
            "click",
            () => showSection(
                "notifications"
            )
        );


    get("profileBtn")
        .addEventListener(
            "click",
            () => showSection(
                "profile"
            )
        );
}


/* =========================================================
   ENTER KEY HELP
========================================================= */

function setupKeyboard() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeModal();

                get("searchResults")
                    ?.classList.add(
                        "hidden"
                    );
            }
        }
    );
}


/* =========================================================
   INIT
========================================================= */

function init() {

    applyAppearance();

    renderIcons();

    setupSidebar();

    setupSearch();

    setupTopButtons();

    setupKeyboard();

    renderProfile();

    renderDashboard();

    renderCharacter();

    renderReminders();

    renderTodos();

    renderGoals();

    renderNotes();

    renderNotifications();

    renderAppearance();

    updateNotificationCount();

    startReminderWatcher();


    get("topName").textContent =
        data.profile.name ||
        "Laya";


    if (data.profile.image) {

        get("topAvatar")
            .style
            .backgroundImage =
            `url("${data.profile.image}")`;
    }


    /*
       We intentionally do NOT automatically request
       browser notification permission on page load.
       The user can enable it from Notifications.
    */

    console.log(
        "LAYRAAZ loaded successfully."
    );
}


document.addEventListener(
    "DOMContentLoaded",
    init
);
