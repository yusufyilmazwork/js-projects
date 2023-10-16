const counterEl = document.getElementById("counter");
const decrementEl = document.getElementById("decrement");
const resetEl = document.getElementById("reset");
const incrementEl = document.getElementById("increment");

let count = 0;

decrementEl.addEventListener("click", () => {
    count--;
    counterEl.textContent = count;
    counterEl.style.color = "red"
})

resetEl.addEventListener("click", () => {
    count = 0;
    counterEl.textContent = count;
    counterEl.style.color = "black"
})

incrementEl.addEventListener("click", () => {
    count++;
    counterEl.textContent = count;
    counterEl.style.color = "green"
})