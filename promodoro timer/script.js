const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");
const counterEl = document.getElementsByClassName("counter");
const inputEl = document.getElementsByClassName("time-input");
let counter = inputEl[0].value;
let time = ""

btnStart.addEventListener("click", () => {
   if (!inputEl || Number(inputEl[0].value)<0) {
      return;
   };
   
   inputEl[0].classList.add("d-none");
   counterEl[0].classList.remove("d-none")
   
   time = Number(inputEl[0].value)*60;

   counter = setInterval(() => {
      if (time >= 0) {
         counterEl[0].innerText = time;
         time--;
      } else {
         clearInterval(counter);
      }
   }, 1000);
   btnStart.disabled = true;
   btnStop.disabled = false;
   btnReset.disabled = false;
   
   inputEl[0].value = "";
  
   })

btnStop.addEventListener("click", () => {
   clearInterval(counter);
   btnStart.disabled = false;
   btnReset.disabled = false;

   inputEl[0].value = time /60;

})

btnReset.addEventListener("click", () => {
   clearInterval(counter);
   btnStart.disabled = false;
   btnStop.disabled = true;
   btnReset.disabled = true;
   
   counterEl[0].classList.add("d-none")

   inputEl[0].classList.remove("d-none");
   inputEl[0].classList.add("d-block")
   inputEl[0].value = "";
})
    



