const addtaskbutton = document.getElementById("add-task-button");
const todoboard = document.getElementById("todo-board");
const contextmenu = document.getElementById("context-menu");
rightclickedcard = null;

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
    const taskdate = new Date().toLocaleString();
    if(!input) return

    const taskcard = document.createElement('p');
    taskcard.classList.add("item");
    taskcard.setAttribute("draggable", true)
    taskcard.innerHTML = `<span>${input}</span><br><small class="time">${taskdate}</small>`;
    attachdragevents(taskcard);
    todoboard.appendChild(taskcard);
    taskcard.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        rightclickedcard = this;
        showcontextmenu(event.pageX, event.pageY);
    })

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

function showcontextmenu(x, y) {
    contextmenu.style.left = `${x}px`;
    contextmenu.style.top = `${y}px`;
    contextmenu.style.display = "block";
}
document.addEventListener("click", () => {
    contextmenu.style.display = "none";
})

function edittask(){
    if(rightclickedcard !== null){
        const newtasktext = prompt("edit task - ",rightclickedcard.textContent);
        if(newtasktext !== ""){
            const taskdate = new Date().toLocaleString();
            rightclickedcard.innerHTML = `<span>${newtasktext}</span><br><small class="time">${taskdate}</small>`;
        }
    }
}

function deletetask(){
    if(rightclickedcard !== null){
        rightclickedcard.remove();
    }
}