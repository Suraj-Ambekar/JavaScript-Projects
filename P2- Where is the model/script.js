const btn = document.querySelector(".btn");
const modelContainer = document.querySelector(".model-container");
const cross = document.querySelector("span");

btn.addEventListener("click",()=>{
    modelContainer.style.display = 'block';
});

cross.addEventListener("click",()=>{
    modelContainer.style.display= 'none';
});

window.addEventListener("click",(e)=>{
    if(e.target === modelContainer){
        modelContainer.style.display= 'none';
    }
});