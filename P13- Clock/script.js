const secondHand = document.querySelector(".second-hand")
function setDate(){
    const now = new Date();

    // used date object to get current seconds
    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondDegrees = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setDate, 1000);