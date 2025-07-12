const addtaskbutton = document.getElementById("add-task-button");
const todoboard = document.getElementById("todo-board");


addtaskbutton.addEventListener('click', () => {
    const input = prompt("what is the task??");
    if(!input) return

    const taskcard = document.createElement('p');
    taskcard.classList.add("item");
    taskcard.setAttribute("draggable", true)
    taskcard.innerText = input;
    todoboard.appendChild(taskcard);

})