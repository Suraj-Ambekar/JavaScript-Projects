let gameValues = ['rock', 'paper', 'scissor'];

function getRandomItem(gameValues){
    let randomItem = Math.floor(Math.random()*gameValues.length);

    let randomValue = gameValues[randomItem];

    return randomValue;
}

result = getRandomItem(gameValues);
console.log(result);

let compChoice = document.getElementById("comp-choice");
let userChoice = document.getElementById("user-choice");
let winner = document.getElementById("winner");
// winner.innerText= "heelo";

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

rock.addEventListener("click",()=> {
    compChoice.innerText = result;
    userChoice.innerText = "rock";
    compChoice = result;
    userChoice = "rock";
    win();
});
paper.addEventListener("click",()=> {
    compChoice.innerText = result;
    userChoice.innerText = "paper";
    compChoice = result;
    userChoice = "paper";
    win();
});
scissor.addEventListener("click",()=> {
    compChoice.innerText = result;
    userChoice.innerText = "scissor";
    compChoice = result;
    userChoice = "scissor";
    win();
});

function win(){
    if(compChoice==="rock" && userChoice==="paper"){
        winner.innerText= "User is the winner";
        return winner;
    }else if(compChoice==="rock" && userChoice==="scissor"){
        winner.innerText= "Computer is the winner";
        return winner;
    }else if(compChoice==="rock" && userChoice==="rock"){
        winner.innerText= "It is the tie";
        return winner;
    }else if(compChoice==="paper" && userChoice==="rock"){
        winner.innerText= "computer is the winner";
        return winner;
    }else if(compChoice==="paper" && userChoice==="scissor"){
        winner.innerText= "User is the winner";
        return winner;
    }else if(compChoice==="paper" && userChoice==="paper"){
        winner.innerText= "It is the tie";
        return winner;
    }else if(compChoice==="scissor" && userChoice==="rock"){
        winner.innerText= "user is the winner";
        return winner;
    }else if(compChoice==="scissor" && userChoice==="paper"){
        winner.innerText= "computer is the winner";
        return winner;
    }else if(compChoice==="scissor" && userChoice==="scissor"){
        winner.innerText= "It is the tie";
        return winner;
    }

    
}


