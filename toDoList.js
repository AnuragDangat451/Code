let todoList = [];
function showMenu() {
  console.log("\n1. Add Task\n2. View Tasks\n3. Delete Task\n4. Exit");
}

function addTask() {
  try {
    let task = prompt("Enter task:");
    if (!task) throw "Empty task!";
    todoList.push(task);
    console.log("Added.");
  } catch (e) {
    console.log("Error:", e);
  }
}

function viewTasks() {
  try {
    if (todoList.length === 0) throw "No tasks.";
    todoList.forEach((t, i) => console.log(`${i + 1}. ${t}`));
  } catch (e) {
    console.log("Error:", e);
  }
}

function deleteTask() {
  try {
    let i = parseInt(prompt("Task number to delete:"));
    if (isNaN(i) || i < 1 || i > todoList.length) throw "Invalid number.";
    todoList.splice(i - 1, 1);
    console.log("Deleted.");
  } catch (e) {
    console.log("Error:", e);
  }
}

let running = true;
while (running) {
  showMenu();
  let choice = prompt("Choice (1-4):");
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
          running = false; 
          break;
      default:
        throw "Invalid choice.";
    }
  } catch (e) {
    console.log("Error:", e);
  }
}

function addTask() {
    try {
        let task = prompt("Enter task to add:");
        if (!task) throw "Task cannot be empty!";
        todoList.push(task);
        console.log("Task added successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
}

function viewTasks() {
    try {
        if (todoList.length === 0) throw "No tasks to display.";
        console.log("\nYour Tasks:");
        todoList.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

function deleteTask() {
    try {
        let index = parseInt(prompt("Enter task number to delete:"));
        if (isNaN(index) || index < 1 || index > todoList.length) {
            throw "Invalid task number.";
        }
        todoList.splice(index - 1, 1);
        console.log("Task deleted successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
}

let isRunning = true;

while (isRunning) {
    showMenu();
    let choice = prompt("Enter your choice (1-4):");

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
                isRunning = false;
                console.log("Exiting... Thank you!");
                break;
            default:
                throw "Invalid choice. Please select 1-4.";
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
