const STORAGE_KEY = 'layraazStateV3';


const PALETTES = {

  forest: {
    name: 'Palette 1',
    background: '#1D251C',
    main: '#101411',
    font: '#D0D4CE'
  },

  butter: {
    name: 'Palette 2',
    background: '#F3E7A3',
    main: '#8CB8D0',
    font: '#4A2C20'
  },

  almond: {
    name: 'Palette 3',
    background: '#E8D8C3',
    main: '#8DBFA9',
    font: '#8E2636'
  },

  sage: {
    name: 'Palette 4',
    background: '#B8C5B1',
    main: '#6D2026',
    font: '#3B2922'
  },

  navy: {
    name: 'Palette 5',
    background: '#111D38',
    main: '#C8A85C',
    font: '#F5F1E8'
  },

  champagne: {
    name: 'Palette 6',
    background: '#d54c15',
    main: '#8db6c7',
    font: '#f9e8d4'
  },

  gunmetal: {
    name: 'Palette 7',
    background: '#1e1d1d',
    main: '#5a4d41',
    font: '#e5ded2'
  },

  cadet: {
    name: 'Palette 8',
    background: '#943131',
    main: '#d9bda6',
    font: '#bad2da'
  },

  pink: {
    name: 'Palette 9',
    background: '#7d929e',
    main: '#dbd4cc',
    font: '#0f3b59'
  },

  lavender: {
    name: 'Palette 10',
    background: '#BCC2F4',
    main: '#B0BC68',
    font: '#FFFecd'
  }

};


const DEFAULT = {

  profile: {

    name: 'Laya',

    dob: '2002-08-28',

    mbti: 'INTJ',

    profession:
      'Executive Assistant to Terminal Head',

    strengths:
      'Ambitious, self-motivated, hard-working',

    weaknesses:
      'Socialising, procrastination',

    skills:
      'Singer, crocheter, poet, Kuchipudi dancer',

    bio:
      'Playback singer. Sang in a movie. Loves travelling and hill stations.',

    business:
      'Edible Cutlery Business',

    businessTimeline:
      '2 years',

    favoriteColors:
      'Forest Green, Charcoal Black, Silver',

    jewellery:
      'Silver Jewellery',

    skin:
      'Sensitive Skin',

    body:
      'Rectangular Body',

    height:
      "5'1\"",

    family:
      '4',

    music:
      'Melody',

    food:
      'Dahi Puri',

    beverages:
      'Buttermilk',

    bloodGroup:
      '',

    animal:
      '',

    bird:
      '',

    photo:
      ''

  },


  reminders: [],

  todos: [],

  goals: [],

  notes: [],

  notifications: [],


  character: {

    name:
      'Character',

    personality:
      'Calm, intelligent, firm and caring.',

    image:
      ''

  },


  appearance: {

    palette:
      'forest'

  },


  lastSection:
    'profile'

};


let data = load();

let currentSection =
  data.lastSection || 'profile';

let activeReminderId =
  null;


/* =========================
   DATA
========================= */

function deepMerge(base, saved) {

  if (
    !saved ||
    typeof saved !== 'object'
  ) {
    return base;
  }

  const out = {
    ...base,
    ...saved
  };

  for (
    const key of Object.keys(base)
  ) {

    if (
      base[key] &&
      typeof base[key] === 'object' &&
      !Array.isArray(base[key]) &&
      saved[key]
    ) {

      out[key] =
        deepMerge(
          base[key],
          saved[key]
        );

    }

  }

  return out;
}


function load() {

  try {

    const raw =
      localStorage.getItem(
        STORAGE_KEY
      );

    const old =
      raw
        ? JSON.parse(raw)
        : null;

    return deepMerge(
      DEFAULT,
      old
    );

  } catch {

    return structuredClone(
      DEFAULT
    );

  }

}


function save() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );

  applyPalette();

}


/* =========================
   HELPERS
========================= */

function esc(value = '') {

  return String(value).replace(
    /[&<>'"]/g,
    character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    })[character]
  );

}


function id() {

  return crypto.randomUUID
    ? crypto.randomUUID()
    : Date.now().toString(36) +
      Math.random()
        .toString(36)
        .slice(2);

}


function ageFromDob(dob) {

  if (!dob) {
    return '';
  }

  const date =
    new Date(
      dob + 'T00:00:00'
    );

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return '';
  }

  const now =
    new Date();

  let age =
    now.getFullYear() -
    date.getFullYear();

  if (
    now.getMonth() <
      date.getMonth() ||

    (
      now.getMonth() ===
      date.getMonth() &&
      now.getDate() <
        date.getDate()
    )
  ) {

    age--;

  }

  return age;

}


function fmtDate(value) {

  if (!value) {
    return 'No date';
  }

  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return value;

  }

  return date.toLocaleDateString(
    undefined,
    {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }
  );

}


function fmtDateTime(value) {

  if (!value) {
    return 'No date';
  }

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
    undefined,
    {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }
  );

}


/* =========================
   APPEARANCE
========================= */

function applyPalette() {

  const palette =
    PALETTES[
      data.appearance.palette
    ] ||
    PALETTES.forest;

  document.documentElement
    .style
    .setProperty(
      '--bg',
      palette.background
    );

  document.documentElement
    .style
    .setProperty(
      '--main',
      palette.main
    );

  document.documentElement
    .style
    .setProperty(
      '--font',
      palette.font
    );

}


function toast(message) {

  const element =
    document.getElementById(
      'toast'
    );

  element.textContent =
    message;

  element.classList.add(
    'show'
  );

  clearTimeout(
    toast.timer
  );

  toast.timer =
    setTimeout(
      () => {
        element.classList.remove(
          'show'
        );
      },
      2200
    );

}


/* =========================
   NAVIGATION
========================= */

function navigate(section) {

  currentSection =
    section;

  data.lastSection =
    section;

  save();

  document
    .querySelectorAll(
      '.nav-item'
    )
    .forEach(button => {

      button.classList.toggle(
        'active',
        button.dataset.section ===
          section
      );

    });


  const titles = {

    profile:
      'Profile',

    dashboard:
      'Dashboard',

    reminders:
      'Reminders',

    todos:
      'To-do List',

    goals:
      'Goals',

    notes:
      'Notes',

    notifications:
      'Notifications',

    appearance:
      'Appearance',

    character:
      'Character'

  };


  document.getElementById(
    'pageTitle'
  ).textContent =
    titles[section] ||
    'LAYRAAZ';


  renderSection();

}


function renderSection() {

  const container =
    document.getElementById(
      'appContent'
    );


  const renderers = {

    profile:
      renderProfile,

    dashboard:
      renderDashboard,

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
    renderers[
      currentSection
    ];


  container.innerHTML =
    renderer
      ? renderer()
      : '';


  bindDynamic();

}


/* =========================
   PROFILE
========================= */

function renderProfile() {

  const profile =
    data.profile;


  return `

    <div class="section-head">

      <div>

        <h2>Your profile</h2>

        <p>
          Everything here is editable
          and saved in this browser.
        </p>

      </div>

    </div>


    <div class="profile-layout">


      <div class="card">

        <div class="photo-frame">

          ${
            profile.photo

              ? `
                <img
                  src="${profile.photo}"
                  alt="Profile photo"
                >
              `

              : `
                <div class="placeholder">
                  No profile picture yet.
                </div>
              `
          }

        </div>


        <div class="actions">

          <button
            class="btn"
            data-action="profile-photo"
          >
            Upload picture
          </button>


          ${
            profile.photo

              ? `
                <button
                  class="btn danger"
                  data-action="profile-photo-remove"
                >
                  Remove
                </button>
              `

              : ''
          }

        </div>

      </div>


      <form
        class="card"
        id="profileForm"
      >

        <div class="form-grid">

          ${field(
            'Name',
            'name',
            profile.name
          )}

          ${field(
            'Date of Birth',
            'dob',
            profile.dob,
            'date'
          )}

          ${field(
            'Age',
            'age',
            ageFromDob(profile.dob),
            'text',
            'readonly'
          )}

          ${field(
            'MBTI',
            'mbti',
            profile.mbti
          )}

          ${field(
            'Profession',
            'profession',
            profile.profession
          )}

          ${field(
            'Strengths',
            'strengths',
            profile.strengths
          )}

          ${field(
            'Weaknesses',
            'weaknesses',
            profile.weaknesses
          )}

          ${field(
            'Skills',
            'skills',
            profile.skills
          )}

          ${field(
            'Business Goal',
            'business',
            profile.business
          )}

          ${field(
            'Timeline',
            'businessTimeline',
            profile.businessTimeline
          )}

          ${field(
            'Favourite Colours',
            'favoriteColors',
            profile.favoriteColors
          )}

          ${field(
            'Favourite Jewellery',
            'jewellery',
            profile.jewellery
          )}

          ${field(
            'Skin',
            'skin',
            profile.skin
          )}

          ${field(
            'Body Type',
            'body',
            profile.body
          )}

          ${field(
            'Height',
            'height',
            profile.height
          )}

          ${field(
            'Family',
            'family',
            profile.family
          )}

          ${field(
            'Favourite Music',
            'music',
            profile.music
          )}

          ${field(
            'Favourite Food',
            'food',
            profile.food
          )}

          ${field(
            'Favourite Beverages',
            'beverages',
            profile.beverages
          )}

          ${field(
            'Blood Group',
            'bloodGroup',
            profile.bloodGroup
          )}

          ${field(
            'Favourite Animal',
            'animal',
            profile.animal
          )}

          ${field(
            'Favourite Bird',
            'bird',
            profile.bird
          )}

          ${field(
            'Bio',
            'bio',
            profile.bio,
            'textarea',
            'class="full"'
          )}

        </div>


        <div class="actions">

          <button
            class="btn primary"
            type="submit"
          >
            Save profile
          </button>

        </div>

      </form>

    </div>

  `;

}


function field(
  label,
  name,
  value,
  type = 'text',
  extra = ''
) {

  if (
    type === 'textarea'
  ) {

    return `

      <div class="field full">

        <label>
          ${label}
        </label>

        <textarea
          name="${name}"
          ${extra}
        >${esc(value)}</textarea>

      </div>

    `;

  }


  return `

    <div class="field">

      <label>
        ${label}
      </label>

      <input
        name="${name}"
        type="${type}"
        value="${esc(value)}"
        ${extra}
      >

    </div>

  `;

}


/* =========================
   DASHBOARD
   READ ONLY
========================= */

function renderDashboard() {

  const openTasks =
    data.todos.filter(
      task => !task.done
    );


  const today =
    new Date()
      .toISOString()
      .slice(0, 10);


  const todayTasks =
    openTasks.filter(
      task => task.date === today
    );


  const upcomingReminders =
    [...data.reminders]

      .filter(
        reminder =>
          !reminder.done &&
          new Date(
            reminder.datetime
          ) > new Date()
      )

      .sort(
        (a, b) =>
          new Date(a.datetime) -
          new Date(b.datetime)
      );


  const activeGoals =
    data.goals.filter(
      goal => !goal.done
    );


  const latestNote =
    [...data.notes]
      .sort(
        (a, b) =>
          new Date(b.updatedAt) -
          new Date(a.updatedAt)
      )[0];


  return `

    <div class="section-head">

      <div>

        <h2>Dashboard</h2>

        <p>
          A quiet overview of what
          you have already saved.
        </p>

      </div>

    </div>


    <div class="stats">


      <div class="stat">

        <div class="stat-number">
          ${openTasks.length}
        </div>

        <div class="stat-label">
          Open tasks
        </div>

      </div>


      <div class="stat">

        <div class="stat-number">
          ${
            data.reminders.filter(
              reminder => !reminder.done
            ).length
          }
        </div>

        <div class="stat-label">
          Active reminders
        </div>

      </div>


      <div class="stat">

        <div class="stat-number">
          ${activeGoals.length}
        </div>

        <div class="stat-label">
          Active goals
        </div>

      </div>


      <div class="stat">

        <div class="stat-number">
          ${data.notes.length}
        </div>

        <div class="stat-label">
          Notes
        </div>

      </div>


    </div>


    <div
      class="dashboard-grid"
      style="margin-top:18px"
    >


      <div class="card">

        <h3>
          Today
        </h3>

        <p>
          ${
            new Date().toLocaleDateString(
              undefined,
              {
                weekday:'long',
                day:'numeric',
                month:'long',
                year:'numeric'
              }
            )
          }
        </p>


        <div class="dotted"></div>


        <h3 style="margin-top:20px">
          Today's tasks
        </h3>


        ${
          todayTasks.length

            ? `

              <div class="dashboard-list">

                ${
                  todayTasks.map(
                    task => `

                      <div class="dashboard-line">

                        <strong>
                          ${esc(task.title)}
                        </strong>

                        <div class="item-meta">
                          ${esc(
                            task.category ||
                            'Personal'
                          )}
                        </div>

                      </div>

                    `
                  ).join('')
                }

              </div>

            `

            : `

              <div class="empty">
                Nothing saved for today.
              </div>

            `
        }

      </div>


      <div class="card">

        <h3>
          Next reminder
        </h3>


        ${
          upcomingReminders[0]

            ? `

              <div class="dashboard-line">

                <strong>
                  ${esc(
                    upcomingReminders[0].title
                  )}
                </strong>

                <div class="item-meta">

                  ${fmtDateTime(
                    upcomingReminders[0].datetime
                  )}

                  ·

                  ${esc(
                    upcomingReminders[0].category ||
                    'Personal'
                  )}

                </div>

              </div>

            `

            : `

              <div class="empty">
                No upcoming reminders.
              </div>

            `
        }


        <h3 style="margin-top:20px">
          Latest note
        </h3>


        ${
          latestNote

            ? `

              <div class="dashboard-line">

                <strong>
                  ${esc(
                    latestNote.title
                  )}
                </strong>

                <div class="item-meta">

                  Updated
                  ${fmtDateTime(
                    latestNote.updatedAt
                  )}

                </div>

                <p>

                  ${esc(
                    latestNote.body
                  ).slice(0,180)}

                  ${
                    latestNote.body.length > 180
                      ? '…'
                      : ''
                  }

                </p>

              </div>

            `

            : `

              <div class="empty">
                No notes saved yet.
              </div>

            `
        }

      </div>


    </div>


    <div
      class="card"
      style="margin-top:18px"
    >

      <h3>
        Goals
      </h3>


      ${
        activeGoals.length

          ? `

            <div class="dashboard-list">

              ${
                activeGoals
                  .slice(0,5)
                  .map(
                    goal => `

                      <div class="dashboard-line">

                        <strong>
                          ${esc(goal.title)}
                        </strong>


                        <div class="progress">

                          <span
                            style="
                              width:${Math.max(
                                0,
                                Math.min(
                                  100,
                                  Number(
                                    goal.progress
                                  ) || 0
                                )
                              )}%
                            "
                          ></span>

                        </div>


                        <div class="item-meta">

                          ${
                            Number(
                              goal.progress
                            ) || 0
                          }% complete

                        </div>

                      </div>

                    `
                  )
                  .join('')
              }

            </div>

          `

          : `

            <div class="empty">
              No active goals saved yet.
            </div>

          `
      }

    </div>

  `;

}


/* =========================
   REMINDERS
========================= */

function renderReminders() {

  return `

    <div class="section-head">

      <div>

        <h2>
          Reminders
        </h2>

        <p>
          Create, edit and manage
          reminders here.
          The Dashboard only displays them.
        </p>

      </div>


      <button
        class="btn primary"
        data-action="new-reminder"
      >
        + Add reminder
      </button>

    </div>


    <div class="card">

      ${
        data.reminders.length

          ? `

            <div class="list">

              ${
                [...data.reminders]

                  .sort(
                    (a,b) =>
                      new Date(a.datetime) -
                      new Date(b.datetime)
                  )

                  .map(
                    reminder => `

                      <div class="list-item">

                        <div class="item-main">

                          <div class="item-title">
                            ${esc(
                              reminder.title
                            )}
                          </div>

                          <div class="item-meta">

                            ${fmtDateTime(
                              reminder.datetime
                            )}

                            ·

                            ${esc(
                              reminder.category ||
                              'Personal'
                            )}

                            ${
                              reminder.done
                                ? ' · Done'
                                : ''
                            }

                          </div>

                        </div>


                        <div class="item-actions">

                          <button
                            class="btn"
                            data-action="toggle-reminder"
                            data-id="${reminder.id}"
                          >
                            ${
                              reminder.done
                                ? 'Undo'
                                : 'Done'
                            }
                          </button>


                          <button
                            class="btn"
                            data-action="edit-reminder"
                            data-id="${reminder.id}"
                          >
                            Edit
                          </button>


                          <button
                            class="btn danger"
                            data-action="delete-reminder"
                            data-id="${reminder.id}"
                          >
                            Delete
                          </button>

                        </div>

                      </div>

                    `
                  )
                  .join('')
              }

            </div>

          `

          : `

            <div class="empty">
              No reminders saved yet.
            </div>

          `
      }

    </div>

  `;

}


/* =========================
   TO-DO LIST
========================= */

function renderTodos() {

  return `

    <div class="section-head">

      <div>

        <h2>
          To-do List
        </h2>

        <p>
          Keep tasks here.
          The Dashboard reflects
          whatever you save.
        </p>

      </div>


      <button
        class="btn primary"
        data-action="new-todo"
      >
        + Add task
      </button>

    </div>


    <div class="card">

      ${
        data.todos.length

          ? `

            <div class="list">

              ${
                [...data.todos]

                  .sort(
                    (a,b) =>
                      (a.done - b.done) ||
                      String(a.date)
                        .localeCompare(
                          String(b.date)
                        )
                  )

                  .map(
                    task => `

                      <div
                        class="
                          list-item
                          task-row
                          ${task.done ? 'done' : ''}
                        "
                      >


                        <button
                          class="
                            check
                            ${task.done ? 'done' : ''}
                          "
                          data-action="toggle-todo"
                          data-id="${task.id}"
                        >
                          ${
                            task.done
                              ? '✓'
                              : ''
                          }
                        </button>


                        <div class="item-main">

                          <div class="item-title">

                            ${esc(
                              task.title
                            )}

                          </div>


                          <div class="item-meta">

                            ${
                              task.date
                                ? fmtDate(
                                    task.date
                                  ) + ' · '
                                : ''
                            }

                            ${esc(
                              task.category ||
                              'Personal'
                            )}

                          </div>

                        </div>


                        <div class="item-actions">

                          <button
                            class="btn"
                            data-action="edit-todo"
                            data-id="${task.id}"
                          >
                            Edit
                          </button>


                          <button
                            class="btn danger"
                            data-action="delete-todo"
                            data-id="${task.id}"
                          >
                            Delete
                          </button>

                        </div>


                      </div>

                    `
                  )
                  .join('')
              }

            </div>

          `

          : `

            <div class="empty">
              No tasks saved yet.
            </div>

          `
      }

    </div>

  `;

}


/* =========================
   GOALS
========================= */

function renderGoals() {

  return `

    <div class="section-head">

      <div>

        <h2>
          Goals
        </h2>

        <p>
          Set targets and track progress.
        </p>

      </div>


      <button
        class="btn primary"
        data-action="new-goal"
      >
        + Add goal
      </button>

    </div>


    <div class="grid grid-2">

      ${
        data.goals.length

          ? data.goals
              .map(
                goal => `

                  <div class="card">

                    <h3>
                      ${esc(
                        goal.title
                      )}
                    </h3>


                    <p>
                      ${esc(
                        goal.description ||
                        'No description.'
                      )}
                    </p>


                    <div class="progress">

                      <span
                        style="
                          width:${Math.max(
                            0,
                            Math.min(
                              100,
                              Number(
                                goal.progress
                              ) || 0
                            )
                          )}%
                        "
                      ></span>

                    </div>


                    <div class="item-meta">

                      ${
                        Number(
                          goal.progress
                        ) || 0
                      }% complete

                      ${
                        goal.deadline
                          ? ' · ' +
                            fmtDate(
                              goal.deadline
                            )
                          : ''
                      }

                    </div>


                    <div class="actions">

                      <button
                        class="btn"
                        data-action="edit-goal"
                        data-id="${goal.id}"
                      >
                        Edit
                      </button>


                      <button
                        class="btn danger"
                        data-action="delete-goal"
                        data-id="${goal.id}"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                `
              )
              .join('')

          : `

              <div class="card empty">
                No goals saved yet.
              </div>

            `
      }

    </div>

  `;

}


/* =========================
   NOTES
========================= */

function renderNotes() {

  return `

    <div class="section-head">

      <div>

        <h2>
          Notes
        </h2>

        <p>
          Write and keep notes
          with their dates.
        </p>

      </div>


      <button
        class="btn primary"
        data-action="new-note"
      >
        + Add note
      </button>

    </div>


    <div class="grid grid-2">

      ${
        data.notes.length

          ? data.notes
              .map(
                note => `

                  <article class="card">

                    <h3>
                      ${esc(
                        note.title
                      )}
                    </h3>


                    <div class="item-meta">

                      ${fmtDateTime(
                        note.updatedAt
                      )}

                    </div>


                    <p>

                      ${esc(
                        note.body
                      ).replace(
                        /\n/g,
                        '<br>'
                      )}

                    </p>


                    <div class="actions">

                      <button
                        class="btn"
                        data-action="edit-note"
                        data-id="${note.id}"
                      >
                        Edit
                      </button>


                      <button
                        class="btn danger"
                        data-action="delete-note"
                        data-id="${note.id}"
                      >
                        Delete
                      </button>

                    </div>

                  </article>

                `
              )
              .join('')

          : `

              <div class="card empty">
                No notes saved yet.
              </div>

            `
      }

    </div>

  `;

}


/* =========================
   NOTIFICATIONS
========================= */

function renderNotifications() {

  return `

    <div class="section-head">

      <div>

        <h2>
          Notifications
        </h2>

        <p>
          Your LAYRAAZ activity
          and reminder notices.
        </p>

      </div>


      <button
        class="btn"
        data-action="mark-notifications"
      >
        Mark all read
      </button>

    </div>


    <div class="card">

      ${
        data.notifications.length

          ? `

            <div class="list">

              ${
                data.notifications
                  .map(
                    notification => `

                      <div class="list-item">

                        <div class="item-main">

                          <div class="item-title">

                            ${esc(
                              notification.title
                            )}

                          </div>


                          <div class="item-meta">

                            ${fmtDateTime(
                              notification.createdAt
                            )}

                            ${
                              notification.read
                                ? ''
                                : ' · Unread'
                            }

                          </div>


                          <p>

                            ${esc(
                              notification.message
                            )}

                          </p>

                        </div>

                      </div>

                    `
                  )
                  .join('')
              }

            </div>

          `

          : `

            <div class="empty">
              No notifications yet.
            </div>

          `
      }

    </div>

  `;

}


/* =========================
   APPEARANCE
========================= */

function renderAppearance() {

  return `

    <div class="section-head">

      <div>

        <h2>
          Appearance
        </h2>

        <p>
          Choose one of the
          ten fixed palettes.
        </p>

      </div>

    </div>


    <div class="palette-grid">

      ${
        Object.entries(
          PALETTES
        )
        .map(
          ([key, palette]) => `

            <button
              class="
                palette
                ${
                  data.appearance.palette === key
                    ? 'selected'
                    : ''
                }
              "
              data-action="palette"
              data-id="${key}"
              style="
                --pbg:${palette.background};
                --pmain:${palette.main};
                --pfont:${palette.font};
              "
            >

              <div class="swatches">

                <span></span>
                <span></span>
                <span></span>

              </div>


              <strong>
                ${palette.name}
              </strong>


              <br>


              <small>

                ${palette.background}
                ·
                ${palette.main}
                ·
                ${palette.font}

              </small>

            </button>

          `
        )
        .join('')
      }

    </div>

  `;

}


/* =========================
   CHARACTER
========================= */

function renderCharacter() {

  const character =
    data.character;


  return `

    <div class="section-head">

      <div>

        <h2>
          Character
        </h2>

        <p>
          One character sticker.
          Name and personality are editable.
        </p>

      </div>

    </div>


    <div class="grid grid-2">


      <div class="card character-preview">

        ${
          character.image

            ? `

              <img
                src="${character.image}"
                alt="${esc(
                  character.name
                )}"
              >

            `

            : `

              <div class="placeholder">
                Upload the character sticker
                you want LAYRAAZ to use.
              </div>

            `
        }

      </div>


      <form
        class="card"
        id="characterForm"
      >


        <div class="field">

          <label>
            CHARACTER NAME
          </label>

          <input
            name="name"
            value="${esc(
              character.name
            )}"
          >

        </div>


        <div
          class="field"
          style="margin-top:14px"
        >

          <label>
            PERSONALITY
          </label>

          <textarea
            name="personality"
          >${esc(
            character.personality
          )}</textarea>

        </div>


        <div class="actions">

          <button
            class="btn primary"
            type="submit"
          >
            Save character
          </button>


          <button
            class="btn"
            type="button"
            data-action="character-photo"
          >
            Upload character image
          </button>


          ${
            character.image

              ? `

                <button
                  class="btn danger"
                  type="button"
                  data-action="character-photo-remove"
                >
                  Remove image
                </button>

              `

              : ''
          }

        </div>


      </form>

    </div>

  `;

}


/* =========================
   ACTIONS
========================= */

function handleAction(
  action,
  which
) {


  if (
    action ===
    'profile-photo'
  ) {

    document
      .getElementById(
        'profileImageInput'
      )
      .click();

    return;

  }


  if (
    action ===
    'profile-photo-remove'
  ) {

    data.profile.photo =
      '';

    save();

    renderSection();

    return;

  }


  if (
    action ===
    'character-photo'
  ) {

    document
      .getElementById(
        'characterImageInput'
      )
      .click();

    return;

  }


  if (
    action ===
    'character-photo-remove'
  ) {

    data.character.image =
      '';

    save();

    renderSection();

    return;

  }


  if (
    action ===
    'palette'
  ) {

    data.appearance.palette =
      which;

    save();

    renderSection();

    return;

  }


  if (
    action ===
    'mark-notifications'
  ) {

    data.notifications.forEach(
      notification => {
        notification.read =
          true;
      }
    );

    save();

    updateNotificationDot();

    renderSection();

    return;

  }


  let collection =
    null;


  if (
    action.includes(
      'reminder'
    )
  ) {

    collection =
      'reminders';

  }

  else if (
    action.includes(
      'todo'
    )
  ) {

    collection =
      'todos';

  }

  else if (
    action.includes(
      'goal'
    )
  ) {

    collection =
      'goals';

  }

  else if (
    action.includes(
      'note'
    )
  ) {

    collection =
      'notes';

  }


  if (
    action.startsWith(
      'new-'
    )
  ) {

    return createItem(
      collection
    );

  }


  if (
    action.startsWith(
      'edit-'
    )
  ) {

    return editItem(
      collection,
      which
    );

  }


  if (
    action.startsWith(
      'delete-'
    )
  ) {

    return deleteItem(
      collection,
      which
    );

  }


  if (
    action ===
    'toggle-reminder'
  ) {

    return toggleItem(
      'reminders',
      which
    );

  }


  if (
    action ===
    'toggle-todo'
  ) {

    return toggleItem(
      'todos',
      which
    );

  }

}


/* =========================
   CREATE
========================= */

function createItem(
  collection
) {


  if (
    collection ===
    'reminders'
  ) {

    const title =
      prompt(
        'Reminder title:'
      );


    if (!title) {
      return;
    }


    const datetime =
      prompt(
        'Date and time (example: 2026-09-02T16:30):',
        new Date(
          Date.now() +
          3600000
        )
        .toISOString()
        .slice(0,16)
      );


    if (!datetime) {
      return;
    }


    data.reminders.push({

      id:id(),

      title,

      datetime,

      category:
        prompt(
          'Category:',
          'Personal'
        ) ||
        'Personal',

      done:false,

      fired:false

    });


    addActivity(
      'Reminder saved',
      title
    );


    save();

    renderSection();

    return;

  }


  if (
    collection ===
    'todos'
  ) {

    const title =
      prompt(
        'Task:'
      );


    if (!title) {
      return;
    }


    data.todos.push({

      id:id(),

      title,

      date:
        prompt(
          'Date (YYYY-MM-DD, optional):',
          new Date()
            .toISOString()
            .slice(0,10)
        ) || '',

      category:
        prompt(
          'Category:',
          'Personal'
        ) ||
        'Personal',

      done:false

    });


    addActivity(
      'Task saved',
      title
    );


    save();

    renderSection();

    return;

  }


  if (
    collection ===
    'goals'
  ) {

    const title =
      prompt(
        'Goal:'
      );


    if (!title) {
      return;
    }


    data.goals.push({

      id:id(),

      title,

      description:
        prompt(
          'Description:'
        ) || '',

      progress:
        Number(
          prompt(
            'Progress %:',
            '0'
          )
        ) || 0,

      deadline:
        prompt(
          'Deadline (YYYY-MM-DD, optional):'
        ) || '',

      done:false

    });


    addActivity(
      'Goal saved',
      title
    );


    save();

    renderSection();

    return;

  }


  if (
    collection ===
    'notes'
  ) {

    const title =
      prompt(
        'Note title:'
      );


    if (!title) {
      return;
    }


    data.notes.unshift({

      id:id(),

      title,

      body:
        prompt(
          'Note:'
        ) || '',

      updatedAt:
        new Date()
          .toISOString()

    });


    addActivity(
      'Note saved',
      title
    );


    save();

    renderSection();

  }

}


/* =========================
   EDIT
========================= */

function editItem(
  collection,
  which
) {

  const array =
    data[collection];


  const item =
    array.find(
      entry =>
        entry.id === which
    );


  if (!item) {
    return;
  }


  if (
    collection ===
    'reminders'
  ) {

    item.title =
      prompt(
        'Reminder title:',
        item.title
      ) ||
      item.title;


    item.datetime =
      prompt(
        'Date/time:',
        item.datetime
      ) ||
      item.datetime;


    item.category =
      prompt(
        'Category:',
        item.category
      ) ||
      item.category;

  }


  else if (
    collection ===
    'todos'
  ) {

    item.title =
      prompt(
        'Task:',
        item.title
      ) ||
      item.title;


    item.date =
      prompt(
        'Date:',
        item.date
      ) || '';


    item.category =
      prompt(
        'Category:',
        item.category
      ) ||
      item.category;

  }


  else if (
    collection ===
    'goals'
  ) {

    item.title =
      prompt(
        'Goal:',
        item.title
      ) ||
      item.title;


    item.description =
      prompt(
        'Description:',
        item.description
      ) || '';


    item.progress =
      Number(
        prompt(
          'Progress %:',
          item.progress
        )
      ) || 0;


    item.deadline =
      prompt(
        'Deadline:',
        item.deadline
      ) || '';

  }


  else if (
    collection ===
    'notes'
  ) {

    item.title =
      prompt(
        'Title:',
        item.title
      ) ||
      item.title;


    item.body =
      prompt(
        'Note:',
        item.body
      ) || '';


    item.updatedAt =
      new Date()
        .toISOString();

  }


  save();

  renderSection();

}


/* =========================
   DELETE
========================= */

function deleteItem(
  collection,
  which
) {

  const item =
    data[collection].find(
      entry =>
        entry.id === which
    );


  if (
    !item ||
    !confirm(
      'Delete this item?'
    )
  ) {

    return;

  }


  data[collection] =
    data[collection].filter(
      entry =>
        entry.id !== which
    );


  save();

  renderSection();

}


/* =========================
   TOGGLE
========================= */

function toggleItem(
  collection,
  which
) {

  const item =
    data[collection].find(
      entry =>
        entry.id === which
    );


  if (!item) {
    return;
  }


  item.done =
    !item.done;


  save();

  renderSection();

}


/* =========================
   ACTIVITY
========================= */

function addActivity(
  title,
  message
) {

  data.notifications.unshift({

    id:id(),

    title,

    message,

    createdAt:
      new Date()
        .toISOString(),

    read:false

  });

}


/* =========================
   CHARACTER PERSONALITY
========================= */

function personalityMessage(
  title
) {

  const personality =
    (
      data.character
        .personality ||
      ''
    ).toLowerCase();


  const firm =
    /firm|strict|bold|dominant|commanding|direct/
      .test(personality);


  const calm =
    /calm|gentle|soft|patient|peaceful/
      .test(personality);


  const caring =
    /caring|kind|sweet|support|warm/
      .test(personality);


  const playful =
    /playful|funny|fun|cheerful/
      .test(personality);


  const intelligent =
    /intelligent|smart|logical|clever/
      .test(personality);


  const messages = [];


  if (firm) {

    messages.push(
      `There is one thing I expect you to handle: ${title}.`
    );

  }

  else if (playful) {

    messages.push(
      `Your reminder has arrived before you can pretend you didn't see it: ${title}.`
    );

  }

  else if (calm) {

    messages.push(
      `A small reminder for you: ${title}.`
    );

  }

  else {

    messages.push(
      `Your reminder is here: ${title}.`
    );

  }


  if (caring) {

    messages.push(
      'Take care of it, then move on.'
    );

  }

  else if (firm) {

    messages.push(
      'Handle it now if it is due.'
    );

  }

  else if (intelligent) {

    messages.push(
      'Keep it on your radar and deal with it deliberately.'
    );

  }

  else {

    messages.push(
      'Do not let it slip past you.'
    );

  }


  return messages.join(
    ' '
  );

}


/* =========================
   COMPANION
========================= */

function showCompanion(
  reminder
) {

  activeReminderId =
    reminder.id;


  const character =
    data.character;


  const sticker =
    document.getElementById(
      'companionSticker'
    );


  sticker.src =
    character.image || '';


  sticker.style.display =
    character.image
      ? 'block'
      : 'none';


  document.getElementById(
    'companionName'
  ).textContent =
    character.name ||
    'Character';


  document.getElementById(
    'companionMessage'
  ).textContent =
    personalityMessage(
      reminder.title
    );


  document
    .getElementById(
      'companion'
    )
    .classList.remove(
      'hidden'
    );


  notifyBrowser(
    reminder
  );

}


/* =========================
   BROWSER NOTIFICATION
========================= */

function notifyBrowser(
  reminder
) {

  if (
    !(
      'Notification' in
      window
    )
  ) {

    return;

  }


  if (
    Notification.permission !==
    'granted'
  ) {

    return;

  }


  try {

    new Notification(
      reminder.title,
      {

        body:
          personalityMessage(
            reminder.title
          ),

        icon:
          data.character.image ||
          undefined

      }
    );

  }

  catch {

    /* Browser notification
       unavailable. */

  }

}


async function requestNotifications() {

  if (
    'Notification' in
    window &&
    Notification.permission ===
      'default'
  ) {

    try {

      await Notification
        .requestPermission();

    }

    catch {

      /* Permission request
         unavailable. */

    }

  }

}


/* =========================
   REMINDER CHECK
========================= */

function checkReminders() {

  const now =
    Date.now();


  for (
    const reminder of
    data.reminders
  ) {

    if (
      !reminder.done &&
      !reminder.fired &&
      new Date(
        reminder.datetime
      ).getTime() <= now
    ) {

      reminder.fired =
        true;


      addActivity(
        'Reminder due',
        reminder.title
      );


      save();


      showCompanion(
        reminder
      );

    }

  }


  updateNotificationDot();

}


/* =========================
   NOTIFICATION DOT
========================= */

function updateNotificationDot() {

  const dot =
    document.getElementById(
      'notificationDot'
    );


  const unread =
    data.notifications.some(
      notification =>
        !notification.read
    );


  dot.classList.toggle(
    'hidden',
    !unread
  );

}


/* =========================
   STATIC EVENTS
========================= */

function bindEvents() {


  document
    .getElementById(
      'sidebarToggle'
    )
    .addEventListener(
      'click',
      () => {

        const sidebar =
          document.getElementById(
            'sidebar'
          );


        const open =
          sidebar.classList.toggle(
            'open'
          );


        document
          .getElementById(
            'sidebarToggle'
          )
          .setAttribute(
            'aria-expanded',
            String(open)
          );

      }
    );


  document
    .querySelectorAll(
      '.nav-item'
    )
    .forEach(
      button => {

        button.addEventListener(
          'click',
          () => {

            navigate(
              button.dataset.section
            );

          }
        );

      }
    );


  document
    .getElementById(
      'notificationButton'
    )
    .addEventListener(
      'click',
      () => {

        navigate(
          'notifications'
        );

      }
    );


  document
    .getElementById(
      'globalSearch'
    )
    .addEventListener(
      'input',
      event => {

        search(
          event.target.value
        );

      }
    );


  document
    .getElementById(
      'profileImageInput'
    )
    .addEventListener(
      'change',
      handleProfileImage
    );


  document
    .getElementById(
      'characterImageInput'
    )
    .addEventListener(
      'change',
      handleCharacterImage
    );


  document
    .getElementById(
      'companionDone'
    )
    .addEventListener(
      'click',
      () => {

        const reminder =
          data.reminders.find(
            entry =>
              entry.id ===
              activeReminderId
          );


        if (reminder) {

          reminder.done =
            true;

          save();

        }


        document
          .getElementById(
            'companion'
          )
          .classList.add(
            'hidden'
          );


        activeReminderId =
          null;


        updateNotificationDot();

      }
    );


  document
    .getElementById(
      'companionSnooze'
    )
    .addEventListener(
      'click',
      () => {

        const reminder =
          data.reminders.find(
            entry =>
              entry.id ===
              activeReminderId
          );


        if (reminder) {

          reminder.datetime =
            new Date(
              Date.now() +
              5 * 60000
            ).toISOString();


          reminder.fired =
            false;


          save();

        }


        document
          .getElementById(
            'companion'
          )
          .classList.add(
            'hidden'
          );


        activeReminderId =
          null;

      }
    );


  requestNotifications();

}


/* =========================
   DYNAMIC EVENTS
========================= */

function bindDynamic() {


  document
    .querySelectorAll(
      '[data-action]'
    )
    .forEach(
      element => {

        element.addEventListener(
          'click',
          () => {

            handleAction(
              element.dataset.action,
              element.dataset.id
            );

          }
        );

      }
    );


  bindDynamicForms();

}


function bindDynamicForms() {


  const profileForm =
    document.getElementById(
      'profileForm'
    );


  if (profileForm) {

    profileForm.addEventListener(
      'submit',
      event => {

        event.preventDefault();


        const formData =
          new FormData(
            profileForm
          );


        for (
          const [
            key,
            value
          ] of formData.entries()
        ) {

          if (
            key !== 'age'
          ) {

            data.profile[key] =
              value;

          }

        }


        save();

        toast(
          'Profile saved'
        );

        renderSection();

      }
    );

  }


  const characterForm =
    document.getElementById(
      'characterForm'
    );


  if (characterForm) {

    characterForm.addEventListener(
      'submit',
      event => {

        event.preventDefault();


        const formData =
          new FormData(
            characterForm
          );


        data.character.name =
          formData.get(
            'name'
          ) ||
          'Character';


        data.character.personality =
          formData.get(
            'personality'
          ) ||
          'Calm, intelligent, firm and caring.';


        save();

        toast(
          'Character settings saved'
        );

        renderSection();

      }
    );

  }

}


/* =========================
   SEARCH
========================= */

function search(
  query
) {

  const q =
    query
      .trim()
      .toLowerCase();


  if (!q) {

    renderSection();

    return;

  }


  const results = [];


  const collections = [

    [
      'Reminder',
      data.reminders
    ],

    [
      'Task',
      data.todos
    ],

    [
      'Goal',
      data.goals
    ],

    [
      'Note',
      data.notes
    ]

  ];


  collections.forEach(
    ([type, collection]) => {

      collection.forEach(
        item => {

          const text =
            JSON.stringify(
              item
            ).toLowerCase();


          if (
            text.includes(q)
          ) {

            results.push({
              type,
              item
            });

          }

        }
      );

    }
  );


  document.getElementById(
    'pageTitle'
  ).textContent =
    'Search';


  document
    .querySelectorAll(
      '.nav-item'
    )
    .forEach(
      button =>
        button.classList.remove(
          'active'
        )
    );


  document.getElementById(
    'appContent'
  ).innerHTML = `

    <div class="section-head">

      <div>

        <h2>
          Search results
        </h2>

        <p>

          ${results.length}

          result${
            results.length === 1
              ? ''
              : 's'
          }

          found.

        </p>

      </div>

    </div>


    <div class="search-results">

      ${
        results.length

          ? results
              .map(
                result => `

                  <div class="result">

                    <div class="result-type">
                      ${result.type}
                    </div>


                    <strong>

                      ${esc(
                        result.item.title ||
                        result.item.body ||
                        'Untitled'
                      )}

                    </strong>


                    <div class="item-meta">

                      ${
                        result.type ===
                        'Reminder'

                          ? fmtDateTime(
                              result.item.datetime
                            )

                          : result.type ===
                            'Note'

                          ? fmtDateTime(
                              result.item.updatedAt
                            )

                          : result.item.date

                          ? fmtDate(
                              result.item.date
                            )

                          : ''

                      }

                    </div>

                  </div>

                `
              )
              .join('')

          : `

              <div class="empty">
                Nothing matched your search.
              </div>

            `
      }

    </div>

  `;

}


/* =========================
   IMAGE HANDLING
========================= */

async function handleProfileImage(
  event
) {

  const file =
    event.target.files[0];


  if (!file) {
    return;
  }


  data.profile.photo =
    await fileToData(
      file
    );


  save();

  renderSection();


  event.target.value =
    '';

}


async function handleCharacterImage(
  event
) {

  const file =
    event.target.files[0];


  if (!file) {
    return;
  }


  data.character.image =
    await makeSticker(
      file
    );


  save();

  renderSection();


  event.target.value =
    '';

}


function fileToData(
  file
) {

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


/* =========================
   CHARACTER STICKER
========================= */

function makeSticker(
  file
) {

  return new Promise(
    (resolve, reject) => {

      const image =
        new Image();


      const reader =
        new FileReader();


      reader.onload =
        () => {

          image.onload =
            () => {

              const max =
                900;


              const scale =
                Math.min(
                  1,
                  max /
                    Math.max(
                      image.width,
                      image.height
                    )
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
                  'canvas'
                );


              canvas.width =
                width;


              canvas.height =
                height;


              const context =
                canvas.getContext(
                  '2d'
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


              const W =
                width;


              const H =
                height;


              const seen =
                new Uint8Array(
                  W * H
                );


              const stack =
                [];


              function push(
                x,
                y
              ) {

                if (
                  x < 0 ||
                  y < 0 ||
                  x >= W ||
                  y >= H
                ) {

                  return;

                }


                const index =
                  y * W + x;


                if (
                  seen[index]
                ) {

                  return;

                }


                const pixel =
                  index * 4;


                const red =
                  pixels[pixel];


                const green =
                  pixels[
                    pixel + 1
                  ];


                const blue =
                  pixels[
                    pixel + 2
                  ];


                if (
                  red > 235 &&
                  green > 235 &&
                  blue > 235
                ) {

                  seen[index] =
                    1;

                  stack.push(
                    index
                  );

                }

              }


              for (
                let x = 0;
                x < W;
                x++
              ) {

                push(
                  x,
                  0
                );

                push(
                  x,
                  H - 1
                );

              }


              for (
                let y = 0;
                y < H;
                y++
              ) {

                push(
                  0,
                  y
                );

                push(
                  W - 1,
                  y
                );

              }


              while (
                stack.length
              ) {

                const index =
                  stack.pop();


                const x =
                  index % W;


                const y =
                  Math.floor(
                    index / W
                  );


                const neighbours = [

                  [1,0],

                  [-1,0],

                  [0,1],

                  [0,-1]

                ];


                neighbours.forEach(
                  ([dx,dy]) => {

                    push(
                      x + dx,
                      y + dy
                    );

                  }
                );

              }


              for (
                let index = 0;
                index < W * H;
                index++
              ) {

                if (
                  seen[index]
                ) {

                  pixels[
                    index * 4 + 3
                  ] = 0;

                }

              }


              context.putImageData(
                imageData,
                0,
                0
              );


              let minX = W;
              let minY = H;
              let maxX = -1;
              let maxY = -1;


              for (
                let y = 0;
                y < H;
                y++
              ) {

                for (
                  let x = 0;
                  x < W;
                  x++
                ) {

                  const alpha =
                    pixels[
                      (y * W + x) *
                      4 + 3
                    ];


                  if (
                    alpha > 20
                  ) {

                    minX =
                      Math.min(
                        minX,
                        x
                      );


                    maxX =
                      Math.max(
                        maxX,
                        x
                      );


                    minY =
                      Math.min(
                        minY,
                        y
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

                resolve(
                  canvas.toDataURL(
                    'image/png'
                  )
                );

                return;

              }


              const padding =
                12;


              const startX =
                Math.max(
                  0,
                  minX - padding
                );


              const startY =
                Math.max(
                  0,
                  minY - padding
                );


              const endX =
                Math.min(
                  W - 1,
                  maxX + padding
                );


              const endY =
                Math.min(
                  H - 1,
                  maxY + padding
                );


              const stickerWidth =
                endX -
                startX +
                1;


              const stickerHeight =
                endY -
                startY +
                1;


              const output =
                document.createElement(
                  'canvas'
                );


              output.width =
                stickerWidth;


              output.height =
                stickerHeight;


              output
                .getContext('2d')
                .drawImage(
                  canvas,
                  startX,
                  startY,
                  stickerWidth,
                  stickerHeight,
                  0,
                  0,
                  stickerWidth,
                  stickerHeight
                );


              resolve(
                output.toDataURL(
                  'image/png'
                )
              );

            };


          image.onerror =
            reject;


          image.src =
            reader.result;

        };


      reader.onerror =
        reject;


      reader.readAsDataURL(
        file
      );

    }
  );

}


/* =========================
   START APPLICATION
========================= */

bindEvents();

applyPalette();

renderSection();

updateNotificationDot();

setInterval(
  checkReminders,
  15000
);

checkReminders();
