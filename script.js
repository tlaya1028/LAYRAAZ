/* =========================================================
   LAYRAAZ
   Complete Application JavaScript
   ========================================================= */


/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "LAYRAAZ_V2";


const defaultData = {

  profile: {

    name: "Laya",

    dob: "2002-08-28",

    mbti: "INTJ",

    hobbies:
      "Singer, Crochets, Loves travelling, Poet, Kuchipudi dancer, Playback singer",

    occupation:
      "Executive Assistant to Terminal Head in a container terminal",

    businessGoal:
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
      "Rectangular Body",

    familyMembers:
      "4",

    height:
      "5'1\"",

    profileImage:
      "",

    characterName:
      "Character",

    characterPersonality:
      "Calm, intelligent, firm, caring",

    characterImage:
      ""

  },


  reminders: [],

  todos: [],

  goals: [],

  notes: [],

  notifications: [],


  appearance: {

    palette: 0

  }

};


let appData = loadData();


/* =========================================================
   LOAD DATA
   ========================================================= */

function loadData() {

  try {

    const saved =
      localStorage.getItem(
        STORAGE_KEY
      );


    if (!saved) {

      return JSON.parse(
        JSON.stringify(
          defaultData
        )
      );

    }


    const parsed =
      JSON.parse(saved);


    return {

      ...JSON.parse(
        JSON.stringify(
          defaultData
        )
      ),

      ...parsed,


      profile: {

        ...defaultData.profile,

        ...(parsed.profile || {})

      },


      appearance: {

        ...defaultData.appearance,

        ...(parsed.appearance || {})

      },


      reminders:
        Array.isArray(parsed.reminders)
          ? parsed.reminders
          : [],


      todos:
        Array.isArray(parsed.todos)
          ? parsed.todos
          : [],


      goals:
        Array.isArray(parsed.goals)
          ? parsed.goals
          : [],


      notes:
        Array.isArray(parsed.notes)
          ? parsed.notes
          : [],


      notifications:
        Array.isArray(parsed.notifications)
          ? parsed.notifications
          : []

    };

  }

  catch (error) {

    console.error(
      "LAYRAAZ storage error:",
      error
    );

    return JSON.parse(
      JSON.stringify(
        defaultData
      )
    );

  }

}


/* =========================================================
   SAVE DATA
   ========================================================= */

function saveData() {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(appData)
    );

    return true;

  }

  catch (error) {

    console.error(
      "Could not save LAYRAAZ data:",
      error
    );

    showToast(
      "Could not save. Browser storage may be full."
    );

    return false;

  }

}


/* =========================================================
   PALETTES
   ========================================================= */

const palettes = [

  {
    name: "Deep Forest Green",
    background: "#1d251c",
    main: "#111111",
    font: "#c0c0c0"
  },

  {
    name: "Butter Yellow",
    background: "#F6E7A1",
    main: "#A9D6E5",
    font: "#6B3E26"
  },

  {
    name: "Almond",
    background: "#EFDECD",
    main: "#93E9BE",
    font: "#9B1C31"
  },

  {
    name: "Misty Sage",
    background: "#B7C9B0",
    main: "#8E3B46",
    font: "#FFF1C1"
  },

  {
    name: "Navy",
    background: "#14213D",
    main: "#D4AF37",
    font: "#D8C3A5"
  },

  {
    name: "Champagne",
    background: "#F7E7CE",
    main: "#808000",
    font: "#E8E1D1"
  },

  {
    name: "Gunmetal",
    background: "#2A3439",
    main: "#E8E1D1",
    font: "#F0EAD6"
  },

  {
    name: "Cadet Grey",
    background: "#91A3A9",
    main: "#F0EAD6",
    font: "#3D2B1F"
  },

  {
    name: "Muted Pink",
    background: "#D8A7B1",
    main: "#A50034",
    font: "#F6C9D2"
  },

  {
    name: "Lavender Mist",
    background: "#E6E0F8",
    main: "#4B2E2A",
    font: "#FFFDD0"
  }

];


/* =========================================================
   START APPLICATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initialise();

  }
);


function initialise() {

  applyPalette();

  loadProfile();

  renderDashboard();

  renderReminders();

  renderTodos();

  renderGoals();

  renderNotes();

  renderNotifications();

  renderAppearance();

  renderCharacter();

  setupNavigation();

  setupSidebar();

  setupProfile();

  setupProfilePicture();

  setupReminders();

  setupTodos();

  setupGoals();

  setupNotes();

  setupSearch();

  setupNotifications();

  setupAppearance();

  setupCharacter();

  setupCategoryFilters();

  startReminderChecker();

  updateNotificationDot();

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

  document
    .querySelectorAll(
      ".nav-item[data-section]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          openSection(
            button.dataset.section
          );

        }
      );

    });

}


function openSection(sectionId) {

  document
    .querySelectorAll(".section")
    .forEach(section => {

      section.classList.remove(
        "active"
      );

    });


  const target =
    document.getElementById(
      sectionId
    );


  if (target) {

    target.classList.add(
      "active"
    );

  }


  document
    .querySelectorAll(
      ".nav-item[data-section]"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.section ===
          sectionId
      );

    });

}


/* =========================================================
   SIDEBAR
   ========================================================= */

function setupSidebar() {

  const sidebar =
    document.getElementById(
      "sidebar"
    );


  const toggle =
    document.getElementById(
      "sidebarToggle"
    );


  if (!sidebar || !toggle) {
    return;
  }


  toggle.addEventListener(
    "click",
    () => {

      sidebar.classList.toggle(
        "collapsed"
      );

    }
  );

}


/* =========================================================
   PROFILE
   ========================================================= */

function setupProfile() {

  const saveButton =
    document.getElementById(
      "saveProfile"
    );


  if (saveButton) {

    saveButton.addEventListener(
      "click",
      saveProfile
    );

  }


  const dob =
    document.getElementById(
      "profileDOB"
    );


  if (dob) {

    dob.addEventListener(
      "change",
      () => {

        updateAge();

      }
    );

  }

}


function loadProfile() {

  const p =
    appData.profile;


  setValue(
    "profileName",
    p.name
  );


  setValue(
    "profileDOB",
    p.dob
  );


  setValue(
    "profileMBTI",
    p.mbti
  );


  setValue(
    "profileHobbies",
    p.hobbies
  );


  setValue(
    "profileOccupation",
    p.occupation
  );


  setValue(
    "profileBusinessGoal",
    p.businessGoal
  );


  setValue(
    "profileColours",
    p.favouriteColours
  );


  setValue(
    "profileFood",
    p.favouriteFood
  );


  setValue(
    "profilePlaces",
    p.favouritePlaces
  );


  setValue(
    "profileMusic",
    p.favouriteMusic
  );


  setValue(
    "profileSkin",
    p.skinType
  );


  setValue(
    "profileBody",
    p.bodyType
  );


  setValue(
    "profileFamily",
    p.familyMembers
  );


  setValue(
    "profileHeight",
    p.height
  );


  updateAge();

  updateNameDisplays();

  loadProfileImage();

}


function saveProfile() {

  appData.profile.name =
    getValue("profileName") ||
    "Laya";


  appData.profile.dob =
    getValue("profileDOB");


  appData.profile.mbti =
    getValue("profileMBTI");


  appData.profile.hobbies =
    getValue("profileHobbies");


  appData.profile.occupation =
    getValue("profileOccupation");


  appData.profile.businessGoal =
    getValue("profileBusinessGoal");


  appData.profile.favouriteColours =
    getValue("profileColours");


  appData.profile.favouriteFood =
    getValue("profileFood");


  appData.profile.favouritePlaces =
    getValue("profilePlaces");


  appData.profile.favouriteMusic =
    getValue("profileMusic");


  appData.profile.skinType =
    getValue("profileSkin");


  appData.profile.bodyType =
    getValue("profileBody");


  appData.profile.familyMembers =
    getValue("profileFamily");


  appData.profile.height =
    getValue("profileHeight");


  const saved =
    saveData();


  if (saved) {

    updateNameDisplays();

    updateAge();

    renderDashboard();

    showToast(
      "Profile saved successfully."
    );

  }

}


/* =========================================================
   NAME DISPLAY
   ========================================================= */

function updateNameDisplays() {

  const name =
    appData.profile.name ||
    "Laya";


  setText(
    "profileHeadingName",
    name
  );


  setText(
    "profileCardName",
    name
  );


  setText(
    "dashboardName",
    name
  );


  setText(
    "sidebarUserName",
    name
  );


  setText(
    "profileInitial",
    name.charAt(0).toUpperCase()
  );


  setText(
    "miniAvatar",
    name.charAt(0).toUpperCase()
  );

}


/* =========================================================
   AGE
   ========================================================= */

function calculateAge(dob) {

  if (!dob) {
    return "";
  }


  const birth =
    new Date(dob);


  if (isNaN(birth.getTime())) {
    return "";
  }


  const today =
    new Date();


  let age =
    today.getFullYear() -
    birth.getFullYear();


  const month =
    today.getMonth() -
    birth.getMonth();


  if (
    month < 0 ||
    (
      month === 0 &&
      today.getDate() <
        birth.getDate()
    )
  ) {

    age--;

  }


  return age;

}


function updateAge() {

  const age =
    calculateAge(
      getValue("profileDOB")
    );


  setValue(
    "profileAge",
    age
  );


  setText(
    "dashboardAge",
    age
  );

}


/* =========================================================
   PROFILE PICTURE
   ========================================================= */

function setupProfilePicture() {

  const input =
    document.getElementById(
      "profileImageInput"
    );


  const remove =
    document.getElementById(
      "removeProfileImage"
    );


  if (input) {

    input.addEventListener(
      "change",
      event => {

        const file =
          event.target.files?.[0];


        if (!file) return;


        if (
          !file.type.startsWith(
            "image/"
          )
        ) {

          showToast(
            "Please choose an image."
          );

          return;

        }


        const reader =
          new FileReader();


        reader.onload =
          event => {

            appData.profile.profileImage =
              event.target.result;


            saveData();

            loadProfileImage();

            showToast(
              "Profile picture saved."
            );

          };


        reader.readAsDataURL(file);

      }
    );

  }


  if (remove) {

    remove.addEventListener(
      "click",
      () => {

        appData.profile.profileImage =
          "";

        saveData();

        loadProfileImage();

        showToast(
          "Profile picture removed."
        );

      }
    );

  }

}


function loadProfileImage() {

  const image =
    document.getElementById(
      "profileImage"
    );


  const initial =
    document.getElementById(
      "profileInitial"
    );


  const avatar =
    document.getElementById(
      "miniAvatar"
    );


  if (
    appData.profile.profileImage
  ) {

    if (image) {

      image.src =
        appData.profile.profileImage;

      image.classList.remove(
        "hidden"
      );

    }


    if (initial) {

      initial.classList.add(
        "hidden"
      );

    }


    if (avatar) {

      avatar.innerHTML = `
        <img
          src="${appData.profile.profileImage}"
          alt="Profile"
        >
      `;

    }

  }

  else {

    if (image) {

      image.classList.add(
        "hidden"
      );

      image.removeAttribute(
        "src"
      );

    }


    if (initial) {

      initial.classList.remove(
        "hidden"
      );

    }


    if (avatar) {

      avatar.textContent =
        (
          appData.profile.name ||
          "L"
        )
        .charAt(0)
        .toUpperCase();

    }

  }

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {

  const p =
    appData.profile;


  setText(
    "dashboardMBTI",
    p.mbti
  );


  setText(
    "dashboardFamily",
    p.familyMembers
  );


  setText(
    "dashboardHeight",
    p.height
  );


  setText(
    "dashboardOccupation",
    p.occupation
  );


  setText(
    "dashboardHobbies",
    p.hobbies
  );


  setText(
    "dashboardColours",
    p.favouriteColours
  );


  setText(
    "dashboardFood",
    p.favouriteFood
  );


  setText(
    "dashboardPlaces",
    p.favouritePlaces
  );


  setText(
    "dashboardMusic",
    p.favouriteMusic
  );


  setText(
    "dashboardSkin",
    p.skinType
  );


  setText(
    "dashboardBody",
    p.bodyType
  );


  setText(
    "dashboardBusinessGoal",
    p.businessGoal
  );


  updateAge();

}


/* =========================================================
   REMINDERS
   ========================================================= */

function setupReminders() {

  const form =
    document.getElementById(
      "reminderForm"
    );


  if (!form) return;


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const title =
        getValue(
          "reminderTitle"
        );


      const category =
        getValue(
          "reminderCategory"
        );


      const due =
        getValue(
          "reminderDateTime"
        );


      if (!title || !due) {

        showToast(
          "Please complete the reminder."
        );

        return;

      }


      appData.reminders.push({

        id:
          Date.now(),

        title,

        category:
          category || "Personal",

        due,

        notified:
          false

      });


      saveData();

      renderReminders();

      form.reset();

      requestNotificationPermission();

      showToast(
        "Reminder saved."
      );

    }
  );

}


function renderReminders() {

  const container =
    document.getElementById(
      "remindersList"
    );


  if (!container) return;


  container.innerHTML = "";


  if (
    appData.reminders.length === 0
  ) {

    container.innerHTML =
      `<div class="empty-state">
        No reminders yet.
      </div>`;

    return;

  }


  const sorted =
    [...appData.reminders]
      .sort(
        (a,b) =>
          new Date(a.due) -
          new Date(b.due)
      );


  sorted.forEach(
    reminder => {

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "reminder-item";


      item.innerHTML = `

        <div class="reminder-content">

          <h4>
            ${escapeHTML(
              reminder.title
            )}
          </h4>

          <span class="category-tag">
            ${escapeHTML(
              reminder.category
            )}
          </span>

          <p>
            ${formatDateTime(
              reminder.due
            )}
          </p>

        </div>


        <div class="item-actions">

          <button
            class="edit-btn"
            data-id="${reminder.id}"
          >
            Edit
          </button>

          <button
            class="delete-btn"
            data-id="${reminder.id}"
          >
            Delete
          </button>

        </div>

      `;


      container.appendChild(
        item
      );

    }
  );


  container
    .querySelectorAll(
      ".delete-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            Number(
              button.dataset.id
            );


          appData.reminders =
            appData.reminders.filter(
              reminder =>
                reminder.id !== id
            );


          saveData();

          renderReminders();

        }
      );

    });


  container
    .querySelectorAll(
      ".edit-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          editReminder(
            Number(
              button.dataset.id
            )
          );

        }
      );

    });

}


function editReminder(id) {

  const reminder =
    appData.reminders.find(
      item =>
        item.id === id
    );


  if (!reminder) return;


  const title =
    prompt(
      "Reminder",
      reminder.title
    );


  if (title === null) {
    return;
  }


  const due =
    prompt(
      "Date & Time\nUse format: YYYY-MM-DDTHH:MM",
      reminder.due
    );


  if (due === null) {
    return;
  }


  reminder.title =
    title.trim() ||
    reminder.title;


  reminder.due =
    due.trim() ||
    reminder.due;


  reminder.notified =
    false;


  saveData();

  renderReminders();

  showToast(
    "Reminder updated."
  );

}


/* =========================================================
   REMINDER CHECKER
   ========================================================= */

function startReminderChecker() {

  checkReminders();


  setInterval(
    checkReminders,
    15000
  );

}


function checkReminders() {

  const now =
    Date.now();


  let changed =
    false;


  appData.reminders.forEach(
    reminder => {

      const due =
        new Date(
          reminder.due
        ).getTime();


      if (
        !reminder.notified &&
        !isNaN(due) &&
        now >= due
      ) {

        reminder.notified =
          true;


        changed =
          true;


        triggerCharacterReminder(
          reminder
        );


        addNotification(
          `Reminder: ${reminder.title}`
        );


        sendBrowserNotification(
          appData.profile.characterName ||
            "Character",
          reminder.title
        );

      }

    }
  );


  if (changed) {

    saveData();

    renderReminders();

    renderNotifications();

    updateNotificationDot();

  }

}


/* =========================================================
   CHARACTER REMINDER
   ========================================================= */

function triggerCharacterReminder(
  reminder
) {

  const container =
    document.getElementById(
      "characterReminder"
    );


  if (!container) return;


  const image =
    document.getElementById(
      "reminderCharacterImage"
    );


  const placeholder =
    document.getElementById(
      "reminderCharacterPlaceholder"
    );


  const name =
    document.getElementById(
      "characterReminderName"
    );


  const title =
    document.getElementById(
      "characterReminderTitle"
    );


  const message =
    document.getElementById(
      "characterMessage"
    );


  if (name) {

    name.textContent =
      appData.profile.characterName ||
      "Character";

  }


  if (title) {

    title.textContent =
      reminder.title;

  }


  if (message) {

    message.textContent =
      characterMessage(
        reminder
      );

  }


  if (
    appData.profile.characterImage
  ) {

    image.src =
      appData.profile.characterImage;

    image.classList.remove(
      "hidden"
    );


    if (placeholder) {

      placeholder.classList.add(
        "hidden"
      );

    }

  }


  container.classList.remove(
    "hidden"
  );


  const movements = [

    "character-float",

    "character-shake",

    "character-bounce"

  ];


  if (image) {

    image.classList.remove(
      ...movements
    );


    const movement =
      movements[
        Math.floor(
          Math.random() *
          movements.length
        )
      ];


    void image.offsetWidth;


    image.classList.add(
      movement
    );

  }


  clearTimeout(
    window.characterReminderTimer
  );


  window.characterReminderTimer =
    setTimeout(
      () => {

        container.classList.add(
          "hidden"
        );

      },
      12000
    );

}


function characterMessage(
  reminder
) {

  const personality =
    (
      appData.profile.characterPersonality ||
      ""
    ).toLowerCase();


  if (
    personality.includes(
      "firm"
    ) ||
    personality.includes(
      "strict"
    )
  ) {

    return `Your reminder is due. Handle it now: "${reminder.title}".`;

  }


  if (
    personality.includes(
      "caring"
    ) ||
    personality.includes(
      "gentle"
    )
  ) {

    return `Your reminder is due. Take care of this now: "${reminder.title}".`;

  }


  return `It is time for "${reminder.title}".`;

}


/* =========================================================
   CHARACTER SETTINGS
   ========================================================= */

function setupCharacter() {

  const save =
    document.getElementById(
      "saveCharacterSettings"
    );


  const test =
    document.getElementById(
      "testCharacter"
    );


  const close =
    document.getElementById(
      "closeCharacterReminder"
    );


  const input =
    document.getElementById(
      "characterImageInput"
    );


  if (save) {

    save.addEventListener(
      "click",
      saveCharacter
    );

  }


  if (test) {

    test.addEventListener(
      "click",
      () => {

        const fakeReminder = {

          title:
            "This is your Character test.",

          category:
            "Personal",

          due:
            new Date().toISOString(),

          notified:
            true

        };


        triggerCharacterReminder(
          fakeReminder
        );

      }
    );

  }


  if (close) {

    close.addEventListener(
      "click",
      () => {

        document
          .getElementById(
            "characterReminder"
          )
          .classList.add(
            "hidden"
          );

      }
    );

  }


  if (input) {

    input.addEventListener(
      "change",
      handleCharacterImage
    );

  }

}


function loadCharacterSettings() {

  setValue(
    "characterName",
    appData.profile.characterName
  );


  setValue(
    "characterPersonality",
    appData.profile.characterPersonality
  );

}


function saveCharacter() {

  appData.profile.characterName =
    getValue(
      "characterName"
    ) ||
    "Character";


  appData.profile.characterPersonality =
    getValue(
      "characterPersonality"
    ) ||
    "Calm, intelligent, firm, caring";


  saveData();

  renderCharacter();

  showToast(
    "Character settings saved."
  );

}


function renderCharacter() {

  loadCharacterSettings();


  const name =
    appData.profile.characterName ||
    "Character";


  setText(
    "characterPreviewName",
    name
  );


  const image =
    document.getElementById(
      "characterPreviewImage"
    );


  const placeholder =
    document.getElementById(
      "characterPlaceholder"
    );


  if (
    appData.profile.characterImage
  ) {

    image.src =
      appData.profile.characterImage;

    image.classList.remove(
      "hidden"
    );


    placeholder.classList.add(
      "hidden"
    );

  }

  else {

    image.classList.add(
      "hidden"
    );


    placeholder.classList.remove(
      "hidden"
    );

  }

}


/* =========================================================
   CHARACTER IMAGE
   ========================================================= */

function handleCharacterImage(
  event
) {

  const file =
    event.target.files?.[0];


  if (!file) return;


  if (
    !file.type.startsWith(
      "image/"
    )
  ) {

    showToast(
      "Please choose an image."
    );

    return;

  }


  const reader =
    new FileReader();


  reader.onload =
    event => {

      appData.profile.characterImage =
        event.target.result;


      const saved =
        saveData();


      if (saved) {

        renderCharacter();

        showToast(
          "Character picture saved."
        );

      }

    };


  reader.readAsDataURL(file);

}


/* =========================================================
   TODO LIST
   ========================================================= */

function setupTodos() {

  const form =
    document.getElementById(
      "todoForm"
    );


  if (!form) return;


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const title =
        getValue(
          "todoTitle"
        );


      const category =
        getValue(
          "todoCategory"
        );


      if (!title) {

        showToast(
          "Enter a task first."
        );

        return;

      }


      appData.todos.push({

        id:
          Date.now(),

        title,

        category:
          category || "Personal",

        completed:
          false

      });


      saveData();

      renderTodos();

      form.reset();

      showToast(
        "Task saved."
      );

    }
  );

}


function renderTodos() {

  const container =
    document.getElementById(
      "todoList"
    );


  if (!container) return;


  container.innerHTML = "";


  if (
    appData.todos.length === 0
  ) {

    container.innerHTML =
      `<div class="empty-state">
        No tasks yet.
      </div>`;

    return;

  }


  appData.todos.forEach(
    todo => {

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "todo-item" +
        (
          todo.completed
            ? " completed"
            : ""
        );


      item.innerHTML = `

        <label class="todo-check">

          <input
            type="checkbox"
            data-id="${todo.id}"
            ${todo.completed ? "checked" : ""}
          >

          <span class="custom-checkbox"></span>

        </label>


        <div class="todo-content">

          <span class="todo-title">
            ${escapeHTML(todo.title)}
          </span>

          <span class="category-tag">
            ${escapeHTML(todo.category)}
          </span>

        </div>


        <button
          class="delete-btn"
          data-id="${todo.id}"
        >
          Delete
        </button>

      `;


      container.appendChild(
        item
      );

    }
  );


  container
    .querySelectorAll(
      'input[type="checkbox"]'
    )
    .forEach(input => {

      input.addEventListener(
        "change",
        () => {

          const todo =
            appData.todos.find(
              item =>
                item.id ===
                Number(
                  input.dataset.id
                )
            );


          if (!todo) return;


          todo.completed =
            input.checked;


          saveData();

          renderTodos();

        }
      );

    });


  container
    .querySelectorAll(
      ".delete-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          appData.todos =
            appData.todos.filter(
              item =>
                item.id !==
                Number(
                  button.dataset.id
                )
            );


          saveData();

          renderTodos();

        }
      );

    });

}


/* =========================================================
   GOALS
   ========================================================= */

function setupGoals() {

  const form =
    document.getElementById(
      "goalForm"
    );


  if (!form) return;


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const title =
        getValue(
          "goalTitle"
        );


      const category =
        getValue(
          "goalCategory"
        );


      if (!title) {

        showToast(
          "Enter a goal first."
        );

        return;

      }


      appData.goals.push({

        id:
          Date.now(),

        title,

        category:
          category || "Personal",

        progress:
          0,

        created:
          new Date().toISOString()

      });


      saveData();

      renderGoals();

      form.reset();

      showToast(
        "Goal saved."
      );

    }
  );

}


function renderGoals() {

  const container =
    document.getElementById(
      "goalsList"
    );


  if (!container) return;


  container.innerHTML = "";


  if (
    appData.goals.length === 0
  ) {

    container.innerHTML =
      `<div class="empty-state">
        No goals yet.
      </div>`;

    return;

  }


  appData.goals.forEach(
    goal => {

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "goal-item";


      item.innerHTML = `

        <div class="goal-header">

          <div>

            <h4>
              ${escapeHTML(
                goal.title
              )}
            </h4>

            <span class="category-tag">
              ${escapeHTML(
                goal.category
              )}
            </span>

          </div>

          <strong>
            ${goal.progress}%
          </strong>

        </div>


        <div class="goal-progress">

          <div
            class="goal-progress-bar"
            style="
              width:${goal.progress}%;
            "
          ></div>

        </div>


        <div class="goal-controls">

          <input
            type="range"
            min="0"
            max="100"
            value="${goal.progress}"
            data-id="${goal.id}"
          >


          <button
            class="delete-btn"
            data-id="${goal.id}"
          >
            Delete
          </button>

        </div>

      `;


      container.appendChild(
        item
      );

    }
  );


  container
    .querySelectorAll(
      'input[type="range"]'
    )
    .forEach(range => {

      range.addEventListener(
        "input",
        () => {

          const goal =
            appData.goals.find(
              item =>
                item.id ===
                Number(
                  range.dataset.id
                )
            );


          if (!goal) return;


          goal.progress =
            Number(
              range.value
            );


          saveData();

          renderGoals();

        }
      );

    });


  container
    .querySelectorAll(
      ".delete-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          appData.goals =
            appData.goals.filter(
              goal =>
                goal.id !==
                Number(
                  button.dataset.id
                )
            );


          saveData();

          renderGoals();

        }
      );

    });

}


/* =========================================================
   NOTES
   ========================================================= */

function setupNotes() {

  const form =
    document.getElementById(
      "noteForm"
    );


  if (!form) return;


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const title =
        getValue(
          "noteTitle"
        );


      const content =
        getValue(
          "noteContent"
        );


      if (!title && !content) {

        showToast(
          "Write something first."
        );

        return;

      }


      appData.notes.unshift({

        id:
          Date.now(),

        title:
          title ||
          "Untitled Note",

        content,

        date:
          new Date().toISOString()

      });


      saveData();

      renderNotes();

      form.reset();

      showToast(
        "Note saved."
      );

    }
  );

}


function renderNotes() {

  const container =
    document.getElementById(
      "notesList"
    );


  if (!container) return;


  container.innerHTML = "";


  if (
    appData.notes.length === 0
  ) {

    container.innerHTML =
      `<div class="empty-state">
        No notes yet.
      </div>`;

    return;

  }


  appData.notes.forEach(
    note => {

      const item =
        document.createElement(
          "article"
        );


      item.className =
        "note-item";


      item.innerHTML = `

        <div class="note-header">

          <div>

            <h4>
              ${escapeHTML(
                note.title
              )}
            </h4>

            <small>
              ${formatDateTime(
                note.date
              )}
            </small>

          </div>


          <button
            class="delete-btn"
            data-id="${note.id}"
          >
            Delete
          </button>

        </div>


        <p>
          ${escapeHTML(
            note.content
          )}
        </p>

      `;


      container.appendChild(
        item
      );

    }
  );


  container
    .querySelectorAll(
      ".delete-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          appData.notes =
            appData.notes.filter(
              note =>
                note.id !==
                Number(
                  button.dataset.id
                )
            );


          saveData();

          renderNotes();

        }
      );

    });

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

  const button =
    document.getElementById(
      "searchButton"
    );


  const box =
    document.getElementById(
      "searchBox"
    );


  const input =
    document.getElementById(
      "globalSearch"
    );


  if (!button || !box || !input) {
    return;
  }


  button.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      box.classList.toggle(
        "hidden"
      );


      if (
        !box.classList.contains(
          "hidden"
        )
      ) {

        input.focus();

      }

    }
  );


  input.addEventListener(
    "input",
    () => {

      performSearch(
        input.value
      );

    }
  );


  document.addEventListener(
    "click",
    event => {

      if (
        !box.contains(event.target) &&
        !button.contains(event.target)
      ) {

        box.classList.add(
          "hidden"
        );

      }

    }
  );

}


function performSearch(
  query
) {

  const container =
    document.getElementById(
      "searchResults"
    );


  if (!container) return;


  const q =
    query.trim().toLowerCase();


  if (!q) {

    container.innerHTML = "";

    return;

  }


  const reminders =
    appData.reminders.filter(
      item =>
        searchable(
          item.title,
          item.category
        ).includes(q)
    );


  const todos =
    appData.todos.filter(
      item =>
        searchable(
          item.title,
          item.category
        ).includes(q)
    );


  const goals =
    appData.goals.filter(
      item =>
        searchable(
          item.title,
          item.category
        ).includes(q)
    );


  const notes =
    appData.notes.filter(
      item =>
        searchable(
          item.title,
          item.content
        ).includes(q)
    );


  let html = "";


  if (reminders.length) {

    html +=
      searchGroup(
        "Reminders",
        reminders.map(
          item =>
            `<strong>${escapeHTML(item.title)}</strong>
             <small>${formatDateTime(item.due)}</small>`
        )
      );

  }


  if (todos.length) {

    html +=
      searchGroup(
        "To-Do",
        todos.map(
          item =>
            `<strong>${escapeHTML(item.title)}</strong>
             <small>${escapeHTML(item.category)}</small>`
        )
      );

  }


  if (goals.length) {

    html +=
      searchGroup(
        "Goals",
        goals.map(
          item =>
            `<strong>${escapeHTML(item.title)}</strong>
             <small>${item.progress}% complete</small>`
        )
      );

  }


  if (notes.length) {

    html +=
      searchGroup(
        "Notes",
        notes.map(
          item =>
            `<strong>${escapeHTML(item.title)}</strong>
             <small>${escapeHTML(item.content)}</small>`
        )
      );

  }


  if (!html) {

    html =
      `<div class="empty-state">
        Nothing found.
      </div>`;

  }


  container.innerHTML =
    html;

}


function searchGroup(
  title,
  results
) {

  return `

    <div class="search-group">

      <h4>
        ${title}
      </h4>

      ${results
        .map(
          result =>
            `<div class="search-result">
              ${result}
            </div>`
        )
        .join("")
      }

    </div>

  `;

}


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function setupNotifications() {

  const button =
    document.getElementById(
      "notificationButton"
    );


  if (button) {

    button.addEventListener(
      "click",
      () => {

        openSection(
          "notifications"
        );

        updateNotificationDot();

      }
    );

  }


  const enable =
    document.getElementById(
      "enableNotifications"
    );


  if (enable) {

    enable.addEventListener(
      "click",
      requestNotificationPermission
    );

  }


  const clear =
    document.getElementById(
      "clearNotifications"
    );


  if (clear) {

    clear.addEventListener(
      "click",
      () => {

        appData.notifications =
          [];

        saveData();

        renderNotifications();

        updateNotificationDot();

        showToast(
          "Notifications cleared."
        );

      }
    );

  }

}


function addNotification(
  message
) {

  appData.notifications.unshift({

    id:
      Date.now(),

    message,

    date:
      new Date().toISOString()

  });


  appData.notifications =
    appData.notifications.slice(
      0,
      100
    );

}


function renderNotifications() {

  const container =
    document.getElementById(
      "notificationsList"
    );


  if (!container) return;


  container.innerHTML = "";


  if (
    appData.notifications.length === 0
  ) {

    container.innerHTML =
      `<div class="empty-state">
        No notifications yet.
      </div>`;

    return;

  }


  appData.notifications.forEach(
    notification => {

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "notification-item";


      item.innerHTML = `

        <strong>
          ${escapeHTML(
            notification.message
          )}
        </strong>

        <small>
          ${formatDateTime(
            notification.date
          )}
        </small>

      `;


      container.appendChild(
        item
      );

    }
  );

}


function updateNotificationDot() {

  const dot =
    document.getElementById(
      "notificationDot"
    );


  if (!dot) return;


  if (
    appData.notifications.length
  ) {

    dot.classList.remove(
      "hidden"
    );

  }

  else {

    dot.classList.add(
      "hidden"
    );

  }

}


/* =========================================================
   BROWSER NOTIFICATIONS
   ========================================================= */

function requestNotificationPermission() {

  if (
    !("Notification" in window)
  ) {

    showToast(
      "This browser does not support notifications."
    );

    return;

  }


  Notification.requestPermission()
    .then(permission => {

      if (
        permission ===
        "granted"
      ) {

        showToast(
          "Browser notifications enabled."
        );

      }

      else {

        showToast(
          "Notification permission was not granted."
        );

      }

    });

}


function sendBrowserNotification(
  title,
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

    new Notification(
      title,
      {
        body: message
      }
    );

  }

  catch (error) {

    console.error(
      "Notification error:",
      error
    );

  }

}


/* =========================================================
   APPEARANCE
   ========================================================= */

function setupAppearance() {

  renderAppearance();

}


function renderAppearance() {

  const grid =
    document.getElementById(
      "paletteGrid"
    );


  if (!grid) return;


  grid.innerHTML = "";


  palettes.forEach(
    (palette, index) => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "palette-card";


      if (
        index ===
        appData.appearance.palette
      ) {

        card.classList.add(
          "selected"
        );

      }


      card.style.background =
        palette.background;


      card.style.color =
        palette.font;


      card.innerHTML = `

        <div class="palette-name">
          ${palette.name}
        </div>

        <div class="palette-description">
          Background · Main · Font
        </div>

        <div class="palette-swatches">

          <span
            class="palette-swatch"
            style="background:${palette.background}"
          ></span>

          <span
            class="palette-swatch"
            style="background:${palette.main}"
          ></span>

          <span
            class="palette-swatch"
            style="background:${palette.font}"
          ></span>

        </div>

      `;


      card.addEventListener(
        "click",
        () => {

          appData.appearance.palette =
            index;


          saveData();

          applyPalette();

          renderAppearance();

          showToast(
            `${palette.name} selected.`
          );

        }
      );


      grid.appendChild(
        card
      );

    }
  );

}


function applyPalette() {

  const palette =
    palettes[
      appData.appearance.palette
    ] ||
    palettes[0];


  document.documentElement
    .style
    .setProperty(
      "--background",
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

}


/* =========================================================
   CATEGORY FILTERS
   ========================================================= */

function setupCategoryFilters() {

  document
    .querySelectorAll(
      ".category-item"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const category =
            button.dataset.category;


          showCategoryResults(
            category
          );

        }
      );

    });

}


function showCategoryResults(
  category
) {

  const matchingReminders =
    appData.reminders.filter(
      item =>
        item.category ===
        category
    );


  const matchingTodos =
    appData.todos.filter(
      item =>
        item.category ===
        category
    );


  const matchingGoals =
    appData.goals.filter(
      item =>
        item.category ===
        category
    );


  openSection(
    "dashboard"
  );


  showToast(
    `${category}: ${matchingReminders.length} reminders, ${matchingTodos.length} tasks, ${matchingGoals.length} goals.`
  );

}


/* =========================================================
   UTILITY FUNCTIONS
   ========================================================= */

function getValue(id) {

  const element =
    document.getElementById(
      id
    );


  return element
    ? element.value.trim()
    : "";

}


function setValue(
  id,
  value
) {

  const element =
    document.getElementById(
      id
    );


  if (element) {

    element.value =
      value ?? "";

  }

}


function setText(
  id,
  value
) {

  const element =
    document.getElementById(
      id
    );


  if (element) {

    element.textContent =
      value ?? "";

  }

}


function formatDateTime(
  value
) {

  const date =
    new Date(value);


  if (
    isNaN(
      date.getTime()
    )
  ) {

    return value || "";

  }


  return date.toLocaleString(
    [],
    {
      dateStyle:
        "medium",

      timeStyle:
        "short"
    }
  );

}


function searchable(
  ...values
) {

  return values
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

}


function escapeHTML(
  value
) {

  return String(
    value ?? ""
  )
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(
  message
) {

  const toast =
    document.getElementById(
      "layraazToast"
    );


  if (!toast) return;


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    window.layraazToastTimeout
  );


  window.layraazToastTimeout =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2500
    );

}
