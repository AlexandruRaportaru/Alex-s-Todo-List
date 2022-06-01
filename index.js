//------------------ Selectors -------------------//

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoCompletedList = document.querySelector(".todo-completed-list");
const tasksTitle = document.querySelector(".tasks");
const completedTitle = document.querySelector(".finished");

//---------------- Event Listeners --------------//

todoButton.addEventListener("click", addTodo);


//---------------- Functions --------------------//

function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    //
    if(todoInput.value === "") {
        alert("Please insert text!");
    } else {
        // Create DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        // Create LI
        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item");
        newTodo.innerText = todoInput.value;
        todoDiv.appendChild(newTodo);
        // Create button CHECKED
        const checkedButton = document.createElement("button");
        checkedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
        checkedButton.classList.add("checked-btn");
        checkedButton.addEventListener("click", checkedTodo);
        todoDiv.appendChild(checkedButton);
        // Create button DELETE
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", deleteTodo);
        todoDiv.appendChild(deleteButton);
        // Create LIST
        todoList.appendChild(todoDiv);
        // Clear INPUT
        todoInput.value = "";
        // Display TITLE
        tasksTitle.style.display = "block";
    };
}

function deleteTodo(event) {
    const item = event.target;
    // Delete element
    item.closest(".todo").remove();
    todoTasks();
}

function checkedTodo(event) {
    const item = event.target;
    // Completed element
    const completed = item.previousElementSibling;
    item.closest(".todo").remove();
    completed.classList.add("todo-completed");
    todoCompletedList.appendChild(completed).classList.toggle("completed");
    completedTitle.style.display = "block";
    todoTasks();
}

function todoTasks() {
    if(todoList.children.length === 0) {
        tasksTitle.style.display = "none";
    }
}
