"use strict";


/* =========================================================
   LAYRAAZ
   ========================================================= */

const STORAGE_KEY = "LAYRAAZ_DATA_V5";

const OLD_KEYS = [
    "LAYRAAZ_DATA_V4",
    "LAYRAAZ_DATA_V3",
    "LAYRAAZ_DATA_V2",
    "LAYRAAZ_DATA"
];


/* =========================================================
   PALETTES
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
        font: "#FFFECD"
    }

};


/* =========================================================
   ICONS
   ========================================================= */

const ICONS = {

    menu: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.8"
             stroke-linecap="round">
            <path d="M5 7h14M5 12h14M5 17h14"/>
        </svg>
    `,

    home: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linejoin="round">
            <path d="m3.5 10.5 8.5-7 8.5 7v9a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5v-9Z"/>
            <path d="M9 21v-6h6v6"/>
        </svg>
    `,

    profile: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linecap="round">
            <circle cx="12" cy="8" r="3.5"/>
            <path d="M4.5 20c.8-3.3 3.3-5 7.5-5s6.7 1.7 7.5 5"/>
        </svg>
    `,

    character: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linecap="round">
            <circle cx="12" cy="12" r="8.5"/>
            <circle cx="9" cy="11" r=".7" fill="currentColor"/>
            <circle cx="15" cy="11" r=".7" fill="currentColor"/>
            <path d="M9 15c1.8 1.4 4.2 1.4 6 0"/>
        </svg>
    `,

    bell: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linecap="round">
            <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"/>
            <path d="M10 21h4"/>
        </svg>
    `,

    check: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linejoin="round">
            <rect x="4" y="3.5" width="16" height="17" rx="2"/>
            <path d="m8 12 2.5 2.5L16 9"/>
        </svg>
    `,

    target: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7">
            <circle cx="12" cy="12" r="8.5"/>
            <circle cx="12" cy="12" r="4.5"/>
            <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
            <path d="m15.5 8.5 4-4M16.5 4.5h3v3"/>
        </svg>
    `,

    note: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linejoin="round">
            <path d="M6 3.5h9l3 3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/>
            <path d="M14 3.5V7h4M8 11h8M8 15h8M8 18h5"/>
        </svg>
    `,

    notification: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linecap="round">
            <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"/>
            <path d="M10 21h4"/>
        </svg>
    `,

    palette: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linejoin="round">
            <path d="M12 4a8 8 0 0 0 0 16h1.2a1.8 1.8 0 0 0 1.2-3.1c-.8-.8-.2-2.2 1-2.2h1.1A3.5 3.5 0 0 0 21 11.2C20.6 7.1 17 4 12 4Z"/>
            <circle cx="7.5" cy="10" r=".8"/>
            <circle cx="10" cy="7.5" r=".8"/>
            <circle cx="14" cy="7.5" r=".8"/>
            <circle cx="17" cy="10" r=".8"/>
        </svg>
    `,

    search: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.8"
             stroke-linecap="round">
            <circle cx="10.8" cy="10.8" r="6.8"/>
            <path d="m16 16 5 5"/>
        </svg>
    `,

    edit: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5 4 16.5Z"/>
            <path d="m13.8 6.7 3.5 3.5"/>
        </svg>
    `,

    trash: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linecap="round">
            <path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/>
        </svg>
    `,

    plus: `
        <svg viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="1.8"
             stroke-linecap="round">
            <path d="M12 5v14M5 12h14"/>
        </svg>
    `

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

        familyMembers:
            "4",

        image:
            ""
    },

    character: {
        name: "Character",

        personality:
            "Calm, intelligent, firm and caring.",

        sticker:
            "",

        online:
            true
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

let activeSection = "dashboard";

let reminderTimer = null;

let toastTimer = null;


/* =========================================================
   HELPERS
   ========================================================= */

const $ = id =>
    document.getElementById(id);


function clone(value) {
    return JSON.parse(
        JSON.stringify(value)
    );
}


function esc(value) {

    return String(
        value ?? ""
    ).replace(
        /[&<>"']/g,
        char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char])
    );

}


function uid(prefix) {

    return (
        prefix +
        "_" +
        Date.now() +
        "_" +
        Math.random()
            .toString(36)
            .slice(2,8)
    );

}


function save() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

    } catch (error) {

        console.error(
            "LAYRAAZ storage error:",
            error
        );

    }

}


/* =========================================================
   LOAD DATA
   ========================================================= */

function loadData() {

    let raw = null;

    try {

        raw =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!raw) {

            for (
                const key of OLD_KEYS
            ) {

                raw =
                    localStorage.getItem(
                        key
                    );

                if (raw) break;

            }

        }

    } catch (error) {

        raw = null;

    }


    if (!raw) {

        return clone(
            defaultData
        );

    }


    try {

        const incoming =
            JSON.parse(raw);

        const result =
            clone(defaultData);


        result.profile = {
            ...result.profile,
            ...(incoming.profile || {})
        };


        result.character = {
            ...result.character,
            ...(incoming.character || {})
        };


        if (
            incoming.appearance
        ) {

            result.appearance =
                incoming.appearance;

        }


        [
            "reminders",
            "todos",
            "goals",
            "notes",
            "notifications"
        ].forEach(key => {

            if (
                Array.isArray(
                    incoming[key]
                )
            ) {

                result[key] =
                    incoming[key];

            }

        });


        const oldPaletteMap = {

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


        if (
            oldPaletteMap[
                result.appearance
            ]
        ) {

            result.appearance =
                oldPaletteMap[
                    result.appearance
                ];

        }


        if (
            !palettes[
                result.appearance
            ]
        ) {

            result.appearance =
                "forest";

        }


        return result;

    } catch (error) {

        console.error(
            "LAYRAAZ data error:",
            error
        );

        return clone(
            defaultData
        );

    }

}


/* =========================================================
   DATE
   ========================================================= */

function calculateAge(dob) {

    if (!dob) return "";

    const birth =
        new Date(
            dob + "T00:00:00"
        );

    const now =
        new Date();

    if (
        Number.isNaN(
            birth.getTime()
        )
    ) {

        return "";

    }


    let years =
        now.getFullYear() -
        birth.getFullYear();


    const birthdayPassed =
        now.getMonth() >
        birth.getMonth() ||
        (
            now.getMonth() ===
            birth.getMonth() &&
            now.getDate() >=
            birth.getDate()
        );


    if (!birthdayPassed) {
        years--;
    }


    return years;

}


function formatDate(value) {

    const date =
        new Date(value);

    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return String(
            value || ""
        );

    }


    return date.toLocaleString(
        [],
        {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


function sameDay(value) {

    const date =
        new Date(value);

    const now =
        new Date();


    return (
        date.getFullYear() ===
            now.getFullYear() &&

        date.getMonth() ===
            now.getMonth() &&

        date.getDate() ===
            now.getDate()
    );

}


function localDateTime(value) {

    if (!value) return "";

    const date =
        new Date(value);

    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return "";

    }


    const pad =
        number =>
            String(number)
                .padStart(2,"0");


    return (
        date.getFullYear() +
        "-" +
        pad(
            date.getMonth() + 1
        ) +
        "-" +
        pad(
            date.getDate()
        ) +
        "T" +
        pad(
            date.getHours()
        ) +
        ":" +
        pad(
            date.getMinutes()
        )
    );

}


/* =========================================================
   APPEARANCE
   ========================================================= */

function applyPalette() {

    const palette =
        palettes[
            data.appearance
        ] ||
        palettes.forest;


    document.documentElement
        .style
        .setProperty(
            "--bg",
            palette.background
        );


    document.documentElement
        .style
        .setProperty(
            "--main",
            palette.main
        );


    document.documentElement
        .style
        .setProperty(
            "--font",
            palette.font
        );


    const hex =
        palette.background
            .replace("#","");


    const r =
        parseInt(
            hex.slice(0,2),
            16
        );

    const g =
        parseInt(
            hex.slice(2,4),
            16
        );

    const b =
        parseInt(
            hex.slice(4,6),
            16
        );


    const brightness =
        (
            .2126 * r +
            .7152 * g +
            .0722 * b
        ) / 255;


    document.documentElement
        .style
        .setProperty(
            "--muted",
            brightness < .62
                ? "rgba(255,255,255,.65)"
                : "rgba(50,35,30,.68)"
        );


    const meta =
        document.querySelector(
            'meta[name="theme-color"]'
        );


    if (meta) {

        meta.content =
            palette.background;

    }

}


/* =========================================================
   ICONS
   ========================================================= */

function renderIcons() {

    document
        .querySelectorAll(".nav-icon")
        .forEach(element => {

            const className =
                [...element.classList]
                    .find(
                        name =>
                            name.startsWith(
                                "icon-"
                            )
                    );


            if (!className) return;


            const key =
                className.slice(5);


            if (ICONS[key]) {

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

}


/* =========================================================
   AVATAR
   ========================================================= */

function setAvatar(
    element,
    src
) {

    if (!element) return;


    element.style.backgroundImage =
        src
            ? `url("${src}")`
            : "none";

}


/* =========================================================
   UI HELPERS
   ========================================================= */

function sectionHead(
    title,
    subtitle,
    button = ""
) {

    return `
        <div class="section-head">

            <div>

                <h2>${esc(title)}</h2>

                <p>${esc(subtitle)}</p>

            </div>

            ${button}

        </div>
    `;

}


function actionButton(
    text,
    action,
    classes = "btn"
) {

    return `
        <button
            class="${classes}"
            data-action="${esc(action)}"
            type="button">

            ${text}

        </button>
    `;

}


function statCard(
    icon,
    number,
    label,
    sub
) {

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
                    ${esc(label)}<br>
                    ${esc(sub)}
                </div>

            </div>

        </article>
    `;

}


/* =========================================================
   TOP BAR
   ========================================================= */

function updateTop() {

    const name =
        data.profile.name ||
        "Laya";


    $("topName").textContent =
        name;


    $("pageTitle").innerHTML =
        `Welcome back, ${esc(name)}
         <span class="title-sparkle">✦</span>`;


    const unread =
        data.notifications
            .filter(
                notification =>
                    !notification.read
            )
            .length;


    $("notificationCount")
        .textContent =
        unread || "";


    setAvatar(
        $("topAvatar"),
        data.profile.image
    );

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {

    const name =
        data.profile.name ||
        "Laya";


    const remindersToday =
        data.reminders.filter(
            reminder =>
                sameDay(reminder.when) &&
                !reminder.completed
        ).length;


    const pendingTodos =
        data.todos.filter(
            todo =>
                !todo.done
        ).length;


    const activeGoals =
        data.goals.filter(
            goal =>
                Number(
                    goal.progress || 0
                ) < 100
        ).length;


    const notesCount =
        data.notes.length;


    const upcoming =
        [...data.reminders]
            .filter(
                reminder =>
                    !reminder.completed &&
                    new Date(
                        reminder.when
                    ).getTime() >=
                    Date.now() - 86400000
            )
            .sort(
                (a,b) =>
                    new Date(a.when) -
                    new Date(b.when)
            )
            .slice(0,3);


    const todos =
        data.todos
            .filter(
                todo =>
                    !todo.done
            )
            .slice(0,5);


    const latestNote =
        [...data.notes]
            .sort(
                (a,b) =>
                    new Date(b.createdAt) -
                    new Date(a.createdAt)
            )[0];


    const sticker =
        data.character.sticker;


    $("dashboard").innerHTML = `

        <div class="grid dashboard-top">

            <article class="card hero soft">

                <div class="hero-copy">

                    <div class="script">
                        Hey ${esc(name)},
                    </div>

                    <h2>
                        Small plans.<br>
                        Big becoming.
                    </h2>

                    <p>
                        Keep building the version of
                        yourself you want to meet.
                        One little box at a time.
                    </p>

                </div>

                <div class="hero-art">

                    <span class="doodle-star star-one">✦</span>
                    <span class="doodle-star star-two">✧</span>
                    <span class="doodle-star star-three">·</span>

                </div>

            </article>


            <article class="card">

                <div class="card-title">
                    <h3>Today</h3>
                </div>

                <div class="quote">
                    One step at a time.
                </div>

            </article>


            <article class="card character-card">

                <div class="card-title">
                    <h3>${esc(
                        data.character.name ||
                        "Character"
                    )}</h3>
                </div>

                <div class="sticker-stage">

                    ${
                        sticker
                        ? `
                            <img
                                class="sticker"
                                src="${sticker}"
                                alt="${esc(
                                    data.character.name ||
                                    "Character"
                                )}">
                        `
                        : `
                            <div class="placeholder">
                                Your little companion
                                will live here.
                            </div>
                        `
                    }

                </div>

                <div class="pill">
                    ${
                        data.character.online
                            ? "Online"
                            : "Offline"
                    }
                </div>

                <div class="mood">
                    ${esc(
                        data.character.personality ||
                        "Calm, intelligent, firm and caring."
                    )}
                </div>

            </article>


            <article class="card">

                <div class="card-title">
                    <h3>Little note</h3>
                </div>

                <div class="note-paper">

                    ${
                        latestNote
                            ? esc(
                                latestNote.content
                            )
                            : "Write something worth remembering."
                    }

                </div>

            </article>

        </div>


        <div class="grid stats">

            ${statCard(
                "bell",
                remindersToday,
                "Reminders",
                "today"
            )}

            ${statCard(
                "check",
                pendingTodos,
                "To-dos",
                "pending"
            )}

            ${statCard(
                "target",
                activeGoals,
                "Goals",
                "active"
            )}

            ${statCard(
                "note",
                notesCount,
                "Notes",
                "saved"
            )}

            ${statCard(
                "character",
                calculateAge(
                    data.profile.dob
                ),
                "Age",
                "years"
            )}

        </div>


        <div class="grid lower">

            <article class="card">

                <div class="card-title">

                    <h3>
                        Upcoming reminders
                    </h3>

                    ${actionButton(
                        "View all",
                        "reminders"
                    )}

                </div>

                ${
                    upcoming.length
                    ? upcoming
                        .map(
                            reminder => `
                                <div class="mini">

                                    <div>

                                        <strong>
                                            ${esc(
                                                reminder.title
                                            )}
                                        </strong>

                                        <small>
                                            ${formatDate(
                                                reminder.when
                                            )}
                                        </small>

                                    </div>

                                </div>
                            `
                        )
                        .join("")
                    : `
                        <div class="empty">
                            Nothing pressing.
                            The little bell is resting.
                        </div>
                    `
                }

                <div style="margin-top:12px">

                    ${actionButton(
                        `${ICONS.plus} Add Reminder`,
                        "add-reminder"
                    )}

                </div>

            </article>


            <article class="card">

                <div class="card-title">

                    <h3>
                        Today's to-dos
                    </h3>

                    ${actionButton(
                        "View all",
                        "todos"
                    )}

                </div>

                ${
                    todos.length
                    ? todos
                        .map(
                            todo => `
                                <label class="check-row">

                                    <input
                                        type="checkbox"
                                        data-toggle-todo="${esc(
                                            todo.id
                                        )}">

                                    <span>
                                        ${esc(
                                            todo.title
                                        )}
                                    </span>

                                </label>
                            `
                        )
                        .join("")
                    : `
                        <div class="empty">
                            A clean list.
                            Nice.
                        </div>
                    `
                }

                <div style="margin-top:12px">

                    ${actionButton(
                        `${ICONS.plus} Add To-do`,
                        "add-todo"
                    )}

                </div>

            </article>


            <article class="card">

                <div class="card-title">

                    <h3>
                        Your space
                    </h3>

                </div>

                <div class="affirmation">
                    You don't need to do everything today.
                </div>

                <div
                    class="actions"
                    style="margin-top:14px">

                    ${actionButton(
                        "Profile",
                        "profile"
                    )}

                    ${actionButton(
                        "Character",
                        "character"
                    )}

                    ${actionButton(
                        "Appearance",
                        "appearance"
                    )}

                </div>

            </article>

        </div>

    `;

}


/* =========================================================
   PROFILE
   ========================================================= */

const profileFields = [

    ["name", "Name", "text"],

    ["dob", "Date of Birth", "date"],

    ["mbti", "MBTI", "text"],

    ["hobbies", "Hobbies", "text"],

    ["occupation", "Occupation", "text"],

    ["goal", "Main Goal", "text"],

    ["favoriteColors", "Favourite Colours", "text"],

    ["favoriteFood", "Favourite Food", "text"],

    ["favoritePlaces", "Favourite Places", "text"],

    ["favoriteMusic", "Favourite Music Genres", "text"],

    ["skinType", "Skin Type", "text"],

    ["bodyType", "Body Type", "text"],

    ["familyMembers", "Family Members", "number"]

];


function renderProfile() {

    const profile =
        data.profile;


    $("profile").innerHTML = `

        ${sectionHead(
            "Profile",
            "Your little corner. Everything here is editable."
        )}


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
                                            ${esc(label)}
                                        </label>

                                        <input
                                            name="${esc(key)}"
                                            type="${esc(type)}"
                                            value="${esc(
                                                profile[key] ||
                                                ""
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
                                ${
                                    calculateAge(
                                        profile.dob
                                    ) || "not set"
                                }
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
                        Used only as your profile avatar.
                    </p>

                    <input
                        id="profileImage"
                        type="file"
                        accept="image/*">

                </div>


                <div class="affirmation">
                    ${esc(
                        profile.name ||
                        "You"
                    )}, this space is yours.
                </div>

            </article>

        </div>

    `;


    setAvatar(
        $("profilePreview"),
        profile.image
    );

}


/* =========================================================
   CHARACTER
   ========================================================= */

function renderCharacter() {

    const character =
        data.character;


    const notificationsSupported =
        typeof Notification !==
        "undefined";


    const permission =
        notificationsSupported
            ? Notification.permission
            : "unsupported";


    $("character").innerHTML = `

        ${sectionHead(
            "Character",
            "Give your companion a name, personality and sticker."
        )}


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
                            maxlength="160">

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

                            LAYRAAZ will turn the uploaded
                            picture into a transparent
                            sticker automatically.

                            The original rectangular image
                            will not be displayed.

                        </span>

                    </div>


                    <div class="field full">

                        <div class="button-row">

                            <button
                                class="btn primary"
                                type="submit">

                                Save Character

                            </button>

                            ${actionButton(
                                "Test Notification",
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
                                alt="${esc(
                                    character.name ||
                                    "Character"
                                )}">
                        `
                        : `
                            <div class="placeholder">
                                Upload a picture
                                and your sticker
                                will appear here.
                            </div>
                        `
                    }

                </div>

            </article>

        </div>


        <article
            class="card"
            style="margin-top:15px">

            <div class="card-title">
                <h3>Browser notifications</h3>
            </div>

            <p class="field-note">

                Browser notifications are different
                from the LAYRAAZ notification page.

                Once permission is granted, a reminder
                can appear as a system/browser notification
                even when you are viewing another website.

            </p>

            <p class="field-note">

                Current permission:
                <b>${esc(permission)}</b>

            </p>

            <div class="actions">

                ${actionButton(
                    "Allow Browser Notifications",
                    "request-notifications",
                    "btn primary"
                )}

            </div>

        </article>

    `;

}


/* =========================================================
   REMINDERS
   ========================================================= */

function renderReminders() {

    const sorted =
        [...data.reminders]
            .sort(
                (a,b) =>
                    new Date(a.when) -
                    new Date(b.when)
            );


    $("reminders").innerHTML = `

        ${sectionHead(
            "Reminders",
            "Little nudges for things you don't want to forget.",
            actionButton(
                `${ICONS.plus} Add Reminder`,
                "add-reminder"
            )
        )}


        <div class="list-page">

            ${
                sorted.length

                ? sorted
                    .map(
                        reminder => `

                            <article class="card item-card">

                                <div class="main">

                                    <h3>
                                        ${esc(
                                            reminder.title
                                        )}
                                    </h3>

                                    <p>
                                        ${formatDate(
                                            reminder.when
                                        )}

                                        ·

                                        ${esc(
                                            reminder.category ||
                                            "Personal"
                                        )}

                                        ${
                                            reminder.completed
                                                ? " · completed"
                                                : ""
                                        }
                                    </p>

                                </div>


                                <div class="item-actions">

                                    ${actionButton(
                                        reminder.completed
                                            ? "Undo"
                                            : "Done",
                                        `complete-reminder:${reminder.id}`
                                    )}

                                    ${actionButton(
                                        ICONS.edit,
                                        `edit-reminder:${reminder.id}`
                                    )}

                                    ${actionButton(
                                        ICONS.trash,
                                        `delete-reminder:${reminder.id}`,
                                        "btn danger"
                                    )}

                                </div>

                            </article>

                        `
                    )
                    .join("")

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
   TODOS
   ========================================================= */

function renderTodos() {

    $("todos").innerHTML = `

        ${sectionHead(
            "To-do List",
            "Work, Personal, Finance and Learning.",
            actionButton(
                `${ICONS.plus} Add To-do`,
                "add-todo"
            )
        )}


        <div class="list-page">

            ${
                data.todos.length

                ? data.todos
                    .map(
                        todo => `

                            <article class="card item-card">

                                <div class="main">

                                    <label
                                        class="check-row"
                                        style="
                                            border:0;
                                            padding:0;
                                        ">

                                        <input
                                            type="checkbox"
                                            data-toggle-todo="${esc(
                                                todo.id
                                            )}"
                                            ${
                                                todo.done
                                                    ? "checked"
                                                    : ""
                                            }>

                                        <span class="${
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
                                            todo.category ||
                                            "Personal"
                                        )}

                                        ${
                                            todo.due
                                                ? ` · Due ${esc(todo.due)}`
                                                : ""
                                        }
                                    </p>

                                </div>


                                <div class="item-actions">

                                    ${actionButton(
                                        ICONS.edit,
                                        `edit-todo:${todo.id}`
                                    )}

                                    ${actionButton(
                                        ICONS.trash,
                                        `delete-todo:${todo.id}`,
                                        "btn danger"
                                    )}

                                </div>

                            </article>

                        `
                    )
                    .join("")

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

function renderGoals() {

    $("goals").innerHTML = `

        ${sectionHead(
            "Goals",
            "Track progress without turning your life into a spreadsheet.",
            actionButton(
                `${ICONS.plus} Add Goal`,
                "add-goal"
            )
        )}


        <div class="list-page">

            ${
                data.goals.length

                ? data.goals
                    .map(
                        goal => {

                            const progress =
                                Math.max(
                                    0,
                                    Math.min(
                                        100,
                                        Number(
                                            goal.progress ||
                                            0
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
                                                goal.category ||
                                                "Personal"
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

                                        ${actionButton(
                                            ICONS.edit,
                                            `edit-goal:${goal.id}`
                                        )}

                                        ${actionButton(
                                            ICONS.trash,
                                            ICONS.trash,
                                            "btn danger"
                                        )}

                                    </div>

                                </article>

                            `;

                        }
                    )
                    .join("")

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

function renderNotes() {

    const notes =
        [...data.notes]
            .sort(
                (a,b) =>
                    new Date(b.createdAt) -
                    new Date(a.createdAt)
            );


    $("notes").innerHTML = `

        ${sectionHead(
            "Notes",
            "Little thoughts, ideas and things worth keeping.",
            actionButton(
                `${ICONS.plus} New Note`,
                "add-note"
            )
        )}


        <div class="list-page">

            ${
                notes.length

                ? notes
                    .map(
                        note => `

                            <article class="card item-card">

                                <div class="main">

                                    <h3>
                                        ${esc(
                                            note.title
                                        )}
                                    </h3>

                                    <p>
                                        ${formatDate(
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

                                    ${actionButton(
                                        ICONS.edit,
                                        `edit-note:${note.id}`
                                    )}

                                    ${actionButton(
                                        ICONS.trash,
                                        `delete-note:${note.id}`,
                                        "btn danger"
                                    )}

                                </div>

                            </article>

                        `
                    )
                    .join("")

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
   NOTIFICATIONS
   ========================================================= */

function renderNotifications() {

    $("notifications").innerHTML = `

        ${sectionHead(
            "Notifications",
            "Your notification history stays here."
        )}


        <div class="card">

            <div
                class="actions"
                style="margin-bottom:12px">

                ${actionButton(
                    "Allow Browser Notifications",
                    "request-notifications",
                    "btn primary"
                )}

                ${actionButton(
                    "Mark All Read",
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

                                        ${formatDate(
                                            notification.createdAt
                                        )}

                                    </small>

                                </div>


                                ${
                                    notification.read
                                    ? ""
                                    : actionButton(
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
   APPEARANCE
   ========================================================= */

function renderAppearance() {

    $("appearance").innerHTML = `

        ${sectionHead(
            "Appearance",
            "Ten fixed palettes. Pick the one that feels right."
        )}


        <div class="palette-grid">

            ${
                Object.entries(
                    palettes
                )
                .map(
                    ([key,palette]) => `

                        <button
                            class="palette ${
                                data.appearance === key
                                    ? "selected"
                                    : ""
                            }"
                            data-palette="${esc(key)}"
                            type="button">

                            <div class="swatches">

                                <i style="
                                    background:${palette.background};
                                "></i>

                                <i style="
                                    background:${palette.main};
                                "></i>

                                <i style="
                                    background:${palette.font};
                                "></i>

                            </div>

                            <strong>
                                ${esc(
                                    palette.name
                                )}
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
   NAVIGATION
   ========================================================= */

function navigate(section) {

    if (
        !document.getElementById(
            section
        )
    ) {

        return;

    }


    activeSection =
        section;


    document
        .querySelectorAll(
            ".page-section"
        )
        .forEach(
            element => {

                element.classList.toggle(
                    "active",
                    element.id ===
                    section
                );

            }
        );


    document
        .querySelectorAll(
            ".nav-item"
        )
        .forEach(
            element => {

                element.classList.toggle(
                    "active",
                    element.dataset.section ===
                    section
                );

            }
        );


    renderPage(
        section
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function renderPage(section) {

    switch (section) {

        case "profile":
            renderProfile();
            break;

        case "dashboard":
            renderDashboard();
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

        default:
            renderDashboard();

    }


    updateTop();

}


/* =========================================================
   FILE READER
   ========================================================= */

function readFile(file) {

    return new Promise(
        (resolve,reject) => {

            const reader =
                new FileReader();


            reader.onload =
                () =>
                    resolve(
                        reader.result
                    );


            reader.onerror =
                reject;


            reader.readAsDataURL(
                file
            );

        }
    );

}


/* =========================================================
   STICKER PROCESSOR
   ========================================================= */

function makeSticker(
    dataURL
) {

    return new Promise(
        (resolve,reject) => {

            const image =
                new Image();


            image.onload =
                () => {

                    try {

                        const scale =
                            Math.min(
                                800 / image.width,
                                800 / image.height,
                                1
                            );


                        const width =
                            Math.max(
                                1,
                                Math.round(
                                    image.width *
                                    scale
                                )
                            );


                        const height =
                            Math.max(
                                1,
                                Math.round(
                                    image.height *
                                    scale
                                )
                            );


                        const canvas =
                            document.createElement(
                                "canvas"
                            );


                        canvas.width =
                            width;

                        canvas.height =
                            height;


                        const ctx =
                            canvas.getContext(
                                "2d",
                                {
                                    willReadFrequently:
                                        true
                                }
                            );


                        if (!ctx) {

                            reject(
                                new Error(
                                    "Canvas unavailable"
                                )
                            );

                            return;

                        }


                        ctx.drawImage(
                            image,
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


                        const visited =
                            new Uint8Array(
                                width * height
                            );


                        const queue = [];


                        const pos =
                            (x,y) =>
                                y * width + x;


                        function rgb(
                            x,
                            y
                        ) {

                            const i =
                                pos(x,y) * 4;

                            return [
                                pixels[i],
                                pixels[i + 1],
                                pixels[i + 2]
                            ];

                        }


                        const corners = [

                            [0,0],

                            [width - 1,0],

                            [0,height - 1],

                            [width - 1,height - 1]

                        ];


                        const backgrounds =
                            corners.map(
                                ([x,y]) =>
                                    rgb(x,y)
                            );


                        function similar(
                            r,
                            g,
                            b
                        ) {

                            return backgrounds.some(
                                color => {

                                    const difference =
                                        Math.abs(
                                            r - color[0]
                                        ) +
                                        Math.abs(
                                            g - color[1]
                                        ) +
                                        Math.abs(
                                            b - color[2]
                                        );


                                    return (
                                        difference <
                                        115
                                    );

                                }
                            );

                        }


                        corners.forEach(
                            ([x,y]) => {

                                const p =
                                    pos(x,y);

                                visited[p] =
                                    1;

                                queue.push(
                                    p
                                );

                            }
                        );


                        let pointer = 0;


                        while (
                            pointer <
                            queue.length
                        ) {

                            const current =
                                queue[
                                    pointer++
                                ];


                            const x =
                                current %
                                width;


                            const y =
                                Math.floor(
                                    current /
                                    width
                                );


                            const i =
                                current * 4;


                            const isBackground =
                                similar(
                                    pixels[i],
                                    pixels[i + 1],
                                    pixels[i + 2]
                                );


                            if (
                                !isBackground
                            ) {

                                continue;

                            }


                            pixels[i + 3] =
                                0;


                            const neighbours = [

                                [x + 1,y],

                                [x - 1,y],

                                [x,y + 1],

                                [x,y - 1]

                            ];


                            neighbours.forEach(
                                ([nx,ny]) => {

                                    if (
                                        nx < 0 ||
                                        ny < 0 ||
                                        nx >= width ||
                                        ny >= height
                                    ) {

                                        return;

                                    }


                                    const next =
                                        pos(
                                            nx,
                                            ny
                                        );


                                    if (
                                        visited[next]
                                    ) {

                                        return;

                                    }


                                    visited[next] =
                                        1;


                                    const ni =
                                        next * 4;


                                    if (
                                        similar(
                                            pixels[ni],
                                            pixels[ni + 1],
                                            pixels[ni + 2]
                                        )
                                    ) {

                                        queue.push(
                                            next
                                        );

                                    }

                                }
                            );

                        }


                        ctx.putImageData(
                            imageData,
                            0,
                            0
                        );


                        /*
                            Find remaining character bounds.
                        */

                        let minX = width;
                        let minY = height;
                        let maxX = -1;
                        let maxY = -1;


                        for (
                            let y = 0;
                            y < height;
                            y++
                        ) {

                            for (
                                let x = 0;
                                x < width;
                                x++
                            ) {

                                const i =
                                    pos(x,y) * 4;


                                if (
                                    pixels[i + 3] >
                                    30
                                ) {

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


                        if (
                            maxX < 0 ||
                            maxY < 0
                        ) {

                            reject(
                                new Error(
                                    "No character detected"
                                )
                            );

                            return;

                        }


                        const padding = 14;


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


                        const cropWidth =
                            maxX - minX + 1;

                        const cropHeight =
                            maxY - minY + 1;


                        const output =
                            document.createElement(
                                "canvas"
                            );


                        output.width =
                            cropWidth;

                        output.height =
                            cropHeight;


                        const outputCtx =
                            output.getContext(
                                "2d"
                            );


                        outputCtx.drawImage(
                            canvas,
                            minX,
                            minY,
                            cropWidth,
                            cropHeight,
                            0,
                            0,
                            cropWidth,
                            cropHeight
                        );


                        /*
                            Add a subtle white sticker edge.
                        */

                        const finalCanvas =
                            document.createElement(
                                "canvas"
                            );


                        const edge = 7;


                        finalCanvas.width =
                            cropWidth +
                            edge * 2;

                        finalCanvas.height =
                            cropHeight +
                            edge * 2;


                        const finalCtx =
                            finalCanvas.getContext(
                                "2d"
                            );


                        finalCtx.drawImage(
                            output,
                            edge,
                            edge
                        );


                        const finalImage =
                            finalCtx.getImageData(
                                0,
                                0,
                                finalCanvas.width,
                                finalCanvas.height
                            );


                        const source =
                            finalImage.data;


                        /*
                            Soft white halo around
                            visible pixels.
                        */

                        const copy =
                            new Uint8ClampedArray(
                                source
                            );


                        for (
                            let y = edge;
                            y <
                            finalCanvas.height - edge;
                            y++
                        ) {

                            for (
                                let x = edge;
                                x <
                                finalCanvas.width - edge;
                                x++
                            ) {

                                const i =
                                    (
                                        y *
                                        finalCanvas.width +
                                        x
                                    ) * 4;


                                if (
                                    copy[i + 3] <
                                    30
                                ) {

                                    continue;

                                }


                                const neighbours = [

                                    [x + 3,y],

                                    [x - 3,y],

                                    [x,y + 3],

                                    [x,y - 3]

                                ];


                                neighbours.forEach(
                                    ([nx,ny]) => {

                                        if (
                                            nx < 0 ||
                                            ny < 0 ||
                                            nx >= finalCanvas.width ||
                                            ny >= finalCanvas.height
                                        ) {

                                            return;

                                        }


                                        const ni =
                                            (
                                                ny *
                                                finalCanvas.width +
                                                nx
                                            ) * 4;


                                        if (
                                            source[ni + 3] <
                                            30
                                        ) {

                                            source[ni] =
                                                255;

                                            source[ni + 1] =
                                                255;

                                            source[ni + 2] =
                                                255;

                                            source[ni + 3] =
                                                210;

                                        }

                                    }
                                );

                            }

                        }


                        finalCtx.putImageData(
                            finalImage,
                            0,
                            0
                        );


                        resolve(
                            finalCanvas.toDataURL(
                                "image/png"
                            )
                        );


                    } catch (error) {

                        reject(error);

                    }

                };


            image.onerror =
                () =>
                    reject(
                        new Error(
                            "Image could not be loaded"
                        )
                    );


            image.src =
                dataURL;

        }
    );

}


/* =========================================================
   BROWSER NOTIFICATIONS
   ========================================================= */

async function requestNotifications() {

    if (
        typeof Notification ===
        "undefined"
    ) {

        toast(
            "This browser does not support notifications."
        );

        return;

    }


    try {

        const permission =
            await Notification
                .requestPermission();


        if (
            permission ===
            "granted"
        ) {

            toast(
                "Browser notifications enabled."
            );

        } else {

            toast(
                "Notification permission was not granted."
            );

        }


        renderCharacter();

    } catch (error) {

        toast(
            "Could not request notification permission."
        );

    }

}


function sendBrowserNotification(
    reminder
) {

    if (
        typeof Notification ===
        "undefined"
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
                reminder.title,
                {
                    body:
                        "Your LAYRAAZ reminder is due.",

                    /*
                        The transparent sticker is used
                        as the notification icon.
                    */
                    icon:
                        data.character.sticker ||
                        undefined,

                    tag:
                        "layraaz-" +
                        reminder.id,

                    renotify:
                        true
                }
            );


        notification.onclick =
            () => {

                window.focus();

            };

    } catch (error) {

        console.error(
            "Notification error:",
            error
        );

    }

}


/* =========================================================
   IN-APP COMPANION
   ========================================================= */

function showCompanion(
    reminder
) {

    const box =
        $("companionReminder");

    const image =
        $("companionSticker");


    if (
        !box ||
        !data.character.sticker
    ) {

        return;

    }


    image.src =
        data.character.sticker;


    image.alt =
        data.character.name ||
        "Character";


    $("companionTitle")
        .textContent =
        data.character.name ||
        "Character";


    $("companionMessage")
        .textContent =
        reminder.title +
        " is due now.";


    box.classList.remove(
        "hidden"
    );

}


function hideCompanion() {

    const box =
        $("companionReminder");


    if (box) {

        box.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   NOTIFICATION HISTORY
   ========================================================= */

function addNotification(
    title,
    body
) {

    data.notifications.push({

        id:
            uid("notification"),

        title,

        body,

        createdAt:
            new Date()
                .toISOString(),

        read:
            false

    });


    if (
        data.notifications.length >
        100
    ) {

        data.notifications =
            data.notifications
                .slice(-100);

    }


    save();

}


/* =========================================================
   REMINDER ENGINE
   ========================================================= */

function fireReminder(
    reminder
) {

    sendBrowserNotification(
        reminder
    );


    addNotification(
        "Reminder due",
        `${reminder.title} is due now.`
    );


    showCompanion(
        reminder
    );


    reminder.lastNotifiedAt =
        new Date()
            .toISOString();

}


function checkReminders() {

    const now =
        Date.now();


    let changed =
        false;


    for (
        const reminder of
        data.reminders
    ) {

        const due =
            new Date(
                reminder.when
            ).getTime();


        if (
            reminder.completed ||
            !Number.isFinite(due) ||
            due > now
        ) {

            continue;

        }


        const last =
            reminder.lastNotifiedAt
                ? new Date(
                    reminder.lastNotifiedAt
                ).getTime()
                : 0;


        /*
            Do not repeat the same reminder
            for 12 hours.
        */

        if (
            now - last <
            12 * 60 * 60 * 1000
        ) {

            continue;

        }


        fireReminder(
            reminder
        );


        changed =
            true;

    }


    if (changed) {

        save();

        renderDashboard();

        if (
            activeSection ===
            "reminders"
        ) {

            renderReminders();

        }

        updateTop();

    }

}


function startReminderEngine() {

    if (
        reminderTimer
    ) {

        clearInterval(
            reminderTimer
        );

    }


    /*
        10 second check while
        the page is active.
    */

    reminderTimer =
        setInterval(
            checkReminders,
            10000
        );


    checkReminders();

}


/* =========================================================
   TOAST
   ========================================================= */

function toast(
    message
) {

    const element =
        $("toast");


    if (!element) return;


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
            () => {

                element.classList.remove(
                    "show"
                );

            },
            2300
        );

}


/* =========================================================
   MODALS
   ========================================================= */

function openModal(
    title,
    html,
    submit
) {

    $("modalRoot").innerHTML = `

        <div
            class="modal-backdrop"
            data-close-modal>

            <div class="modal">

                <div class="modal-head">

                    <h2>
                        ${esc(title)}
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
        $("modalRoot")
            .querySelector(
                "form"
            );


    if (form) {

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


function closeModal() {

    $("modalRoot").innerHTML =
        "";

}


/* =========================================================
   FORM HELPERS
   ========================================================= */

function field(
    name,
    label,
    value,
    type = "text",
    required = false
) {

    return `

        <div class="field">

            <label>
                ${esc(label)}
            </label>

            <input
                name="${esc(name)}"
                type="${esc(type)}"
                value="${esc(value)}"
                ${required ? "required" : ""}>

        </div>

    `;

}


function categoryField(
    value = "Personal"
) {

    const options = [
        "Work",
        "Personal",
        "Finance",
        "Learning"
    ];


    return `

        <div class="field">

            <label>
                Category
            </label>

            <select name="category">

                ${
                    options
                        .map(
                            item => `

                                <option
                                    value="${item}"
                                    ${
                                        item ===
                                        value
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
   ADD / EDIT
   ========================================================= */

function openAdd(
    type,
    id = null
) {

    const collectionName =
        type + "s";


    const collection =
        data[
            collectionName
        ] || [];


    const existing =
        id
            ? collection.find(
                item =>
                    item.id === id
            )
            : null;


    /* -------------------------
       REMINDER
       ------------------------- */

    if (
        type === "reminder"
    ) {

        const reminder =
            existing || {};


        openModal(

            existing
                ? "Edit Reminder"
                : "Add Reminder",

            `

                <form class="form-grid">

                    ${field(
                        "title",
                        "Reminder",
                        reminder.title ||
                        "",
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
                            value="${localDateTime(
                                reminder.when
                            )}"
                            required>

                    </div>

                    ${categoryField(
                        reminder.category ||
                        "Personal"
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
                        formData.get(
                            "title"
                        ) || ""
                    ).trim();


                const when =
                    String(
                        formData.get(
                            "when"
                        ) || ""
                    );


                if (
                    !title ||
                    !when
                ) {

                    toast(
                        "Please enter a reminder and time."
                    );

                    return;

                }


                const object = {

                    title,

                    when:
                        new Date(
                            when
                        ).toISOString(),

                    category:
                        String(
                            formData.get(
                                "category"
                            ) ||
                            "Personal"
                        ),

                    completed:
                        existing
                            ? existing.completed
                            : false,

                    lastNotifiedAt:
                        existing
                            ? existing.lastNotifiedAt
                            : null

                };


                if (existing) {

                    Object.assign(
                        existing,
                        object
                    );

                } else {

                    data.reminders.push({

                        id:
                            uid(
                                "reminder"
                            ),

                        ...object

                    });

                }


                save();

                closeModal();

                renderReminders();

                renderDashboard();

                toast(
                    "Reminder saved."
                );

            }

        );

        return;

    }


    /* -------------------------
       TODO
       ------------------------- */

    if (
        type === "todo"
    ) {

        const todo =
            existing || {};


        openModal(

            existing
                ? "Edit To-do"
                : "Add To-do",

            `

                <form class="form-grid">

                    ${field(
                        "title",
                        "Task",
                        todo.title ||
                        "",
                        "text",
                        true
                    )}

                    ${categoryField(
                        todo.category ||
                        "Personal"
                    )}

                    ${field(
                        "due",
                        "Due date",
                        todo.due ||
                        "",
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
                        formData.get(
                            "title"
                        ) || ""
                    ).trim();


                if (!title) {

                    toast(
                        "Please enter a task."
                    );

                    return;

                }


                const object = {

                    title,

                    category:
                        String(
                            formData.get(
                                "category"
                            ) ||
                            "Personal"
                        ),

                    due:
                        String(
                            formData.get(
                                "due"
                            ) || ""
                        ),

                    done:
                        existing
                            ? existing.done
                            : false

                };


                if (existing) {

                    Object.assign(
                        existing,
                        object
                    );

                } else {

                    data.todos.push({

                        id:
                            uid("todo"),

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

        return;

    }


    /* -------------------------
       GOAL
       ------------------------- */

    if (
        type === "goal"
    ) {

        const goal =
            existing || {};


        openModal(

            existing
                ? "Edit Goal"
                : "Add Goal",

            `

                <form class="form-grid">

                    ${field(
                        "title",
                        "Goal",
                        goal.title ||
                        "",
                        "text",
                        true
                    )}

                    ${categoryField(
                        goal.category ||
                        "Personal"
                    )}

                    ${field(
                        "progress",
                        "Progress %",
                        goal.progress ||
                        "0",
                        "number"
                    )}

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
                        formData.get(
                            "title"
                        ) || ""
                    ).trim();


                if (!title) {

                    toast(
                        "Please enter a goal."
                    );

                    return;

                }


                const object = {

                    title,

                    category:
                        String(
                            formData.get(
                                "category"
                            ) ||
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


                if (existing) {

                    Object.assign(
                        existing,
                        object
                    );

                } else {

                    data.goals.push({

                        id:
                            uid("goal"),

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

        return;

    }


    /* -------------------------
       NOTE
       ------------------------- */

    if (
        type === "note"
    ) {

        const note =
            existing || {};


        openModal(

            existing
                ? "Edit Note"
                : "New Note",

            `

                <form class="form-grid">

                    ${field(
                        "title",
                        "Title",
                        note.title ||
                        "Note",
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
                                note.content ||
                                ""
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
                        formData.get(
                            "content"
                        ) || ""
                    ).trim();


                if (!content) {

                    toast(
                        "Please write something first."
                    );

                    return;

                }


                const object = {

                    title:
                        String(
                            formData.get(
                                "title"
                            ) ||
                            "Note"
                        ).trim() ||
                        "Note",

                    content,

                    createdAt:
                        existing
                            ? existing.createdAt
                            : new Date()
                                .toISOString()

                };


                if (existing) {

                    Object.assign(
                        existing,
                        object
                    );

                } else {

                    data.notes.push({

                        id:
                            uid("note"),

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
   DELETE
   ========================================================= */

function removeItem(
    collection,
    id,
    message
) {

    const array =
        data[collection];


    if (!Array.isArray(array)) {
        return;
    }


    const index =
        array.findIndex(
            item =>
                item.id === id
        );


    if (index < 0) {
        return;
    }


    array.splice(
        index,
        1
    );


    save();

    renderPage(
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

function search(
    query
) {

    const box =
        $("searchResults");


    const value =
        String(
            query || ""
        )
        .trim()
        .toLowerCase();


    if (!value) {

        box.classList.add(
            "hidden"
        );

        box.innerHTML =
            "";

        return;

    }


    const results = [];


    data.reminders.forEach(
        reminder => {

            if (
                `${reminder.title} ${reminder.category}`
                    .toLowerCase()
                    .includes(value)
            ) {

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

            if (
                `${todo.title} ${todo.category}`
                    .toLowerCase()
                    .includes(value)
            ) {

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

            if (
                `${goal.title} ${goal.category}`
                    .toLowerCase()
                    .includes(value)
            ) {

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

            if (
                `${note.title} ${note.content}`
                    .toLowerCase()
                    .includes(value)
            ) {

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
                        data-search="${esc(
                            result[2]
                        )}">

                        <strong>
                            ${esc(
                                result[1]
                            )}
                        </strong>

                        <span>
                            ${esc(
                                result[0]
                            )}
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

function setupEvents() {

    /* Sidebar */

    $("sidebarToggle")
        .addEventListener(
            "click",
            () => {

                const sidebar =
                    $("sidebar");


                sidebar.classList.toggle(
                    "collapsed"
                );

            }
        );


    /* Navigation */

    document
        .querySelectorAll(
            ".nav-item"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        navigate(
                            button.dataset.section
                        );

                    }
                );

            }
        );


    /* Notification button */

    $("notificationBtn")
        .addEventListener(
            "click",
            () => {

                navigate(
                    "notifications"
                );

            }
        );


    /* Profile button */

    $("profileBtn")
        .addEventListener(
            "click",
            () => {

                navigate(
                    "profile"
                );

            }
        );


    /* Search */

    $("globalSearch")
        .addEventListener(
            "input",
            event => {

                search(
                    event.target.value
                );

            }
        );


    /* Close companion */

    $("closeCompanion")
        .addEventListener(
            "click",
            hideCompanion
        );


    /* Click delegation */

    document.addEventListener(
        "click",
        async event => {

            const actionElement =
                event.target.closest(
                    "[data-action]"
                );


            if (actionElement) {

                const action =
                    actionElement.dataset.action;


                if (
                    [
                        "profile",
                        "dashboard",
                        "character",
                        "reminders",
                        "todos",
                        "goals",
                        "notes",
                        "notifications",
                        "appearance"
                    ].includes(action)
                ) {

                    navigate(action);

                    return;

                }


                if (
                    action ===
                    "add-reminder"
                ) {

                    openAdd(
                        "reminder"
                    );

                    return;

                }


                if (
                    action ===
                    "add-todo"
                ) {

                    openAdd(
                        "todo"
                    );

                    return;

                }


                if (
                    action ===
                    "add-goal"
                ) {

                    openAdd(
                        "goal"
                    );

                    return;

                }


                if (
                    action ===
                    "add-note"
                ) {

                    openAdd(
                        "note"
                    );

                    return;

                }


                if (
                    action ===
                    "request-notifications"
                ) {

                    await requestNotifications();

                    return;

                }


                if (
                    action ===
                    "test-notification"
                ) {

                    if (
                        typeof Notification ===
                        "undefined"
                    ) {

                        toast(
                            "This browser does not support notifications."
                        );

                        return;

                    }


                    if (
                        Notification.permission !==
                        "granted"
                    ) {

                        await requestNotifications();

                    }


                    if (
                        Notification.permission ===
                        "granted"
                    ) {

                        sendBrowserNotification({

                            id:
                                "test",

                            title:
                                "LAYRAAZ Test"

                        });

                    }


                    return;

                }


                if (
                    action ===
                    "read-all"
                ) {

                    data.notifications
                        .forEach(
                            notification =>
                                notification.read =
                                    true
                        );


                    save();

                    renderNotifications();

                    updateTop();

                    return;

                }


                if (
                    action.startsWith(
                        "complete-reminder:"
                    )
                ) {

                    const id =
                        action.split(
                            ":"
                        )[1];


                    const reminder =
                        data.reminders.find(
                            item =>
                                item.id ===
                                id
                        );


                    if (reminder) {

                        reminder.completed =
                            !reminder.completed;


                        if (
                            reminder.completed
                        ) {

                            reminder.lastNotifiedAt =
                                null;

                        }


                        save();

                        renderReminders();

                        renderDashboard();

                    }


                    return;

                }


                if (
                    action.startsWith(
                        "edit-reminder:"
                    )
                ) {

                    openAdd(
                        "reminder",
                        action.split(
                            ":"
                        )[1]
                    );

                    return;

                }


                if (
                    action.startsWith(
                        "delete-reminder:"
                    )
                ) {

                    removeItem(
                        "reminders",
                        action.split(
                            ":"
                        )[1],
                        "Reminder deleted."
                    );

                    return;

                }


                if (
                    action.startsWith(
                        "edit-todo:"
                    )
                ) {

                    openAdd(
                        "todo",
                        action.split(
                            ":"
                        )[1]
                    );

                    return;

                }


                if (
                    action.startsWith(
                        "delete-todo:"
                    )
                ) {

                    removeItem(
                        "todos",
                        action.split(
                            ":"
                        )[1],
                        "To-do deleted."
                    );

                    return;

                }


                if (
                    action.startsWith(
                        "edit-goal:"
                    )
                ) {

                    openAdd(
                        "goal",
                        action.split(
                            ":"
                        )[1]
                    );

                    return;

                }


                if (
                    action.startsWith(
                        "delete-goal:"
                    )
                ) {

                    removeItem(
                        "goals",
                        action.split(
                            ":"
                        )[1],
                        "Goal deleted."
                    );

                    return;

                }


                if (
                    action.startsWith(
                        "edit-note:"
                    )
                ) {

                    openAdd(
                        "note",
                        action.split(
                            ":"
                        )[1]
                    );

                    return;

                }


                if (
                    action.startsWith(
                        "delete-note:"
                    )
                ) {

                    removeItem(
                        "notes",
                        action.split(
                            ":"
                        )[1],
                        "Note deleted."
                    );

                    return;

                }


                if (
                    action.startsWith(
                        "read:"
                    )
                ) {

                    const id =
                        action.split(
                            ":"
                        )[1];


                    const notification =
                        data.notifications.find(
                            item =>
                                item.id ===
                                id
                        );


                    if (
                        notification
                    ) {

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

            const paletteButton =
                event.target.closest(
                    "[data-palette]"
                );


            if (
                paletteButton
            ) {

                const key =
                    paletteButton.dataset
                        .palette;


                if (
                    palettes[key]
                ) {

                    data.appearance =
                        key;

                    save();

                    applyPalette();

                    renderAppearance();

                    toast(
                        palettes[key].name +
                        " selected."
                    );

                }


                return;

            }


            /* To-do */

            const checkbox =
                event.target.closest(
                    "[data-toggle-todo]"
                );


            if (checkbox) {

                const todo =
                    data.todos.find(
                        item =>
                            item.id ===
                            checkbox.dataset
                                .toggleTodo
                    );


                if (todo) {

                    todo.done =
                        checkbox.checked;


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


            if (
                searchResult
            ) {

                $("globalSearch")
                    .value = "";


                $("searchResults")
                    .classList
                    .add("hidden");


                navigate(
                    searchResult.dataset
                        .search
                );


                return;

            }


            /* Modal */

            if (
                event.target.matches(
                    "[data-close-modal]"
                )
            ) {

                closeModal();

            }

        }
    );


    /* Profile form */

    document.addEventListener(
        "submit",
        async event => {

            if (
                event.target.id ===
                "profileForm"
            ) {

                event.preventDefault();


                const form =
                    new FormData(
                        event.target
                    );


                profileFields.forEach(
                    ([key]) => {

                        data.profile[key] =
                            String(
                                form.get(
                                    key
                                ) || ""
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

                return;

            }


            /* Character form */

            if (
                event.target.id ===
                "characterForm"
            ) {

                event.preventDefault();


                const form =
                    new FormData(
                        event.target
                    );


                data.character.name =
                    String(
                        form.get(
                            "name"
                        ) ||
                        "Character"
                    ).trim() ||
                    "Character";


                data.character.personality =
                    String(
                        form.get(
                            "personality"
                        ) ||
                        ""
                    ).trim() ||
                    "Calm, intelligent, firm and caring.";


                const input =
                    $("characterImage");


                const file =
                    input &&
                    input.files[0];


                if (file) {

                    try {

                        toast(
                            "Making your sticker..."
                        );


                        const image =
                            await readFile(
                                file
                            );


                        data.character.sticker =
                            await makeSticker(
                                image
                            );


                    } catch (error) {

                        console.error(
                            error
                        );


                        toast(
                            "The sticker could not be created."
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

                return;

            }

        }
    );


    /* Profile image */

    document.addEventListener(
        "change",
        async event => {

            if (
                event.target.id ===
                "profileImage"
            ) {

                const file =
                    event.target.files[0];


                if (!file) return;


                try {

                    data.profile.image =
                        await readFile(
                            file
                        );


                    save();

                    renderProfile();

                    renderDashboard();

                    updateTop();

                    toast(
                        "Profile picture saved."
                    );

                } catch (error) {

                    toast(
                        "Could not save profile picture."
                    );

                }

            }

        }
    );

}


/* =========================================================
   INITIALISE
   ========================================================= */

function init() {

    applyPalette();

    renderIcons();

    setupEvents();

    renderDashboard();

    updateTop();

    startReminderEngine();

}


/*
    DOMContentLoaded is safe even if this file is
    loaded at the end of the body.
*/

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();

}
