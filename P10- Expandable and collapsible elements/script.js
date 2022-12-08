let cards = document.querySelectorAll(".cards");

// scissor[0].addEventListener("click",()=>{
//     alert('hello')
// })

function removeClass(){
    for (let i=0; i<cards.length; i++){
        cards[i].classList.remove("active");
    }
}

for(let i=0; i<cards.length; i++){

    // click one time to exapand an element
    cards[i].addEventListener("click",()=>{
        removeClass();
        cards[i].classList.add("active");
    });

    // double click on element to collapse en element
    cards[i].addEventListener("dblclick",()=>{
        removeClass();
    });
}
