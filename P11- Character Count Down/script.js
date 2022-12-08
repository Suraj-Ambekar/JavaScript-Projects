const result = document.querySelector(".result");
const input = document.querySelector(".input");

let maxCount = 280;

result.textContent = maxCount;

input.addEventListener("input",()=>{
    let currentCount = maxCount - input.value.length;
    result.textContent = currentCount;

    if (currentCount<=0){
        result.style.color = "red";
        result.style.border = "2px dotted red";
    }else{
        result.style.color = "lightgreen";
        result.style.border = "2px dotted lightgreen";
    }
});