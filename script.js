const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// 1. Current Date Show Karein
const dateDisplay = document.getElementById("date-display");
const options = { weekday: 'long', month: 'long', day: 'numeric' };
dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);

// 2. Add Task Function
function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Khali task add nahi ho sakta!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="delete-btn">×</button>
    `;

    // Click karke complete mark karein
    li.querySelector(".task-text").onclick = function() {
        li.classList.toggle("completed");
    };

    // Delete with animation
    li.querySelector(".delete-btn").onclick = function() {
        li.style.opacity = "0";
        li.style.transform = "scale(0.8)";
        setTimeout(() => {
            taskList.removeChild(li);
        }, 300);
    };

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input
    taskInput.focus();
}

// 3. Event Listeners
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
