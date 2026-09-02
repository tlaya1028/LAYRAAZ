/* =========================================================
   LAYRAAZ
   Main JavaScript
   ========================================================= */


/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "LAYRAAZ_DATA_V2";


/* =========================================================
   DEFAULT DATA
   ========================================================= */

const defaultData = {
    profile: {
        name: "Laya",
        dob: "2002-08-28",
        mbti: "INTJ",
        occupation: "Executive Assistant to Terminal Head",
        hobbies: [
            "Singer",
            "Crochets",
            "Travelling",
            "Poet",
            "Kuchipudi Dancer",
            "Playback Singer"
        ],
        favouriteColours: "Forest Green, Charcoal Black, Silver",
        favouriteFood: "Dahi Puri",
        favouritePlaces: "Hill Stations",
        favouriteMusic: "Melody",
        skinType: "Sensitive Skin",
        bodyType: "Rectangular",
        familyMembers: "4",
        height: "5'1\"",
        jewellery: "Silver Jewellery",
        businessGoal: "Start an Edible Cutlery Business in 2 years",
        image: ""
    },

    character: {
        name: "Character",
        personality: "Calm, intelligent, firm and caring.",
        image: ""
    },

    appearance: "forest",

    reminders: [],

    todos: [],

    goals: [],

    notes: [],

    notifications: []
};


/* =========================================================
   LOAD DATA
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

            character: {
                ...structuredClone(defaultData.character),
                ...(parsed.character || {})
            },

            reminders: Array.isArray(parsed.reminders) ? parsed.reminders : [],
            todos: Array.isArray(parsed.todos) ? parsed.todos : [],
            goals: Array.isArray(parsed.goals) ? parsed.goals : [],
            notes: Array.isArray(parsed.notes) ? parsed.notes : [],
            notifications: Array.isArray(parsed.notifications)
                ? parsed.notifications
                : []
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
   APPEARANCE PALETTES
   Exactly 10 palettes
   ========================================================= */

const palettes = {

    forest: {
        name: "Deep Forest Green",
        background: "#1d251c",
        main: "#101411",
        font: "#D0D4CE"
    },

    butter: {
        name: "Butter Yellow",
        background: "#F3E7A3",
        main: "#8CB8D0",
        font: "#4A2C20"
    },

    almond: {
        name: "Almond",
        background: "#E8D8C3",
        main: "#8DBFA9",
        font: "#8E2636"
    },

    sage: {
        name: "Misty Sage",
        background: "#B8C5B1",
        main: "#6D2026",
        font: "#3B2922"
    },

    navy: {
        name: "Navy",
        background: "#111D38",
        main: "#C8A85C",
        font: "#E5D5B8"
    },

    champagne: {
        name: "Champagne",
        background: "#F0DFC3",
        main: "#70752F",
        font: "#403A25"
    },

    gunmetal: {
        name: "Gunmetal",
        background: "#353B40",
        main: "#E9E0D0",
        font: "#F4EBDD"
    },

    cadet: {
        name: "Cadet Grey",
        background: "#919FA5",
        main: "#EEEAE2",
        font: "#30251F"
    },

    pink: {
        name: "Muted Pink",
        background: "#C99BA1",
        main: "#9D233B",
        font: "#681D2B"
    },

    lavender: {
        name: "Lavender Mist",
        background: "#DAD1E6",
        main: "#4A302A",
        font: "#39243A"
    }
};


/* =========================================================
   APPEARANCE
   ========================================================= */

function applyAppearance() {

    const palette =
        palettes[data.appearance] || palettes.forest;

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
        "--font-muted",
        palette.font
    );
}


/* =========================================================
   AGE CALCULATION
   ========================================================= */

function calculateAge(dob) {

    if (!dob) return "";

    const birthDate = new Date(dob);
    const today = new Date();

    let age =
        today.getFullYear() -
        birthDate.getFullYear();

    const monthDifference =
        today.getMonth() -
        birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birthDate.getDate()
        )
    ) {
        age--;
    }

    return age;
}


/* =========================================================
   ELEMENT HELPERS
   ========================================================= */

function get(id) {
    return document.getElementById(id);
}


function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showSection(sectionId) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    const target = get(sectionId);

    if (target) {
        target.classList.add("active");
    }

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    const navItem =
        document.querySelector(`[data-section="${sectionId}"]`);

    if (navItem) {
        navItem.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   SIDEBAR
   ========================================================= */

function setupSidebar() {

    const sidebar = get("sidebar");
    const toggle = get("sidebarToggle");

    if (!sidebar || !toggle) return;

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });

    document.querySelectorAll(".nav-item").forEach(item => {

        item.addEventListener("click", () => {

            const section =
                item.getAttribute("data-section");

            if (section) {
                showSection(section);
            }
        });

    });
}


/* =========================================================
   PROFILE
   ========================================================= */

function renderProfile() {

    const profile = data.profile;

    const nameInput = get("profileName");
    const dobInput = get("profileDob");
    const mbtiInput = get("profileMbti");
    const occupationInput = get("profileOccupation");
    const hobbiesInput = get("profileHobbies");
    const coloursInput = get("profileColours");
    const foodInput = get("profileFood");
    const placesInput = get("profilePlaces");
    const musicInput = get("profileMusic");
    const skinInput = get("profileSkin");
    const bodyInput = get("profileBody");
    const familyInput = get("profileFamily");
    const heightInput = get("profileHeight");
    const jewelleryInput = get("profileJewellery");
    const businessInput = get("profileBusiness");

    if (nameInput) nameInput.value = profile.name || "";
    if (dobInput) dobInput.value = profile.dob || "";
    if (mbtiInput) mbtiInput.value = profile.mbti || "";
    if (occupationInput) occupationInput.value = profile.occupation || "";

    if (hobbiesInput) {
        hobbiesInput.value =
            Array.isArray(profile.hobbies)
                ? profile.hobbies.join(", ")
                : profile.hobbies || "";
    }

    if (coloursInput) {
        coloursInput.value = profile.favouriteColours || "";
    }

    if (foodInput) {
        foodInput.value = profile.favouriteFood || "";
    }

    if (placesInput) {
        placesInput.value = profile.favouritePlaces || "";
    }

    if (musicInput) {
        musicInput.value = profile.favouriteMusic || "";
    }

    if (skinInput) {
        skinInput.value = profile.skinType || "";
    }

    if (bodyInput) {
        bodyInput.value = profile.bodyType || "";
    }

    if (familyInput) {
        familyInput.value = profile.familyMembers || "";
    }

    if (heightInput) {
        heightInput.value = profile.height || "";
    }

    if (jewelleryInput) {
        jewelleryInput.value = profile.jewellery || "";
    }

    if (businessInput) {
        businessInput.value = profile.businessGoal || "";
    }

    const ageElement = get("profileAge");

    if (ageElement) {
        ageElement.textContent =
            calculateAge(profile.dob);
    }

    updateProfileImages();
}


function saveProfile() {

    const profile = data.profile;

    profile.name =
        get("profileName")?.value.trim() || "";

    profile.dob =
        get("profileDob")?.value || "";

    profile.mbti =
        get("profileMbti")?.value.trim() || "";

    profile.occupation =
        get("profileOccupation")?.value.trim() || "";

    const hobbies =
        get("profileHobbies")?.value || "";

    profile.hobbies =
        hobbies
            .split(",")
            .map(item => item.trim())
            .filter(Boolean);

    profile.favouriteColours =
        get("profileColours")?.value.trim() || "";

    profile.favouriteFood =
        get("profileFood")?.value.trim() || "";

    profile.favouritePlaces =
        get("profilePlaces")?.value.trim() || "";

    profile.favouriteMusic =
        get("profileMusic")?.value.trim() || "";

    profile.skinType =
        get("profileSkin")?.value.trim() || "";

    profile.bodyType =
        get("profileBody")?.value.trim() || "";

    profile.familyMembers =
        get("profileFamily")?.value.trim() || "";

    profile.height =
        get("profileHeight")?.value.trim() || "";

    profile.jewellery =
        get("profileJewellery")?.value.trim() || "";

    profile.businessGoal =
        get("profileBusiness")?.value.trim() || "";

    saveData();

    renderProfile();
    renderDashboard();

    showToast("Profile saved.");
}


/* =========================================================
   PROFILE IMAGE
   ========================================================= */

function setupProfileImageUpload() {

    const input = get("profileImageUpload");

    if (!input) return;

    input.addEventListener("change", event => {

        const file = event.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e) {

            data.profile.image = e.target.result;

            saveData();
            updateProfileImages();

            showToast("Profile picture updated.");
        };

        reader.readAsDataURL(file);
    });
}


function updateProfileImages() {

    document
        .querySelectorAll(".profile-image")
        .forEach(img => {

            if (data.profile.image) {
                img.src = data.profile.image;
            }

        });
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {

    const profile = data.profile;

    const welcome =
        get("welcomeMessage");

    if (welcome) {

        const name =
            profile.name || "there";

        welcome.textContent =
            `Welcome Back, ${name}`;
    }

    const dashboardName =
        get("dashboardName");

    if (dashboardName) {
        dashboardName.textContent =
            profile.name || "Laya";
    }

    const dashboardAge =
        get("dashboardAge");

    if (dashboardAge) {
        dashboardAge.textContent =
            calculateAge(profile.dob) || "—";
    }

    const dashboardMbti =
        get("dashboardMbti");

    if (dashboardMbti) {
        dashboardMbti.textContent =
            profile.mbti || "—";
    }

    const dashboardOccupation =
        get("dashboardOccupation");

    if (dashboardOccupation) {
        dashboardOccupation.textContent =
            profile.occupation || "—";
    }

    const dashboardHobbies =
        get("dashboardHobbies");

    if (dashboardHobbies) {

        dashboardHobbies.textContent =
            Array.isArray(profile.hobbies)
                ? profile.hobbies.join(", ")
                : profile.hobbies || "—";
    }

    const dashboardFood =
        get("dashboardFood");

    if (dashboardFood) {
        dashboardFood.textContent =
            profile.favouriteFood || "—";
    }

    const dashboardPlaces =
        get("dashboardPlaces");

    if (dashboardPlaces) {
        dashboardPlaces.textContent =
            profile.favouritePlaces || "—";
    }

    const dashboardMusic =
        get("dashboardMusic");

    if (dashboardMusic) {
        dashboardMusic.textContent =
            profile.favouriteMusic || "—";
    }

    const dashboardColours =
        get("dashboardColours");

    if (dashboardColours) {
        dashboardColours.textContent =
            profile.favouriteColours || "—";
    }

    const dashboardSkin =
        get("dashboardSkin");

    if (dashboardSkin) {
        dashboardSkin.textContent =
            profile.skinType || "—";
    }

    const dashboardBody =
        get("dashboardBody");

    if (dashboardBody) {
        dashboardBody.textContent =
            profile.bodyType || "—";
    }

    const dashboardFamily =
        get("dashboardFamily");

    if (dashboardFamily) {
        dashboardFamily.textContent =
            profile.familyMembers || "—";
    }

    updateDashboardCharacter();
}


function updateDashboardCharacter() {

    const image =
        get("dashboardCharacterImage");

    if (!image) return;

    if (data.character.image) {
        image.src = data.character.image;
        image.style.display = "block";
    }
}


/* =========================================================
   CHARACTER
   ========================================================= */

function renderCharacterSettings() {

    const nameInput =
        get("characterName");

    const personalityInput =
        get("characterPersonality");

    if (nameInput) {
        nameInput.value =
            data.character.name || "Character";
    }

    if (personalityInput) {
        personalityInput.value =
            data.character.personality || "";
    }

    updateCharacterImages();
}


function saveCharacterSettings() {

    data.character.name =
        get("characterName")?.value.trim() ||
        "Character";

    data.character.personality =
        get("characterPersonality")?.value.trim() ||
        "Calm, intelligent, firm and caring.";

    saveData();

    renderCharacterSettings();
    renderDashboard();

    showToast("Character settings saved.");
}


/* =========================================================
   CHARACTER IMAGE UPLOAD
   ========================================================= */

function setupCharacterImageUpload() {

    const input =
        get("characterImageUpload");

    if (!input) return;

    input.addEventListener("change", event => {

        const file =
            event.target.files[0];

        if (!file) return;

        const reader =
            new FileReader();

        reader.onload = function(e) {

            data.character.image =
                e.target.result;

            saveData();

            updateCharacterImages();
            updateDashboardCharacter();

            showToast("Character picture updated.");
        };

        reader.readAsDataURL(file);
    });
}


function updateCharacterImages() {

    document
        .querySelectorAll(".character-image")
        .forEach(img => {

            if (data.character.image) {
                img.src =
                    data.character.image;
            }

        });

    const dashboardImage =
        get("dashboardCharacterImage");

    if (
        dashboardImage &&
        data.character.image
    ) {
        dashboardImage.src =
            data.character.image;
    }
}


/* =========================================================
   CHARACTER TEST
   ========================================================= */

function testCharacter() {

    showCharacterReminder(
        "This is a character test. I am here."
    );
}


/* =========================================================
   CHARACTER REMINDER
   ========================================================= */

function showCharacterReminder(message) {

    let container =
        get("characterReminder");

    if (!container) {

        container =
            document.createElement("div");

        container.id =
            "characterReminder";

        container.className =
            "character-reminder";

        document.body.appendChild(container);
    }

    const characterName =
        data.character.name || "Character";

    const imageHTML =
        data.character.image
            ? `<img src="${data.character.image}" class="character-reminder-image">`
            : `<div class="character-placeholder">✦</div>`;

    container.innerHTML = `
        <div class="character-reminder-inner">

            <div class="character-reminder-figure">
                ${imageHTML}
            </div>

            <div class="character-bubble">

                <div class="character-bubble-name">
                    ${escapeHTML(characterName)}
                </div>

                <div class="character-bubble-text">
                    ${escapeHTML(message)}
                </div>

            </div>

        </div>
    `;

    container.classList.add("show");

    setTimeout(() => {
        container.classList.remove("show");
    }, 10000);
}


/* =========================================================
   REMINDERS
   ========================================================= */

function renderReminders() {

    const container =
        get("reminderList");

    if (!container) return;

    if (!data.reminders.length) {

        container.innerHTML =
            `<div class="empty-state">No reminders yet.</div>`;

        return;
    }

    const sorted =
        [...data.reminders]
            .sort(
                (a, b) =>
                    new Date(a.datetime) -
                    new Date(b.datetime)
            );

    container.innerHTML =
        sorted.map(reminder => {

            const date =
                new Date(reminder.datetime);

            return `
                <div class="reminder-item">

                    <div>
                        <strong>
                            ${escapeHTML(reminder.title)}
                        </strong>

                        <div class="muted">
                            ${date.toLocaleString()}
                        </div>

                        ${
                            reminder.description
                                ? `<div>
                                    ${escapeHTML(reminder.description)}
                                   </div>`
                                : ""
                        }
                    </div>

                    <div class="item-actions">

                        <button
                            onclick="editReminder('${reminder.id}')">
                            Edit
                        </button>

                        <button
                            onclick="deleteReminder('${reminder.id}')">
                            Delete
                        </button>

                    </div>

                </div>
            `;

        }).join("");
}


function saveReminder() {

    const title =
        get("reminderTitle")?.value.trim();

    const datetime =
        get("reminderDateTime")?.value;

    const description =
        get("reminderDescription")?.value.trim() || "";

    if (!title || !datetime) {

        showToast(
            "Please enter a reminder title and date/time."
        );

        return;
    }

    const editingId =
        get("editingReminderId")?.value;

    if (editingId) {

        const reminder =
            data.reminders.find(
                item => item.id === editingId
            );

        if (reminder) {

            reminder.title = title;
            reminder.datetime = datetime;
            reminder.description = description;
            reminder.notified = false;
        }

    } else {

        data.reminders.push({

            id:
                Date.now().toString(),

            title,

            datetime,

            description,

            notified: false
        });
    }

    saveData();

    renderReminders();

    clearReminderForm();

    showToast("Reminder saved.");
}


function editReminder(id) {

    const reminder =
        data.reminders.find(
            item => item.id === id
        );

    if (!reminder) return;

    if (get("reminderTitle")) {
        get("reminderTitle").value =
            reminder.title;
    }

    if (get("reminderDateTime")) {
        get("reminderDateTime").value =
            reminder.datetime;
    }

    if (get("reminderDescription")) {
        get("reminderDescription").value =
            reminder.description || "";
    }

    if (get("editingReminderId")) {
        get("editingReminderId").value =
            reminder.id;
    }

    showSection("reminders");
}


function deleteReminder(id) {

    data.reminders =
        data.reminders.filter(
            reminder =>
                reminder.id !== id
        );

    saveData();

    renderReminders();

    showToast("Reminder deleted.");
}


function clearReminderForm() {

    if (get("reminderTitle")) {
        get("reminderTitle").value = "";
    }

    if (get("reminderDateTime")) {
        get("reminderDateTime").value = "";
    }

    if (get("reminderDescription")) {
        get("reminderDescription").value = "";
    }

    if (get("editingReminderId")) {
        get("editingReminderId").value = "";
    }
}


/* =========================================================
   REMINDER WATCHER
   ========================================================= */

function startReminderWatcher() {

    checkReminders();

    setInterval(
        checkReminders,
        15000
    );
}


function checkReminders() {

    const now =
        new Date();

    let changed = false;

    data.reminders.forEach(reminder => {

        if (reminder.notified) {
            return;
        }

        const reminderTime =
            new Date(reminder.datetime);

        if (
            !isNaN(reminderTime.getTime()) &&
            reminderTime <= now
        ) {

            reminder.notified = true;
            changed = true;

            const message =
                reminder.description
                    ? `${reminder.title}: ${reminder.description}`
                    : reminder.title;

            showCharacterReminder(message);

            sendBrowserNotification(
                reminder.title,
                message
            );

            addNotification(
                reminder.title,
                message
            );
        }

    });

    if (changed) {
        saveData();
        renderNotifications();
    }
}


/* =========================================================
   BROWSER NOTIFICATIONS
   ========================================================= */

async function requestNotificationPermission() {

    if (
        typeof Notification === "undefined"
    ) {
        showToast(
            "Browser notifications are not supported here."
        );

        return;
    }

    try {

        const permission =
            await Notification.requestPermission();

        if (permission === "granted") {

            showToast(
                "Browser notifications enabled."
            );

        } else {

            showToast(
                "Browser notification permission was not granted."
            );
        }

    } catch (error) {

        console.error(
            "Notification permission error:",
            error
        );
    }
}


function sendBrowserNotification(title, body) {

    if (
        typeof Notification === "undefined"
    ) {
        return;
    }

    if (
        Notification.permission !== "granted"
    ) {
        return;
    }

    try {

        new Notification(
            title || "LAYRAAZ Reminder",
            {
                body:
                    body ||
                    "You have a reminder."
            }
        );

    } catch (error) {

        console.error(
            "Could not send notification:",
            error
        );
    }
}


/* =========================================================
   NOTIFICATIONS SECTION
   ========================================================= */

function addNotification(title, message) {

    data.notifications.unshift({

        id:
            Date.now().toString(),

        title,

        message,

        date:
            new Date().toISOString(),

        read: false
    });

    if (
        data.notifications.length > 100
    ) {
        data.notifications =
            data.notifications.slice(0, 100);
    }

    saveData();
}


function renderNotifications() {

    const container =
        get("notificationList");

    if (!container) return;

    if (!data.notifications.length) {

        container.innerHTML =
            `<div class="empty-state">
                No notifications yet.
             </div>`;

        return;
    }

    container.innerHTML =
        data.notifications.map(notification => {

            const date =
                new Date(notification.date);

            return `
                <div class="notification-item ${
                    notification.read
                        ? "read"
                        : "unread"
                }">

                    <div>

                        <strong>
                            ${escapeHTML(notification.title)}
                        </strong>

                        <div>
                            ${escapeHTML(notification.message)}
                        </div>

                        <div class="muted">
                            ${date.toLocaleString()}
                        </div>

                    </div>

                </div>
            `;

        }).join("");
}


/* =========================================================
   TO-DO LIST
   ========================================================= */

let currentTodoCategory = "All";


function renderTodos() {

    const container =
        get("todoList");

    if (!container) return;

    let todos =
        [...data.todos];

    if (
        currentTodoCategory !== "All"
    ) {
        todos =
            todos.filter(
                todo =>
                    todo.category ===
                    currentTodoCategory
            );
    }

    if (!todos.length) {

        container.innerHTML =
            `<div class="empty-state">
                No tasks yet.
             </div>`;

        return;
    }

    container.innerHTML =
        todos.map(todo => {

            return `
                <div class="todo-item">

                    <label class="todo-left">

                        <input
                            type="checkbox"
                            ${
                                todo.completed
                                    ? "checked"
                                    : ""
                            }
                            onchange="toggleTodo('${todo.id}')"
                        >

                        <span class="${
                            todo.completed
                                ? "completed"
                                : ""
                        }">
                            ${escapeHTML(todo.title)}
                        </span>

                    </label>

                    <div class="todo-meta">

                        <span>
                            ${escapeHTML(todo.category)}
                        </span>

                        <button
                            onclick="deleteTodo('${todo.id}')">
                            Delete
                        </button>

                    </div>

                </div>
            `;

        }).join("");
}


function saveTodo() {

    const input =
        get("todoInput");

    if (!input) return;

    const title =
        input.value.trim();

    if (!title) {

        showToast(
            "Please enter a task."
        );

        return;
    }

    const category =
        get("todoCategory")?.value ||
        "Personal";

    data.todos.push({

        id:
            Date.now().toString(),

        title,

        category,

        completed: false,

        createdAt:
            new Date().toISOString()
    });

    saveData();

    input.value = "";

    renderTodos();

    showToast("Task added.");
}


function toggleTodo(id) {

    const todo =
        data.todos.find(
            item => item.id === id
        );

    if (!todo) return;

    todo.completed =
        !todo.completed;

    saveData();

    renderTodos();
}


function deleteTodo(id) {

    data.todos =
        data.todos.filter(
            todo =>
                todo.id !== id
        );

    saveData();

    renderTodos();

    showToast("Task deleted.");
}


function filterTodos(category) {

    currentTodoCategory =
        category || "All";

    renderTodos();
}


/* =========================================================
   GOALS
   ========================================================= */

function renderGoals() {

    const container =
        get("goalList");

    if (!container) return;

    if (!data.goals.length) {

        container.innerHTML =
            `<div class="empty-state">
                No goals yet.
             </div>`;

        return;
    }

    container.innerHTML =
        data.goals.map(goal => {

            const progress =
                Number(goal.progress) || 0;

            return `
                <div class="goal-item">

                    <div class="goal-header">

                        <strong>
                            ${escapeHTML(goal.title)}
                        </strong>

                        <span>
                            ${progress}%
                        </span>

                    </div>

                    <div class="goal-progress">
                        <div
                            class="goal-progress-fill"
                            style="width:${Math.min(
                                100,
                                Math.max(0, progress)
                            )}%">
                        </div>
                    </div>

                    ${
                        goal.description
                            ? `<p>
                                ${escapeHTML(goal.description)}
                               </p>`
                            : ""
                    }

                    <div class="item-actions">

                        <button
                            onclick="editGoal('${goal.id}')">
                            Edit
                        </button>

                        <button
                            onclick="deleteGoal('${goal.id}')">
                            Delete
                        </button>

                    </div>

                </div>
            `;

        }).join("");
}


function saveGoal() {

    const title =
        get("goalTitle")?.value.trim();

    const progress =
        Number(
            get("goalProgress")?.value || 0
        );

    const description =
        get("goalDescription")?.value.trim() || "";

    if (!title) {

        showToast(
            "Please enter a goal."
        );

        return;
    }

    const editingId =
        get("editingGoalId")?.value;

    if (editingId) {

        const goal =
            data.goals.find(
                item => item.id === editingId
            );

        if (goal) {

            goal.title = title;
            goal.progress = progress;
            goal.description = description;
        }

    } else {

        data.goals.push({

            id:
                Date.now().toString(),

            title,

            progress,

            description,

            createdAt:
                new Date().toISOString()
        });
    }

    saveData();

    renderGoals();

    clearGoalForm();

    showToast("Goal saved.");
}


function editGoal(id) {

    const goal =
        data.goals.find(
            item => item.id === id
        );

    if (!goal) return;

    if (get("goalTitle")) {
        get("goalTitle").value =
            goal.title;
    }

    if (get("goalProgress")) {
        get("goalProgress").value =
            goal.progress;
    }

    if (get("goalDescription")) {
        get("goalDescription").value =
            goal.description || "";
    }

    if (get("editingGoalId")) {
        get("editingGoalId").value =
            goal.id;
    }
}


function deleteGoal(id) {

    data.goals =
        data.goals.filter(
            goal =>
                goal.id !== id
        );

    saveData();

    renderGoals();

    showToast("Goal deleted.");
}


function clearGoalForm() {

    if (get("goalTitle")) {
        get("goalTitle").value = "";
    }

    if (get("goalProgress")) {
        get("goalProgress").value = 0;
    }

    if (get("goalDescription")) {
        get("goalDescription").value = "";
    }

    if (get("editingGoalId")) {
        get("editingGoalId").value = "";
    }
}


/* =========================================================
   NOTES
   ========================================================= */

function renderNotes() {

    const container =
        get("noteList");

    if (!container) return;

    if (!data.notes.length) {

        container.innerHTML =
            `<div class="empty-state">
                No notes yet.
             </div>`;

        return;
    }

    container.innerHTML =
        data.notes.map(note => {

            const date =
                new Date(note.date);

            return `
                <div class="note-item">

                    <div>

                        <strong>
                            ${escapeHTML(note.title)}
                        </strong>

                        <div class="muted">
                            ${date.toLocaleDateString()}
                        </div>

                        <p>
                            ${escapeHTML(note.content)}
                        </p>

                    </div>

                    <div class="item-actions">

                        <button
                            onclick="editNote('${note.id}')">
                            Edit
                        </button>

                        <button
                            onclick="deleteNote('${note.id}')">
                            Delete
                        </button>

                    </div>

                </div>
            `;

        }).join("");
}


function saveNote() {

    const title =
        get("noteTitle")?.value.trim();

    const content =
        get("noteContent")?.value.trim();

    if (!title || !content) {

        showToast(
            "Please enter a title and note."
        );

        return;
    }

    const editingId =
        get("editingNoteId")?.value;

    if (editingId) {

        const note =
            data.notes.find(
                item => item.id === editingId
            );

        if (note) {

            note.title = title;
            note.content = content;
            note.date =
                new Date().toISOString();
        }

    } else {

        data.notes.unshift({

            id:
                Date.now().toString(),

            title,

            content,

            date:
                new Date().toISOString()
        });
    }

    saveData();

    renderNotes();

    clearNoteForm();

    showToast("Note saved.");
}


function editNote(id) {

    const note =
        data.notes.find(
            item => item.id === id
        );

    if (!note) return;

    if (get("noteTitle")) {
        get("noteTitle").value =
            note.title;
    }

    if (get("noteContent")) {
        get("noteContent").value =
            note.content;
    }

    if (get("editingNoteId")) {
        get("editingNoteId").value =
            note.id;
    }

    showSection("notes");
}


function deleteNote(id) {

    data.notes =
        data.notes.filter(
            note =>
                note.id !== id
        );

    saveData();

    renderNotes();

    showToast("Note deleted.");
}


function clearNoteForm() {

    if (get("noteTitle")) {
        get("noteTitle").value = "";
    }

    if (get("noteContent")) {
        get("noteContent").value = "";
    }

    if (get("editingNoteId")) {
        get("editingNoteId").value = "";
    }
}


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch() {

    const input =
        get("searchInput");

    const results =
        get("searchResults");

    if (!input || !results) return;

    const query =
        input.value
            .trim()
            .toLowerCase();

    if (!query) {

        results.innerHTML = "";

        return;
    }

    const matches = [];

    data.reminders.forEach(item => {

        const text =
            `${item.title} ${item.description || ""}`
                .toLowerCase();

        if (text.includes(query)) {

            matches.push({
                type: "Reminder",
                title: item.title,
                text: item.description || ""
            });
        }

    });

    data.todos.forEach(item => {

        const text =
            `${item.title} ${item.category}`
                .toLowerCase();

        if (text.includes(query)) {

            matches.push({
                type: "To-do",
                title: item.title,
                text: item.category
            });
        }

    });

    data.goals.forEach(item => {

        const text =
            `${item.title} ${item.description || ""}`
                .toLowerCase();

        if (text.includes(query)) {

            matches.push({
                type: "Goal",
                title: item.title,
                text: item.description || ""
            });
        }

    });

    data.notes.forEach(item => {

        const text =
            `${item.title} ${item.content}`
                .toLowerCase();

        if (text.includes(query)) {

            matches.push({
                type: "Note",
                title: item.title,
                text: item.content
            });
        }

    });

    if (!matches.length) {

        results.innerHTML =
            `<div class="search-empty">
                No results found.
             </div>`;

        return;
    }

    results.innerHTML =
        matches.map(match => {

            return `
                <div class="search-result">

                    <div class="search-result-type">
                        ${escapeHTML(match.type)}
                    </div>

                    <strong>
                        ${escapeHTML(match.title)}
                    </strong>

                    <div>
                        ${escapeHTML(match.text)}
                    </div>

                </div>
            `;

        }).join("");
}


/* =========================================================
   SEARCH SETUP
   ========================================================= */

function setupSearch() {

    const input =
        get("searchInput");

    if (!input) return;

    input.addEventListener(
        "input",
        performSearch
    );
}


/* =========================================================
   APPEARANCE UI
   ========================================================= */

function renderAppearance() {

    const container =
        get("appearanceOptions");

    if (!container) return;

    container.innerHTML =
        Object.entries(palettes)
            .map(([key, palette]) => {

                const selected =
                    data.appearance === key;

                return `
                    <button
                        class="appearance-option ${
                            selected ? "selected" : ""
                        }"
                        data-palette="${key}"
                        onclick="selectAppearance('${key}')">

                        <span
                            class="appearance-preview"
                            style="
                                background:${palette.background};
                                border-color:${palette.main};
                                color:${palette.font};
                            ">

                            <span
                                style="
                                    background:${palette.main};
                                ">
                            </span>

                            <span
                                style="
                                    color:${palette.font};
                                ">
                                Aa
                            </span>

                        </span>

                        <span>
                            ${escapeHTML(palette.name)}
                        </span>

                    </button>
                `;

            }).join("");
}


function selectAppearance(key) {

    if (!palettes[key]) return;

    data.appearance = key;

    saveData();

    applyAppearance();
    renderAppearance();

    showToast(
        `${palettes[key].name} applied.`
    );
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    let toast =
        get("layraazToast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id =
            "layraazToast";

        toast.className =
            "layraaz-toast";

        document.body.appendChild(toast);
    }

    toast.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(
        window.__layraazToastTimer
    );

    window.__layraazToastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);
}


/* =========================================================
   ENTER KEY SUPPORT
   ========================================================= */

function setupEnterKeySupport() {

    const todoInput =
        get("todoInput");

    if (todoInput) {

        todoInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    saveTodo();
                }

            }
        );
    }

    const searchInput =
        get("searchInput");

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Escape") {

                    searchInput.value = "";

                    performSearch();
                }

            }
        );
    }
}


/* =========================================================
   BUTTON EVENT SETUP
   ========================================================= */

function setupButtons() {

    const profileSave =
        get("saveProfile");

    if (profileSave) {
        profileSave.addEventListener(
            "click",
            saveProfile
        );
    }

    const characterSave =
        get("saveCharacter");

    if (characterSave) {
        characterSave.addEventListener(
            "click",
            saveCharacterSettings
        );
    }

    const characterTest =
        get("testCharacter");

    if (characterTest) {
        characterTest.addEventListener(
            "click",
            testCharacter
        );
    }

    const reminderSave =
        get("saveReminder");

    if (reminderSave) {
        reminderSave.addEventListener(
            "click",
            saveReminder
        );
    }

    const reminderClear =
        get("clearReminder");

    if (reminderClear) {
        reminderClear.addEventListener(
            "click",
            clearReminderForm
        );
    }

    const todoSave =
        get("saveTodo");

    if (todoSave) {
        todoSave.addEventListener(
            "click",
            saveTodo
        );
    }

    const goalSave =
        get("saveGoal");

    if (goalSave) {
        goalSave.addEventListener(
            "click",
            saveGoal
        );
    }

    const noteSave =
        get("saveNote");

    if (noteSave) {
        noteSave.addEventListener(
            "click",
            saveNote
        );
    }

    const notificationPermission =
        get("enableNotifications");

    if (notificationPermission) {

        notificationPermission.addEventListener(
            "click",
            requestNotificationPermission
        );
    }
}


/* =========================================================
   PROFILE DATE CHANGE
   ========================================================= */

function setupProfileAge() {

    const dob =
        get("profileDob");

    if (!dob) return;

    dob.addEventListener(
        "change",
        () => {

            const age =
                get("profileAge");

            if (age) {

                age.textContent =
                    calculateAge(
                        dob.value
                    );
            }
        }
    );
}


/* =========================================================
   INITIAL RENDER
   ========================================================= */

function initializeLAYRAAZ() {

    applyAppearance();

    setupSidebar();

    setupSearch();

    setupProfileImageUpload();

    setupCharacterImageUpload();

    setupProfileAge();

    setupButtons();

    setupEnterKeySupport();

    renderProfile();

    renderDashboard();

    renderCharacterSettings();

    renderReminders();

    renderTodos();

    renderGoals();

    renderNotes();

    renderNotifications();

    renderAppearance();

    startReminderWatcher();
}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializeLAYRAAZ
);
