let todoList = [];

function showMenu() {
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Delete Task");
  console.log("4. Clear All");
  console.log("5. Exit");
}

function addTask() {
  try {
    let task = prompt("Enter task:");
    if (!task || task.trim() === "") throw "Empty task!";
    todoList.push(task.trim());
    console.log("Task added.");
  } catch (e) {
    console.log("Error:", e);
  }
}

function viewTasks() {
  try {
    if (todoList.length === 0) throw "No tasks.";
    console.log("\nYour Tasks:");
    todoList.forEach((t, i) => console.log(`${i + 1}. ${t}`));
  } catch (e) {
    console.log("Error:", e);
  }
}

function deleteTask() {
  try {
    let i = parseInt(prompt("Enter task number to delete:"));
    if (isNaN(i) || i < 1 || i > todoList.length) throw "Invalid task number.";
    let removed = todoList.splice(i - 1, 1);
    console.log(`Deleted: ${removed}`);
  } catch (e) {
    console.log("Error:", e);
  }
}

function clearTasks() {
  try {
    if (todoList.length === 0) throw "No tasks to clear.";

    let confirmClear = prompt("Are you sure you want to delete all tasks?");
    if (confirmClear==="yes"||"no") {
      todoList = [];
      console.log("All tasks cleared.");
    } else {
      console.log("Clear cancelled.");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}


let running = true;
while (running) {
  showMenu();
  let choice = prompt("Choice (1-5):");

  try {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        viewTasks();
        break;
      case "3":
        deleteTask();
        break;
      case "4":
        clearTasks();
        break;
      case "5":
        console.log("Exiting...");
        running = false;
        break;
      default:
        throw "Invalid choice.";
    }
  } catch (e) {
    console.log("Error:", e);
  }
}
