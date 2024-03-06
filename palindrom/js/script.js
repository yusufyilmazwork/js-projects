
let palindromText = document.querySelector("#text");
const checkButton = document.querySelector("#checkIn");
const clearButton = document.querySelector("#clear")
function palindrom(str) {
    let strReverse = str.split('').reverse().join('');
    if (str == strReverse) {
        alert(`"${str}" ifadesi palindromdur.`);
    } else {
        alert(`"${str}" ifadesi palindrom degildir.`);
    }
}

checkButton.addEventListener("click", function() {
    palindrom(palindromText.value);
});



function clear() {
    palindromText.value = ""
}

clearButton.addEventListener("click", clear)