const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
function setDate(){
    const now = new Date();

    // used date object to get current seconds
    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondDegrees = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // used date object to get current minutes
    const mins = now.getMinutes();
    const minsDegrees = ((mins/60)*360) +90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
}

setInterval(setDate, 1000);