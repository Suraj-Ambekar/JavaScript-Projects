//variables

const input = document.getElementById("input-task");
const btn = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
let container = document.querySelector(".container");

// console.log(input,btn,taskContainer);

btn.addEventListener("click", ()=>{
    let task = document.createElement('div');
    task.classList.add('task');

    let li= document.createElement('li');
    li.classList.add('li');
    li.classList.add('line');
    li.innerText =`${input.value}`;
    task.appendChild(li); 

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add("check");
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("delete");
    task.appendChild(deleteButton);

    if(input.value === ""){
        alert("please enter a task");
    }else{
        taskContainer.appendChild(task);
    }
    input.value = "";

    checkButton.addEventListener("click",()=>{
        checkButton.parentElement.style.textDecoration = "line-through";
    });

    
    deleteButton.addEventListener("click",(e)=>{
        let target = e.target;
        target.parentElement.parentElement.remove();
    });
});



