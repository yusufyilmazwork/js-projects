const inputEl = document.querySelector("#passwordInput");
const generatePasswordBtn = document.querySelector("#generatePassword");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

generatePasswordBtn.addEventListener("click", () => {
    const password = generatePassword();
    inputEl.value = password;

})

function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 15; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    alertEl.innerText = password + "  copied!";
    return password;
}

copyEl.addEventListener("click", () => {
    navigator.clipboard.writeText(inputEl.value)
    alertEl.classList.remove("active");
    setTimeout(() => {
        alertEl.classList.add("active")
    }, 3000);

console.log(alertEl)
})
