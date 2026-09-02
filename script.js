"use strict";


/* =========================================================
   LAYRAAZ DATA
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

  /* SOFT LEMON */
  gunmetal: {
    name: "Palette 7",
    background: "#FFF0A8",
    main: "#8399B9",
    font: "#475418"
  },

  cadet: {
    name: "Palette 8",
    background: "#919FA5",
    main: "#EEEAE2",
    font: "#30251F"
  },

  /* BLUSH PETAL */
  pink: {
    name: "Palette 9",
    background: "#E8B7B0",
    main: "#722F37",
    font: "#F7F2E7"
  },

  /* LAVENDER MIST + OFF WHITE */
  lavender: {
    name: "Palette 10",
    background: "#BCC2F4",
    main: "#B0BC68",
    font: "#F7F3E8"
  }

};


/* =========================================================
   SVG ICONS
========================================================= */

const ICONS = {

  menu:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round">
      <path d="M5 7h14M5 12h14M5 17h14"/>
    </svg>`,

  home:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m3.5 10.5 8.5-7 8.5 7v9a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5v-9Z"/>
      <path d="M9 21v-6h6v6"/>
    </svg>`,

  profile:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round">
      <circle cx="12" cy="8" r="3.5"/>
      <path d="M4.5 20c.8-3.3 3.3-5 7.5-5s6.7 1.7 7.5 5"/>
    </svg>`,

  character:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M5 9.5C5 6.5 8 4 12 4s7 2.5 7 5.5V17a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9.5Z"/>
      <circle cx="9" cy="11" r=".8" fill="currentColor"/>
      <circle cx="15" cy="11" r=".8" fill="currentColor"/>
      <path d="M9 15c1.8 1.2 4.2 1.2 6 0"/>
    </svg>`,

  bell:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"/>
      <path d="M10 21h4"/>
    </svg>`,

  check:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <rect x="4" y="3.5" width="16" height="17" rx="2"/>
      <path d="m8 12 2.5 2.5L16 9"/>
    </svg>`,

  target:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7">
      <circle cx="12" cy="12" r="8.5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
    </svg>`,

  note:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M6 3.5h9l3 3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/>
      <path d="M14 3.5V7h4M8 11h8M8 15h8M8 18h5"/>
    </svg>`,

  notification:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"/>
      <path d="M10 21h4"/>
    </svg>`,

  palette:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M12 4a8 8 0 0 0 0 16h1.2a1.8 1.8 0 0 0 1.2-3.1c-.8-.8-.2-2.2 1-2.2h1.1A3.5 3.5 0 0 0 21 11.2C20.6 7.1 17 4 12 4Z"/>
      <circle cx="7.5" cy="10" r=".8"/>
      <circle cx="10" cy="7.5" r=".8"/>
      <circle cx="14" cy="7.5" r=".8"/>
    </svg>`,

  search:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round">
      <circle cx="10.8" cy="10.8" r="6.8"/>
      <path d="m16 16 5 5"/>
    </svg>`,

  edit:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5 4 16.5Z"/>
      <path d="m13.8 6.7 3.5 3.5"/>
    </svg>`,

  trash:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round">
      <path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/>
    </svg>`,

  plus:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round">
      <path d="M12 5v14M5 12h14"/>
    </svg>`,

  tick:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m5 12 4 4L19 7"/>
    </svg>`,

  circle:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7">
      <circle cx="12" cy="12" r="8"/>
    </svg>`,

  star:
    `<svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linejoin="round">
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>
    </svg>`

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

    strengths:
      "Ambitious, self-motivated, hard-working",

    weaknesses:
      "Socialising, procrastination",

    favoriteBeverages:
      "Buttermilk",

    bloodGroup:
      "",

    favoriteAnimal:
      "Dog",

    favoriteBird:
      "",

    image:
      ""

  },


  character: {

    name:
      "Character",

    personality:
      "Calm, intelligent, firm and caring.",

    image:
      "",

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

let companionTimer = null;


/* =========================================================
   STORAGE
========================================================= */

function clone(value) {

  return JSON.parse(
    JSON.stringify(value)
  );

}


function mergeData(base, incoming) {

  const result =
    clone(base);

  if (
    !incoming ||
    typeof incoming !== "object"
  ) {
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

  result.appearance =
    incoming.appearance ||
    result.appearance;

  for (
    const key of [
      "reminders",
      "todos",
      "goals",
      "notes",
      "notifications"
    ]
  ) {

    if (
      Array.isArray(
        incoming[key]
      )
    ) {

      result[key] =
        incoming[key];

    }

  }

  return result;

}


function loadData() {

  let raw =
    localStorage.getItem(
      STORAGE_KEY
    );

  if (!raw) {

    for (const key of OLD_KEYS) {

      raw =
        localStorage.getItem(key);

      if (raw) break;

    }

  }


  try {

    const parsed =
      raw
        ? JSON.parse(raw)
        : null;

    const result =
      mergeData(
        defaultData,
        parsed
      );


    const appearanceMigration = {

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
      appearanceMigration[
        result.appearance
      ]
    ) {

      result.appearance =
        appearanceMigration[
          result.appearance
        ];

    }


    return result;

  } catch {

    return clone(
      defaultData
    );

  }

}


function saveData() {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );

  } catch {

    toast(
      "Browser storage is full. Try a smaller image."
    );

  }

}


/* =========================================================
   HELPERS
========================================================= */

function uid(prefix = "id") {

  return (
    `${prefix}_${Date.now()}_` +
    Math.random()
      .toString(36)
      .slice(2, 8)
  );

}


function esc(value) {

  return String(
    value ?? ""
  ).replace(
    /[&<>'"]/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    }[char])
  );

}


function isSameDay(a, b) {

  return (
    a.toDateString() ===
    b.toDateString()
  );

}


function formatDateTime(value) {

  if (!value) return "";

  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return value;
  }

  return date.toLocaleString(
    [],
    {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }
  );

}


function calculateAge(dob) {

  if (!dob) return "";

  const birth =
    new Date(
      `${dob}T00:00:00`
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

  let age =
    now.getFullYear() -
    birth.getFullYear();

  const beforeBirthday =
    now.getMonth() <
      birth.getMonth() ||
    (
      now.getMonth() ===
        birth.getMonth() &&
      now.getDate() <
        birth.getDate()
    );

  if (beforeBirthday) {
    age--;
  }

  return String(age);

}


/* =========================================================
   APPEARANCE
========================================================= */

function hexToRgb(hex) {

  const h =
    hex.replace("#", "");

  if (h.length !== 6) {
    return null;
  }

  return {

    r: parseInt(
      h.slice(0, 2),
      16
    ),

    g: parseInt(
      h.slice(2, 4),
      16
    ),

    b: parseInt(
      h.slice(4, 6),
      16
    )

  };

}


function isLight(hex) {

  const rgb =
    hexToRgb(hex);

  if (!rgb) return true;

  const luminance =
    (
      0.2126 * rgb.r +
      0.7152 * rgb.g +
      0.0722 * rgb.b
    ) / 255;

  return luminance > 0.62;

}


function mix(a, b, amount) {

  const x =
    hexToRgb(a);

  const y =
    hexToRgb(b);

  if (!x || !y) {
    return a;
  }

  const t =
    Math.max(
      0,
      Math.min(
        1,
        amount
      )
    );

  return `rgb(
    ${Math.round(
      x.r * (1 - t) +
      y.r * t
    )},
    ${Math.round(
      x.g * (1 - t) +
      y.g * t
    )},
    ${Math.round(
      x.b * (1 - t) +
      y.b * t
    )}
  )`;

}


function applyAppearance() {

  const palette =
    palettes[
      data.appearance
    ] ||
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
    "--font-muted",
    isLight(
      palette.background
    )
      ? mix(
          palette.font,
          "#000000",
          .45
        )
      : mix(
          palette.font,
          palette.background,
          .25
        )
  );

  document
    .querySelector(
      'meta[name="theme-color"]'
    )
    ?.setAttribute(
      "content",
      palette.background
    );

}


/* =========================================================
   ICONS
========================================================= */

function setIcons() {

  document
    .querySelectorAll(".nav-icon")
    .forEach(element => {

      const className =
        [
          ...element.classList
        ].find(
          item =>
            item.startsWith(
              "icon-"
            )
        );

      if (!className) {
        return;
      }

      const key =
        className.slice(5);

      if (ICONS[key]) {

        element.innerHTML =
          ICONS[key];

      }

    });


  document.getElementById(
    "menuIcon"
  ).innerHTML =
    ICONS.menu;


  document.getElementById(
    "searchIcon"
  ).innerHTML =
    ICONS.search;


  document.getElementById(
    "notificationIcon"
  ).innerHTML =
    ICONS.notification;

}


/* =========================================================
   AVATAR
========================================================= */

function setAvatar(
  element,
  source
) {

  if (!element) return;

  if (source) {

    element.style.backgroundImage =
      `url("${source}")`;

    element.textContent = "";

  } else {

    element.style.backgroundImage =
      "";

    element.textContent =
      "";

  }

}


/* =========================================================
   TOPBAR
========================================================= */

function updateTopbar() {

  const name =
    data.profile.name ||
    "there";

  document.getElementById(
    "topName"
  ).textContent =
    name;


  document.getElementById(
    "pageTitle"
  ).innerHTML =
    `Welcome back, ${esc(name)}
     <span class="sparkles">✦</span>`;


  document.getElementById(
    "pageSubtitle"
  ).innerHTML =
    `Take a deep breath.
     You've got this.
     <span>♡</span>`;


  const unread =
    data.notifications
      .filter(
        notification =>
          !notification.read
      )
      .length;


  document.getElementById(
    "notificationCount"
  ).textContent =
    unread || "";


  setAvatar(
    document.getElementById(
      "topAvatar"
    ),
    data.profile.image
  );

}


/* =========================================================
   NAVIGATION
========================================================= */

function navigate(section) {

  activeSection =
    section;


  document
    .querySelectorAll(
      ".page-section"
    )
    .forEach(element => {

      element.classList.toggle(
        "active-section",
        element.id === section
      );

    });


  document
    .querySelectorAll(
      ".nav-item"
    )
    .forEach(element => {

      element.classList.toggle(
        "active",
        element.dataset.section ===
          section
      );

    });


  renderSection(section);


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function renderSection(section) {

  const renderers = {

    dashboard:
      renderDashboard,

    profile:
      renderProfile,

    character:
      renderCharacter,

    reminders:
      renderReminders,

    todos:
      renderTodos,

    goals:
      renderGoals,

    notes:
      renderNotes,

    notifications:
      renderNotifications,

    appearance:
      renderAppearance

  };


  const renderer =
    renderers[section];

  if (renderer) {
    renderer();
  }

  updateTopbar();

}


/* =========================================================
   CHARACTER STICKER HELPERS
========================================================= */

function stickerTag(
  className = "mini-sticker"
) {

  if (!data.character.sticker) {
    return "";
  }

  return `
    <img
      class="${className}"
      src="${data.character.sticker}"
      alt="Character sticker"
    >
  `;

}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

  const element =
    document.getElementById(
      "dashboard"
    );

  const profile =
    data.profile;

  const name =
    profile.name ||
    "Laya";


  const pendingTasks =
    data.todos.filter(
      task =>
        !task.done
    ).length;


  const activeGoals =
    data.goals.filter(
      goal =>
        Number(
          goal.progress || 0
        ) < 100
    ).length;


  const todayReminders =
    data.reminders.filter(
      reminder =>
        !reminder.completed &&
        isSameDay(
          new Date(reminder.when),
          new Date()
        )
    ).length;


  const upcoming =
    data.reminders
      .filter(
        reminder =>
          !reminder.completed &&
          new Date(
            reminder.when
          ).getTime() >=
            Date.now() -
              86400000
      )
      .sort(
        (a, b) =>
          new Date(a.when) -
          new Date(b.when)
      )
      .slice(0, 2);


  const tasks =
    data.todos
      .filter(
        task =>
          !task.done
      )
      .slice(0, 4);


  const latestNote =
    [
      ...data.notes
    ]
      .sort(
        (a, b) =>
          new Date(
            b.createdAt
          ) -
          new Date(
            a.createdAt
          )
      )[0];


  element.innerHTML = `

    <div class="dashboard-grid">

      <!-- HERO -->

      <article
        class="card soft hero-card"
      >

        <div class="hero-copy">

          <div class="script-title">
            a little space for you ✦
          </div>

          <h2>
            Welcome back,
            ${esc(name)}.
          </h2>

          <p>
            Plan your day,
            keep your thoughts,
            track your goals
            and remember the
            little things.
          </p>

          <div class="button-row">

            <button
              class="small-action"
              data-nav="todos"
            >
              See my tasks
            </button>

            <button
              class="small-action"
              data-nav="reminders"
            >
              My reminders
            </button>

          </div>

        </div>

        ${stickerTag(
          "hero-sticker"
        )}

      </article>


      <!-- PROFILE -->

      <article
        class="card profile-card"
      >

        <div class="card-title">

          <h3>
            About Me
          </h3>

          <span>
            ♧
          </span>

        </div>


        <div class="profile-head">

          <span
            class="avatar"
            id="dashboardAvatar"
          ></span>


          <div>

            <div class="profile-name">
              ${esc(name)}
            </div>

            <div class="profile-meta">
              ${esc(
                profile.mbti ||
                "MBTI"
              )}

              ·

              ${esc(
                calculateAge(
                  profile.dob
                ) ||
                "Age"
              )}
            </div>

          </div>

        </div>


        <div class="profile-role">
          ${esc(
            profile.occupation ||
            "Occupation not set"
          )}
        </div>


        <button
          class="small-action"
          data-nav="profile"
        >
          View profile
        </button>

      </article>


      <!-- CHARACTER -->

      <article
        class="card character-card"
      >

        <div class="card-title">

          <h3>
            ${esc(
              data.character.name ||
              "Character"
            )}
          </h3>

          <span>
            ✦
          </span>

        </div>


        <div class="character-stage">

          ${
            data.character.sticker

              ? `
                <img
                  class="character-sticker sitting"
                  src="${data.character.sticker}"
                  alt="Character sticker"
                >
              `

              : `
                <div class="character-placeholder">
                  Upload your character
                  in Character.
                </div>
              `
          }

        </div>


        <span class="status-pill">
          ${
            data.character.online
              ? "Online"
              : "Quiet mode"
          }
        </span>


        <div class="character-mood">
          ${esc(
            shortPersonality()
          )}
        </div>

      </article>

    </div>


    <!-- STATISTICS -->

    <div class="stats-row">

      ${statCard(
        "check",
        pendingTasks,
        "Open tasks"
      )}

      ${statCard(
        "bell",
        todayReminders,
        "Reminders"
      )}

      ${statCard(
        "target",
        activeGoals,
        "Goals"
      )}

      ${statCard(
        "note",
        data.notes.length,
        "Notes"
      )}

      ${statCard(
        "star",
        data.goals.length,
        "Plans"
      )}

    </div>


    <!-- FIRST LOWER ROW -->

    <div class="lower-grid">

      <!-- REMINDER -->

      <article class="card">

        <div class="card-title">

          <h3>
            Next Reminder
          </h3>

          <span>
            ♡
          </span>

        </div>


        ${
          upcoming.length

            ? upcoming
                .map(
                  reminderMini
                )
                .join("")

            : empty(
                "Nothing pressing. The little bell is resting."
              )
        }


        ${
          upcoming.length
            ? stickerTag(
                "mini-sticker"
              )
            : ""
        }

      </article>


      <!-- TASKS -->

      <article class="card">

        <div class="card-title">

          <h3>
            Today's Tasks
          </h3>

          <button
            class="small-action"
            data-add="todo"
            type="button"
          >
            ${ICONS.plus}
          </button>

        </div>


        ${
          tasks.length

            ? tasks
                .map(todoMini)
                .join("")

            : empty(
                "Your list is clear."
              )
        }

      </article>


      <!-- PLANS -->

      <article
        class="card plans-card"
      >

        <div class="card-title">

          <h3>
            Little Plans
          </h3>

          <span>
            ✦
          </span>

        </div>


        ${
          data.goals
            .slice(0, 3)
            .map(
              goal => `
                <div class="plan-line">

                  <span>
                    ♥
                  </span>

                  ${esc(
                    goal.title
                  )}

                </div>
              `
            )
            .join("")

          ||

          `
            <div class="empty">
              Small plans.<br>
              Big direction.
            </div>
          `
        }


        ${stickerTag(
          "mini-sticker"
        )}

      </article>

    </div>


    <!-- SECOND LOWER ROW -->

    <div class="lower-grid">

      <!-- NOTE -->

      <article
        class="card dashboard-note"
      >

        <div class="card-title">

          <h3>
            Little Note
          </h3>

          <span>
            ✿
          </span>

        </div>


        <div class="note-paper">

          ${esc(
            latestNote?.content ||
            "Write something worth remembering."
          )}

        </div>

      </article>


      <!-- TODAY -->

      <article class="card">

        <div class="card-title">

          <h3>
            Today
          </h3>

          <span>
            ☼
          </span>

        </div>


        <div class="quote-box">

          One step at a time.

          <br>

          <span
            style="font-size:14px"
          >
            You've got this,
            ${esc(name)}.
          </span>

        </div>


        <div
          class="dotted"
          style="margin-top:15px"
        ></div>


        <p
          style="
            font-size:11px;
            opacity:.62;
          "
        >

          ${todayReminders}
          reminder${
            todayReminders === 1
              ? ""
              : "s"
          }
          due today.

        </p>

      </article>


      <!-- CHARACTER CAMEO -->

      <article class="card">

        <div class="card-title">

          <h3>
            A little reminder
          </h3>

          <span>
            ♡
          </span>

        </div>


        <p
          style="
            font-family:'Patrick Hand';
            font-size:20px;
            line-height:1.3;
          "
        >
          Progress,
          not perfection.
        </p>


        ${stickerTag(
          "mini-sticker"
        )}

      </article>

    </div>


    <div class="card affirmation">

      ✦
      &nbsp;
      Discipline today,
      freedom tomorrow.
      &nbsp;
      ♡

    </div>

  `;


  setAvatar(
    document.getElementById(
      "dashboardAvatar"
    ),
    profile.image
  );

}


function statCard(
  icon,
  number,
  label
) {

  return `

    <article
      class="card stat-card"
    >

      <div class="stat-icon">

        ${
          ICONS[icon] ||
          ICONS.target
        }

      </div>


      <div>

        <div class="stat-number">
          ${number}
        </div>

        <div class="stat-label">
          ${esc(label)}
        </div>

      </div>

    </article>

  `;

}


function empty(text) {

  return `
    <div class="empty">
      ${esc(text)}
    </div>
  `;

}


function reminderMini(reminder) {

  return `

    <div class="list-item">

      <div class="item-row">

        <span class="dot"></span>

        <div class="item-main">

          <div class="item-title">
            ${esc(
              reminder.title
            )}
          </div>

          <div class="item-meta">
            ${formatDateTime(
              reminder.when
            )}

            ·

            ${esc(
              reminder.category ||
              "Personal"
            )}
          </div>

        </div>

      </div>

    </div>

  `;

}


function todoMini(task) {

  return `

    <div class="list-item">

      <div class="item-row">

        <span class="todo-check">

          ${
            task.done
              ? ICONS.tick
              : ICONS.circle
          }

        </span>


        <div class="item-main">

          <div class="item-title">
            ${esc(
              task.title
            )}
          </div>

          <div class="item-meta">
            ${esc(
              task.category ||
              "Personal"
            )}
          </div>

        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {

  const element =
    document.getElementById(
      "profile"
    );

  const profile =
    data.profile;


  element.innerHTML = `

    <div class="section-heading">

      <div>

        <h2>
          Profile
        </h2>

        <p>
          Your details,
          preferences and
          personal reference sheet.
        </p>

      </div>

    </div>


    <div class="profile-layout">


      <article
        class="card profile-preview soft"
      >

        <div
          class="large-avatar"
          id="profileLargeAvatar"
        ></div>


        <h3
          style="
            font-family:'Patrick Hand';
            font-size:30px;
            font-weight:400;
          "
        >
          ${esc(
            profile.name ||
            "Laya"
          )}
        </h3>


        <p
          style="
            font-size:11px;
            opacity:.62;
          "
        >
          ${esc(
            profile.occupation ||
            "Occupation not set"
          )}
        </p>


        <label class="upload-label">

          Upload profile picture

          <input
            id="profileImageInput"
            type="file"
            accept="image/*"
          >

        </label>

      </article>


      <article class="card">

        <form
          id="profileForm"
          class="form-grid"
        >

          ${field(
            "name",
            "Name",
            profile.name
          )}

          ${field(
            "dob",
            "Date of Birth",
            profile.dob,
            "date"
          )}


          <div class="field">

            <label>
              Age (automatic)
            </label>

            <input
              value="${esc(
                calculateAge(
                  profile.dob
                )
              )}"
              readonly
            >

          </div>


          ${field(
            "mbti",
            "MBTI",
            profile.mbti
          )}


          ${field(
            "hobbies",
            "Hobbies",
            profile.hobbies,
            "text",
            true
          )}


          ${field(
            "occupation",
            "Occupation",
            profile.occupation,
            "text",
            true
          )}


          ${field(
            "goal",
            "Big Goal",
            profile.goal,
            "text",
            true
          )}


          ${field(
            "favoriteColors",
            "Favourite Colours",
            profile.favoriteColors
          )}


          ${field(
            "favoriteFood",
            "Favourite Food",
            profile.favoriteFood
          )}


          ${field(
            "favoritePlaces",
            "Favourite Places",
            profile.favoritePlaces
          )}


          ${field(
            "favoriteMusic",
            "Favourite Music Genres",
            profile.favoriteMusic
          )}


          ${field(
            "skinType",
            "Skin Type",
            profile.skinType
          )}


          ${field(
            "bodyType",
            "Body Type",
            profile.bodyType
          )}


          ${field(
            "familyMembers",
            "Family Members",
            profile.familyMembers,
            "number"
          )}


          ${field(
            "strengths",
            "Strengths",
            profile.strengths
          )}


          ${field(
            "weaknesses",
            "Weaknesses",
            profile.weaknesses
          )}


          ${field(
            "favoriteBeverages",
            "Favourite Beverages",
            profile.favoriteBeverages
          )}


          ${field(
            "bloodGroup",
            "Blood Group",
            profile.bloodGroup
          )}


          ${field(
            "favoriteAnimal",
            "Favourite Animal",
            profile.favoriteAnimal
          )}


          ${field(
            "favoriteBird",
            "Favourite Bird",
            profile.favoriteBird
          )}


          <div class="field full">

            <div class="button-row">

              <button
                class="primary-button"
                type="submit"
              >
                Save Profile
              </button>

            </div>

          </div>

        </form>

      </article>

    </div>

  `;


  setAvatar(
    document.getElementById(
      "profileLargeAvatar"
    ),
    profile.image
  );


  document
    .getElementById(
      "profileForm"
    )
    .addEventListener(
      "submit",
      saveProfile
    );


  document
    .getElementById(
      "profileImageInput"
    )
    .addEventListener(
      "change",
      async event => {

        const file =
          event.target.files?.[0];

        if (!file) return;


        if (
          !file.type.startsWith(
            "image/"
          )
        ) {

          toast(
            "Please choose an image file."
          );

          return;

        }


        try {

          profile.image =
            await fileToDataURL(
              file
            );

          saveData();

          renderProfile();

          renderDashboard();

          updateTopbar();

          toast(
            "Profile picture saved."
          );

        } catch {

          toast(
            "I couldn't upload that picture."
          );

        }

      }
    );

}


function saveProfile(event) {

  event.preventDefault();


  const form =
    new FormData(
      event.currentTarget
    );


  for (
    const [key, value]
    of form.entries()
  ) {

    data.profile[key] =
      value;

  }


  saveData();

  renderProfile();

  renderDashboard();

  updateTopbar();

  toast(
    "Profile saved."
  );

}


function field(
  name,
  label,
  value,
  type = "text",
  full = false
) {

  return `

    <div
      class="field ${
        full
          ? "full"
          : ""
      }"
    >

      <label
        for="${name}"
      >
        ${esc(label)}
      </label>

      <input
        id="${name}"
        name="${name}"
        type="${type}"
        value="${esc(value)}"
      >

    </div>

  `;

}


/* =========================================================
   CHARACTER
========================================================= */

function renderCharacter() {

  const element =
    document.getElementById(
      "character"
    );

  const character =
    data.character;


  element.innerHTML = `

    <div class="section-heading">

      <div>

        <h2>
          Character
        </h2>

        <p>
          Your companion is kept
          as a transparent sticker.
        </p>

      </div>

    </div>


    <div class="character-layout">


      <article
        class="
          card
          character-upload-card
          soft
        "
      >

        <div class="sticker-preview">

          ${
            character.sticker

              ? `
                <img
                  src="${character.sticker}"
                  alt="Character sticker"
                >
              `

              : `
                <div class="character-placeholder">
                  No sticker yet
                </div>
              `
          }

        </div>


        <label class="upload-label">

          Upload character image

          <input
            id="characterImageInput"
            type="file"
            accept="image/*"
          >

        </label>


        <p class="sticker-help">

          The white connected
          background is removed,
          the artwork is cropped
          and a small sticker edge
          is added.

          The original rectangular
          image is not used in
          notifications.

        </p>

      </article>


      <article class="card">

        <form
          id="characterForm"
          class="form-grid"
        >

          ${field(
            "characterName",
            "Character name",
            character.name ||
              "Character",
            "text",
            true
          )}


          ${field(
            "characterPersonality",
            "Personality",
            character.personality,
            "text",
            true
          )}


          <div class="field full">

            <label>
              How the companion works
            </label>

            <div
              class="card soft"
              style="
                font-size:11px;
                line-height:1.55;
              "
            >

              Your personality text
              changes reminder dialogue.

              The same character sticker
              can appear in different
              sizes, corners and
              orientations throughout
              the dashboard.

            </div>

          </div>


          <div class="field full">

            <div class="button-row">

              <button
                class="primary-button"
                type="submit"
              >
                Save Character
              </button>


              <button
                class="secondary-button"
                id="testCharacter"
                type="button"
              >
                Test Character
              </button>


              <button
                class="secondary-button"
                id="requestNotifications"
                type="button"
              >
                Enable Browser Notifications
              </button>

            </div>

          </div>

        </form>

      </article>

    </div>

  `;


  document
    .getElementById(
      "characterForm"
    )
    .addEventListener(
      "submit",
      event => {

        event.preventDefault();


        character.name =
          document.getElementById(
            "characterName"
          ).value.trim() ||
          "Character";


        character.personality =
          document.getElementById(
            "characterPersonality"
          ).value.trim() ||
          "Calm, intelligent, firm and caring.";


        saveData();

        renderCharacter();

        renderDashboard();

        toast(
          "Character settings saved."
        );

      }
    );


  document
    .getElementById(
      "characterImageInput"
    )
    .addEventListener(
      "change",
      async event => {

        const file =
          event.target.files?.[0];

        if (!file) return;


        try {

          toast(
            "Making the sticker..."
          );


          const source =
            await fileToDataURL(
              file
            );


          character.image =
            source;


          character.sticker =
            await makeSticker(
              source
            );


          saveData();

          renderCharacter();

          renderDashboard();

          toast(
            "Sticker created and saved."
          );

        } catch (error) {

          console.error(
            error
          );

          toast(
            "I couldn't process that image."
          );

        }

      }
    );


  document
    .getElementById(
      "testCharacter"
    )
    .addEventListener(
      "click",
      sendTestNotification
    );


  document
    .getElementById(
      "requestNotifications"
    )
    .addEventListener(
      "click",
      requestNotificationPermission
    );

}


/* =========================================================
   PERSONALITY
========================================================= */

function shortPersonality() {

  const text =
    data.character.personality ||
    "Calm, intelligent, firm and caring.";

  if (
    text.length <= 55
  ) {
    return text;
  }

  return (
    text.slice(0, 52) +
    "…"
  );

}


function dialogue(title) {

  const personality =
    (
      data.character.personality ||
      ""
    ).toLowerCase();

  const name =
    data.profile.name ||
    "Laya";


  if (
    personality.includes(
      "firm"
    ) &&
    personality.includes(
      "caring"
    )
  ) {

    return (
      `${name}, ${title} is due. ` +
      `Handle it now. ` +
      `I'll be reasonable about it.`
    );

  }


  if (
    personality.includes(
      "firm"
    )
  ) {

    return (
      `${name}. ${title} is due. ` +
      `Do it now.`
    );

  }


  if (
    personality.includes(
      "caring"
    )
  ) {

    return (
      `Tiny reminder, ${name}. ` +
      `You wanted to do ${title}. ` +
      `Shall we take care of it now?`
    );

  }


  if (
    personality.includes(
      "intelligent"
    ) ||
    personality.includes(
      "calm"
    )
  ) {

    return (
      `A gentle nudge, ${name}. ` +
      `${title} is due now.`
    );

  }


  return (
    `${name}, ${title} is due. ` +
    `Let's take care of it.`
  );

}


/* =========================================================
   FILE / IMAGE HELPERS
========================================================= */

function fileToDataURL(file) {

  return new Promise(
    (resolve, reject) => {

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


function loadImage(source) {

  return new Promise(
    (resolve, reject) => {

      const image =
        new Image();

      image.onload =
        () =>
          resolve(
            image
          );

      image.onerror =
        reject;

      image.src =
        source;

    }
  );

}


/* =========================================================
   CHARACTER STICKER PROCESSOR
========================================================= */

async function makeSticker(source) {

  const image =
    await loadImage(
      source
    );


  const max = 700;


  const scale =
    Math.min(
      1,
      max /
        Math.max(
          image.naturalWidth,
          image.naturalHeight
        )
    );


  const width =
    Math.max(
      1,
      Math.round(
        image.naturalWidth *
        scale
      )
    );


  const height =
    Math.max(
      1,
      Math.round(
        image.naturalHeight *
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


  const context =
    canvas.getContext(
      "2d",
      {
        willReadFrequently:
          true
      }
    );


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


  /*
    The uploaded character
    has a clean white background.

    Only WHITE pixels connected
    to the outside edges are
    removed.

    This prevents the old
    flood-fill problem where
    the character itself could
    disappear.
  */

  const nearWhite =
    (
      r,
      g,
      b
    ) =>
      r > 242 &&
      g > 242 &&
      b > 242;


  const visited =
    new Uint8Array(
      width * height
    );


  const queue = [];


  const push =
    (
      x,
      y
    ) => {

      const index =
        y * width +
        x;

      if (
        visited[index]
      ) {
        return;
      }

      visited[index] = 1;

      queue.push(index);

    };


  for (
    let x = 0;
    x < width;
    x++
  ) {

    push(x, 0);

    if (height > 1) {
      push(
        x,
        height - 1
      );
    }

  }


  for (
    let y = 0;
    y < height;
    y++
  ) {

    push(0, y);

    if (width > 1) {
      push(
        width - 1,
        y
      );
    }

  }


  let head = 0;


  while (
    head <
    queue.length
  ) {

    const index =
      queue[head++];


    const x =
      index % width;

    const y =
      Math.floor(
        index / width
      );


    const pixel =
      index * 4;


    if (
      !nearWhite(
        pixels[pixel],
        pixels[pixel + 1],
        pixels[pixel + 2]
      )
    ) {
      continue;
    }


    pixels[pixel + 3] =
      0;


    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ];


    for (
      const [dx, dy]
      of directions
    ) {

      const nextX =
        x + dx;

      const nextY =
        y + dy;


      if (
        nextX >= 0 &&
        nextX < width &&
        nextY >= 0 &&
        nextY < height
      ) {

        push(
          nextX,
          nextY
        );

      }

    }

  }


  context.putImageData(
    imageData,
    0,
    0
  );


  const cropped =
    cropTransparent(
      canvas
    );


  const padding = 10;


  const output =
    document.createElement(
      "canvas"
    );


  output.width =
    cropped.width +
    padding * 2;

  output.height =
    cropped.height +
    padding * 2;


  const outputContext =
    output.getContext(
      "2d"
    );


  outputContext.drawImage(
    cropped,
    padding,
    padding
  );


  return output.toDataURL(
    "image/png"
  );

}


function cropTransparent(
  canvas
) {

  const context =
    canvas.getContext(
      "2d",
      {
        willReadFrequently:
          true
      }
    );


  const image =
    context.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );


  const pixels =
    image.data;


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
          (
            y *
            canvas.width +
            x
          ) *
            4 +
          3
        ];


      if (
        alpha > 8
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
    maxX < 0
  ) {

    return canvas;

  }


  const output =
    document.createElement(
      "canvas"
    );


  output.width =
    maxX -
    minX +
    1;

  output.height =
    maxY -
    minY +
    1;


  output
    .getContext("2d")
    .drawImage(
      canvas,
      minX,
      minY,
      output.width,
      output.height,
      0,
      0,
      output.width,
      output.height
    );


  return output;

}


/* =========================================================
   REMINDERS
========================================================= */

function renderReminders() {

  const element =
    document.getElementById(
      "reminders"
    );


  const list =
    [
      ...data.reminders
    ]
      .sort(
        (a, b) =>
          new Date(a.when) -
          new Date(b.when)
      );


  element.innerHTML = `

    <div class="section-heading">

      <div>

        <h2>
          Reminders
        </h2>

        <p>
          Checked while
          LAYRAAZ is open.
        </p>

      </div>


      <button
        class="primary-button"
        data-add="reminder"
        type="button"
      >
        + Add Reminder
      </button>

    </div>


    <div class="records-grid">

      ${
        list.length

          ? list
              .map(
                reminderRecord
              )
              .join("")

          : empty(
              "No reminders yet. Add one and let the little bell keep watch."
            )
      }

    </div>

  `;

}


function reminderRecord(
  reminder
) {

  return `

    <article
      class="
        card
        record
        ${
          reminder.completed
            ? "completed"
            : ""
        }
      "
    >

      <div class="record-left">

        <span class="dot"></span>

        <div>

          <div class="record-title">
            ${esc(
              reminder.title
            )}
          </div>

          <div class="record-desc">

            ${formatDateTime(
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

          </div>

        </div>

      </div>


      <div class="record-actions">

        <button
          class="icon-action"
          data-edit-reminder="${esc(
            reminder.id
          )}"
        >
          ${ICONS.edit}
        </button>


        <button
          class="icon-action"
          data-delete-reminder="${esc(
            reminder.id
          )}"
        >
          ${ICONS.trash}
        </button>

      </div>

    </article>

  `;

}


/* =========================================================
   TODOS
========================================================= */

function renderTodos() {

  const element =
    document.getElementById(
      "todos"
    );


  element.innerHTML = `

    <div class="section-heading">

      <div>

        <h2>
          To-do List
        </h2>

        <p>
          Work, Personal,
          Finance and Learning.
        </p>

      </div>


      <button
        class="primary-button"
        data-add="todo"
      >
        + Add To-do
      </button>

    </div>


    <div class="records-grid">

      ${
        data.todos.length

          ? data.todos
              .map(todoRecord)
              .join("")

          : empty(
              "No tasks yet. Empty checkboxes can be surprisingly persuasive."
            )
      }

    </div>

  `;

}


function todoRecord(task) {

  return `

    <article
      class="
        card
        record
        ${
          task.done
            ? "completed"
            : ""
        }
      "
    >

      <div class="record-left">


        <!-- CHECKBOX IS LEFT OF TEXT -->

        <button
          class="todo-check"
          data-toggle-todo="${esc(
            task.id
          )}"
          title="Complete task"
          type="button"
        >

          ${
            task.done
              ? ICONS.tick
              : ICONS.circle
          }

        </button>


        <div>

          <div class="record-title">
            ${esc(
              task.title
            )}
          </div>

          <div class="record-desc">

            ${esc(
              task.category ||
              "Personal"
            )}

            ${
              task.due
                ? " · " +
                  esc(task.due)
                : ""
            }

          </div>

        </div>

      </div>


      <div class="record-actions">

        <button
          class="icon-action"
          data-edit-todo="${esc(
            task.id
          )}"
          type="button"
        >
          ${ICONS.edit}
        </button>


        <button
          class="icon-action"
          data-delete-todo="${esc(
            task.id
          )}"
          type="button"
        >
          ${ICONS.trash}
        </button>

      </div>

    </article>

  `;

}


/* =========================================================
   GOALS
========================================================= */

function renderGoals() {

  const element =
    document.getElementById(
      "goals"
    );


  element.innerHTML = `

    <div class="section-heading">

      <div>

        <h2>
          Goals
        </h2>

        <p>
          Keep the destination
          visible, then move
          the percentage.
        </p>

      </div>


      <button
        class="primary-button"
        data-add="goal"
      >
        + Add Goal
      </button>

    </div>


    <div class="goals-grid">

      ${
        data.goals.length

          ? data.goals
              .map(goalRecord)
              .join("")

          : empty(
              "No goals yet. Give the empty space a target."
            )
      }

    </div>

  `;

}


function goalRecord(goal) {

  const progress =
    Math.max(
      0,
      Math.min(
        100,
        Number(
          goal.progress
        ) || 0
      )
    );


  return `

    <article class="card">

      <div class="card-title">

        <h3>
          ${esc(
            goal.title
          )}
        </h3>


        <div class="record-actions">

          <button
            class="icon-action"
            data-edit-goal="${esc(
              goal.id
            )}"
          >
            ${ICONS.edit}
          </button>


          <button
            class="icon-action"
            data-delete-goal="${esc(
              goal.id
            )}"
          >
            ${ICONS.trash}
          </button>

        </div>

      </div>


      <div
        style="
          font-size:11px;
          opacity:.62;
        "
      >
        ${esc(
          goal.category ||
          "Personal"
        )}
      </div>


      <div class="goal-progress">

        <span
          style="
            width:${progress}%;
          "
        ></span>

      </div>


      <div class="goal-percent">

        ${progress}%
        complete

      </div>

    </article>

  `;

}


/* =========================================================
   NOTES
========================================================= */

function renderNotes() {

  const element =
    document.getElementById(
      "notes"
    );


  const notes =
    [
      ...data.notes
    ]
      .sort(
        (a, b) =>
          new Date(
            b.createdAt
          ) -
          new Date(
            a.createdAt
          )
      );


  element.innerHTML = `

    <div class="section-heading">

      <div>

        <h2>
          Notes
        </h2>

        <p>
          Your thoughts,
          ideas and tiny epiphanies.
        </p>

      </div>


      <button
        class="primary-button"
        data-add="note"
      >
        + New Note
      </button>

    </div>


    <div class="notes-grid">

      ${
        notes.length

          ? notes
              .map(noteRecord)
              .join("")

          : empty(
              "No notes yet. The page is blank on purpose."
            )
      }

    </div>

  `;

}


function noteRecord(note) {

  return `

    <article
      class="
        card
        note-card
      "
    >

      <div class="card-title">

        <div>

          <h3>
            ${esc(
              note.title ||
              "Note"
            )}
          </h3>

          <div class="note-date">

            ${formatDateTime(
              note.createdAt
            )}

          </div>

        </div>


        <div class="record-actions">

          <button
            class="icon-action"
            data-edit-note="${esc(
              note.id
            )}"
          >
            ${ICONS.edit}
          </button>


          <button
            class="icon-action"
            data-delete-note="${esc(
              note.id
            )}"
          >
            ${ICONS.trash}
          </button>

        </div>

      </div>


      <div class="note-content">

        ${esc(
          note.content
        )}

      </div>

    </article>

  `;

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function renderNotifications() {

  const element =
    document.getElementById(
      "notifications"
    );


  const notifications =
    [
      ...data.notifications
    ]
      .sort(
        (a, b) =>
          new Date(
            b.createdAt
          ) -
          new Date(
            a.createdAt
          )
      );


  element.innerHTML = `

    <div class="section-heading">

      <div>

        <h2>
          Notifications
        </h2>

        <p>
          App history and
          browser notification controls.
        </p>

      </div>


      <button
        class="secondary-button"
        id="enableNotificationsPage"
      >
        Enable Browser Notifications
      </button>

    </div>


    <div class="records-grid">

      ${
        notifications.length

          ? notifications
              .map(
                notification => `

                  <article
                    class="
                      card
                      record
                      ${
                        notification.read
                          ? ""
                          : "soft"
                      }
                    "
                  >

                    <div class="record-left">

                      <span class="dot"></span>

                      <div>

                        <div class="record-title">

                          ${esc(
                            notification.title
                          )}

                        </div>

                        <div class="record-desc">

                          ${esc(
                            notification.body
                          )}

                          ·

                          ${formatDateTime(
                            notification.createdAt
                          )}

                        </div>

                      </div>

                    </div>


                    <button
                      class="small-action"
                      data-read-notification="${esc(
                        notification.id
                      )}"
                    >

                      ${
                        notification.read
                          ? "Read"
                          : "Mark read"
                      }

                    </button>

                  </article>

                `
              )
              .join("")

          : empty(
              "No notifications yet."
            )
      }

    </div>

  `;


  document
    .getElementById(
      "enableNotificationsPage"
    )
    .addEventListener(
      "click",
      requestNotificationPermission
    );

}


/* =========================================================
   APPEARANCE PAGE
========================================================= */

function renderAppearance() {

  const element =
    document.getElementById(
      "appearance"
    );


  element.innerHTML = `

    <div class="section-heading">

      <div>

        <h2>
          Appearance
        </h2>

        <p>
          Ten fixed palettes.
          Only Background,
          Main and Font change.
        </p>

      </div>

    </div>


    <article class="card">

      <div class="palette-grid">

        ${
          Object.entries(
            palettes
          )
          .map(
            ([key, palette]) => `

              <button
                class="
                  palette-card
                  ${
                    data.appearance ===
                    key
                      ? "selected"
                      : ""
                  }
                "
                data-palette="${key}"
                style="
                  --swatch-bg:${palette.background};
                  --swatch-main:${palette.main};
                  --swatch-font:${palette.font};
                "
                type="button"
              >

                <div class="swatches">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>


                <div class="palette-name">

                  ${palette.name}

                </div>


                <div class="palette-labels">

                  <span>BG</span>
                  <span>MAIN</span>
                  <span>FONT</span>

                </div>

              </button>

            `
          )
          .join("")
        }

      </div>

    </article>

  `;

}


/* =========================================================
   APP NOTIFICATION HISTORY
========================================================= */

function addNotification(
  title,
  body
) {

  data.notifications.unshift({

    id:
      uid(
        "notification"
      ),

    title,

    body,

    createdAt:
      new Date()
        .toISOString(),

    read:
      false

  });


  data.notifications =
    data.notifications.slice(
      0,
      100
    );


  saveData();

  updateTopbar();


  if (
    activeSection ===
    "notifications"
  ) {

    renderNotifications();

  }

}


/* =========================================================
   BROWSER NOTIFICATIONS
========================================================= */

function requestNotificationPermission() {

  if (
    !window.Notification
  ) {

    toast(
      "This browser does not support browser notifications."
    );

    return Promise.resolve(
      false
    );

  }


  if (
    Notification.permission ===
    "granted"
  ) {

    toast(
      "Browser notifications are already enabled."
    );

    return Promise.resolve(
      true
    );

  }


  if (
    Notification.permission ===
    "denied"
  ) {

    toast(
      "Notifications are blocked in browser settings."
    );

    return Promise.resolve(
      false
    );

  }


  return Notification
    .requestPermission()
    .then(
      permission => {

        toast(
          permission ===
            "granted"

            ? "Browser notifications enabled."

            : "Browser notifications were not enabled."
        );


        return (
          permission ===
          "granted"
        );

      }
    );

}


function sendTestNotification() {

  requestNotificationPermission()
    .then(
      allowed => {

        if (!allowed) {
          return;
        }


        showBrowserNotification(
          "LAYRAAZ",
          dialogue(
            "your test reminder"
          )
        );


        addNotification(
          "Character test",
          "A browser notification was sent with your character sticker."
        );

      }
    );

}


function showBrowserNotification(
  title,
  body
) {

  if (
    !window.Notification ||
    Notification.permission !==
      "granted"
  ) {

    return;

  }


  try {

    const notification =
      new Notification(
        title,
        {

          body,

          icon:
            data.character.sticker ||
            undefined,

          badge:
            data.character.sticker ||
            undefined,

          tag:
            `layraaz_${Date.now()}`,

          renotify:
            true

        }
      );


    notification.onclick =
      () => {

        window.focus();

      };

  } catch (error) {

    console.warn(
      "Browser notification failed:",
      error
    );

  }

}


/* =========================================================
   FLOATING CHARACTER REMINDER
========================================================= */

function showCompanion(
  reminder
) {

  if (
    !data.character.sticker
  ) {

    return;

  }


  const container =
    document.getElementById(
      "reminderCompanion"
    );


  const image =
    document.getElementById(
      "companionSticker"
    );


  const bubble =
    document.getElementById(
      "companionBubble"
    );


  bubble.textContent =
    dialogue(
      reminder.title
    );


  image.src =
    data.character.sticker;


  container.classList.remove(
    "hidden"
  );


  container.classList.add(
    "show"
  );


  clearTimeout(
    companionTimer
  );


  companionTimer =
    setTimeout(
      () => {

        container.classList.add(
          "hidden"
        );

      },
      12000
    );

}


/* =========================================================
   REMINDER WATCHER
========================================================= */

function checkDueReminders() {

  const now =
    Date.now();

  let changed =
    false;


  for (
    const reminder
    of data.reminders
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


    if (
      now - last <
      12 *
        60 *
        60 *
        1000
    ) {

      continue;

    }


    const body =
      dialogue(
        reminder.title
      );


    showBrowserNotification(
      "LAYRAAZ Reminder",
      body
    );


    showCompanion(
      reminder
    );


    addNotification(
      "Reminder due",
      body
    );


    reminder.lastNotifiedAt =
      new Date()
        .toISOString();


    changed =
      true;

  }


  if (changed) {

    saveData();

    renderDashboard();

  }


  if (
    changed &&
    activeSection ===
      "reminders"
  ) {

    renderReminders();

  }

}


function startReminderWatcher() {

  clearInterval(
    reminderTimer
  );


  reminderTimer =
    setInterval(
      checkDueReminders,
      15000
    );


  checkDueReminders();

}


/* =========================================================
   MODALS
========================================================= */

function categoryField(
  selected = "Personal"
) {

  const categories = [
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

      <select
        name="category"
      >

        ${
          categories
            .map(
              category => `
                <option
                  ${
                    category ===
                    selected
                      ? "selected"
                      : ""
                  }
                >
                  ${category}
                </option>
              `
            )
            .join("")
        }

      </select>

    </div>

  `;

}


function toDateTimeLocal(
  value
) {

  if (!value) {
    return "";
  }


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
        .padStart(
          2,
          "0"
        );


  return (
    `${date.getFullYear()}-` +
    `${pad(
      date.getMonth() + 1
    )}-` +
    `${pad(
      date.getDate()
    )}T` +
    `${pad(
      date.getHours()
    )}:` +
    `${pad(
      date.getMinutes()
    )}`
  );

}


function showModal(
  title,
  body,
  onSave
) {

  const root =
    document.getElementById(
      "modalRoot"
    );


  root.innerHTML = `

    <div
      class="modal-backdrop"
      id="modalBackdrop"
    >

      <div class="modal">

        <div class="modal-head">

          <h3>
            ${esc(title)}
          </h3>


          <button
            class="close-modal"
            id="closeModal"
            type="button"
          >
            ×
          </button>

        </div>


        ${body}

      </div>

    </div>

  `;


  document
    .getElementById(
      "closeModal"
    )
    .onclick =
      closeModal;


  document
    .getElementById(
      "modalBackdrop"
    )
    .onclick =
      event => {

        if (
          event.target.id ===
          "modalBackdrop"
        ) {

          closeModal();

        }

      };


  const form =
    document.getElementById(
      "modalForm"
    );


  if (form) {

    form.onsubmit =
      event => {

        event.preventDefault();

        onSave(
          new FormData(
            form
          )
        );

      };

  }

}


function closeModal() {

  document.getElementById(
    "modalRoot"
  ).innerHTML =
    "";

}


/* =========================================================
   ADD / EDIT
========================================================= */

function openAdd(
  type,
  existing = null
) {


  /* REMINDER */

  if (
    type ===
    "reminder"
  ) {

    const reminder =
      existing || {};


    showModal(

      existing
        ? "Edit Reminder"
        : "Add Reminder",

      `

        <form
          id="modalForm"
          class="form-grid"
        >

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
              value="${toDateTimeLocal(
                reminder.when
              )}"
              required
            >

          </div>


          ${categoryField(
            reminder.category
          )}


          <div class="field full">

            <div class="button-row">

              <button
                class="primary-button"
                type="submit"
              >
                Save Reminder
              </button>

            </div>

          </div>

        </form>

      `,

      form => {

        const title =
          String(
            form.get("title") ||
            ""
          ).trim();


        const when =
          String(
            form.get("when") ||
            ""
          );


        if (
          !title ||
          !when
        ) {

          toast(
            "Please add a title and time."
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
              form.get(
                "category"
              ) ||
              "Personal"
            ),

          completed:
            false,

          lastNotifiedAt:
            existing?.lastNotifiedAt ||
            null

        };


        if (existing) {

          Object.assign(
            existing,
            object
          );

        } else {

          data.reminders.push({

            id:
              uid("reminder"),

            ...object

          });

        }


        saveData();

        closeModal();

        renderReminders();

        renderDashboard();

        startReminderWatcher();

        toast(
          "Reminder saved."
        );

      }

    );

  }


  /* TODO */

  else if (
    type ===
    "todo"
  ) {

    const task =
      existing || {};


    showModal(

      existing
        ? "Edit To-do"
        : "Add To-do",

      `

        <form
          id="modalForm"
          class="form-grid"
        >

          ${field(
            "title",
            "Task",
            task.title ||
              "",
            "text",
            true
          )}


          ${categoryField(
            task.category
          )}


          ${field(
            "due",
            "Due date",
            task.due ||
              "",
            "date"
          )}


          <div class="field full">

            <div class="button-row">

              <button
                class="primary-button"
                type="submit"
              >
                Save To-do
              </button>

            </div>

          </div>

        </form>

      `,

      form => {

        const title =
          String(
            form.get("title") ||
            ""
          ).trim();


        if (!title) {

          toast(
            "Please add a task."
          );

          return;

        }


        const object = {

          title,

          category:
            String(
              form.get(
                "category"
              ) ||
              "Personal"
            ),

          due:
            String(
              form.get(
                "due"
              ) ||
              ""
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


        saveData();

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

  else if (
    type ===
    "goal"
  ) {

    const goal =
      existing || {};


    showModal(

      existing
        ? "Edit Goal"
        : "Add Goal",

      `

        <form
          id="modalForm"
          class="form-grid"
        >

          ${field(
            "title",
            "Goal",
            goal.title ||
              "",
            "text",
            true
          )}


          ${categoryField(
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
                  goal.progress
                ) || 0
              }"
            >

          </div>


          <div class="field full">

            <div class="button-row">

              <button
                class="primary-button"
                type="submit"
              >
                Save Goal
              </button>

            </div>

          </div>

        </form>

      `,

      form => {

        const title =
          String(
            form.get("title") ||
            ""
          ).trim();


        if (!title) {

          toast(
            "Please add a goal."
          );

          return;

        }


        const object = {

          title,

          category:
            String(
              form.get(
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
                  form.get(
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


        saveData();

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

  else if (
    type ===
    "note"
  ) {

    const note =
      existing || {};


    showModal(

      existing
        ? "Edit Note"
        : "New Note",

      `

        <form
          id="modalForm"
          class="form-grid"
        >

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
              required
            >${esc(
              note.content ||
              ""
            )}</textarea>

          </div>


          <div class="field full">

            <div class="button-row">

              <button
                class="primary-button"
                type="submit"
              >
                Save Note
              </button>

            </div>

          </div>

        </form>

      `,

      form => {

        const content =
          String(
            form.get(
              "content"
            ) ||
            ""
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
              form.get(
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


        saveData();

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

function deleteById(
  collection,
  id,
  message
) {

  const index =
    data[
      collection
    ].findIndex(
      item =>
        item.id === id
    );


  if (
    index < 0
  ) {
    return;
  }


  data[
    collection
  ].splice(
    index,
    1
  );


  saveData();

  renderSection(
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

function searchAll(
  query
) {

  const box =
    document.getElementById(
      "searchResults"
    );


  const search =
    query
      .trim()
      .toLowerCase();


  if (!search) {

    box.classList.add(
      "hidden"
    );

    box.innerHTML =
      "";

    return;

  }


  const results = [];


  for (
    const reminder
    of data.reminders
  ) {

    if (
      `${reminder.title} ${reminder.category}`
        .toLowerCase()
        .includes(search)
    ) {

      results.push({

        type:
          "Reminder",

        title:
          reminder.title,

        meta:
          formatDateTime(
            reminder.when
          ),

        section:
          "reminders"

      });

    }

  }


  for (
    const task
    of data.todos
  ) {

    if (
      `${task.title} ${task.category}`
        .toLowerCase()
        .includes(search)
    ) {

      results.push({

        type:
          "To-do",

        title:
          task.title,

        meta:
          task.category,

        section:
          "todos"

      });

    }

  }


  for (
    const goal
    of data.goals
  ) {

    if (
      `${goal.title} ${goal.category}`
        .toLowerCase()
        .includes(search)
    ) {

      results.push({

        type:
          "Goal",

        title:
          goal.title,

        meta:
          `${goal.progress || 0}%`,

        section:
          "goals"

      });

    }

  }


  for (
    const note
    of data.notes
  ) {

    if (
      `${note.title} ${note.content}`
        .toLowerCase()
        .includes(search)
    ) {

      results.push({

        type:
          "Note",

        title:
          note.title,

        meta:
          note.content.slice(
            0,
            60
          ),

        section:
          "notes"

      });

    }

  }


  box.innerHTML =

    results.length

      ? results
          .slice(0, 12)
          .map(
            result => `

              <div
                class="search-result"
                data-search-section="${result.section}"
              >

                <strong>
                  ${esc(
                    result.title
                  )}
                </strong>

                <span>
                  ${esc(
                    result.type
                  )}

                  ·

                  ${esc(
                    result.meta
                  )}
                </span>

              </div>

            `
          )
          .join("")

      : empty(
          "Nothing found."
        );


  box.classList.remove(
    "hidden"
  );

}


/* =========================================================
   TOAST
========================================================= */

function toast(message) {

  const element =
    document.getElementById(
      "toast"
    );


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
      2200
    );

}


/* =========================================================
   GLOBAL EVENTS
========================================================= */

function bindEvents() {

  /* SIDEBAR */

  document
    .getElementById(
      "sidebarToggle"
    )
    .addEventListener(
      "click",
      () => {

        const sidebar =
          document.getElementById(
            "sidebar"
          );


        sidebar.classList.toggle(
          "collapsed"
        );


        document
          .getElementById(
            "sidebarToggle"
          )
          .setAttribute(
            "aria-label",
            sidebar.classList.contains(
              "collapsed"
            )
              ? "Open sidebar"
              : "Close sidebar"
          );

      }
    );


  /* NAV */

  document
    .querySelectorAll(
      ".nav-item"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () =>
            navigate(
              button.dataset.section
            )
        );

      }
    );


  /* TOP NOTIFICATIONS */

  document
    .getElementById(
      "topNotificationButton"
    )
    .onclick =
      () =>
        navigate(
          "notifications"
        );


  /* PROFILE BUTTON */

  document
    .getElementById(
      "profileMiniButton"
    )
    .onclick =
      () =>
        navigate(
          "profile"
        );


  /* SEARCH */

  document
    .getElementById(
      "globalSearch"
    )
    .oninput =
      event =>
        searchAll(
          event.target.value
        );


  /* REMINDER COMPANION */

  document
    .getElementById(
      "companionClose"
    )
    .onclick =
      () =>
        document
          .getElementById(
            "reminderCompanion"
          )
          .classList.add(
            "hidden"
          );


  /* GLOBAL CLICK HANDLER */

  document.addEventListener(
    "click",
    event => {

      const nav =
        event.target.closest(
          "[data-nav]"
        );


      if (nav) {

        navigate(
          nav.dataset.nav
        );

        return;

      }


      const add =
        event.target.closest(
          "[data-add]"
        );


      if (add) {

        openAdd(
          add.dataset.add
        );

        return;

      }


      const palette =
        event.target.closest(
          "[data-palette]"
        );


      if (palette) {

        data.appearance =
          palette.dataset.palette;

        saveData();

        applyAppearance();

        renderAppearance();

        toast(
          `${palettes[data.appearance].name} selected.`
        );

        return;

      }


      const searchResult =
        event.target.closest(
          "[data-search-section]"
        );


      if (searchResult) {

        document
          .getElementById(
            "globalSearch"
          )
          .value =
          "";


        document
          .getElementById(
            "searchResults"
          )
          .classList.add(
            "hidden"
          );


        navigate(
          searchResult.dataset
            .searchSection
        );

        return;

      }


      const deleteReminder =
        event.target.closest(
          "[data-delete-reminder]"
        );


      if (deleteReminder) {

        deleteById(
          "reminders",
          deleteReminder.dataset
            .deleteReminder,
          "Reminder deleted."
        );

        return;

      }


      const editReminder =
        event.target.closest(
          "[data-edit-reminder]"
        );


      if (editReminder) {

        const reminder =
          data.reminders.find(
            item =>
              item.id ===
              editReminder.dataset
                .editReminder
          );


        if (reminder) {

          openAdd(
            "reminder",
            reminder
          );

        }

        return;

      }


      const deleteTodo =
        event.target.closest(
          "[data-delete-todo]"
        );


      if (deleteTodo) {

        deleteById(
          "todos",
          deleteTodo.dataset
            .deleteTodo,
          "To-do deleted."
        );

        return;

      }


      const editTodo =
        event.target.closest(
          "[data-edit-todo]"
        );


      if (editTodo) {

        const task =
          data.todos.find(
            item =>
              item.id ===
              editTodo.dataset
                .editTodo
          );


        if (task) {

          openAdd(
            "todo",
            task
          );

        }

        return;

      }


      const toggleTodo =
        event.target.closest(
          "[data-toggle-todo]"
        );


      if (toggleTodo) {

        const task =
          data.todos.find(
            item =>
              item.id ===
              toggleTodo.dataset
                .toggleTodo
          );


        if (task) {

          task.done =
            !task.done;

          saveData();

          renderTodos();

          renderDashboard();

        }

        return;

      }


      const deleteGoal =
        event.target.closest(
          "[data-delete-goal]"
        );


      if (deleteGoal) {

        deleteById(
          "goals",
          deleteGoal.dataset
            .deleteGoal,
          "Goal deleted."
        );

        return;

      }


      const editGoal =
        event.target.closest(
          "[data-edit-goal]"
        );


      if (editGoal) {

        const goal =
          data.goals.find(
            item =>
              item.id ===
              editGoal.dataset
                .editGoal
          );


        if (goal) {

          openAdd(
            "goal",
            goal
          );

        }

        return;

      }


      const deleteNote =
        event.target.closest(
          "[data-delete-note]"
        );


      if (deleteNote) {

        deleteById(
          "notes",
          deleteNote.dataset
            .deleteNote,
          "Note deleted."
        );

        return;

      }


      const editNote =
        event.target.closest(
          "[data-edit-note]"
        );


      if (editNote) {

        const note =
          data.notes.find(
            item =>
              item.id ===
              editNote.dataset
                .editNote
          );


        if (note) {

          openAdd(
            "note",
            note
          );

        }

        return;

      }


      const readNotification =
        event.target.closest(
          "[data-read-notification]"
        );


      if (readNotification) {

        const notification =
          data.notifications.find(
            item =>
              item.id ===
              readNotification.dataset
                .readNotification
          );


        if (notification) {

          notification.read =
            true;

          saveData();

          renderNotifications();

          updateTopbar();

        }

      }

    }
  );

}


/* =========================================================
   INITIALIZATION
========================================================= */

function init() {

  applyAppearance();

  setIcons();

  bindEvents();

  renderSection(
    "dashboard"
  );

  startReminderWatcher();


  /*
    If an older version has
    the original character image
    but no sticker, convert it
    once.
  */

  if (
    !data.character.sticker &&
    data.character.image
  ) {

    makeSticker(
      data.character.image
    )
      .then(
        sticker => {

          data.character.sticker =
            sticker;

          saveData();

          renderCharacter();

          renderDashboard();

        }
      )
      .catch(
        () => {}
      );

  }

}


document.addEventListener(
  "DOMContentLoaded",
  init
);
