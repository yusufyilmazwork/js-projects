const btnChange = document.getElementById("btnChange");
const bcgColor = document.getElementById("bcg");
const simpleEl= document.getElementById("simple");
const hexEl = document.getElementById("hex");
const spanColor = document.querySelector(".color");
let color = ""

    btnChange.addEventListener("click", () => {
        randomColor();
        btnChange.style.backgroundColor = color;
        document.body.style.backgroundColor = color;
        spanColor.textContent = color;
    
        
    })




const randomColor = () => {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16)
}