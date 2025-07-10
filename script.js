const addTaskBtn = document.getElementById("add-task-btn")
const todoBoard = document.getElementById("todo-board")


addTaskBtn.addEventListener('click', () => {
    const input = prompt('what is the task??');
    if(!input) return

    const taskCard = document.createElement('p')
    taskCard.classList.add('item')
    taskCard.innerText = input

    todoBoard.appendChild(taskCard);
})

