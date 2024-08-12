// Get elements from the DOM
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add task function
function addTask() {
  const taskText = todoInput.value.trim();

  if (taskText !== "") {
    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a delete button for the task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      todoList.removeChild(li);
    };

    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = "";
  } else {
    alert("Please enter a task");
  }
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on pressing Enter key
todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
