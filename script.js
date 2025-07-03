const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask(){
    const taskText = taskInput.value.trim();


if(taskText === ""){
    alert("Please enter a task");
    return;
}

const li = document.createElement("li");
li.textContent = taskText;

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.className = "delete-btn";

deleteBtn.onclick = function(){
    taskList.removeChild(li);
};

li.appendChild(deleteBtn);

taskList.appendChild(li);

taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e){
    if(e.key === "Enter"){
        addTask();
    }
});