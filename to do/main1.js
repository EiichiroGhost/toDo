let tasks = [];

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            toggleTaskStatus(index);
        });

        const span = document.createElement("span");
        span.innerText = task.text;
        if (task.completed) {
            span.classList.add("completed");
        }

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Удалить";
        deleteButton.addEventListener("click", () => {
            deleteTask(index);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({
            text: taskText,
            completed: false
        });
        taskInput.value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function deleteAllTasks() {
    tasks = [];
    renderTasks();
}

function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function filterTasks() {
    const statusFilter = document.getElementById("statusFilter").value;

    if (statusFilter === "all") {
        renderTasks();
    } else if (statusFilter === "completed") {
        const filteredTasks = tasks.filter(task => task.completed);
        renderFilteredTasks(filteredTasks);
    } else if (statusFilter === "uncompleted") {
        const filteredTasks = tasks.filter(task => !task.completed);
        renderFilteredTasks(filteredTasks);
    }
}

function renderFilteredTasks(filteredTasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            toggleTaskStatus(index);
        });

        const span = document.createElement("span");
        span.innerText = task.text;
        if (task.completed) {
            span.classList.add("completed");
        }

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Удалить";
        deleteButton.addEventListener("click", () => {
            deleteTask(index);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

renderTasks();