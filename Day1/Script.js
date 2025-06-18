let tasks = [];

function addTask(taskName) {
    const task ={
        name : taskName,
        completed: false
    };
    tasks.push(task);
    console.log(`Task added : "${taskName}`);
}

function listTasks() {
  console.log("📋 Your Tasks:");
  tasks.forEach(function(task, index) {
    const status = task.completed ? "✅" : "❌";
    console.log(`${index + 1}. ${status} ${task.name}`);
  });
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log(`✔️ Task "${tasks[index].name}" marked as completed!`);
  } else {
    console.log("⚠️ Invalid task number.");
  }
}


function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    const removed = tasks.splice(index, 1);
    console.log(`🗑️ Task "${removed[0].name}" removed.`);
  } else {
    console.log("⚠️ Invalid task number.");
  }
}
