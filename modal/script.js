const btnOpen = document.getElementById("btnOpen");
const cancel = document.getElementById("cancel");
const modelEl = document.getElementById("model");
const contentEl = document.getElementById("content");
const body = document.getElementById("body");

btnOpen.addEventListener("click", () => {
    modelEl.classList.add("display");
    contentEl.classList.remove("content-none");
    contentEl.classList.add("content-flex");
    body.classList.add("linear")

})

cancel.addEventListener("click", () => {
    modelEl.classList.remove("display");
    contentEl.classList.add("content-none");
    contentEl.classList.remove("content-flex");

})