let decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const result = document.getElementById("number");

decrease.addEventListener("click",()=>{

    result.innerHTML--;    
    
});    

reset.addEventListener("click",()=>{
    result.innerText = 0;
});

increase.addEventListener("click",()=>{
    result.innerHTML++
});