/* =========================================================
   LAYRAAZ JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active-page");

    });


    const selectedPage =
        document.getElementById(pageId);


    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    document.querySelectorAll(".nav-item").forEach(button => {

        button.classList.remove("active");

    });


    const clickedButton =
        [...document.querySelectorAll(".nav-item")]
        .find(button =>
            button.getAttribute("onclick") ===
            `showPage('${pageId}')`
        );


    if (clickedButton) {

        clickedButton.classList.add("active");

    }

}


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

    document
        .getElementById("sidebar")
        .classList.toggle("collapsed");

}


/* =========================================================
   PROFILE
========================================================= */

const defaultProfile = {

    name: "Laya",

    username: "",

    gender: "",

    dob: "2002-08-28",

    email: "",

    mbti: "INTJ",

    age: "24",

    height: "5'1 ft",

    occupation: "Executive Assistant to the Terminal Head",

    skin: "Sensitive",

    body: "Rectangular",

    family: "4",

    colours: "Forest Green, Charcoal Black, Silver",

    food: "Dahi Puri",

    places: "Hill Stations",

    music: "Melody",

    hobbies:
        "Singing, Crocheting, Travelling, Poetry, Kuchipudi Dancing",

    goals:
        "Start an Edible Cutlery Business"

};


let profile =
    JSON.parse(
        localStorage.getItem("layraazProfile")
    ) || defaultProfile;



function loadProfile() {

    const fields = {

        profileName: profile.name,

        profileUsername: profile.username,

        profileGender: profile.gender,

        profileDOB: profile.dob,

        profileEmail: profile.email,

        profileMBTI: profile.mbti,

        profileAge: profile.age,

        profileHeight: profile.height,

        profileOccupation: profile.occupation,

        profileSkin: profile.skin,

        profileBody: profile.body,

        profileFamily: profile.family,

        profileColours: profile.colours,

        profileFood: profile.food,

        profilePlaces: profile.places,

        profileMusic: profile.music,

        profileHobbies: profile.hobbies,

        profileGoals: profile.goals

    };


    Object.entries(fields).forEach(([id, value]) => {

        const element =
            document.getElementById(id);


        if (element) {

            element.value = value || "";

        }

    });


    updateProfileDisplay();

}



function saveProfile() {

    profile = {

        name:
            document.getElementById("profileName").value,

        username:
            document.getElementById("profileUsername").value,

        gender:
            document.getElementById("profileGender").value,

        dob:
            document.getElementById("profileDOB").value,

        email:
            document.getElementById("profileEmail").value,

        mbti:
            document.getElementById("profileMBTI").value,

        age:
            document.getElementById("profileAge").value,

        height:
            document.getElementById("profileHeight").value,

        occupation:
            document.getElementById("profileOccupation").value,

        skin:
            document.getElementById("profileSkin").value,

        body:
            document.getElementById("profileBody").value,

        family:
            document.getElementById("profileFamily").value,

        colours:
            document.getElementById("profileColours").value,

        food:
            document.getElementById("profileFood").value,

        places:
            document.getElementById("profilePlaces").value,

        music:
            document.getElementById("profileMusic").value,

        hobbies:
            document.getElementById("profileHobbies").value,

        goals:
            document.getElementById("profileGoals").value

    };


    localStorage.setItem(
        "layraazProfile",
        JSON.stringify(profile)
    );


    updateProfileDisplay();


    addNotification(
        "Profile Updated",
        "Your profile has been updated."
    );


    alert("Profile saved.");
}



function updateProfileDisplay() {

    setText("dashboardName", profile.name || "Laya");

    setText("summaryName", profile.name || "-");

    setText(
        "summaryDOB",
        formatDate(profile.dob) || "-"
    );

    setText(
        "summaryOccupation",
        profile.occupation || "-"
    );

    setText(
        "summaryBody",
        profile.body || "-"
    );

    setText(
        "summarySkin",
        profile.skin || "-"
    );

    setText(
        "summaryMusic",
        profile.music || "-"
    );


    setText(
        "mbtiDashboard",
        profile.mbti || "-"
    );


    setText(
        "foodDashboard",
        profile.food || "-"
    );

}


/* =========================================================
   REMINDERS
========================================================= */

let reminders =
    JSON.parse(
        localStorage.getItem("layraazReminders")
    ) || [];



function addReminder() {

    const text =
        document.getElementById("reminderText")
        .value.trim();


    const date =
        document.getElementById("reminderDate")
        .value;


    if (!text) {

        alert("Please enter a reminder.");

        return;

    }


    reminders.push({

        id: Date.now(),

        text: text,

        date: date,

        completed: false

    });


    localStorage.setItem(
        "layraazReminders",
        JSON.stringify(reminders)
    );


    document.getElementById("reminderText")
        .value = "";


    document.getElementById("reminderDate")
        .value = "";


    renderReminders();

}



function renderReminders() {

    const container =
        document.getElementById("reminderList");


    if (!container) return;


    container.innerHTML = "";


    if (!reminders.length) {

        container.innerHTML = `
            <div class="empty-state">
                No reminders yet.
            </div>
        `;

        return;

    }


    reminders.forEach(reminder => {

        const item =
            document.createElement("div");


        item.className = "list-item";


        item.innerHTML = `

            <div>

                <strong>
                    ${escapeHTML(reminder.text)}
                </strong>

                ${
                    reminder.date
                    ?
                    `<div class="note-date">
                        ${formatDateTime(reminder.date)}
                    </div>`
                    :
                    ""
                }

            </div>


            <button
                onclick="deleteReminder(${reminder.id})">

                ×

            </button>

        `;


        container.appendChild(item);

    });

}



function deleteReminder(id) {

    reminders =
        reminders.filter(
            reminder => reminder.id !== id
        );


    localStorage.setItem(
        "layraazReminders",
        JSON.stringify(reminders)
    );


    renderReminders();

}


/* =========================================================
   TODO
========================================================= */

let todos =
    JSON.parse(
        localStorage.getItem("layraazTodos")
    ) || [];



function addTodo() {

    const input =
        document.getElementById("todoInput");


    const text =
        input.value.trim();


    if (!text) return;


    todos.push({

        id: Date.now(),

        text: text,

        completed: false

    });


    localStorage.setItem(
        "layraazTodos",
        JSON.stringify(todos)
    );


    input.value = "";


    renderTodos();

}



function renderTodos() {

    const container =
        document.getElementById("todoList");


    if (!container) return;


    container.innerHTML = "";


    if (!todos.length) {

        container.innerHTML = `
            <div class="empty-state">
                Your to-do list is empty.
            </div>
        `;

        return;

    }


    todos.forEach(todo => {

        const item =
            document.createElement("div");


        item.className = "list-item";


        item.innerHTML = `

            <label>

                <input
                    type="checkbox"
                    ${todo.completed ? "checked" : ""}
                    onchange="toggleTodo(${todo.id})"
                >

                <span style="
                    margin-left:8px;
                    ${
                        todo.completed
                        ?
                        "text-decoration:line-through; opacity:0.5;"
                        :
                        ""
                    }
                ">

                    ${escapeHTML(todo.text)}

                </span>

            </label>


            <button
                onclick="deleteTodo(${todo.id})">

                ×

            </button>

        `;


        container.appendChild(item);

    });

}



function toggleTodo(id) {

    const todo =
        todos.find(
            item => item.id === id
        );


    if (!todo) return;


    todo.completed =
        !todo.completed;


    localStorage.setItem(
        "layraazTodos",
        JSON.stringify(todos)
    );


    renderTodos();

}



function deleteTodo(id) {

    todos =
        todos.filter(
            todo => todo.id !== id
        );


    localStorage.setItem(
        "layraazTodos",
        JSON.stringify(todos)
    );


    renderTodos();

}


/* =========================================================
   GOALS
========================================================= */

let goals =
    JSON.parse(
        localStorage.getItem("layraazGoals")
    ) || [];



function updateProgressLabel() {

    const progress =
        document.getElementById("goalProgress")
        .value;


    document.getElementById("progressValue")
        .textContent =
        progress + "%";

}



function addGoal() {

    const name =
        document.getElementById("goalName")
        .value.trim();


    const category =
        document.getElementById("goalCategory")
        .value;


    const date =
        document.getElementById("goalDate")
        .value;


    const description =
        document.getElementById("goalDescription")
        .value.trim();


    const progress =
        Number(
            document.getElementById("goalProgress")
            .value
        );


    if (!name) {

        alert("Please enter a goal name.");

        return;

    }


    goals.push({

        id: Date.now(),

        name: name,

        category: category,

        date: date,

        description: description,

        progress: progress

    });


    saveGoals();


    document.getElementById("goalName").value = "";

    document.getElementById("goalDate").value = "";

    document.getElementById("goalDescription").value = "";

    document.getElementById("goalProgress").value = 0;


    updateProgressLabel();

    renderGoals();


    addNotification(
        "New Goal",
        `${name} has been added to your goals.`
    );

}



function saveGoals() {

    localStorage.setItem(
        "layraazGoals",
        JSON.stringify(goals)
    );

}



function renderGoals() {

    const container =
        document.getElementById("goalList");


    if (!container) return;


    container.innerHTML = "";


    if (!goals.length) {

        container.innerHTML = `
            <div class="empty-state">
                You haven't created any goals yet.
            </div>
        `;

        return;

    }


    goals.forEach(goal => {

        const card =
            document.createElement("div");


        card.className = "goal-card";


        card.innerHTML = `

            <span class="goal-category">
                ${escapeHTML(goal.category)}
            </span>


            <h3>
                ${escapeHTML(goal.name)}
            </h3>


            <p class="goal-description">
                ${
                    escapeHTML(
                        goal.description ||
                        "No description added."
                    )
                }
            </p>


            ${
                goal.date
                ?
                `
                <span class="goal-date">
                    Target:
                    ${formatDate(goal.date)}
                </span>
                `
                :
                ""
            }


            <div class="goal-progress">

                <div class="goal-progress-text">

                    <span>Progress</span>

                    <span>
                        ${goal.progress}%
                    </span>

                </div>


                <div class="goal-progress-bar">

                    <div
                        class="goal-progress-fill"
                        style="width:${goal.progress}%">
                    </div>

                </div>

            </div>


            <div class="goal-actions">

                <button
                    onclick="editGoal(${goal.id})">
                    Edit
                </button>


                <button
                    class="delete-goal"
                    onclick="deleteGoal(${goal.id})">
                    Delete
                </button>

            </div>

        `;


        container.appendChild(card);

    });

}



function editGoal(id) {

    const goal =
        goals.find(
            item => item.id === id
        );


    if (!goal) return;


    document.getElementById("goalName")
        .value = goal.name;


    document.getElementById("goalCategory")
        .value = goal.category;


    document.getElementById("goalDate")
        .value = goal.date;


    document.getElementById("goalDescription")
        .value = goal.description;


    document.getElementById("goalProgress")
        .value = goal.progress;


    updateProgressLabel();


    goals =
        goals.filter(
            item => item.id !== id
        );


    saveGoals();

    renderGoals();

    showPage("goals");

}



function deleteGoal(id) {

    const goal =
        goals.find(
            item => item.id === id
        );


    if (!goal) return;


    if (
        !confirm(
            `Delete "${goal.name}"?`
        )
    ) return;


    goals =
        goals.filter(
            item => item.id !== id
        );


    saveGoals();

    renderGoals();

}


/* =========================================================
   NOTES
========================================================= */

let notes =
    JSON.parse(
        localStorage.getItem("layraazNotes")
    ) || [];



function addNote() {

    const title =
        document.getElementById("noteTitle")
        .value.trim();


    const content =
        document.getElementById("noteContent")
        .value.trim();


    if (!title && !content) {

        alert("Write something first.");

        return;

    }


    notes.unshift({

        id: Date.now(),

        title: title || "Untitled Note",

        content: content,

        date: new Date().toISOString()

    });


    localStorage.setItem(
        "layraazNotes",
        JSON.stringify(notes)
    );


    document.getElementById("noteTitle")
        .value = "";


    document.getElementById("noteContent")
        .value = "";


    renderNotes();

}



function renderNotes() {

    const container =
        document.getElementById("notesList");


    if (!container) return;


    container.innerHTML = "";


    if (!notes.length) {

        container.innerHTML = `
            <div class="empty-state">
                No notes yet.
            </div>
        `;

        return;

    }


    notes.forEach(note => {

        const card =
            document.createElement("div");


        card.className = "note-card";


        card.innerHTML = `

            <h3>
                ${escapeHTML(note.title)}
            </h3>

            <div class="note-date">
                ${formatDateTime(note.date)}
            </div>

            <p>
                ${escapeHTML(note.content)}
            </p>

            <button
                onclick="deleteNote(${note.id})">
                Delete
            </button>

        `;


        container.appendChild(card);

    });

}



function deleteNote(id) {

    notes =
        notes.filter(
            note => note.id !== id
        );


    localStorage.setItem(
        "layraazNotes",
        JSON.stringify(notes)
    );


    renderNotes();

}


/* =========================================================
   AARZOO PERSONALITY
========================================================= */

let personality =
    JSON.parse(
        localStorage.getItem("layraazPersonality")
    ) || {

        type: "bold",

        description:
            "Smart, confident, protective and motivating.",

        relationship:
            "Digital Companion"

    };



function loadPersonality() {

    const type =
        document.getElementById("personalityType");


    const description =
        document.getElementById(
            "personalityDescription"
        );


    const relationship =
        document.getElementById(
            "relationshipType"
        );


    if (type)
        type.value = personality.type;


    if (description)
        description.value =
            personality.description;


    if (relationship)
        relationship.value =
            personality.relationship;


    updatePersonalityDisplay();

}



function savePersonality() {

    personality = {

        type:
            document.getElementById(
                "personalityType"
            ).value,

        description:
            document.getElementById(
                "personalityDescription"
            ).value,

        relationship:
            document.getElementById(
                "relationshipType"
            ).value

    };


    localStorage.setItem(
        "layraazPersonality",
        JSON.stringify(personality)
    );


    updatePersonalityDisplay();

}



function updatePersonalityDisplay() {

    const labels = {

        gentle: "Gentle",

        strict: "Strict",

        bold: "Bold",

        playful: "Playful",

        professional: "Professional",

        protective: "Protective",

        custom: "Custom"

    };


    setText(
        "personalityDashboard",
        labels[personality.type] ||
        "Custom"
    );

}



function testAarzoo() {

    const messages = {

        gentle:
            "Laya, take care of yourself too. One thing at a time.",

        strict:
            "Laya. Enough planning. Pick the task and finish it.",

        bold:
            "Laya, you know what you want. Now move.",

        playful:
            "Laya! Tiny reminder from your favourite digital nuisance. ♡",

        professional:
            "Laya, your next priority requires your attention.",

        protective:
            "Laya, I've got the reminder. You handle the task.",

        custom:
            personality.description ||
            "Laya, I'm here."

    };


    showAarzoo(
        messages[personality.type] ||
        messages.custom,
        "Aarzoo is testing her personality."
    );

}


/* =========================================================
   CHARACTER IMAGE
========================================================= */

function changeCharacter(event) {

    const file =
        event.target.files[0];


    if (!file) return;


    const reader =
        new FileReader();


    reader.onload = function(e) {

        const image =
            e.target.result;


        document.getElementById(
            "characterImage"
        ).src = image;


        document.getElementById(
            "dashboardCharacter"
        ).src = image;


        document.getElementById(
            "reminderCharacter"
        ).src = image;


        localStorage.setItem(
            "layraazCharacter",
            image
        );

    };


    reader.readAsDataURL(file);

}



function loadCharacter() {

    const saved =
        localStorage.getItem(
            "layraazCharacter"
        );


    if (!saved) return;


    document.getElementById(
        "characterImage"
    ).src = saved;


    document.getElementById(
        "dashboardCharacter"
    ).src = saved;


    document.getElementById(
        "reminderCharacter"
    ).src = saved;

}


/* =========================================================
   AARZOO REMINDER POPUP
========================================================= */

function showAarzoo(message, subMessage) {

    const popup =
        document.getElementById(
            "aarzooReminder"
        );


    document.getElementById(
        "aarzooMessage"
    ).textContent = message;


    document.getElementById(
        "aarzooSubMessage"
    ).textContent = subMessage;


    popup.classList.add("show");

}



function closeReminder() {

    document
        .getElementById("aarzooReminder")
        .classList.remove("show");

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

let notifications =
    JSON.parse(
        localStorage.getItem(
            "layraazNotifications"
        )
    ) || [];



function addNotification(title, message) {

    notifications.unshift({

        id: Date.now(),

        title: title,

        message: message,

        date: new Date().toISOString()

    });


    notifications =
        notifications.slice(0, 30);


    localStorage.setItem(
        "layraazNotifications",
        JSON.stringify(notifications)
    );


    renderNotifications();

}



function renderNotifications() {

    const container =
        document.getElementById(
            "notificationList"
        );


    if (!container) return;


    container.innerHTML = "";


    if (!notifications.length) {

        container.innerHTML = `
            <div class="empty-state">
                No new notifications.
            </div>
        `;

        return;

    }


    notifications.forEach(notification => {

        const item =
            document.createElement("div");


        item.className = "list-item";


        item.innerHTML = `

            <div>

                <strong>
                    ${escapeHTML(notification.title)}
                </strong>

                <div>
                    ${escapeHTML(notification.message)}
                </div>

                <div class="note-date">
                    ${formatDateTime(notification.date)}
                </div>

            </div>

        `;


        container.appendChild(item);

    });

}


/* =========================================================
   SETTINGS
========================================================= */

function saveSettings() {

    const settings = {

        enableReminders:
            document.getElementById(
                "enableReminders"
            ).checked,

        showCharacter:
            document.getElementById(
                "showCharacter"
            ).checked,

        silentNotifications:
            document.getElementById(
                "silentNotifications"
            ).checked

    };


    localStorage.setItem(
        "layraazSettings",
        JSON.stringify(settings)
    );

}



function loadSettings() {

    const settings =
        JSON.parse(
            localStorage.getItem(
                "layraazSettings"
            )
        );


    if (!settings) return;


    document.getElementById(
        "enableReminders"
    ).checked =
        settings.enableReminders;


    document.getElementById(
        "showCharacter"
    ).checked =
        settings.showCharacter;


    document.getElementById(
        "silentNotifications"
    ).checked =
        settings.silentNotifications;

}


/* =========================================================
   THEMES
========================================================= */

const themes = {

    forest: {
        background: "#111713",
        surface: "#19231d",
        surfaceLight: "#243128",
        primary: "#244d38",
        accent: "#8aaa91",
        text: "#c8c8c8",
        muted: "#89958d"
    },


    charcoal: {
        background: "#111111",
        surface: "#1d1d1d",
        surfaceLight: "#2b2b2b",
        primary: "#3a3a3a",
        accent: "#a8a8a8",
        text: "#d0d0d0",
        muted: "#8c8c8c"
    },


    pink: {
        background: "#24171d",
        surface: "#332027",
        surfaceLight: "#442b35",
        primary: "#8c405b",
        accent: "#e39ab3",
        text: "#f0d8df",
        muted: "#b99aa5"
    },


    yellow: {
        background: "#252112",
        surface: "#342f1b",
        surfaceLight: "#454022",
        primary: "#8d7c27",
        accent: "#e8d46a",
        text: "#f1e9bd",
        muted: "#b7ad7a"
    },


    butter: {
        background: "#292715",
        surface: "#39361d",
        surfaceLight: "#4a4627",
        primary: "#9b8d45",
        accent: "#f7e7a1",
        text: "#f4edc8",
        muted: "#c1b98e"
    },


    blue: {
        background: "#111b29",
        surface: "#18263a",
        surfaceLight: "#233653",
        primary: "#315d91",
        accent: "#79a9dc",
        text: "#d2e1f1",
        muted: "#91a5ba"
    },


    babyblue: {
        background: "#15222a",
        surface: "#20323d",
        surfaceLight: "#2c424f",
        primary: "#527f94",
        accent: "#a8d8f0",
        text: "#dcecf3",
        muted: "#9cb4bf"
    },


    skyblue: {
        background: "#10212a",
        surface: "#19323f",
        surfaceLight: "#254556",
        primary: "#327e9f",
        accent: "#70c5eb",
        text: "#d7edf6",
        muted: "#91b4c3"
    },


    lavender: {
        background: "#1c1728",
        surface: "#29223a",
        surfaceLight: "#392e4c",
        primary: "#69558f",
        accent: "#c2b2ec",
        text: "#e6def4",
        muted: "#a89db9"
    },


    brown: {
        background: "#211916",
        surface: "#30241f",
        surfaceLight: "#40302a",
        primary: "#715143",
        accent: "#b99883",
        text: "#eadbd2",
        muted: "#ad968a"
    },


    purple: {
        background: "#1b1425",
        surface: "#292039",
        surfaceLight: "#3b2c51",
        primary: "#684595",
        accent: "#b38be0",
        text: "#e5d8ef",
        muted: "#aa98ba"
    },


    lilac: {
        background: "#211a27",
        surface: "#30253a",
        surfaceLight: "#40314d",
        primary: "#80618f",
        accent: "#d0acd9",
        text: "#eadfea",
        muted: "#b6a4ba"
    },


    lime: {
        background: "#182013",
        surface: "#26321c",
        surfaceLight: "#344427",
        primary: "#628629",
        accent: "#a8d447",
        text: "#e0e9c9",
        muted: "#aab590"
    },


    red: {
        background: "#241314",
        surface: "#341a1b",
        surfaceLight: "#482123",
        primary: "#8e3034",
        accent: "#df7777",
        text: "#efd7d7",
        muted: "#b89a9a"
    },


    maroon: {
        background: "#201117",
        surface: "#301820",
        surfaceLight: "#43222c",
        primary: "#72253b",
        accent: "#b95d75",
        text: "#ecd8df",
        muted: "#b69aa3"
    },


    orange: {
        background: "#251911",
        surface: "#352219",
        surfaceLight: "#472e20",
        primary: "#a65324",
        accent: "#e99a5c",
        text: "#f1ded0",
        muted: "#bba08e"
    },


    terracotta: {
        background: "#251916",
        surface: "#35221d",
        surfaceLight: "#483029",
        primary: "#965039",
        accent: "#d99376",
        text: "#efdad1",
        muted: "#b69b90"
    },


    navy: {
        background: "#101724",
        surface: "#182236",
        surfaceLight: "#23314a",
        primary: "#304c7b",
        accent: "#7e9dcc",
        text: "#d9e2f0",
        muted: "#929fb3"
    },


    gold: {
        background: "#211c12",
        surface: "#30291a",
        surfaceLight: "#42391f",
        primary: "#8f7029",
        accent: "#d8b75c",
        text: "#eee4c4",
        muted: "#b6a979"
    },


    rosegold: {
        background: "#261b1b",
        surface: "#382524",
        surfaceLight: "#4a302e",
        primary: "#965f59",
        accent: "#d9a09a",
        text: "#efdedb",
        muted: "#b9a09d"
    },


    emerald: {
        background: "#0e201a",
        surface: "#153128",
        surfaceLight: "#204438",
        primary: "#176c4e",
        accent: "#65c29b",
        text: "#d2e9df",
        muted: "#91afa3"
    },


    sage: {
        background: "#171e19",
        surface: "#252f27",
        surfaceLight: "#344036",
        primary: "#5d725e",
        accent: "#9eb59d",
        text: "#dce6dc",
        muted: "#a2aea3"
    },


    burgundy: {
        background: "#211116",
        surface: "#311821",
        surfaceLight: "#43232e",
        primary: "#70233e",
        accent: "#b9617e",
        text: "#ead9df",
        muted: "#b59aa4"
    },


    midnight: {
        background: "#0e1421",
        surface: "#161e31",
        surfaceLight: "#222d45",
        primary: "#293e68",
        accent: "#718bbd",
        text: "#d7deec",
        muted: "#909bb0"
    },


    plum: {
        background: "#1d1420",
        surface: "#2c1e31",
        surfaceLight: "#3d2a43",
        primary: "#62366d",
        accent: "#aa76b6",
        text: "#e7dce9",
        muted: "#ac9cae"
    }

};



function applyTheme(themeName) {

    const theme =
        themes[themeName];


    if (!theme) return;


    Object.entries(theme).forEach(
        ([variable, value]) => {

            document.documentElement.style
                .setProperty(
                    `--${convertThemeVariable(variable)}`,
                    value
                );

        }
    );


    localStorage.setItem(
        "layraazTheme",
        themeName
    );

}



function convertThemeVariable(name) {

    const map = {

        background: "background",

        surface: "surface",

        surfaceLight: "surface-light",

        primary: "primary",

        accent: "accent",

        text: "text",

        muted: "muted"

    };


    return map[name];

}



function applyCustomTheme() {

    const background =
        document.getElementById(
            "customBackground"
        ).value;


    const primary =
        document.getElementById(
            "customPrimary"
        ).value;


    const accent =
        document.getElementById(
            "customAccent"
        ).value;


    const text =
        document.getElementById(
            "customText"
        ).value;


    document.documentElement.style
        .setProperty(
            "--background",
            background
        );


    document.documentElement.style
        .setProperty(
            "--primary",
            primary
        );


    document.documentElement.style
        .setProperty(
            "--accent",
            accent
        );


    document.documentElement.style
        .setProperty(
            "--text",
            text
        );


    localStorage.setItem(
        "layraazCustomTheme",
        JSON.stringify({

            background,
            primary,
            accent,
            text

        })
    );

}



function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "layraazTheme"
        );


    const custom =
        JSON.parse(
            localStorage.getItem(
                "layraazCustomTheme"
            )
        );


    if (custom) {

        document.documentElement.style
            .setProperty(
                "--background",
                custom.background
            );


        document.documentElement.style
            .setProperty(
                "--primary",
                custom.primary
            );


        document.documentElement.style
            .setProperty(
                "--accent",
                custom.accent
            );


        document.documentElement.style
            .setProperty(
                "--text",
                custom.text
            );

    }


    if (savedTheme) {

        applyTheme(savedTheme);

    }

}


/* =========================================================
   HELPERS
========================================================= */

function setText(id, value) {

    const element =
        document.getElementById(id);


    if (element) {

        element.textContent = value;

    }

}



function formatDate(dateString) {

    if (!dateString) return "";


    const date =
        new Date(dateString);


    if (isNaN(date)) return dateString;


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

}



function formatDateTime(dateString) {

    if (!dateString) return "";


    const date =
        new Date(dateString);


    if (isNaN(date)) return dateString;


    return date.toLocaleString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}



function escapeHTML(value) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   START LAYRAAZ
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadProfile();

        loadPersonality();

        loadCharacter();

        loadSettings();

        loadTheme();

        renderReminders();

        renderTodos();

        renderGoals();

        renderNotes();

        renderNotifications();

        updateProgressLabel();

    }
);