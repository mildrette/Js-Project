let tasks = [];

function addTask(taskName) {
  const task = {
    name: taskName,
    completed: false
  }
  tasks.push(task)
}

function handleAddTask(){
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (taskName === "") {
    alert("Please enter a Task");
    return;
  }

  addTask(taskName);

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskName;
  taskList.appendChild(li);

  input.value = "";
}