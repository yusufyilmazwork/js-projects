const quoteEl = document.getElementById("quote");
const thinkerEl = document.getElementById("thinker");
const getQuoteBtn = document.getElementById("getQuote");


getQuoteBtn.addEventListener("click", getQuote);

function getQuote() {
    fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
            quoteEl.innerText = data.content;
            thinkerEl.innerText = data.author;
            
        });
}


