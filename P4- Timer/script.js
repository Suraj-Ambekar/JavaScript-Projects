let play = document.getElementById("startplay");
let reset = document.getElementById("reset");
// let timer = document.getElementsByClassName("timer");

// play.addEventListener("click",()=> alert("hello"))

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSec = 0;
let leadingMin = 0;
let leadingHr = 0;

let timeInterval = null;
let playPause = "stopped";

function stopWatch(){
    seconds++
    if((seconds / 60)===1){
        seconds = 0;
        minutes++
        if((minutes /60)===1){
            minutes = 0;
            hours++
        }
    } 
    
    if(leadingSec<10){
        leadingSec = "0" + seconds.toString();
    }else{
        leadingSec = seconds;
    }
    if(leadingMin<10){
        leadingMin = "0" + minutes.toString();
    }else{
        leadingMin = minutes;
    }
    if(leadingHr<10){
        leadingHr = "0" + hours.toString();
    }else{
        leadingHr = hours;
    }

    let timers = document.querySelector(".timer").innerText = leadingHr + ":" + leadingMin + ":" + leadingSec;
}

play.addEventListener("click", function(){
    if(playPause === "stopped"){
        timeInterval = window.setInterval(stopWatch,1000);
        document.querySelector("#startplay").innerHTML = `<span id="pause">pause</span>`;
    }else{
        window.clearInterval(timeInterval);
        document.querySelector("#startplay").innerHTML = `<span id="play">play</span>`;
    }
    
});

reset.addEventListener("click",function(){
    window.clearInterval(timeInterval);
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    document.querySelector('.timer').innerHTML = "00:00:00";
})


// window.setInterval(stopWatch,1);

// play.addEventListener("click",increaseTime());