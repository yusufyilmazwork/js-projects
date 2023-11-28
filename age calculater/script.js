const birthdayEl = document.getElementById("age");
const butonEl = document.getElementById("calculate");
const resultEl = document.getElementById("result");

butonEl.addEventListener("click", () => {
    const birthday = birthdayEl.value;
    const age = calculateAge(birthday);
    resultEl.innerText =`Your age is ${age} years old` ;

})


function calculateAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age;
}