const code = document.getElementById("code");
const btn = document.getElementById("btn");
const body = document.querySelector("body");

btn.addEventListener("click",()=>{
    let color = Math.random().toString(16).substring(2,8);
    color = "#"+color;
    code.innerText = color;
    body.style.backgroundColor = code.innerText;
});