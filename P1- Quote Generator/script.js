let quote = document.querySelector('.quote');
console.log(quote);
let author = document.querySelector('.author');
console.log(author);
const btn = document.querySelector('.btn');
console.log(btn);

const quotes = [{
    quote: `"You can get everything in life you want if you will just help enough other people get what they want."`,
    author: "Zig Ziglar",
},
{
    quote: `"Inspiration does exist, but it must find you working."`,
    author: "Pablo Picasso",
},
{
    quote: `"Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had."`,
    author: "Angela Bassett",
},
{
    quote: `"Show up, show up, show up, and after a while the muse shows up, too."`,
    author: "Isabel Allende",
},
{
    quote: `"Don't bunt. Aim out of the ballpark. Aim for the company of immortals."`,
    author: "David Ogilvy",
},
{
    quote: `"I have stood on a mountain of no’s for one yes."`,
    author: "Barbara Elaine Smith",
},
{
    quote: `"If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it."`,
    author: "Tobias Lütke",
},
{
    quote: `"First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice."`,
    author: "Octavia Butler",
},
{
    quote: `"The best way out is always through."`,
    author: "Robert Frost",
},
{
    quote: `"The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—that's where it's at."`,
    author: "Jesse Owens",
}];

function appendInfo(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
}

btn.addEventListener("click",appendInfo);

