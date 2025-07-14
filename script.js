const addtaskbutton = document.getElementById("add-task-button");
const todoboard = document.getElementById("todo-board");

function attachdragevents(target){
    target.addEventListener('dragstart', () => {
        target.classList.add('flying');
    });
    target.addEventListener('dragend', () => {
        target.classList.remove('flying');
    });
}

addtaskbutton.addEventListener('click', () => {
    const input = prompt("what is the task??");
    if(!input) return

    const taskcard = document.createElement('p');
    taskcard.classList.add("item");
    taskcard.setAttribute("draggable", true)
    taskcard.innerText = input;
    attachdragevents(taskcard);
    todoboard.appendChild(taskcard);

})

const allboards = document.querySelectorAll(".board")
const allitems = document.querySelectorAll(".item");

allitems.forEach((item) => attachdragevents(item));

allboards.forEach((board) => {
    board.addEventListener('dragover', () => {
        const flyingelemnt = document.querySelector('.flying');
        console.log(board,"kuch toh upar se gya");

        board.appendChild(flyingelemnt);
    });
});