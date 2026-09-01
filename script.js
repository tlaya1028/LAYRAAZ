/* =========================================================
   LAYRAAZ
   Main JavaScript
   ========================================================= */

/* =========================================================
   1. STORAGE
   ========================================================= */

const STORAGE_KEY = "layraazData";

const defaultData = {
  profile: {
    name: "Laya",
    dob: "2002-08-28",
    mbti: "INTJ",
    hobbies: [
      "Singer",
      "Crochets",
      "Travelling",
      "Poet",
      "Kuchipudi Dancer",
      "Playback Singer"
    ],
    occupation: "Executive Assistant to Terminal Head",
    goals: "Start an Edible Cutlery Business in 2 years",
    favouriteColours: "Forest Green, Charcoal Black, Silver",
    favouriteFood: "Dahi Puri",
    favouritePlaces: "Hill Stations",
    favouriteMusic: "Melody",
    skinType: "Sensitive Skin",
    bodyType: "Rectangular Body",
    familyMembers: "4",
    height: "5'1\"",
    characterName: "Character",
    characterPersonality: "Calm, intelligent, firm, caring",
    characterImage: ""
  },

  appearance: {
    palette: 0
  },

  reminders: [],

  todos: [],

  goals: [],

  notes: [],

  notifications: []
};


/* =========================================================
   2. LOAD / SAVE DATA
   ========================================================= */

let data = loadData();

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return structuredClone(defaultData);
    }

    const parsed = JSON.parse(saved);

    return {
      ...structuredClone(defaultData),
      ...parsed,
      profile: {
        ...structuredClone(defaultData.profile),
        ...(parsed.profile || {})
      },
      appearance: {
        ...structuredClone(defaultData.appearance),
        ...(parsed.appearance || {})
      },
      reminders: parsed.reminders || [],
      todos: parsed.todos || [],
      goals: parsed.goals || [],
      notes: parsed.notes || [],
      notifications: parsed.notifications || []
    };

  } catch (error) {
    console.error("Could not load LAYRAAZ data:", error);
    return structuredClone(defaultData);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}


/* =========================================================
   3. PALETTES
   ========================================================= */

const palettes = [
  {
    name: "Deep Forest Green",
    background: "#1d251c",
    main: "#111111",
    font: "#C0C0C0"
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
   4. INITIALISE WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  applyPalette();
  calculateAge();
  loadProfileIntoForm();

  renderDashboard();
  renderReminders();
  renderTodos();
  renderGoals();
  renderNotes();
  renderNotifications();
  renderAppearance();

  setupNavigation();
  setupSidebar();
  setupSearch();
  setupProfile();
  setupReminderForm();
  setupTodoForm();
  setupGoalForm();
  setupNoteForm();
  setupAppearance();
  setupCharacter();

  startReminderChecker();

  updateClock();

  setInterval(updateClock, 1000);
});


/* =========================================================
   5. NAVIGATION
   ========================================================= */

function setupNavigation() {

  document.querySelectorAll("[data-section]").forEach(button => {

    button.addEventListener("click", () => {

      const sectionName = button.dataset.section;

      showSection(sectionName);

    });

  });

}


function showSection(sectionName) {

  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(sectionName);

  if (target) {
    target.classList.add("active");
  }

  document.querySelectorAll("[data-section]").forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.section === sectionName
    );

  });

}


/* =========================================================
   6. SIDEBAR
   ========================================================= */

function setupSidebar() {

  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".sidebar-toggle");

  if (!sidebar || !toggle) return;

  toggle.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

  });

}


/* =========================================================
   7. AGE CALCULATION
   ========================================================= */

function calculateAge() {

  const dob = data.profile.dob;

  if (!dob) return 0;

  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference =
    today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (
      monthDifference === 0 &&
      today.getDate() < birthDate.getDate()
    )
  ) {
    age--;
  }

  const ageElements = document.querySelectorAll(".age-value");

  ageElements.forEach(element => {
    element.textContent = age;
  });

  return age;
}


/* =========================================================
   8. PROFILE
   ========================================================= */

function loadProfileIntoForm() {

  const profile = data.profile;

  const fields = {
    profileName: profile.name,
    profileDOB: profile.dob,
    profileMBTI: profile.mbti,
    profileHobbies: profile.hobbies.join(", "),
    profileOccupation: profile.occupation,
    profileBusinessGoal: profile.goals,
    profileColours: profile.favouriteColours,
    profileFood: profile.favouriteFood,
    profilePlaces: profile.favouritePlaces,
    profileMusic: profile.favouriteMusic,
    profileSkin: profile.skinType,
    profileBody: profile.bodyType,
    profileFamily: profile.familyMembers,
    profileHeight: profile.height,
    characterName: profile.characterName,
    characterPersonality: profile.characterPersonality
  };

  Object.entries(fields).forEach(([id, value]) => {

    const element = document.getElementById(id);

    if (element) {
      element.value = value;
    }

  });

  calculateAge();

  updateCharacterNameDisplay();

  loadCharacterImage();
}


function setupProfile() {

  const saveButton =
    document.getElementById("saveProfile");

  if (saveButton) {

    saveButton.addEventListener("click", saveProfile);

  }

  const dobInput =
    document.getElementById("profileDOB");

  if (dobInput) {

    dobInput.addEventListener("change", () => {

      data.profile.dob = dobInput.value;

      saveData();

      calculateAge();

    });

  }

}


function saveProfile() {

  const getValue = id => {

    const element = document.getElementById(id);

    return element ? element.value.trim() : "";

  };

  data.profile.name =
    getValue("profileName") || "Laya";

  data.profile.dob =
    getValue("profileDOB");

  data.profile.mbti =
    getValue("profileMBTI");

  data.profile.hobbies =
    getValue("profileHobbies")
      .split(",")
      .map(item => item.trim())
      .filter(Boolean);

  data.profile.occupation =
    getValue("profileOccupation");

  data.profile.goals =
    getValue("profileBusinessGoal");

  data.profile.favouriteColours =
    getValue("profileColours");

  data.profile.favouriteFood =
    getValue("profileFood");

  data.profile.favouritePlaces =
    getValue("profilePlaces");

  data.profile.favouriteMusic =
    getValue("profileMusic");

  data.profile.skinType =
    getValue("profileSkin");

  data.profile.bodyType =
    getValue("profileBody");

  data.profile.familyMembers =
    getValue("profileFamily");

  data.profile.height =
    getValue("profileHeight");

  data.profile.characterName =
    getValue("characterName") || "Character";

  data.profile.characterPersonality =
    getValue("characterPersonality") ||
    "Calm, intelligent, firm, caring";

  saveData();

  calculateAge();

  updateCharacterNameDisplay();

  renderDashboard();

  showTemporaryMessage("Profile saved.");

}


/* =========================================================
   9. CHARACTER NAME
   ========================================================= */

function updateCharacterNameDisplay() {

  const name =
    data.profile.characterName || "Character";

  document.querySelectorAll(".character-name").forEach(element => {

    element.textContent = name;

  });

}


/* =========================================================
   10. DASHBOARD
   ========================================================= */

function renderDashboard() {

  const profile = data.profile;

  const mappings = {

    dashboardName: profile.name,

    dashboardMBTI: profile.mbti,

    dashboardColours:
      profile.favouriteColours,

    dashboardFood:
      profile.favouriteFood,

    dashboardPlaces:
      profile.favouritePlaces,

    dashboardMusic:
      profile.favouriteMusic,

    dashboardSkin:
      profile.skinType,

    dashboardBody:
      profile.bodyType,

    dashboardFamily:
      profile.familyMembers,

    dashboardHeight:
      profile.height,

    dashboardOccupation:
      profile.occupation,

    dashboardBusinessGoal:
      profile.goals,

    dashboardHobbies:
      profile.hobbies.join(", ")

  };

  Object.entries(mappings).forEach(([id, value]) => {

    const element = document.getElementById(id);

    if (element) {
      element.textContent = value || "Not set";
    }

  });

  calculateAge();

}


/* =========================================================
   11. REMINDERS
   ========================================================= */

function setupReminderForm() {

  const form =
    document.getElementById("reminderForm");

  if (!form) return;

  form.addEventListener("submit", event => {

    event.preventDefault();

    const title =
      document.getElementById("reminderTitle")?.value.trim();

    const category =
      document.getElementById("reminderCategory")?.value;

    const due =
      document.getElementById("reminderDateTime")?.value;

    if (!title || !due) {

      showTemporaryMessage(
        "Please enter a reminder and date/time."
      );

      return;

    }

    const reminder = {

      id: Date.now(),

      title,

      category:
        category || "Personal",

      due,

      notified: false

    };

    data.reminders.push(reminder);

    saveData();

    renderReminders();

    form.reset();

    requestNotificationPermission();

    showTemporaryMessage(
      "Reminder saved."
    );

  });

}


function renderReminders() {

  const container =
    document.getElementById("remindersList");

  if (!container) return;

  container.innerHTML = "";

  if (data.reminders.length === 0) {

    container.innerHTML =
      `<div class="empty-state">
        No reminders yet.
      </div>`;

    return;

  }

  const sorted =
    [...data.reminders]
      .sort((a, b) =>
        new Date(a.due) - new Date(b.due)
      );

  sorted.forEach(reminder => {

    const item =
      document.createElement("div");

    item.className = "reminder-item";

    const dateText =
      formatDateTime(reminder.due);

    item.innerHTML = `

      <div class="reminder-content">

        <h4>${escapeHTML(reminder.title)}</h4>

        <span class="category-tag">
          ${escapeHTML(reminder.category)}
        </span>

        <p>${dateText}</p>

      </div>

      <div class="item-actions">

        <button
          type="button"
          class="edit-btn"
          data-id="${reminder.id}">
          Edit
        </button>

        <button
          type="button"
          class="delete-btn"
          data-id="${reminder.id}">
          Delete
        </button>

      </div>
    `;

    container.appendChild(item);

  });

  container
    .querySelectorAll(".delete-btn")
    .forEach(button => {

      button.addEventListener("click", () => {

        deleteReminder(
          Number(button.dataset.id)
        );

      });

    });

  container
    .querySelectorAll(".edit-btn")
    .forEach(button => {

      button.addEventListener("click", () => {

        editReminder(
          Number(button.dataset.id)
        );

      });

    });

}


function deleteReminder(id) {

  data.reminders =
    data.reminders.filter(
      reminder => reminder.id !== id
    );

  saveData();

  renderReminders();

}


function editReminder(id) {

  const reminder =
    data.reminders.find(
      item => item.id === id
    );

  if (!reminder) return;

  const title =
    prompt(
      "Reminder:",
      reminder.title
    );

  if (title === null) return;

  const due =
    prompt(
      "Date and time (YYYY-MM-DDTHH:MM):",
      reminder.due
    );

  if (due === null) return;

  reminder.title =
    title.trim() || reminder.title;

  reminder.due =
    due;

  reminder.notified =
    false;

  saveData();

  renderReminders();

}


/* =========================================================
   12. REMINDER CHECKER
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

  let changed = false;

  data.reminders.forEach(reminder => {

    const due =
      new Date(reminder.due).getTime();

    if (
      !reminder.notified &&
      !isNaN(due) &&
      now >= due
    ) {

      reminder.notified = true;

      changed = true;

      triggerCharacterReminder(reminder);

      addNotification(
        `Reminder: ${reminder.title}`
      );

      sendBrowserNotification(
        data.profile.characterName || "Character",
        reminder.title
      );

    }

  });

  if (changed) {

    saveData();

    renderReminders();

    renderNotifications();

  }

}


/* =========================================================
   13. CHARACTER REMINDER
   ========================================================= */

function triggerCharacterReminder(reminder) {

  const container =
    document.getElementById(
      "characterReminder"
    );

  if (!container) return;

  const character =
    container.querySelector(
      ".character-sticker"
    );

  const bubble =
    container.querySelector(
      ".character-bubble"
    );

  const message =
    container.querySelector(
      ".character-message"
    );

  const title =
    container.querySelector(
      ".character-reminder-title"
    );

  if (title) {

    title.textContent =
      reminder.title;

  }

  if (message) {

    message.textContent =
      getCharacterMessage(reminder);

  }

  container.classList.remove("hidden");

  container.classList.remove(
    "character-animation"
  );

  void container.offsetWidth;

  container.classList.add(
    "character-animation"
  );

  if (character) {

    const movements = [
      "character-float",
      "character-shake",
      "character-nod",
      "character-bounce"
    ];

    const randomMovement =
      movements[
        Math.floor(
          Math.random() * movements.length
        )
      ];

    character.classList.remove(
      ...movements
    );

    character.classList.add(
      randomMovement
    );

  }

  setTimeout(() => {

    container.classList.add("hidden");

  }, 12000);

}


function getCharacterMessage(reminder) {

  const personality =
    (
      data.profile.characterPersonality ||
      ""
    ).toLowerCase();

  if (
    personality.includes("firm") ||
    personality.includes("strict")
  ) {

    return `Your reminder is due. Handle it now: "${reminder.title}".`;

  }

  if (
    personality.includes("caring") ||
    personality.includes("gentle")
  ) {

    return `Your reminder is due. Take care of this now: "${reminder.title}".`;

  }

  if (
    personality.includes("calm")
  ) {

    return `It's time for "${reminder.title}".`;

  }

  return `Reminder due: "${reminder.title}".`;

}


/* =========================================================
   14. CHARACTER CLOSE BUTTON
   ========================================================= */

function setupCharacter() {

  const closeButton =
    document.getElementById(
      "closeCharacterReminder"
    );

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      () => {

        const container =
          document.getElementById(
            "characterReminder"
          );

        if (container) {

          container.classList.add(
            "hidden"
          );

        }

      }
    );

  }

  const imageInput =
    document.getElementById(
      "characterImageInput"
    );

  if (imageInput) {

    imageInput.addEventListener(
      "change",
      handleCharacterImage
    );

  }

  loadCharacterImage();

}


/* =========================================================
   15. CHARACTER IMAGE UPLOAD
   ========================================================= */

function handleCharacterImage(event) {

  const file =
    event.target.files?.[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {

    showTemporaryMessage(
      "Please choose an image file."
    );

    return;

  }

  const reader =
    new FileReader();

  reader.onload = function(e) {

    processCharacterImage(
      e.target.result
    );

  };

  reader.readAsDataURL(file);

}


function processCharacterImage(src) {

  const image =
    new Image();

  image.onload = function() {

    const maxSize = 700;

    let width =
      image.naturalWidth;

    let height =
      image.naturalHeight;

    const scale =
      Math.min(
        1,
        maxSize /
        Math.max(width, height)
      );

    width =
      Math.round(width * scale);

    height =
      Math.round(height * scale);

    const canvas =
      document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;

    const ctx =
      canvas.getContext("2d");

    ctx.drawImage(
      image,
      0,
      0,
      width,
      height
    );

    removeBackground(
      ctx,
      width,
      height
    );

    const cropped =
      cropTransparentArea(
        canvas
      );

    const finalCanvas =
      cropped || canvas;

    const dataURL =
      finalCanvas.toDataURL(
        "image/png"
      );

    data.profile.characterImage =
      dataURL;

    saveData();

    loadCharacterImage();

    showTemporaryMessage(
      "Character image saved."
    );

  };

  image.src = src;

}


/* =========================================================
   16. BACKGROUND REMOVAL
   ========================================================= */

function removeBackground(
  ctx,
  width,
  height
) {

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

  const addPixel =
    (x, y) => {

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

      if (visited[index]) return;

      visited[index] = 1;

      queue.push([x, y]);

    };

  for (let x = 0; x < width; x++) {

    addPixel(x, 0);
    addPixel(x, height - 1);

  }

  for (let y = 0; y < height; y++) {

    addPixel(0, y);
    addPixel(width - 1, y);

  }

  const tolerance = 55;

  while (queue.length) {

    const [x, y] =
      queue.shift();

    const index =
      (y * width + x) * 4;

    const r =
      pixels[index];

    const g =
      pixels[index + 1];

    const b =
      pixels[index + 2];

    const isBackground =
      r < tolerance &&
      g < tolerance &&
      b < tolerance;

    if (!isBackground) {
      continue;
    }

    pixels[index + 3] = 0;

    addPixel(x + 1, y);
    addPixel(x - 1, y);
    addPixel(x, y + 1);
    addPixel(x, y - 1);

  }

  ctx.putImageData(
    imageData,
    0,
    0
  );

}


/* =========================================================
   17. CROP TRANSPARENT AREA
   ========================================================= */

function cropTransparentArea(canvas) {

  const ctx =
    canvas.getContext("2d");

  const width =
    canvas.width;

  const height =
    canvas.height;

  const imageData =
    ctx.getImageData(
      0,
      0,
      width,
      height
    );

  const pixels =
    imageData.data;

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

      const alpha =
        pixels[
          (y * width + x) * 4 + 3
        ];

      if (alpha > 10) {

        minX =
          Math.min(minX, x);

        minY =
          Math.min(minY, y);

        maxX =
          Math.max(maxX, x);

        maxY =
          Math.max(maxY, y);

      }

    }

  }

  if (maxX === -1) {
    return null;
  }

  const padding = 10;

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
    output.getContext("2d");

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

  return output;

}


/* =========================================================
   18. LOAD CHARACTER IMAGE
   ========================================================= */

function loadCharacterImage() {

  const image =
    data.profile.characterImage;

  document
    .querySelectorAll(
      ".character-sticker"
    )
    .forEach(element => {

      if (image) {

        element.src = image;

        element.style.display =
          "block";

      } else {

        element.style.display =
          "none";

      }

    });

}


/* =========================================================
   19. BROWSER NOTIFICATIONS
   ========================================================= */

function requestNotificationPermission() {

  if (!("Notification" in window)) {

    return;

  }

  if (
    Notification.permission ===
    "default"
  ) {

    Notification.requestPermission();

  }

}


function sendBrowserNotification(
  title,
  message
) {

  if (!("Notification" in window)) {
    return;
  }

  if (
    Notification.permission ===
    "granted"
  ) {

    new Notification(
      title,
      {
        body: message,
        icon:
          data.profile.characterImage ||
          undefined
      }
    );

  }

}


/* =========================================================
   20. NOTIFICATIONS
   ========================================================= */

function addNotification(message) {

  data.notifications.unshift({

    id: Date.now(),

    message,

    date: new Date().toISOString(),

    read: false

  });

  if (
    data.notifications.length > 100
  ) {

    data.notifications =
      data.notifications.slice(
        0,
        100
      );

  }

}


function renderNotifications() {

  const container =
    document.getElementById(
      "notificationsList"
    );

  if (!container) return;

  container.innerHTML = "";

  if (
    data.notifications.length === 0
  ) {

    container.innerHTML =
      `<div class="empty-state">
        No notifications yet.
      </div>`;

    return;

  }

  data.notifications.forEach(
    notification => {

      const item =
        document.createElement("div");

      item.className =
        "notification-item";

      item.innerHTML = `

        <div>
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
        </div>

      `;

      container.appendChild(item);

    }
  );

}


/* =========================================================
   21. TO-DO LIST
   ========================================================= */

function setupTodoForm() {

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
        document
          .getElementById(
            "todoTitle"
          )
          ?.value.trim();

      const category =
        document
          .getElementById(
            "todoCategory"
          )
          ?.value;

      if (!title) {

        showTemporaryMessage(
          "Enter a task first."
        );

        return;

      }

      data.todos.push({

        id: Date.now(),

        title,

        category:
          category || "Personal",

        completed: false,

        created:
          new Date().toISOString()

      });

      saveData();

      renderTodos();

      form.reset();

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

  if (data.todos.length === 0) {

    container.innerHTML =
      `<div class="empty-state">
        No tasks yet.
      </div>`;

    return;

  }

  data.todos.forEach(todo => {

    const item =
      document.createElement("div");

    item.className =
      "todo-item";

    if (todo.completed) {

      item.classList.add(
        "completed"
      );

    }

    item.innerHTML = `

      <label class="todo-check">

        <input
          type="checkbox"
          ${todo.completed ? "checked" : ""}
          data-id="${todo.id}"
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
        type="button"
        class="delete-btn"
        data-id="${todo.id}">
        Delete
      </button>

    `;

    container.appendChild(item);

  });

  container
    .querySelectorAll(
      'input[type="checkbox"]'
    )
    .forEach(input => {

      input.addEventListener(
        "change",
        () => {

          const id =
            Number(input.dataset.id);

          const todo =
            data.todos.find(
              item =>
                item.id === id
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
    .querySelectorAll(".delete-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            Number(
              button.dataset.id
            );

          data.todos =
            data.todos.filter(
              item =>
                item.id !== id
            );

          saveData();

          renderTodos();

        }
      );

    });

}


/* =========================================================
   22. GOALS
   ========================================================= */

function setupGoalForm() {

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
        document
          .getElementById(
            "goalTitle"
          )
          ?.value.trim();

      const category =
        document
          .getElementById(
            "goalCategory"
          )
          ?.value;

      if (!title) return;

      data.goals.push({

        id: Date.now(),

        title,

        category:
          category || "Personal",

        progress: 0,

        created:
          new Date().toISOString()

      });

      saveData();

      renderGoals();

      form.reset();

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

  if (data.goals.length === 0) {

    container.innerHTML =
      `<div class="empty-state">
        No goals yet.
      </div>`;

    return;

  }

  data.goals.forEach(goal => {

    const item =
      document.createElement("div");

    item.className =
      "goal-item";

    item.innerHTML = `

      <div class="goal-header">

        <div>

          <h4>
            ${escapeHTML(goal.title)}
          </h4>

          <span class="category-tag">
            ${escapeHTML(goal.category)}
          </span>

        </div>

        <strong>
          ${goal.progress}%
        </strong>

      </div>

      <div class="goal-progress">

        <div
          class="goal-progress-bar"
          style="width:${goal.progress}%">
        </div>

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
          type="button"
          class="delete-btn"
          data-id="${goal.id}">
          Delete
        </button>

      </div>

    `;

    container.appendChild(item);

  });

  container
    .querySelectorAll(
      'input[type="range"]'
    )
    .forEach(range => {

      range.addEventListener(
        "input",
        () => {

          const goal =
            data.goals.find(
              item =>
                item.id ===
                Number(range.dataset.id)
            );

          if (!goal) return;

          goal.progress =
            Number(range.value);

          saveData();

          renderGoals();

        }
      );

    });

  container
    .querySelectorAll(".delete-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          data.goals =
            data.goals.filter(
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
   23. NOTES
   ========================================================= */

function setupNoteForm() {

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
        document
          .getElementById(
            "noteTitle"
          )
          ?.value.trim();

      const content =
        document
          .getElementById(
            "noteContent"
          )
          ?.value.trim();

      if (!title && !content) {

        showTemporaryMessage(
          "Write something first."
        );

        return;

      }

      data.notes.unshift({

        id: Date.now(),

        title:
          title || "Untitled Note",

        content:

          content || "",

        date:
          new Date().toISOString()

      });

      saveData();

      renderNotes();

      form.reset();

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

  if (data.notes.length === 0) {

    container.innerHTML =
      `<div class="empty-state">
        No notes yet.
      </div>`;

    return;

  }

  data.notes.forEach(note => {

    const item =
      document.createElement("article");

    item.className =
      "note-item";

    item.innerHTML = `

      <div class="note-header">

        <div>

          <h4>
            ${escapeHTML(note.title)}
          </h4>

          <small>
            ${formatDateTime(note.date)}
          </small>

        </div>

        <button
          type="button"
          class="delete-btn"
          data-id="${note.id}">
          Delete
        </button>

      </div>

      <p>
        ${escapeHTML(note.content)}
      </p>

    `;

    container.appendChild(item);

  });

  container
    .querySelectorAll(".delete-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          data.notes =
            data.notes.filter(
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
   24. SEARCH
   ========================================================= */

function setupSearch() {

  const search =
    document.getElementById(
      "globalSearch"
    );

  if (!search) return;

  search.addEventListener(
    "input",
    () => {

      performSearch(
        search.value.trim()
      );

    }
  );

}


function performSearch(query) {

  if (!query) {

    renderReminders();
    renderTodos();
    renderGoals();
    renderNotes();

    return;

  }

  const lower =
    query.toLowerCase();

  const reminderResults =
    data.reminders.filter(
      item =>
        item.title
          .toLowerCase()
          .includes(lower) ||
        item.category
          .toLowerCase()
          .includes(lower)
    );

  const todoResults =
    data.todos.filter(
      item =>
        item.title
          .toLowerCase()
          .includes(lower) ||
        item.category
          .toLowerCase()
          .includes(lower)
    );

  const goalResults =
    data.goals.filter(
      item =>
        item.title
          .toLowerCase()
          .includes(lower) ||
        item.category
          .toLowerCase()
          .includes(lower)
    );

  const noteResults =
    data.notes.filter(
      item =>
        item.title
          .toLowerCase()
          .includes(lower) ||
        item.content
          .toLowerCase()
          .includes(lower)
    );

  renderSearchResults(
    reminderResults,
    todoResults,
    goalResults,
    noteResults
  );

}


function renderSearchResults(
  reminders,
  todos,
  goals,
  notes
) {

  const container =
    document.getElementById(
      "searchResults"
    );

  if (!container) return;

  container.innerHTML = "";

  const total =
    reminders.length +
    todos.length +
    goals.length +
    notes.length;

  if (total === 0) {

    container.innerHTML =
      `<div class="empty-state">
        Nothing found.
      </div>`;

    return;

  }

  const addGroup =
    (title, items, formatter) => {

      if (!items.length) return;

      const group =
        document.createElement("div");

      group.className =
        "search-group";

      group.innerHTML =
        `<h3>${title}</h3>`;

      items.forEach(item => {

        const result =
          document.createElement("div");

        result.className =
          "search-result";

        result.innerHTML =
          formatter(item);

        group.appendChild(result);

      });

      container.appendChild(group);

    };

  addGroup(
    "Reminders",
    reminders,
    item =>
      `<strong>${escapeHTML(item.title)}</strong>
       <small>${formatDateTime(item.due)}</small>`
  );

  addGroup(
    "To-Do",
    todos,
    item =>
      `<strong>${escapeHTML(item.title)}</strong>
       <small>${escapeHTML(item.category)}</small>`
  );

  addGroup(
    "Goals",
    goals,
    item =>
      `<strong>${escapeHTML(item.title)}</strong>
       <small>${item.progress}% complete</small>`
  );

  addGroup(
    "Notes",
    notes,
    item =>
      `<strong>${escapeHTML(item.title)}</strong>
       <small>${escapeHTML(item.content)}</small>`
  );

}


/* =========================================================
   25. APPEARANCE
   ========================================================= */

function setupAppearance() {

  document
    .querySelectorAll(
      "[data-palette]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(
              button.dataset.palette
            );

          if (
            Number.isNaN(index) ||
            !palettes[index]
          ) {
            return;
          }

          data.appearance.palette =
            index;

          saveData();

          applyPalette();

          renderAppearance();

        }
      );

    });

}


function applyPalette() {

  const palette =
    palettes[
      data.appearance.palette
    ] || palettes[0];

  document.documentElement.style.setProperty(
    "--background",
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
    "--accent",
    palette.main
  );

}


function renderAppearance() {

  document
    .querySelectorAll(
      "[data-palette]"
    )
    .forEach(button => {

      const index =
        Number(
          button.dataset.palette
        );

      button.classList.toggle(
        "selected",
        index ===
          data.appearance.palette
      );

    });

}


/* =========================================================
   26. CHARACTER SETTINGS
   ========================================================= */

function setupCharacterSettings() {

  const saveButton =
    document.getElementById(
      "saveCharacterSettings"
    );

  if (!saveButton) return;

  saveButton.addEventListener(
    "click",
    () => {

      const name =
        document
          .getElementById(
            "characterName"
          )
          ?.value.trim();

      const personality =
        document
          .getElementById(
            "characterPersonality"
          )
          ?.value.trim();

      data.profile.characterName =
        name || "Character";

      data.profile.characterPersonality =
        personality ||
        "Calm, intelligent, firm, caring";

      saveData();

      updateCharacterNameDisplay();

      showTemporaryMessage(
        "Character settings saved."
      );

    }
  );

}


/* =========================================================
   27. CLOCK
   ========================================================= */

function updateClock() {

  const elements =
    document.querySelectorAll(
      ".current-time"
    );

  const now =
    new Date();

  const time =
    now.toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit"
      }
    );

  elements.forEach(element => {

    element.textContent =
      time;

  });

}


/* =========================================================
   28. DATE / TIME FORMAT
   ========================================================= */

function formatDateTime(value) {

  if (!value) return "";

  const date =
    new Date(value);

  if (isNaN(date.getTime())) {

    return value;

  }

  return date.toLocaleString(
    [],
    {
      dateStyle: "medium",
      timeStyle: "short"
    }
  );

}


/* =========================================================
   29. HTML SECURITY
   ========================================================= */

function escapeHTML(value) {

  if (value === null ||
      value === undefined) {

    return "";

  }

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   30. TEMPORARY MESSAGE
   ========================================================= */

function showTemporaryMessage(message) {

  let box =
    document.getElementById(
      "layraazToast"
    );

  if (!box) {

    box =
      document.createElement(
        "div"
      );

    box.id =
      "layraazToast";

    box.className =
      "layraaz-toast";

    document.body.appendChild(box);

  }

  box.textContent =
    message;

  box.classList.add("show");

  clearTimeout(
    window.layraazToastTimer
  );

  window.layraazToastTimer =
    setTimeout(() => {

      box.classList.remove(
        "show"
      );

    }, 2500);

}


/* =========================================================
   31. CHARACTER SETTINGS INIT
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setupCharacterSettings();

  }
);


/* =========================================================
   32. NOTIFICATION PERMISSION BUTTON
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const button =
      document.getElementById(
        "enableNotifications"
      );

    if (!button) return;

    button.addEventListener(
      "click",
      () => {

        requestNotificationPermission();

      }
    );

  }
);


/* =========================================================
   33. CLEAR NOTIFICATIONS
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const button =
      document.getElementById(
        "clearNotifications"
      );

    if (!button) return;

    button.addEventListener(
      "click",
      () => {

        data.notifications = [];

        saveData();

        renderNotifications();

      }
    );

  }
);


/* =========================================================
   34. RESET WEBSITE DATA
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const button =
      document.getElementById(
        "resetData"
      );

    if (!button) return;

    button.addEventListener(
      "click",
      () => {

        const confirmed =
          confirm(
            "Reset all LAYRAAZ data?"
          );

        if (!confirmed) return;

        data =
          structuredClone(
            defaultData
          );

        saveData();

        location.reload();

      }
    );

  }
);
