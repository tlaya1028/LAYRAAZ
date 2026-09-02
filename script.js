"use strict";


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "LAYRAAZ_DATA_V4";

const OLD_STORAGE_KEYS = [
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

  /* USER UPDATED */
  champagne: {
    name: "Palette 6",
    background: "#d54c15",
    main: "#8db6c7",
    font: "#f9e8d4"
  },

  /* USER UPDATED */
  gunmetal: {
    name: "Palette 7",
    background: "#1e1d1d",
    main: "#5a4d41",
    font: "#867c70"
  },

  /* USER UPDATED */
  cadet: {
    name: "Palette 8",
    background: "#943131",
    main: "#d9bda6",
    font: "#bad2da"
  },

  /* USER UPDATED */
  pink: {
    name: "Palette 9",
    background: "#f6c8d1",
    main: "#eadcd2",
    font: "#f0eada"
  },

  lavender: {
    name: "Palette 10",
    background: "#BCC2F4",
    main: "#B0BC68",
    font: "#FFFecd"
  }

};


/* =========================================================
   SVG ICONS
========================================================= */

const ICONS = {

  menu: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round">
      <path d="M5 7h14M5 12h14M5 17h14"/>
    </svg>
  `,

  home: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m3.5 10.5 8.5-7 8.5 7v9a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19.5v-9Z"/>
      <path d="M9 21v-6h6v6"/>
    </svg>
  `,

  profile: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round">
      <circle cx="12" cy="8" r="3.5"/>
      <path d="M4.5 20c.8-3.3 3.3-5 7.5-5s6.7 1.7 7.5 5"/>
    </svg>
  `,

  character: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <circle cx="12" cy="12" r="8.5"/>
      <circle cx="9" cy="11" r=".7" fill="currentColor"/>
      <circle cx="15" cy="11" r=".7" fill="currentColor"/>
      <path d="M9 15c1.8 1.4 4.2 1.4 6 0"/>
    </svg>
  `,

  bell: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"/>
      <path d="M10 21h4"/>
    </svg>
  `,

  check: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <rect x="4" y="3.5" width="16" height="17" rx="2"/>
      <path d="m8 12 2.5 2.5L16 9"/>
    </svg>
  `,

  target: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <circle cx="12" cy="12" r="8.5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="12" cy="12" r="1.2"
        fill="currentColor"/>
      <path d="m15.5 8.5 4-4M16.5 4.5h3v3"/>
    </svg>
  `,

  note: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M6 3.5h9l3 3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/>
      <path d="M14 3.5V7h4M8 11h8M8 15h8M8 18h5"/>
    </svg>
  `,

  notification: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"/>
      <path d="M10 21h4"/>
    </svg>
  `,

  palette: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M12 4a8 8 0 0 0 0 16h1.2a1.8 1.8 0 0 0 1.2-3.1c-.8-.8-.2-2.2 1-2.2h1.1A3.5 3.5 0 0 0 21 11.2C20.6 7.1 17 4 12 4Z"/>
      <circle cx="7.5" cy="10" r=".8"/>
      <circle cx="10" cy="7.5" r=".8"/>
      <circle cx="14" cy="7.5" r=".8"/>
      <circle cx="17" cy="10" r=".8"/>
    </svg>
  `,

  search: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round">
      <circle cx="10.8" cy="10.8" r="6.8"/>
      <path d="m16 16 5 5"/>
    </svg>
  `,

  edit: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5 4 16.5Z"/>
      <path d="m13.8 6.7 3.5 3.5"/>
    </svg>
  `,

  trash: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round">
      <path d="M4 7h16"/>
      <path d="M9 7V4h6v3"/>
      <path d="M7 7l1 13h8l1-13"/>
      <path d="M10 11v5M14 11v5"/>
    </svg>
  `,

  plus: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  `,

  spark: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m12 3 1.2 5.8L19 10l-5.8 1.2L12 17l-1.2-5.8L5 10l5.8-1.2L12 3Z"/>
    </svg>
  `,

  heart: `
    <svg viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M20.5 8.7c0 5.2-8.5 10-8.5 10s-8.5-4.8-8.5-10A4.3 4.3 0 0 1 12 6.2a4.3 4.3 0 0 1 8.5 2.5Z"/>
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

    strengths:
      "Ambitious, self-motivated, hardworking",

    weaknesses:
      "Socialising, procrastination, overthinking",

    favoriteBeverages:
      "Buttermilk",

    bloodGroup:
      "",

    favoriteAnimal:
      "Dogs",

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

  reminders:
    [],

  todos:
    [],

  goals:
    [],

  notes:
    [],

  notifications:
    []

};


/* =========================================================
   STATE
========================================================= */

let data = loadData();

let activeSection = "dashboard";

let reminderTimer = null;

let toastTimer = null;

let dueCompanionId = null;

let usedDashboardPoses = new Set();


/* =========================================================
   DATA HELPERS
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

    for (
      const key of OLD_STORAGE_KEYS
    ) {

      raw =
        localStorage.getItem(
          key
        );

      if (raw) break;

    }

  }

  try {

    const result =
      mergeData(
        defaultData,
        raw
          ? JSON.parse(raw)
          : null
      );


    /*
      Preserve compatibility
      with old palette names.
    */

    const paletteMap = {

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
      paletteMap[
        result.appearance
      ]
    ) {

      result.appearance =
        paletteMap[
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

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );

}


function uid(prefix = "id") {

  return `
    ${prefix}_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2,8)}
  `.trim();

}


function esc(value) {

  return String(
    value ?? ""
  ).replace(
    /[&<>'"]/g,
    character => ({

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      "\"": "&quot;"

    }[character])
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
    return String(value);
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


function calculateAge(dob) {

  if (!dob) return "";

  const birth =
    new Date(
      `${dob}T00:00:00`
    );

  if (
    Number.isNaN(
      birth.getTime()
    )
  ) {
    return "";
  }

  const now =
    new Date();

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


function isSameDay(a, b) {

  return (
    a.toDateString() ===
    b.toDateString()
  );

}


function todayISO() {

  const date =
    new Date();

  return `
    ${date.getFullYear()}-
    ${String(date.getMonth()+1).padStart(2,"0")}-
    ${String(date.getDate()).padStart(2,"0")}
  `.replace(/\s/g,"");

}


/* =========================================================
   COLOUR FUNCTIONS
========================================================= */

function hexToRgb(hex) {

  const h =
    hex.replace("#","");

  if (h.length !== 6) {
    return null;
  }

  return {

    r: parseInt(
      h.slice(0,2),
      16
    ),

    g: parseInt(
      h.slice(2,4),
      16
    ),

    b: parseInt(
      h.slice(4,6),
      16
    )

  };

}


function mix(a,b,t) {

  const x =
    hexToRgb(a);

  const y =
    hexToRgb(b);

  if (!x || !y) {
    return a;
  }

  return `
    rgb(
      ${Math.round(x.r*(1-t)+y.r*t)},
      ${Math.round(x.g*(1-t)+y.g*t)},
      ${Math.round(x.b*(1-t)+y.b*t)}
    )
  `.replace(/\s/g,"");

}


function isLight(hex) {

  const rgb =
    hexToRgb(hex);

  if (!rgb) {
    return true;
  }

  const luminance =
    (
      0.2126 * rgb.r +
      0.7152 * rgb.g +
      0.0722 * rgb.b
    ) / 255;

  return luminance > .62;

}


function shade(hex, amount) {

  return mix(
    hex,
    "#000000",
    amount
  );

}


function applyAppearance() {

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

  const muted =
    isLight(
      palette.background
    )

      ? shade(
          palette.font,
          .55
        )

      : mix(
          palette.font,
          palette.background,
          .25
        );

  document.documentElement
    .style
    .setProperty(
      "--font-muted",
      muted
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

function setIconElements() {

  document
    .querySelectorAll(
      ".nav-icon"
    )
    .forEach(
      element => {

        const className =
          [
            ...element.classList
          ].find(
            c =>
              c.startsWith(
                "icon-"
              ) &&
              c !==
                "icon-button"
          );

        if (!className) {
          return;
        }

        const key =
          className.slice(
            5
          );

        if (
          ICONS[key]
        ) {
          element.innerHTML =
            ICONS[key];
        }

      }
    );


  document
    .querySelectorAll(
      ".icon-search"
    )
    .forEach(
      element =>
        element.innerHTML =
          ICONS.search
    );


  document
    .querySelectorAll(
      ".icon-menu"
    )
    .forEach(
      element =>
        element.innerHTML =
          ICONS.menu
    );

}


/* =========================================================
   AVATAR
========================================================= */

function setAvatar(
  element,
  source
) {

  if (!element) {
    return;
  }

  if (source) {

    element.style
      .backgroundImage =
      `url("${source}")`;

    element.textContent =
      "";

  } else {

    element.style
      .backgroundImage =
      "";

    element.textContent =
      "";

  }

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
      element =>
        element.classList.toggle(
          "active-section",
          element.id === section
        )
    );

  document
    .querySelectorAll(
      ".nav-item"
    )
    .forEach(
      element =>
        element.classList.toggle(
          "active",
          element.dataset.section ===
            section
        )
    );

  renderSection(
    section
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function renderSection(
  section
) {

  const functions = {

    dashboard:
      renderDashboard,

    profile:
      renderProfile,

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
      renderAppearance,

    character:
      renderCharacter

  };

  const renderer =
    functions[
      section
    ];

  if (renderer) {
    renderer();
  }

  updateTopbar();

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


  let title;

  if (
    activeSection ===
    "dashboard"
  ) {

    title =
      `Welcome back, ${esc(name)}`;

  } else {

    title =
      activeSection
        .charAt(0)
        .toUpperCase() +
      activeSection.slice(1);

  }


  document.getElementById(
    "pageTitle"
  ).innerHTML =
    `${title}
     <span class="sparkles">
       ✦
     </span>`;


  document.getElementById(
    "pageSubtitle"
  ).innerHTML =

    activeSection ===
    "dashboard"

      ? `A small space for everything that matters.
         <span>♡</span>`

      : `Everything here can be edited and kept locally
         in your browser.`;


  const unread =
    data.notifications
      .filter(
        n => !n.read
      )
      .length;

  document.getElementById(
    "notificationCount"
  ).textContent =
    unread
      ? String(unread)
      : "";


  setAvatar(
    document.getElementById(
      "topAvatar"
    ),
    data.profile.image
  );

}


/* =========================================================
   DECORATIONS
========================================================= */

function svgDoodle(
  type,
  className
) {

  return `
    <span class="doodle ${className}">
      ${ICONS[type] || ICONS.spark}
    </span>
  `;

}


/* =========================================================
   CHARACTER POSES
========================================================= */

function pickPose(
  preferred
) {

  const available =
    preferred.filter(
      pose =>
        !usedDashboardPoses
          .has(pose)
    );

  const choices =
    available.length
      ? available
      : preferred;

  const pose =
    choices[
      Math.floor(
        Math.random() *
        choices.length
      )
    ];

  usedDashboardPoses.add(
    pose
  );

  return pose;

}


function characterImg(
  pose = "normal",
  extra = ""
) {

  if (
    !data.character.sticker
  ) {

    return `
      <div class="character-empty-message">
        Your little companion is waiting.
      </div>
    `;

  }

  return `
    <img
      class="character-sticker ${extra} pose-${pose}"
      src="${data.character.sticker}"
      alt="${esc(
        data.character.name ||
        "Character"
      )}"
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


  usedDashboardPoses =
    new Set();


  const pending =
    data.todos
      .filter(
        todo => !todo.done
      )
      .length;


  const activeGoals =
    data.goals
      .filter(
        goal =>
          Number(
            goal.progress || 0
          ) < 100
      )
      .length;


  const todayReminders =
    data.reminders
      .filter(
        reminder =>
          !reminder.completed &&
          isSameDay(
            new Date(
              reminder.when
            ),
            new Date()
          )
      )
      .length;


  const todayTodos =
    data.todos
      .filter(
        todo => !todo.done
      )
      .slice(0,4);


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
        (a,b) =>
          new Date(a.when) -
          new Date(b.when)
      )

      .slice(0,3);


  const latestNote =
    [
      ...data.notes
    ]
      .sort(
        (a,b) =>
          new Date(
            b.createdAt
          ) -
          new Date(
            a.createdAt
          )
      )[0];


  const heroPose =
    pickPose([
      "small",
      "lean",
      "peek",
      "flip"
    ]);


  const characterPose =
    pickPose([
      "normal",
      "tilt",
      "flip",
      "small"
    ]);


  const reminderPose =
    pickPose([
      "peek",
      "lean",
      "small"
    ]);


  const planPose =
    pickPose([
      "tilt",
      "flip",
      "small"
    ]);


  element.innerHTML = `

    <div class="section-heading">

      <div>

        <h2>
          Dashboard
        </h2>

        <p>
          A small space for everything that matters.
        </p>

      </div>

    </div>


    <div class="dashboard-grid">


      <!-- WELCOME -->

      <article class="card hero-card soft">

        ${svgDoodle(
          "spark",
          "doodle-star"
        )}

        <div class="hero-copy">

          <div class="script-title">
            Welcome back,
            ${esc(name)}.
          </div>

          <h2>
            Small steps every day<br>
            lead to big changes.
          </h2>

          <p>
            Plan your day, keep your thoughts,
            track your goals and let LAYRAAZ
            remember the little things.
          </p>

          <div class="button-row">

            <button
              class="small-action"
              data-nav="todos"
              type="button"
            >
              See my tasks
            </button>

            <button
              class="small-action"
              data-nav="reminders"
              type="button"
            >
              My reminders
            </button>

          </div>

        </div>


        ${
          data.character.sticker

            ? `
              <div class="hero-character">
                ${characterImg(heroPose)}
              </div>
            `

            : ""
        }

      </article>


      <!-- PROFILE -->

      <article class="card profile-card">

        ${svgDoodle(
          "heart",
          "doodle-heart"
        )}

        <div class="card-title">

          <h3>
            About Me
          </h3>

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
                ) || "-"
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
          type="button"
        >
          View profile →
        </button>

      </article>


      <!-- CHARACTER -->

      <article class="card character-card">

        ${svgDoodle(
          "spark",
          "doodle-spark"
        )}

        <div class="card-title">

          <h3>
            ${esc(
              data.character.name ||
              "Character"
            )}
          </h3>

          <small>
            companion
          </small>

        </div>


        <div class="character-stage">

          ${characterImg(
            characterPose
          )}

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
            data.character.personality ||
            "Your companion is ready."
          )}
        </div>

      </article>

    </div>


    <!-- STATS -->

    <div class="stats-row">

      ${statCard(
        "check",
        pending,
        "Open tasks",
        "Pending"
      )}

      ${statCard(
        "bell",
        todayReminders,
        "Reminders",
        "Due today"
      )}

      ${statCard(
        "target",
        activeGoals,
        "Goals",
        "In progress"
      )}

      ${statCard(
        "note",
        data.notes.length,
        "Notes",
        "Saved"
      )}

      ${statCard(
        "spark",
        data.goals.filter(
          goal =>
            Number(
              goal.progress || 0
            ) === 100
        ).length,
        "Plans",
        "Completed"
      )}

    </div>


    <!-- LOWER ROW -->

    <div class="lower-grid">


      <!-- REMINDERS -->

      <article class="card">

        ${svgDoodle(
          "heart",
          "doodle-heart"
        )}

        <div class="card-title">

          <h3>
            Next Reminder
          </h3>

          <button
            class="small-action"
            data-nav="reminders"
            type="button"
          >
            View all
          </button>

        </div>


        ${
          upcoming.length

            ? upcoming
                .map(
                  reminderMini
                )
                .join("")

            : `
              <div class="empty">
                Nothing pressing.
                The little bell is resting.
              </div>
            `
        }


        <div class="planner-character bottom-character">

          ${characterImg(
            reminderPose,
            "small-character"
          )}

        </div>


        <button
          class="small-action"
          data-add="reminder"
          type="button"
        >
          ${ICONS.plus}
          Add reminder
        </button>

      </article>


      <!-- TASKS -->

      <article class="card">

        <div class="card-title">

          <h3>
            Today's Tasks
          </h3>

          <button
            class="small-action"
            data-nav="todos"
            type="button"
          >
            View all
          </button>

        </div>


        ${
          todayTodos.length

            ? todayTodos
                .map(
                  todoMini
                )
                .join("")

            : `
              <div class="empty">
                Your list is clear.
              </div>
            `
        }


        <button
          class="small-action"
          data-add="todo"
          type="button"
        >
          ${ICONS.plus}
          Add task
        </button>

      </article>


      <!-- PLANS -->

      <article class="card">

        ${svgDoodle(
          "spark",
          "doodle-spark"
        )}

        <div class="card-title">

          <h3>
            Little Plans
          </h3>

        </div>


        <div class="note-paper">
          Small plans.<br>
          Big direction.
        </div>


        <div class="planner-character right-character">

          ${characterImg(
            planPose,
            "tiny-character"
          )}

        </div>

      </article>

    </div>


    <!-- SECOND LOWER ROW -->

    <div class="lower-grid">


      <article class="card">

        <div class="card-title">

          <h3>
            Little Note
          </h3>

          ${ICONS.note}

        </div>


        <div class="note-paper">

          ${esc(
            latestNote?.content ||
            "Write something worth remembering."
          )}

        </div>

      </article>


      <article class="card">

        <div class="card-title">

          <h3>
            Today
          </h3>

          <small>
            ${
              new Date()
                .toLocaleDateString(
                  [],
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  }
                )
            }
          </small>

        </div>


        <div class="quote-box">

          One step at a time.<br>

          Keep moving toward
          the life you want.

        </div>

      </article>


      <article class="card">

        <div class="card-title">

          <h3>
            A Little Reminder
          </h3>

        </div>


        <div class="note-paper">

          You do not need to finish
          everything today.

          Just choose the next
          useful thing.

        </div>

      </article>

    </div>


    <div class="card affirmation">

      ✦
      &nbsp;
      I am becoming the best version of myself.
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


/* Dashboard helpers */

function statCard(
  icon,
  number,
  label,
  sub
) {

  return `
    <article class="card stat-card">

      <div class="stat-icon">
        ${ICONS[icon]}
      </div>

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


function reminderMini(
  reminder
) {

  return `
    <div class="list-item">

      <div class="item-row">

        <span class="dot"></span>

        <div class="item-main">

          <div class="item-title">
            ${esc(reminder.title)}
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


function todoMini(todo) {

  return `
    <div class="list-item">

      <div class="item-row">

        <span class="dot"></span>

        <div class="item-main">

          <div class="item-title">
            ${esc(todo.title)}
          </div>

          <div class="item-meta">
            ${esc(
              todo.category ||
              "Personal"
            )}

            ${
              todo.due
                ? ` · ${esc(todo.due)}`
                : ""
            }
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
          Your details, preferences
          and personality.
        </p>

      </div>

    </div>


    <div class="profile-layout">


      <!-- PROFILE PREVIEW -->

      <article class="card profile-preview soft">

        <div class="profile-photo-frame">

          ${
            profile.image

              ? `
                <img
                  class="profile-photo"
                  id="profilePhoto"
                  src="${profile.image}"
                  alt="Profile picture"
                >
              `

              : `
                <div class="profile-photo-placeholder">
                  Your picture<br>
                  will appear here.
                </div>
              `
          }

        </div>


        <h3>
          ${esc(
            profile.name ||
            "Laya"
          )}
        </h3>


        <p>
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


        <div class="dotted-divider"></div>


        <div
          style="
            font-size:10px;
            opacity:.58;
            line-height:1.5;
          "
        >
          The picture stays in this browser.
          It is not uploaded to a server by LAYRAAZ.
        </div>

      </article>


      <!-- PROFILE FORM -->

      <article class="card profile-form-card">

        <h3 class="profile-form-section-title">
          Personal Details
        </h3>


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

          ${field(
            "age",
            "Age (automatic)",
            calculateAge(
              profile.dob
            )
          )}

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
            profile.strengths,
            "text",
            true
          )}

          ${field(
            "weaknesses",
            "Weaknesses",
            profile.weaknesses,
            "text",
            true
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


  const age =
    document.getElementById(
      "age"
    );

  if (age) {
    age.readOnly = true;
  }


  document
    .getElementById(
      "profileForm"
    )
    .addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const form =
          new FormData(
            event.currentTarget
          );

        for (
          const [key,value]
          of form.entries()
        ) {

          if (
            key !== "age"
          ) {

            data.profile[key] =
              value;

          }

        }

        saveData();

        renderProfile();
        renderDashboard();
        updateTopbar();

        toast(
          "Profile saved."
        );

      }
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

        if (!file) {
          return;
        }

        try {

          data.profile.image =
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
            "I couldn't read that picture."
          );

        }

      }
    );

}


/* Generic form field */

function field(
  name,
  label,
  value,
  type = "text",
  full = false
) {

  return `
    <div class="field ${full ? "full" : ""}">

      <label
        for="${esc(name)}"
      >
        ${esc(label)}
      </label>

      <input
        id="${esc(name)}"
        name="${esc(name)}"
        type="${esc(type)}"
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
          Upload one character image.
          LAYRAAZ turns it into a transparent
          sticker and varies its placement
          across the dashboard.
        </p>

      </div>

    </div>


    <div class="character-layout">


      <!-- IMAGE -->

      <article
        class="card
               character-upload-card
               soft"
      >

        <div>

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
                    No sticker yet.
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

            For the white-background character
            you provided, the processor removes
            only connected near-white background
            pixels, crops the transparent space
            and adds a subtle sticker edge.

            The original rectangle is not used
            in dashboard reminders.

          </p>


          <div class="dotted-divider"></div>


          <div class="character-poses-preview">

            ${
              character.sticker

                ? `

                  <img
                    class="pose-sample pose-1"
                    src="${character.sticker}"
                    alt="Character pose sample"
                  >

                  <img
                    class="pose-sample pose-2"
                    src="${character.sticker}"
                    alt="Character pose sample"
                  >

                  <img
                    class="pose-sample pose-3"
                    src="${character.sticker}"
                    alt="Character pose sample"
                  >

                  <img
                    class="pose-sample pose-4"
                    src="${character.sticker}"
                    alt="Character pose sample"
                  >

                `

                : ""
            }

          </div>

        </div>

      </article>


      <!-- SETTINGS -->

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
            character.personality ||
              "Calm, intelligent, firm and caring.",
            "text",
            true
          )}


          <div class="field full">

            <label>
              How the character is used
            </label>


            <div class="card soft"
              style="
                font-size:11px;
                line-height:1.55;
              "
            >

              The same sticker is not simply
              pasted into every card.

              Dashboard placements use different
              scale, rotation, mirroring and
              peeking treatments.

              Genuine new body poses require
              separate artwork later.

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
                Test Notification
              </button>


              <button
                class="secondary-button"
                id="requestNotifications"
                type="button"
              >
                Enable Notifications
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

        data.character.name =
          document
            .getElementById(
              "characterName"
            )
            .value
            .trim() ||
          "Character";

        data.character.personality =
          document
            .getElementById(
              "characterPersonality"
            )
            .value
            .trim() ||
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

        if (!file) {
          return;
        }

        toast(
          "Making your sticker..."
        );

        try {

          const source =
            await fileToDataURL(
              file
            );

          const sticker =
            await makeSticker(
              source
            );

          data.character.image =
            source;

          data.character.sticker =
            sticker;

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
            "I couldn't process that image. Try the original image again."
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
   IMAGE / STICKER PROCESSING
========================================================= */

function fileToDataURL(
  file
) {

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


function loadImage(
  source
) {

  return new Promise(
    (resolve,reject) => {

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


function samplePixel(
  pixels,
  width,
  x,
  y
) {

  const index =
    (y * width + x) * 4;

  return {

    r: pixels[index],
    g: pixels[index + 1],
    b: pixels[index + 2]

  };

}


function averagePixels(
  samples
) {

  return {

    r: Math.round(
      samples.reduce(
        (sum,pixel) =>
          sum + pixel.r,
        0
      ) / samples.length
    ),

    g: Math.round(
      samples.reduce(
        (sum,pixel) =>
          sum + pixel.g,
        0
      ) / samples.length
    ),

    b: Math.round(
      samples.reduce(
        (sum,pixel) =>
          sum + pixel.b,
        0
      ) / samples.length
    )

  };

}


function colorDistance(
  r,g,b,
  R,G,B
) {

  return Math.sqrt(
    (r-R)**2 +
    (g-G)**2 +
    (b-B)**2
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

  const imageData =
    context.getImageData(
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
          (y * canvas.width + x) * 4 +
          3
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
    maxX - minX + 1;

  output.height =
    maxY - minY + 1;


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


/*
  White-background-specific
  sticker processing.

  The important difference from
  the previous version is that
  the algorithm only removes
  near-white pixels that are
  CONNECTED to the outside.

  Dark character pixels therefore
  cannot be accidentally swallowed
  simply because they differ from
  the corner colour.
*/

async function makeSticker(
  source
) {

  const image =
    await loadImage(
      source
    );


  const max =
    620;


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


  const corners = [

    samplePixel(
      pixels,
      width,
      0,
      0
    ),

    samplePixel(
      pixels,
      width,
      width - 1,
      0
    ),

    samplePixel(
      pixels,
      width,
      0,
      height - 1
    ),

    samplePixel(
      pixels,
      width,
      width - 1,
      height - 1
    )

  ];


  const background =
    averagePixels(
      corners
    );


  const visited =
    new Uint8Array(
      width * height
    );


  const queue = [];


  function push(
    x,
    y
  ) {

    if (
      x < 0 ||
      x >= width ||
      y < 0 ||
      y >= height
    ) {

      return;

    }


    const index =
      y * width + x;


    if (
      !visited[index]
    ) {

      visited[index] =
        1;

      queue.push(
        index
      );

    }

  }


  for (
    let x = 0;
    x < width;
    x++
  ) {

    push(x,0);
    push(
      x,
      height - 1
    );

  }


  for (
    let y = 0;
    y < height;
    y++
  ) {

    push(0,y);
    push(
      width - 1,
      y
    );

  }


  const directions = [

    [1,0],
    [-1,0],
    [0,1],
    [0,-1]

  ];


  let head =
    0;


  while (
    head <
    queue.length
  ) {

    const index =
      queue[head++];


    const x =
      index %
      width;


    const y =
      Math.floor(
        index /
        width
      );


    const pixelIndex =
      index * 4;


    const distance =
      colorDistance(
        pixels[pixelIndex],
        pixels[pixelIndex + 1],
        pixels[pixelIndex + 2],

        background.r,
        background.g,
        background.b
      );


    if (
      distance > 48
    ) {

      continue;

    }


    pixels[
      pixelIndex + 3
    ] = 0;


    for (
      const [
        dx,
        dy
      ]
      of directions
    ) {

      push(
        x + dx,
        y + dy
      );

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


  const padding =
    16;


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


  /*
    Build a clean sticker border.
  */

  const mask =
    document.createElement(
      "canvas"
    );

  mask.width =
    output.width;

  mask.height =
    output.height;


  mask
    .getContext("2d")
    .drawImage(
      cropped,
      padding,
      padding
    );


  const border =
    document.createElement(
      "canvas"
    );

  border.width =
    output.width;

  border.height =
    output.height;


  const borderContext =
    border.getContext(
      "2d"
    );


  borderContext.fillStyle =
    isLight(
      (
        palettes[
          data.appearance
        ] ||
        palettes.forest
      ).background
    )

      ? "#FFFDF8"

      : "#F6F0E7";


  borderContext.fillRect(
    0,
    0,
    border.width,
    border.height
  );


  borderContext.globalCompositeOperation =
    "destination-in";


  borderContext.drawImage(
    mask,
    0,
    0
  );


  borderContext.globalCompositeOperation =
    "source-over";


  const radius =
    4;


  for (
    let y = -radius;
    y <= radius;
    y++
  ) {

    for (
      let x = -radius;
      x <= radius;
      x++
    ) {

      if (
        x*x +
        y*y <=
        radius*radius
      ) {

        outputContext.drawImage(
          border,
          x,
          y
        );

      }

    }

  }


  outputContext.drawImage(
    cropped,
    padding,
    padding
  );


  return output.toDataURL(
    "image/png"
  );

}


/* =========================================================
   REMINDERS
========================================================= */

function categoryField(
  value = "Personal"
) {

  const categories = [
    "Work",
    "Personal",
    "Finance",
    "Learning"
  ];


  return `
    <div class="field">

      <label for="category">
        Category
      </label>

      <select
        id="category"
        name="category"
      >

        ${
          categories
            .map(
              category =>
                `
                <option
                  ${
                    category ===
                    value
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
  iso
) {

  if (!iso) {
    return "";
  }

  const date =
    new Date(iso);

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


  return `
    ${date.getFullYear()}-
    ${pad(date.getMonth()+1)}-
    ${pad(date.getDate())}T
    ${pad(date.getHours())}:
    ${pad(date.getMinutes())}
  `.replace(/\s/g,"");

}


function renderReminders() {

  const element =
    document.getElementById(
      "reminders"
    );


  const sorted =
    [
      ...data.reminders
    ].sort(
      (a,b) =>
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
          Your reminders stay in this browser.
          The watcher checks while LAYRAAZ is open.
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
        sorted.length

          ? sorted
              .map(
                reminderRecord
              )
              .join("")

          : `
            <article class="card empty">
              No reminders yet.
              Add one and let the little bell keep watch.
            </article>
          `
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
          data-done-reminder="${esc(
            reminder.id
          )}"
          title="Done"
          type="button"
        >

          ${
            reminder.completed
              ? ICONS.check
              : ICONS.spark
          }

        </button>


        <button
          class="icon-action"
          data-edit-reminder="${esc(
            reminder.id
          )}"
          title="Edit"
          type="button"
        >
          ${ICONS.edit}
        </button>


        <button
          class="icon-action"
          data-delete-reminder="${esc(
            reminder.id
          )}"
          title="Delete"
          type="button"
        >
          ${ICONS.trash}
        </button>

      </div>

    </article>

  `;

}


/* =========================================================
   TO-DOS
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
          Only four categories:
          Work, Personal, Finance and Learning.
        </p>

      </div>


      <button
        class="primary-button"
        data-add="todo"
        type="button"
      >
        + Add To-do
      </button>

    </div>


    <div class="records-grid">

      ${
        data.todos.length

          ? data.todos
              .map(
                todoRecord
              )
              .join("")

          : `
            <article class="card empty">
              No tasks yet.
              Empty checkboxes are waiting patiently.
            </article>
          `
      }

    </div>

  `;

}


function todoRecord(
  todo
) {

  return `

    <article
      class="
        card
        record
        ${
          todo.done
            ? "completed"
            : ""
        }
      "
    >

      <div class="record-left">


        <button
          class="
            todo-check
            ${
              todo.done
                ? "checked"
                : ""
            }
          "
          data-toggle-todo="${esc(
            todo.id
          )}"
          title="${
            todo.done
              ? "Mark incomplete"
              : "Mark complete"
          }"
          type="button"
        >

          ${
            todo.done
              ? ICONS.check
              : ""
          }

        </button>


        <div>

          <div class="record-title">
            ${esc(
              todo.title
            )}
          </div>

          <div class="record-desc">

            ${esc(
              todo.category ||
              "Personal"
            )}

            ${
              todo.due
                ? ` · ${esc(todo.due)}`
                : ""
            }

          </div>

        </div>

      </div>


      <div class="record-actions">

        <button
          class="icon-action"
          data-edit-todo="${esc(
            todo.id
          )}"
          title="Edit"
          type="button"
        >
          ${ICONS.edit}
        </button>


        <button
          class="icon-action"
          data-delete-todo="${esc(
            todo.id
          )}"
          title="Delete"
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
          Keep the destination visible,
          then move the percentage.
        </p>

      </div>


      <button
        class="primary-button"
        data-add="goal"
        type="button"
      >
        + Add Goal
      </button>

    </div>


    <div class="goals-grid">

      ${
        data.goals.length

          ? data.goals
              .map(
                goalRecord
              )
              .join("")

          : `
            <article
              class="card empty"
              style="grid-column:1/-1"
            >
              No goals yet.
              Give the empty space a target.
            </article>
          `
      }

    </div>

  `;

}


function goalRecord(
  goal
) {

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
            type="button"
          >
            ${ICONS.edit}
          </button>


          <button
            class="icon-action"
            data-delete-goal="${esc(
              goal.id
            )}"
            type="button"
          >
            ${ICONS.trash}
          </button>

        </div>

      </div>


      <div
        style="
          font-size:11px;
          opacity:.6;
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
        ${progress}% complete
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
    ].sort(
      (a,b) =>
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
          Your thoughts, ideas,
          reminders and tiny epiphanies.
        </p>

      </div>


      <button
        class="primary-button"
        data-add="note"
        type="button"
      >
        + New Note
      </button>

    </div>


    <div class="notes-grid">

      ${
        notes.length

          ? notes
              .map(
                noteRecord
              )
              .join("")

          : `
            <article
              class="card empty"
              style="grid-column:1/-1"
            >
              No notes yet.
              The page is blank on purpose.
            </article>
          `
      }

    </div>

  `;

}


function noteRecord(
  note
) {

  return `

    <article class="card note-card">

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
            type="button"
          >
            ${ICONS.edit}
          </button>


          <button
            class="icon-action"
            data-delete-note="${esc(
              note.id
            )}"
            type="button"
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


  const list =
    [
      ...data.notifications
    ].sort(
      (a,b) =>
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
          Notification history
          and browser permission controls.
        </p>

      </div>


      <button
        class="secondary-button"
        id="enableNotificationsPage"
        type="button"
      >
        Enable Browser Notifications
      </button>

    </div>


    <div class="records-grid">

      ${
        list.length

          ? list
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
                      type="button"
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

          : `
            <article class="card empty">
              No notifications yet.
            </article>
          `
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
   APPEARANCE
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
          Each uses only Background,
          Main and Font.
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
            ([key,palette]) => `

              <button
                class="
                  palette-card
                  ${
                    data.appearance === key
                      ? "selected"
                      : ""
                  }
                "
                data-palette="${key}"
                type="button"
                style="
                  --swatch-bg:${palette.background};
                  --swatch-main:${palette.main};
                  --swatch-font:${palette.font};
                "
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
   NOTIFICATION SYSTEM
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


function requestNotificationPermission() {

  if (
    !window.Notification
  ) {

    toast(
      "This browser does not support notifications."
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

            : "Notifications were not enabled."
        );

        return (
          permission ===
          "granted"
        );

      }
    );

}


function showBrowserNotification(
  title,
  body,
  sticker
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
            sticker ||
            undefined,

          badge:
            sticker ||
            undefined,

          tag:
            `layraaz_${Date.now()}`,

          renotify:
            true

        }
      );


    notification.onclick =
      () =>
        window.focus();

  } catch (
    error
  ) {

    console.warn(
      error
    );

  }

}


/* =========================================================
   PERSONALITY
========================================================= */

function personalityMessage(
  reminder
) {

  const personality =
    (
      data.character
        .personality ||
      ""
    ).toLowerCase();


  const name =
    esc(
      data.profile.name ||
      "there"
    );


  const task =
    esc(
      reminder.title
    );


  /*
    Firm + caring
  */

  if (
    /firm|strict|command/
      .test(
        personality
      ) &&

    /caring|sweet|kind/
      .test(
        personality
      )
  ) {

    return `
      ${name},
      ${task} is due.
      Handle it now.
      I'll be nice about it,
      but I am still watching.
    `;

  }


  /*
    Firm
  */

  if (
    /firm|strict|command/
      .test(
        personality
      )
  ) {

    return `
      ${name}.
      ${task} is due.
      Do it now.
    `;

  }


  /*
    Caring
  */

  if (
    /caring|sweet|kind/
      .test(
        personality
      )
  ) {

    return `
      Tiny reminder,
      ${name}.
      You wanted to do
      ${task}.
      Let's take care of it now. ♡
    `;

  }


  /*
    Intelligent
  */

  if (
    /intelligent|smart|logical/
      .test(
        personality
      )
  ) {

    return `
      A concise nudge,
      ${name}:
      ${task} is due.
      One action now keeps
      the rest of the day cleaner.
    `;

  }


  /*
    Romantic
  */

  if (
    /romantic/
      .test(
        personality
      )
  ) {

    return `
      ${name},
      your little reminder
      has arrived:
      ${task}.

      Come on,
      let's get it done. ♡
    `;

  }


  /*
    Default
  */

  return `
    A gentle nudge,
    ${name}.
    ${task} is due now.
  `;

}


/* =========================================================
   FLOATING REMINDER COMPANION
========================================================= */

function showReminderCompanion(
  reminder
) {

  if (
    !data.character.sticker
  ) {

    return;

  }


  const root =
    document.getElementById(
      "reminderCompanion"
    );


  dueCompanionId =
    reminder.id;


  root.classList.remove(
    "hidden"
  );


  root.innerHTML = `

    <img
      class="
        companion-sticker
        pose-peek
      "
      src="${data.character.sticker}"
      alt="Character"
    >


    <div class="speech-bubble">

      <div>

        ${personalityMessage(
          reminder
        )}

      </div>


      <div class="speech-actions">

        <button
          type="button"
          data-companion-done="${esc(
            reminder.id
          )}"
        >
          DONE
        </button>


        <button
          type="button"
          data-companion-snooze="${esc(
            reminder.id
          )}"
        >
          SNOOZE 5 MIN
        </button>

      </div>

    </div>

  `;

}


function hideReminderCompanion() {

  dueCompanionId =
    null;

  document
    .getElementById(
      "reminderCompanion"
    )
    .classList.add(
      "hidden"
    );

}


/* =========================================================
   REMINDER ACTIONS
========================================================= */

function completeReminder(
  id
) {

  const reminder =
    data.reminders.find(
      item =>
        item.id === id
    );


  if (!reminder) {
    return;
  }


  reminder.completed =
    true;


  saveData();

  hideReminderCompanion();

  renderReminders();

  renderDashboard();

  toast(
    "Reminder marked done."
  );

}


function snoozeReminder(
  id
) {

  const reminder =
    data.reminders.find(
      item =>
        item.id === id
    );


  if (!reminder) {
    return;
  }


  reminder.when =
    new Date(
      Date.now() +
      5 * 60 * 1000
    ).toISOString();


  reminder.completed =
    false;


  reminder.lastNotifiedAt =
    null;


  saveData();

  hideReminderCompanion();

  renderReminders();

  renderDashboard();

  toast(
    "Snoozed for 5 minutes."
  );

}


/* =========================================================
   REMINDER WATCHER
========================================================= */

function checkDueReminders() {

  const now =
    Date.now();


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


    /*
      Do not repeatedly fire the
      same reminder every 15 seconds.
    */

    if (
      now - last <
      12 * 60 * 60 * 1000
    ) {

      continue;

    }


    const body =
      `${reminder.title} is due now.
       · ${reminder.category || "Personal"}`;


    showBrowserNotification(
      "LAYRAAZ Reminder",
      body,
      data.character.sticker
    );


    addNotification(
      "Reminder due",
      body
    );


    reminder.lastNotifiedAt =
      new Date()
        .toISOString();


    showReminderCompanion(
      reminder
    );

  }


  saveData();


  if (
    activeSection ===
    "reminders"
  ) {

    renderReminders();

  }


  renderDashboard();

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
    .addEventListener(
      "click",
      closeModal
    );


  document
    .getElementById(
      "modalBackdrop"
    )
    .addEventListener(
      "click",
      event => {

        if (
          event.target.id ===
          "modalBackdrop"
        ) {

          closeModal();

        }

      }
    );


  const form =
    document.getElementById(
      "modalForm"
    );


  if (form) {

    form.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        onSave(
          new FormData(
            form
          )
        );

      }
    );

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

            <label
              for="when"
            >
              Date & time
            </label>

            <input
              id="when"
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


        if (existing) {

          Object.assign(
            existing,
            {

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
                null

            }
          );

        } else {

          data.reminders.push({

            id:
              uid(
                "reminder"
              ),

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
              null

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

  if (
    type ===
    "todo"
  ) {

    const todo =
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
            todo.title ||
              "",
            "text",
            true
          )}


          ${categoryField(
            todo.category
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
              uid(
                "todo"
              ),

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

  if (
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

            <label
              for="progress"
            >
              Progress %
            </label>

            <input
              id="progress"
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
              uid(
                "goal"
              ),

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

  if (
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

            <label
              for="content"
            >
              Note
            </label>

            <textarea
              id="content"
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
              uid(
                "note"
              ),

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
    data[collection]
      .findIndex(
        item =>
          item.id === id
      );


  if (
    index < 0
  ) {

    return;

  }


  data[collection]
    .splice(
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
    const todo
    of data.todos
  ) {

    if (
      `${todo.title} ${todo.category}`
        .toLowerCase()
        .includes(search)
    ) {

      results.push({

        type:
          "To-do",

        title:
          todo.title,

        meta:
          todo.category,

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
            70
          ),

        section:
          "notes"

      });

    }

  }


  box.innerHTML =

    results.length

      ? results
          .slice(
            0,
            12
          )
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

      : `
        <div class="empty">
          Nothing found.
        </div>
      `;


  box.classList.remove(
    "hidden"
  );

}


function paletteName(
  key
) {

  return (
    palettes[key]?.name ||
    "Palette"
  );

}


/* =========================================================
   TOAST
========================================================= */

function toast(
  message
) {

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
      () =>
        element.classList.remove(
          "show"
        ),
      2300
    );

}


/* =========================================================
   TEST CHARACTER
========================================================= */

async function sendTestNotification() {

  const allowed =
    await requestNotificationPermission();


  if (!allowed) {
    return;
  }


  showBrowserNotification(

    "LAYRAAZ",

    `${data.character.name || "Character"} is here. ✦`,

    data.character.sticker

  );


  /*
    Also show the in-page companion
    so you can test the character's
    dialogue and buttons.
  */

  showReminderCompanion({

    id:
      "test",

    title:
      "a tiny test reminder",

    category:
      "Character"

  });


  addNotification(
    "Character test",
    "Browser notification sent with the sticker icon."
  );

}


/* =========================================================
   GLOBAL EVENTS
========================================================= */

function bindEvents() {

  setIconElements();


  /* Sidebar */

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


        const collapsed =
          sidebar.classList.toggle(
            "collapsed"
          );


        document
          .getElementById(
            "sidebarToggle"
          )
          .setAttribute(
            "aria-expanded",
            String(!collapsed)
          );


        document
          .getElementById(
            "sidebarToggle"
          )
          .setAttribute(
            "aria-label",
            collapsed
              ? "Open sidebar"
              : "Close sidebar"
          );

      }
    );


  /* Sidebar navigation */

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


  /* Top notifications */

  document
    .getElementById(
      "topNotificationButton"
    )
    .addEventListener(
      "click",
      () =>
        navigate(
          "notifications"
        )
    );


  /* Top profile */

  document
    .getElementById(
      "profileMiniButton"
    )
    .addEventListener(
      "click",
      () =>
        navigate(
          "profile"
        )
    );


  /* Search */

  document
    .getElementById(
      "globalSearch"
    )
    .addEventListener(
      "input",
      event =>
        searchAll(
          event.target.value
        )
    );


  /*
    One global click handler.
    This prevents each re-render
    from creating another copy
    of the same event listeners.
  */

  document.addEventListener(
    "click",
    event => {


      /* Navigation */

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


      /* Add */

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


      /* Palette */

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

        renderDashboard();

        toast(
          `${paletteName(
            data.appearance
          )} selected.`
        );

        return;

      }


      /* Search */

      const search =
        event.target.closest(
          "[data-search-section]"
        );

      if (search) {

        document.getElementById(
          "globalSearch"
        ).value =
          "";

        document
          .getElementById(
            "searchResults"
          )
          .classList.add(
            "hidden"
          );

        navigate(
          search.dataset
            .searchSection
        );

        return;

      }


      /* Read notification */

      const read =
        event.target.closest(
          "[data-read-notification]"
        );

      if (read) {

        const notification =
          data.notifications.find(
            item =>
              item.id ===
              read.dataset
                .readNotification
          );


        if (notification) {

          notification.read =
            true;

          saveData();

          renderNotifications();

          updateTopbar();

        }

        return;

      }


      /* Delete reminder */

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


      /* Edit reminder */

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


      /* Done reminder */

      const doneReminder =
        event.target.closest(
          "[data-done-reminder]"
        );

      if (doneReminder) {

        completeReminder(
          doneReminder.dataset
            .doneReminder
        );

        return;

      }


      /* Delete todo */

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


      /* Edit todo */

      const editTodo =
        event.target.closest(
          "[data-edit-todo]"
        );

      if (editTodo) {

        const todo =
          data.todos.find(
            item =>
              item.id ===
              editTodo.dataset
                .editTodo
          );


        if (todo) {

          openAdd(
            "todo",
            todo
          );

        }

        return;

      }


      /* Toggle todo */

      const toggleTodo =
        event.target.closest(
          "[data-toggle-todo]"
        );

      if (toggleTodo) {

        const todo =
          data.todos.find(
            item =>
              item.id ===
              toggleTodo.dataset
                .toggleTodo
          );


        if (todo) {

          todo.done =
            !todo.done;

          saveData();

          renderTodos();

          renderDashboard();

        }

        return;

      }


      /* Delete goal */

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


      /* Edit goal */

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


      /* Delete note */

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


      /* Edit note */

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


      /* Companion DONE */

      const companionDone =
        event.target.closest(
          "[data-companion-done]"
        );

      if (companionDone) {

        completeReminder(
          companionDone.dataset
            .companionDone
        );

        return;

      }


      /* Companion SNOOZE */

      const companionSnooze =
        event.target.closest(
          "[data-companion-snooze]"
        );

      if (companionSnooze) {

        /*
          Test notification is not
          a real reminder.
        */

        if (
          companionSnooze.dataset
            .companionSnooze ===
          "test"
        ) {

          hideReminderCompanion();

          toast(
            "Test notification closed."
          );

          return;

        }


        snoozeReminder(
          companionSnooze.dataset
            .companionSnooze
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

  setIconElements();

  bindEvents();

  renderSection(
    "dashboard"
  );

  startReminderWatcher();


  /*
    If an older version stored
    only the full character image,
    convert it once.
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
