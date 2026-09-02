/* =========================================================
   LAYRAAZ
   Main Application
   ========================================================= */


/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "LAYRAAZ_DATA_V2";


const defaultData = {
    profile: {
        name: "Laya",
        dob: "2002-08-28",
        mbti: "INTJ",
        occupation: "Executive Assistant to Terminal Head",
        family: "4",
        colors: "Forest Green, Charcoal Black, Silver",
        food: "Dahi Puri",
        places: "Hill Stations",
        music: "Melody",
        skin: "Sensitive Skin",
        body: "Rectangular Body",
        height: "5'1\"",
        hobbies: "Singing, Crocheting, Travelling, Poetry, Kuchipudi Dancing, Playback Singing"
    },

    profilePicture: "",

    reminders: [],

    todos: [],

    goals: [],

    notes: [],

    notifications: [],

    character: {
        name: "Character",
        personality: "Calm, intelligent, firm and caring.",
        picture: ""
    },

    appearance: "forest",

    sidebarCollapsed: false
};


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
                ...defaultData.profile,
                ...(parsed.profile || {})
            },
            character: {
                ...defaultData.character,
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

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

    } catch (error) {

        console.error("Could not save LAYRAAZ data:", error);

        alert(
            "LAYRAAZ could not save this information. Your browser may have blocked local storage."
        );
    }
}


/* =========================================================
   UTILITY
   ========================================================= */

function createId() {

    return Date.now().toString(36) +
        Math.random().toString(36).substring(2);
}


function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function calculateAge(dob) {

    if (!dob) {
        return "";
    }

    const birth = new Date(dob + "T00:00:00");

    if (Number.isNaN(birth.getTime())) {
        return "";
    }

    const today = new Date();

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

    return age >= 0 ? age : "";
}


function formatDate(dateString) {

    if (!dateString) {
        return "";
    }

    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString(
        undefined,
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );
}


function formatDateTime(dateString) {

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    return date.toLocaleString(
        undefined,
        {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initialiseNavigation();

    initialiseSidebar();

    initialiseSearch();

    initialiseProfile();

    initialiseReminders();

    initialiseTodos();

    initialiseGoals();

    initialiseNotes();

    initialiseNotifications();

    initialiseAppearance();

    initialiseCharacter();

    initialiseCategories();

    updateDashboard();

    updateToday();

    renderAll();

    updateNotificationIndicators();

    updateNotificationPermissionText();

    applyAppearance();

    startReminderWatcher();

});


/* =========================================================
   NAVIGATION
   ========================================================= */

function initialiseNavigation() {

    document.querySelectorAll(".nav-item").forEach(button => {

        button.addEventListener("click", () => {

            const section =
                button.dataset.section;

            openSection(section);
        });
    });


    document.querySelectorAll("[data-open-section]").forEach(button => {

        button.addEventListener("click", () => {

            openSection(button.dataset.openSection);
        });
    });
}


function openSection(sectionName) {

    document.querySelectorAll(".section")
        .forEach(section => {
            section.classList.remove("active");
        });


    const target =
        document.getElementById(
            "section-" + sectionName
        );

    if (target) {
        target.classList.add("active");
    }


    document.querySelectorAll(".nav-item")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.section === sectionName
            );

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   SIDEBAR
   ========================================================= */

function initialiseSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    const collapse =
        document.getElementById("collapseSidebar");


    if (data.sidebarCollapsed) {
        sidebar.classList.add("collapsed");
    }


    collapse.addEventListener("click", () => {

        data.sidebarCollapsed =
            !sidebar.classList.contains("collapsed");

        sidebar.classList.toggle(
            "collapsed"
        );

        saveData();
    });
}


/* =========================================================
   TODAY
   ========================================================= */

function updateToday() {

    const now = new Date();

    const day =
        now.toLocaleDateString(
            undefined,
            { weekday: "long" }
        );

    const date =
        now.toLocaleDateString(
            undefined,
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

    document.getElementById("todayDay").textContent =
        day;

    document.getElementById("todayDate").textContent =
        date;
}


/* =========================================================
   PROFILE
   ========================================================= */

function initialiseProfile() {

    const fields = {

        profileName: "name",
        profileDOB: "dob",
        profileMBTI: "mbti",
        profileOccupation: "occupation",
        profileFamily: "family",
        profileColors: "colors",
        profileFood: "food",
        profilePlaces: "places",
        profileMusic: "music",
        profileSkin: "skin",
        profileBody: "body",
        profileHeight: "height",
        profileHobbies: "hobbies"

    };


    Object.entries(fields).forEach(([id, key]) => {

        const element =
            document.getElementById(id);

        element.value =
            data.profile[key] || "";

    });


    updateAge();


    document
        .getElementById("profileDOB")
        .addEventListener(
            "change",
            updateAge
        );


    document
        .getElementById("saveProfile")
        .addEventListener(
            "click",
            saveProfile
        );


    document
        .getElementById("profilePictureInput")
        .addEventListener(
            "change",
            handleProfilePicture
        );


    document
        .getElementById("removeProfilePicture")
        .addEventListener(
            "click",
            () => {

                data.profilePicture = "";

                saveData();

                renderProfilePicture();

            }
        );


    renderProfilePicture();
}


function updateAge() {

    const dob =
        document.getElementById("profileDOB").value;

    const age =
        calculateAge(dob);

    document.getElementById("profileAge").value =
        age ? age + " years" : "";
}


function saveProfile() {

    const map = {

        profileName: "name",
        profileDOB: "dob",
        profileMBTI: "mbti",
        profileOccupation: "occupation",
        profileFamily: "family",
        profileColors: "colors",
        profileFood: "food",
        profilePlaces: "places",
        profileMusic: "music",
        profileSkin: "skin",
        profileBody: "body",
        profileHeight: "height",
        profileHobbies: "hobbies"

    };


    Object.entries(map).forEach(([id, key]) => {

        data.profile[key] =
            document.getElementById(id).value.trim();

    });


    saveData();

    updateAge();

    updateDashboard();


    const status =
        document.getElementById(
            "profileSaveStatus"
        );

    status.textContent = "Saved ✓";

    setTimeout(() => {
        status.textContent = "";
    }, 2500);
}


function handleProfilePicture(event) {

    const file =
        event.target.files[0];

    if (!file) {
        return;
    }

    const reader =
        new FileReader();


    reader.onload = function(e) {

        data.profilePicture =
            e.target.result;

        saveData();

        renderProfilePicture();
    };


    reader.readAsDataURL(file);
}


function renderProfilePicture() {

    const images = [
        document.getElementById("profilePicturePreview"),
        document.getElementById("dashboardProfilePicture")
    ];

    const placeholders = [
        document.getElementById("profilePlaceholder"),
        document.getElementById("dashboardProfilePlaceholder")
    ];


    images.forEach(img => {

        if (data.profilePicture) {

            img.src =
                data.profilePicture;

            img.style.display =
                "block";

        } else {

            img.removeAttribute("src");

            img.style.display =
                "none";
        }
    });


    placeholders.forEach(placeholder => {

        if (data.profilePicture) {

            placeholder.style.display =
                "none";

        } else {

            placeholder.style.display =
                "flex";
        }

    });
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function updateDashboard() {

    const name =
        data.profile.name ||
        "User";


    document.getElementById(
        "welcomeText"
    ).textContent =
        `Welcome Back, ${name}`;


    document.getElementById(
        "dashboardProfileName"
    ).textContent =
        name;


    document.getElementById(
        "dashboardOccupation"
    ).textContent =
        data.profile.occupation ||
        "Occupation not added";


    const age =
        calculateAge(data.profile.dob);


    document.getElementById(
        "dashboardAge"
    ).textContent =
        age
            ? `Age: ${age}`
            : "Age: --";


    document.getElementById(
        "dashboardMBTI"
    ).textContent =
        data.profile.mbti ||
        "MBTI not added";


    document.getElementById(
        "dashboardCharacterName"
    ).textContent =
        data.character.name ||
        "Character";


    document.getElementById(
        "dashboardCharacterMessage"
    ).textContent =
        `${data.character.name || "Character"} is ready.`;


    updateCharacterImages();


    document.getElementById("statReminders").textContent =
        data.reminders.length;


    document.getElementById("statTasks").textContent =
        data.todos.filter(item => !item.completed).length;


    document.getElementById("statGoals").textContent =
        data.goals.length;


    document.getElementById("statNotes").textContent =
        data.notes.length;
}


/* =========================================================
   REMINDERS
   ========================================================= */

function initialiseReminders() {

    document
        .getElementById("saveReminder")
        .addEventListener(
            "click",
            addReminder
        );


    document
        .getElementById("enableNotifications")
        .addEventListener(
            "click",
            requestNotificationPermission
        );


    document
        .getElementById("closeCharacterReminder")
        .addEventListener(
            "click",
            hideCharacterReminder
        );
}


function addReminder() {

    const text =
        document
            .getElementById("reminderText")
            .value
            .trim();

    const date =
        document
            .getElementById("reminderDate")
            .value;

    const time =
        document
            .getElementById("reminderTime")
            .value;

    const category =
        document
            .getElementById("reminderCategory")
            .value;


    if (!text || !date || !time) {

        alert(
            "Please enter the reminder, date and time."
        );

        return;
    }


    const reminder = {

        id: createId(),

        text,

        date,

        time,

        category,

        completed: false,

        notified: false,

        createdAt: new Date().toISOString()

    };


    data.reminders.push(reminder);

    saveData();

    renderReminders();

    updateDashboard();


    document.getElementById("reminderText").value = "";

    document.getElementById("reminderDate").value = "";

    document.getElementById("reminderTime").value = "";


    /*
       Asking for notification permission here is intentional.
       The user has just interacted with the page.
    */

    if (
        "Notification" in window &&
        Notification.permission === "default"
    ) {

        requestNotificationPermission();
    }
}


function renderReminders() {

    const container =
        document.getElementById(
            "reminderList"
        );


    if (data.reminders.length === 0) {

        container.innerHTML =
            `<div class="empty-state">
                No reminders yet.
             </div>`;

        return;
    }


    const sorted =
        [...data.reminders].sort(
            (a, b) =>
                new Date(
                    `${a.date}T${a.time}`
                ) -
                new Date(
                    `${b.date}T${b.time}`
                )
        );


    container.innerHTML =
        sorted.map(reminder => {

            const due =
                new Date(
                    `${reminder.date}T${reminder.time}`
                );


            return `
                <div class="item ${reminder.completed ? "completed" : ""}">

                    <div class="item-main">

                        <div class="item-title">
                            ${escapeHTML(reminder.text)}
                        </div>

                        <div class="item-meta">
                            ${formatDate(reminder.date)}
                            ·
                            ${escapeHTML(reminder.time)}
                            ·
                            ${escapeHTML(reminder.category)}
                            ${reminder.notified ? " · Alerted" : ""}
                        </div>

                    </div>

                    <div class="item-actions">

                        <button
                            class="icon-button"
                            onclick="toggleReminder('${reminder.id}')"
                            title="Complete"
                        >
                            ${reminder.completed ? "↶" : "✓"}
                        </button>

                        <button
                            class="icon-button"
                            onclick="deleteReminder('${reminder.id}')"
                            title="Delete"
                        >
                            ×
                        </button>

                    </div>

                </div>
            `;

        }).join("");
}


window.toggleReminder = function(id) {

    const reminder =
        data.reminders.find(
            item => item.id === id
        );

    if (!reminder) {
        return;
    }

    reminder.completed =
        !reminder.completed;

    saveData();

    renderReminders();

    updateDashboard();
};


window.deleteReminder = function(id) {

    data.reminders =
        data.reminders.filter(
            item => item.id !== id
        );

    saveData();

    renderReminders();

    updateDashboard();
};


/* =========================================================
   REMINDER WATCHER
   ========================================================= */

function startReminderWatcher() {

    checkReminders();

    /*
       Every 15 seconds.
       This satisfies the intended LAYRAAZ reminder behaviour.
    */

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

        if (
            reminder.completed ||
            reminder.notified
        ) {
            return;
        }


        const due =
            new Date(
                `${reminder.date}T${reminder.time}:00`
            );


        if (
            !Number.isNaN(due.getTime()) &&
            now >= due
        ) {

            triggerReminder(reminder);

            reminder.notified = true;

            changed = true;
        }

    });


    if (changed) {

        saveData();

        renderReminders();

        updateDashboard();

    }
}


function triggerReminder(reminder) {

    const message =
        `${reminder.text}`;


    showCharacterReminder(message);


    addNotification(
        `${data.character.name || "Character"} reminder`,
        message
    );


    sendBrowserNotification(
        `${data.character.name || "Character"} reminder`,
        message
    );
}


/* =========================================================
   CHARACTER REMINDER
   ========================================================= */

function showCharacterReminder(message) {

    const popup =
        document.getElementById(
            "characterReminder"
        );


    document.getElementById(
        "bubbleCharacterName"
    ).textContent =
        data.character.name ||
        "Character";


    document.getElementById(
        "bubbleMessage"
    ).textContent =
        message;


    updateReminderCharacterImage();


    popup.classList.remove("show");


    /*
       Force reflow so animation can restart every time.
    */

    void popup.offsetWidth;


    popup.classList.add("show");


    clearTimeout(
        window.characterPopupTimer
    );


    window.characterPopupTimer =
        setTimeout(
            hideCharacterReminder,
            12000
        );
}


function hideCharacterReminder() {

    document
        .getElementById(
            "characterReminder"
        )
        .classList.remove("show");
}


/* =========================================================
   BROWSER NOTIFICATIONS
   ========================================================= */

async function requestNotificationPermission() {

    if (!("Notification" in window)) {

        alert(
            "This browser does not support browser notifications."
        );

        return;
    }


    try {

        const permission =
            await Notification.requestPermission();


        updateNotificationPermissionText();


        if (permission === "granted") {

            addNotification(
                "Notifications enabled",
                "Browser notifications are now enabled for LAYRAAZ."
            );

            sendBrowserNotification(
                "LAYRAAZ",
                "Browser notifications are now enabled."
            );

        } else if (permission === "denied") {

            alert(
                "Browser notifications were blocked. You can enable them from your browser's site permissions."
            );
        }

    } catch (error) {

        console.error(
            "Notification permission error:",
            error
        );
    }
}


function sendBrowserNotification(title, message) {

    if (
        "Notification" in window &&
        Notification.permission === "granted"
    ) {

        try {

            new Notification(
                title,
                {
                    body: message,
                    icon: data.character.picture || undefined
                }
            );

        } catch (error) {

            console.error(
                "Browser notification failed:",
                error
            );
        }
    }
}


function updateNotificationPermissionText() {

    const elements = [
        document.getElementById(
            "notificationPermissionStatus"
        ),
        document.getElementById(
            "notificationPageStatus"
        )
    ];


    let text;


    if (!("Notification" in window)) {

        text =
            "Browser notifications are not supported by this browser.";

    } else if (
        Notification.permission === "granted"
    ) {

        text =
            "Browser notifications are enabled ✓";

    } else if (
        Notification.permission === "denied"
    ) {

        text =
            "Browser notifications are blocked. Change the browser's site permission to enable them.";

    } else {

        text =
            "Browser notification permission has not been granted yet.";
    }


    elements.forEach(element => {

        if (element) {
            element.textContent = text;
        }

    });
}


/* =========================================================
   TODO
   ========================================================= */

function initialiseTodos() {

    document
        .getElementById("saveTodo")
        .addEventListener(
            "click",
            addTodo
        );
}


function addTodo() {

    const text =
        document
            .getElementById("todoText")
            .value
            .trim();

    const category =
        document
            .getElementById("todoCategory")
            .value;


    if (!text) {

        alert("Please enter a task.");

        return;
    }


    data.todos.push({

        id: createId(),

        text,

        category,

        completed: false,

        createdAt: new Date().toISOString()

    });


    saveData();

    renderTodos();

    updateDashboard();


    document.getElementById("todoText").value = "";
}


function renderTodos(filterCategory = null) {

    const container =
        document.getElementById("todoList");


    let list =
        [...data.todos];


    if (filterCategory) {

        list =
            list.filter(
                item =>
                    item.category === filterCategory
            );
    }


    if (list.length === 0) {

        container.innerHTML =
            `<div class="empty-state">
                No tasks found.
             </div>`;

        return;
    }


    container.innerHTML =
        list.map(todo => {

            return `
                <div class="item ${todo.completed ? "completed" : ""}">

                    <input
                        class="item-checkbox"
                        type="checkbox"
                        ${todo.completed ? "checked" : ""}
                        onchange="toggleTodo('${todo.id}')"
                    >

                    <div class="item-main">

                        <div class="item-title">
                            ${escapeHTML(todo.text)}
                        </div>

                        <div class="item-meta">
                            ${escapeHTML(todo.category)}
                        </div>

                    </div>

                    <div class="item-actions">

                        <button
                            class="icon-button"
                            onclick="deleteTodo('${todo.id}')"
                        >
                            ×
                        </button>

                    </div>

                </div>
            `;

        }).join("");
}


window.toggleTodo = function(id) {

    const todo =
        data.todos.find(
            item => item.id === id
        );

    if (!todo) {
        return;
    }

    todo.completed =
        !todo.completed;

    saveData();

    renderTodos();

    updateDashboard();
};


window.deleteTodo = function(id) {

    data.todos =
        data.todos.filter(
            item => item.id !== id
        );

    saveData();

    renderTodos();

    updateDashboard();
};


/* =========================================================
   GOALS
   ========================================================= */

function initialiseGoals() {

    document
        .getElementById("saveGoal")
        .addEventListener(
            "click",
            addGoal
        );
}


function addGoal() {

    const text =
        document
            .getElementById("goalText")
            .value
            .trim();

    const category =
        document
            .getElementById("goalCategory")
            .value;


    if (!text) {

        alert("Please enter a goal.");

        return;
    }


    data.goals.push({

        id: createId(),

        text,

        category,

        createdAt: new Date().toISOString()

    });


    saveData();

    renderGoals();

    updateDashboard();


    document.getElementById("goalText").value = "";
}


function renderGoals(filterCategory = null) {

    const container =
        document.getElementById("goalList");


    let list =
        [...data.goals];


    if (filterCategory) {

        list =
            list.filter(
                item =>
                    item.category === filterCategory
            );
    }


    if (list.length === 0) {

        container.innerHTML =
            `<div class="empty-state">
                No goals found.
             </div>`;

        return;
    }


    container.innerHTML =
        list.map(goal => {

            return `
                <div class="item">

                    <div class="item-main">

                        <div class="item-title">
                            ${escapeHTML(goal.text)}
                        </div>

                        <div class="item-meta">
                            ${escapeHTML(goal.category)}
                            ·
                            Created ${formatDateTime(goal.createdAt)}
                        </div>

                    </div>

                    <div class="item-actions">

                        <button
                            class="icon-button"
                            onclick="deleteGoal('${goal.id}')"
                        >
                            ×
                        </button>

                    </div>

                </div>
            `;

        }).join("");
}


window.deleteGoal = function(id) {

    data.goals =
        data.goals.filter(
            item => item.id !== id
        );

    saveData();

    renderGoals();

    updateDashboard();
};


/* =========================================================
   NOTES
   ========================================================= */

function initialiseNotes() {

    document
        .getElementById("saveNote")
        .addEventListener(
            "click",
            addNote
        );
}


function addNote() {

    const title =
        document
            .getElementById("noteTitle")
            .value
            .trim();

    const content =
        document
            .getElementById("noteContent")
            .value
            .trim();


    if (!title && !content) {

        alert("Please enter something in the note.");

        return;
    }


    data.notes.unshift({

        id: createId(),

        title:
            title || "Untitled Note",

        content,

        createdAt:
            new Date().toISOString()

    });


    saveData();

    renderNotes();

    updateDashboard();


    document.getElementById("noteTitle").value = "";

    document.getElementById("noteContent").value = "";
}


function renderNotes() {

    const container =
        document.getElementById("noteList");


    if (data.notes.length === 0) {

        container.innerHTML =
            `<div class="empty-state">
                No notes yet.
             </div>`;

        return;
    }


    container.innerHTML =
        data.notes.map(note => {

            return `
                <div class="item">

                    <div class="item-main">

                        <div class="item-title">
                            ${escapeHTML(note.title)}
                        </div>

                        <div class="item-meta">
                            ${formatDateTime(note.createdAt)}
                        </div>

                        <p style="margin:10px 0 0; color:var(--font-muted); line-height:1.5;">
                            ${escapeHTML(note.content)}
                        </p>

                    </div>

                    <div class="item-actions">

                        <button
                            class="icon-button"
                            onclick="deleteNote('${note.id}')"
                        >
                            ×
                        </button>

                    </div>

                </div>
            `;

        }).join("");
}


window.deleteNote = function(id) {

    data.notes =
        data.notes.filter(
            item => item.id !== id
        );

    saveData();

    renderNotes();

    updateDashboard();
};


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function initialiseNotifications() {

    document
        .getElementById("notificationButton")
        .addEventListener(
            "click",
            () => openSection("notifications")
        );


    document
        .getElementById("pageEnableNotifications")
        .addEventListener(
            "click",
            requestNotificationPermission
        );
}


function addNotification(title, message) {

    data.notifications.unshift({

        id: createId(),

        title,

        message,

        createdAt:
            new Date().toISOString(),

        read: false

    });


    /*
       Keep the notification list from becoming enormous.
    */

    if (data.notifications.length > 100) {

        data.notifications =
            data.notifications.slice(0, 100);
    }


    saveData();

    renderNotifications();

    updateNotificationIndicators();
}


function renderNotifications() {

    const container =
        document.getElementById(
            "notificationList"
        );


    if (data.notifications.length === 0) {

        container.innerHTML =
            `<div class="empty-state">
                No notifications yet.
             </div>`;

        return;
    }


    container.innerHTML =
        data.notifications.map(notification => {

            return `
                <div class="item ${notification.read ? "completed" : ""}">

                    <div class="item-main">

                        <div class="item-title">
                            ${escapeHTML(notification.title)}
                        </div>

                        <div class="item-meta">
                            ${formatDateTime(notification.createdAt)}
                        </div>

                        <p style="margin:8px 0 0; color:var(--font-muted);">
                            ${escapeHTML(notification.message)}
                        </p>

                    </div>

                    <div class="item-actions">

                        <button
                            class="icon-button"
                            onclick="readNotification('${notification.id}')"
                        >
                            ✓
                        </button>

                        <button
                            class="icon-button"
                            onclick="deleteNotification('${notification.id}')"
                        >
                            ×
                        </button>

                    </div>

                </div>
            `;

        }).join("");
}


window.readNotification = function(id) {

    const notification =
        data.notifications.find(
            item => item.id === id
        );

    if (!notification) {
        return;
    }

    notification.read = true;

    saveData();

    renderNotifications();

    updateNotificationIndicators();
};


window.deleteNotification = function(id) {

    data.notifications =
        data.notifications.filter(
            item => item.id !== id
        );

    saveData();

    renderNotifications();

    updateNotificationIndicators();
};


function updateNotificationIndicators() {

    const unread =
        data.notifications.filter(
            item => !item.read
        ).length;


    const count =
        document.getElementById(
            "notificationCount"
        );

    const dot =
        document.getElementById(
            "topNotificationDot"
        );


    count.textContent =
        unread;


    count.classList.toggle(
        "show",
        unread > 0
    );


    dot.classList.toggle(
        "show",
        unread > 0
    );
}


/* =========================================================
   SEARCH
   ========================================================= */

function initialiseSearch() {

    const button =
        document.getElementById(
            "searchButton"
        );

    const panel =
        document.getElementById(
            "searchPanel"
        );

    const input =
        document.getElementById(
            "globalSearch"
        );

    const close =
        document.getElementById(
            "closeSearch"
        );


    button.addEventListener(
        "click",
        () => {

            panel.classList.toggle(
                "open"
            );

            if (panel.classList.contains("open")) {

                setTimeout(
                    () => input.focus(),
                    50
                );
            }

        }
    );


    close.addEventListener(
        "click",
        () => {

            panel.classList.remove(
                "open"
            );

        }
    );


    input.addEventListener(
        "input",
        performSearch
    );
}


function performSearch() {

    const query =
        document
            .getElementById("globalSearch")
            .value
            .trim()
            .toLowerCase();


    const container =
        document.getElementById(
            "searchResults"
        );


    if (!query) {

        container.innerHTML = "";

        return;
    }


    const results = [];


    data.reminders.forEach(item => {

        if (
            item.text.toLowerCase().includes(query)
        ) {

            results.push({
                type: "Reminder",
                title: item.text,
                meta: `${formatDate(item.date)} · ${item.time}`
            });
        }
    });


    data.todos.forEach(item => {

        if (
            item.text.toLowerCase().includes(query)
        ) {

            results.push({
                type: "Task",
                title: item.text,
                meta: item.category
            });
        }
    });


    data.goals.forEach(item => {

        if (
            item.text.toLowerCase().includes(query)
        ) {

            results.push({
                type: "Goal",
                title: item.text,
                meta: item.category
            });
        }
    });


    data.notes.forEach(item => {

        if (
            item.title.toLowerCase().includes(query) ||
            item.content.toLowerCase().includes(query)
        ) {

            results.push({
                type: "Note",
                title: item.title,
                meta: item.content.substring(0, 80)
            });
        }
    });


    if (results.length === 0) {

        container.innerHTML =
            `<div class="no-results">
                Nothing found.
             </div>`;

        return;
    }


    container.innerHTML =
        results.map(result => {

            return `
                <div class="search-result">

                    <strong>
                        ${escapeHTML(result.title)}
                    </strong>

                    <small>
                        ${escapeHTML(result.type)}
                        ·
                        ${escapeHTML(result.meta)}
                    </small>

                </div>
            `;

        }).join("");
}


/* =========================================================
   CATEGORIES
   ========================================================= */

function initialiseCategories() {

    document
        .querySelectorAll(".category-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const category =
                        button.dataset.category;

                    openCategory(category);
                }
            );
        });
}


function openCategory(category) {

    /*
       Clicking a category opens the To-do section
       and displays tasks belonging to that category.
    */

    openSection("todos");

    renderTodos(category);


    /*
       A small heading replacement tells the user
       which category is being viewed.
    */

    const heading =
        document.querySelector(
            "#section-todos .page-heading h1"
        );

    heading.textContent =
        `${category} Tasks`;
}


/* =========================================================
   APPEARANCE
   ========================================================= */

const palettes = {

    forest: {
        name: "Deep Forest Green",
        background: "#1d251c",
        main: "#101411",
        font: "#c7c9c4"
    },

    butter: {
        name: "Butter Yellow",
        background: "#f4e7a1",
        main: "#8fc7df",
        font: "#5a351e"
    },

    almond: {
        name: "Almond",
        background: "#e8d8c3",
        main: "#91cbb5",
        font: "#9e2633"
    },

    sage: {
        name: "Misty Sage",
        background: "#b8c4b1",
        main: "#6f2025",
        font: "#fff1c7"
    },

    navy: {
        name: "Navy",
        background: "#101c36",
        main: "#c8a85c",
        font: "#d9c7a4"
    },

    champagne: {
        name: "Champagne",
        background: "#f1dfc1",
        main: "#777c32",
        font: "#e9dfca"
    },

    gunmetal: {
        name: "Gunmetal",
        background: "#343a40",
        main: "#ece3d3",
        font: "#eee5d5"
    },

    cadet: {
        name: "Cadet Grey",
        background: "#91a1a8",
        main: "#eeeae3",
        font: "#33251d"
    },

    pink: {
        name: "Muted Pink",
        background: "#c99aa0",
        main: "#9d233b",
        font: "#f2c5cc"
    },

    lavender: {
        name: "Lavender Mist",
        background: "#d9d0e5",
        main: "#4a2f2a",
        font: "#fff2d6"
    }

};


function initialiseAppearance() {

    renderPalettes();
}


function renderPalettes() {

    const container =
        document.getElementById(
            "paletteGrid"
        );


    container.innerHTML =
        Object.entries(palettes)
            .map(([key, palette]) => {

                return `
                    <div
                        class="palette-card ${data.appearance === key ? "selected" : ""}"
                        data-palette="${key}"
                    >

                        <div class="palette-name">
                            ${escapeHTML(palette.name)}
                        </div>

                        <div class="palette-preview">

                            <div
                                class="palette-colour"
                                style="background:${palette.background}; color:${palette.font};"
                            >
                                Background
                            </div>

                            <div
                                class="palette-colour"
                                style="background:${palette.main}; color:${palette.font};"
                            >
                                Main
                            </div>

                            <div
                                class="palette-colour"
                                style="background:${palette.font}; color:${palette.main};"
                            >
                                Font
                            </div>

                        </div>

                        <div class="palette-description">
                            <span>${palette.background}</span>
                            <span>${palette.main}</span>
                            <span>${palette.font}</span>
                        </div>

                    </div>
                `;

            }).join("");


    container
        .querySelectorAll(".palette-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    data.appearance =
                        card.dataset.palette;

                    saveData();

                    applyAppearance();

                    renderPalettes();

                }
            );
        });
}


function applyAppearance() {

    const palette =
        palettes[
            data.appearance
        ] || palettes.forest;


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


    /*
       A muted version of the chosen font colour.
    */

    document.documentElement
        .style
        .setProperty(
            "--font-muted",
            palette.font
        );
}


/* =========================================================
   CHARACTER
   ========================================================= */

function initialiseCharacter() {

    const nameInput =
        document.getElementById(
            "characterName"
        );

    const personalityInput =
        document.getElementById(
            "characterPersonality"
        );


    nameInput.value =
        data.character.name;


    personalityInput.value =
        data.character.personality;


    document
        .getElementById("saveCharacter")
        .addEventListener(
            "click",
            saveCharacter
        );


    document
        .getElementById("testCharacter")
        .addEventListener(
            "click",
            () => {

                showCharacterReminder(
                    "This is a character test. I'm here."
                );

            }
        );


    document
        .getElementById("dashboardTestCharacter")
        .addEventListener(
            "click",
            () => {

                showCharacterReminder(
                    "This is my dashboard test. Everything is working."
                );

            }
        );


    document
        .getElementById("characterPictureInput")
        .addEventListener(
            "change",
            handleCharacterPicture
        );


    document
        .getElementById("removeCharacterPicture")
        .addEventListener(
            "click",
            () => {

                data.character.picture = "";

                saveData();

                updateCharacterImages();

            }
        );


    updateCharacterImages();
}


function saveCharacter() {

    const name =
        document
            .getElementById("characterName")
            .value
            .trim();


    const personality =
        document
            .getElementById("characterPersonality")
            .value
            .trim();


    data.character.name =
        name || "Character";


    data.character.personality =
        personality ||
        "Calm, intelligent, firm and caring.";


    saveData();


    updateCharacterImages();

    updateDashboard();


    const status =
        document.getElementById(
            "characterSaveStatus"
        );

    status.textContent =
        "Saved ✓";


    setTimeout(() => {

        status.textContent = "";

    }, 2500);
}


function handleCharacterPicture(event) {

    const file =
        event.target.files[0];

    if (!file) {
        return;
    }


    if (!file.type.startsWith("image/")) {

        alert(
            "Please choose an image file."
        );

        return;
    }


    const reader =
        new FileReader();


    reader.onload = function(e) {

        data.character.picture =
            e.target.result;

        saveData();

        updateCharacterImages();

    };


    reader.onerror = function() {

        alert(
            "The character image could not be loaded."
        );
    };


    reader.readAsDataURL(file);
}


function updateCharacterImages() {

    const image =
        data.character.picture;


    const dashboardImg =
        document.getElementById(
            "dashboardCharacterImage"
        );

    const dashboardPlaceholder =
        document.getElementById(
            "dashboardCharacterPlaceholder"
        );


    const preview =
        document.getElementById(
            "characterPreview"
        );

    const previewPlaceholder =
        document.getElementById(
            "characterPreviewPlaceholder"
        );


    const reminderImg =
        document.getElementById(
            "reminderCharacterImage"
        );

    const reminderPlaceholder =
        document.getElementById(
            "reminderCharacterPlaceholder"
        );


    if (image) {

        dashboardImg.src = image;
        dashboardImg.style.display = "block";
        dashboardPlaceholder.style.display = "none";


        preview.src = image;
        preview.style.display = "block";
        previewPlaceholder.style.display = "none";


        reminderImg.src = image;
        reminderImg.style.display = "block";
        reminderPlaceholder.style.display = "none";

    } else {

        dashboardImg.style.display = "none";
        dashboardPlaceholder.style.display = "flex";


        preview.style.display = "none";
        previewPlaceholder.style.display = "flex";


        reminderImg.style.display = "none";
        reminderPlaceholder.style.display = "flex";
    }


    document.getElementById(
        "dashboardCharacterName"
    ).textContent =
        data.character.name;


    document.getElementById(
        "characterPreviewName"
    ).textContent =
        data.character.name;


    document.getElementById(
        "characterPreviewPersonality"
    ).textContent =
        data.character.personality;
}


function updateReminderCharacterImage() {

    const image =
        data.character.picture;


    const img =
        document.getElementById(
            "reminderCharacterImage"
        );

    const placeholder =
        document.getElementById(
            "reminderCharacterPlaceholder"
        );


    if (image) {

        img.src = image;

        img.style.display =
            "block";

        placeholder.style.display =
            "none";

    } else {

        img.style.display =
            "none";

        placeholder.style.display =
            "flex";
    }
}


/* =========================================================
   RENDER ALL
   ========================================================= */

function renderAll() {

    renderProfilePicture();

    renderReminders();

    renderTodos();

    renderGoals();

    renderNotes();

    renderNotifications();

    renderPalettes();

    updateCharacterImages();

    updateDashboard();
}
