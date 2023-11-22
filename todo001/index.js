let addcard = document.querySelector('.add-card')
let task = document.querySelector('.task')

let todonum = document.querySelector(".todo-num")
let inprogressnum = document.querySelector(".inprogress-num")
let stucknum = document.querySelector(".stuck-num")
let doneonum = document.querySelector(".done-num")

function popup() {
    task.style.display = "flex"
}
function myFunction() {
    const task = document.querySelector(".task");
    task.remove();
    myFunction()
}

let count = {
    todo: 0,
}
function rmvid() {
    return "id-" + Math.random()
}


let data = []
const button = document.getElementById("add-task")

button.onclick = setdata

function setdata() {
    let title = document.getElementById("title").value;
    let disc = document.getElementById("disc").value;
    let priority = document.getElementById("priority").value;
    let status = document.getElementById("status"). value;
    data.push({ title, disc, priority, status, id:rmvid()})
    render(data);
}


const removecard = (el) => {
    const filterid= data.filter((item) => item.id !== el.id)
    data = filterid
    render(filterid) 
}



function render (data){
    const todos = document.querySelectorAll('.todos');
    let todonum = document.querySelectorAll('.todo-num');
    let divsss = document.querySelectorAll('.divsss')
    todos[0].innerHTML = "";
    todos[1].innerHTML = "";
    todos[2].innerHTML = "";
    todos[3].innerHTML = "";
   
    let count = {
        todo: 0,
        inprogress: 0, 
        stuck: 0,
        done: 0,  
    }

    data.map((el) => {
        const todo = `  
        <div class="divsss" draggable="true" id="${el.id}">
            <div class="flex">
                <div>
                    <button class="buttt" id="${el.id}" > <img src="./check (2).png" alt="" height="10px" width="10px"></button>
                </div>
                <div>
                        <h4>${el.title}</h4>
                        <p>${el.disc}</p>
                        <button class = "bw">${el.priority}</button>
                </div>
            </div>
            <div class= "gaps">
                    <button class="remove " id="${el.id}">x</button>
                    <button class="edit" onclick="setData(true)"><img src="./edit.png" alt="" height="10px" width="10px"></button>
            </div>
        </div>`
        if(el.status === "todo"){
            todos[0].innerHTML += todo;
            count.todo += 1;
        } else if (el.status === "inprogress"){
            todos[1].innerHTML += todo;
            count.inprogress += 1;
        }else if (el.status === "stuck"){
            todos[2].innerHTML += todo;
            count.stuck += 1;   
        }else if (el.status === "done"){
            todos[3].innerHTML += todo;
            count.done += 1;
        }

        todonum.innerHTML = count.todo
        inprogressnum.innerHTML = count.inprogress
        stucknum.innerHTML = count.stuck
        doneonum.innerHTML = count.done
        
        let donebtn = document.querySelectorAll(".buttt")

    donebtn.forEach((element) =>{
        element.onclick = () => donecard(element)
    } )


    })
    let removebtn = document.querySelectorAll('.remove')
    removebtn.forEach((element) => {
        element.onclick = () => removecard(element)
      })
      draganddrop() 
}

    const donecard = (el) => {
        const donelist = data.map((item) => {
            if (item.id === el.id){
                item.status = "done";
            }
            return item;
        })
        render(donelist)
        draganddrop()
    }
    
    function draganddrop() {
        const divsss = document.querySelectorAll('.divsss');
        const todoss = document.querySelectorAll('.todoss');
        let draggedItem = null;
        divsss.forEach((card) => {
        card.addEventListener('dragstart', (event) => {
        event.target.value
        draggedItem = event.target;
        event.dataTransfer.setData('text', event.target.getAttribute('data-id'));
        });
        card.addEventListener('dragend', () => {
        draggedItem = null;
        });
        });
        todoss.forEach((board) => {
        board.addEventListener('dragover', (event) => {
        event.preventDefault();
        });
        board.addEventListener('dragenter', (event) => {
        event.preventDefault();
        if (draggedItem) {
        const draggingBoard = draggedItem.parentNode;
        if (draggingBoard !== event.currentTarget) {
        event.currentTarget.querySelector(".todos").appendChild(draggedItem);
        }
        }
        });
        board.addEventListener('dragleave', () => { });
        board.addEventListener('drop', (event) => {
        event.preventDefault();

        let id = draggedItem.getAttribute("id");
        console.log(id);
        data.filter((el) => {
          if (el.id === id) {
            if (el.status === "todo-num") {
              count.todo -= 1;
            } else if (el.status === "inprogress-num") {
              count.inprogress -= 1;
            } else if (el.status === "stuck-num") {
              count.stuck -= 1;
            } else if (el.status === "done-num") {
              count.done -= 1;
            }
            el.status = id;
            if (index === 0) {
              el.status = "todo-num";
            } else if (index === 1) {
              el.status = "inprogress-num";
            } else if (index === 2) {
              el.status = "stuck-num";
            } else if (index === 3) {
              el.status = "done-num";
            }
            if (el.status === "todo-num") {
              count.todo += 1;
            } else if (el.status === "inprogress-num") {
              count.inprogress += 1;
            } else if (el.status === "stuck-num") {
              count.stuck += 1;
            } else if (el.status === "done-num") {
              count.done += 1;
            }
          }
          console.log(id);
        });

        });
        });
    }