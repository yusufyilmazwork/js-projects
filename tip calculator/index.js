

const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const calculateEl = document.getElementById("calculate");
const tipPercent = document.getElementById("result");


console.log(tipEl )
console.log(billEl )

calculateEl.addEventListener("click", function() {
    const bill = Number(billEl.value);
    const tip = Number(tipEl.value);
    
    const tipAmount = (bill * tip) / 100;
    const total = bill + tipAmount;
    


    tipPercent.textContent = `Total Earnings: ${total}`


})