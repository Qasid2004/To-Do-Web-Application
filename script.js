const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Display current date
const options = { weekday: 'long', month: 'long', day: 'numeric' };
document.getElementById('date-display').textContent = new Date().toLocaleDateString(undefined, options);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    const li = document.createElement("li");
    
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">×</button>
    `;

    // Toggle Complete
    li.querySelector(".task-text").onclick = function() {
        li.classList.toggle("completed");
    };

    // Delete Task
    li.querySelector(".delete-btn").onclick = function() {
        li.style.opacity = '0';
        li.style.transform = 'translateX(20px)';
        setTimeout(() => taskList.removeChild(li), 300);
    };

    taskList.appendChild(li);
    taskInput.value = "";
}

addTaskBtn.onclick = addTask;

taskInput.onkeypress = (e) => {
    if (e.key === "Enter") addTask();
};
