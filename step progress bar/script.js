
const line = document.getElementsByTagName("hr");
const previousBtn = document.getElementsByClassName("btn-previous")[0];
const nextBtn = document.getElementsByClassName("btn-next")[0];
const steps = document.getElementsByClassName("step");
console.log(steps)
let step = 0;

const maxStep = 4;
const minStep = 0;

previousBtn.addEventListener("click", () => {
    step--;
    if (step < minStep) {
        step = 0;
        previousBtn.disabled = true;
        nextBtn.disabled = false;
    }
    
    line[step]?.classList.remove("active");
    steps[step]?.classList.remove("active");
    steps[step].innerHTML = `<i class="fa-solid fa-xmark"></i>`
    
    
});

nextBtn.addEventListener("click", () => {
    step++;
    if (step >= maxStep) {
        step = maxStep;
        nextBtn.disabled = true;
        previousBtn.disabled = false;
    }

    line[step-1]?.classList.add("active");
    steps[step-1]?.classList.add("active");
    steps[step-1].innerHTML = `<i class="fa-solid fa-check"></i>`
    
});
