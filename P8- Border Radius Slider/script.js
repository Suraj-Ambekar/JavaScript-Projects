const range = document.getElementById('slider');
const box = document.querySelector(".box");
const result = document.querySelector(".result");

range.addEventListener("input",()=>{
    result.innerText = range.value +"%";
    console.log(result)
    box.style.borderRadius = result.innerText;
});

