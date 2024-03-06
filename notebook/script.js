const inputType = document.getElementById("nameInput");
const pointInput = document.getElementById("pointInput");
const submitBtn = document.getElementById("submitBtn");
const tableRow = document.getElementById("tableRow");

let nameCell = "";
let pointCell = "";

function deleteRow(row) {
    row = row.parentElement.parentElement;
    row.remove();

    calculateAverage()
}


function editForm(row) {
    row = row.parentElement.parentElement;
    nameCell = row.getElementsByClassName("name")[0].innerText;
    pointCell = row.getElementsByClassName("point")[0].innerText;

    const nameInput = document.createElement("input");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("value", nameCell);
    row.getElementsByClassName("name")[0].innerHTML = "";
    row.getElementsByClassName("name")[0].appendChild(nameInput);

    const pointInput = document.createElement("input");
    pointInput.setAttribute("name", "point");
    pointInput.setAttribute("value", pointCell);
    pointInput.setAttribute("type", "number");
    pointInput.setAttribute("min", "0");
    pointInput.setAttribute("max", "100");
    row.getElementsByClassName("point")[0].innerHTML = "";
    row.getElementsByClassName("point")[0].appendChild(pointInput);

    row.getElementsByClassName("edit")[0].innerHTML = `<i class="fa-solid fa-check"></i>`;
    row.getElementsByClassName("edit")[0].setAttribute("onclick", "saveData(this)");

    row.getElementsByClassName("delete")[0].innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    row.getElementsByClassName("delete")[0].setAttribute("onclick", "cancel(this)");
}

function saveData(row) {
    row = row.parentElement.parentElement;
    
    const nameInput = row.getElementsByClassName("name")[0].getElementsByTagName("input")[0];
    const pointInput = row.getElementsByClassName("point")[0].getElementsByTagName("input")[0];
    
    const name = nameInput.value.trim();
    const point = parseFloat(pointInput.value);
    
    if (name === "") {
        alert("Please enter valid values.");
        return;
    }

    if (isNaN(point) || point < 0 || point > 100) {
        alert("Please enter a value between 0 and 100.");
        return;
    }
    
    row.getElementsByClassName("name")[0].innerText = name;
    row.getElementsByClassName("point")[0].innerText = point;
    
    row.getElementsByClassName("edit")[0].innerHTML = `<i class="fa-regular fa-pen-to-square"> Edit</i>`;
    row.getElementsByClassName("edit")[0].setAttribute("onclick", "editForm(this)");
    
    row.getElementsByClassName("delete")[0].innerHTML = `<i class="fa-regular fa-trash-can"> Delete</i>`;
    row.getElementsByClassName("delete")[0].setAttribute("onclick", "deleteRow(this)");

    calculateAverage()
}

function cancel(row) {
    row = row.parentElement.parentElement;

    row.getElementsByClassName("name")[0].innerText = nameCell;
    row.getElementsByClassName("point")[0].innerText = pointCell;

    row.getElementsByClassName("edit")[0].innerHTML = `<i class="fa-regular fa-pen-to-square"> Edit</i>`;
    row.getElementsByClassName("edit")[0].setAttribute("onclick", "editForm(this)");

    row.getElementsByClassName("delete")[0].innerHTML = `<i class="fa-regular fa-trash-can"> Delete</i>`;
    row.getElementsByClassName("delete")[0].setAttribute("onclick", "deleteRow(this)");
}

function calculateAverage() {

    const pointCells = document.getElementsByClassName("point");
    let sum = 0;
    
    for (let i = 0; i < pointCells.length; i++) {
      const point = parseFloat(pointCells[i].innerText);
      
      sum += point;
    }
    
    const average = sum / pointCells.length;
    document.querySelector(".average").innerText = average.toFixed(2);

    if (pointCells.length === 0) {
        document.querySelector(".average").innerText = "";
        return;
    }

  }

submitBtn.addEventListener("click", () => {
    if (!inputType.value || !pointInput.value) {
        alert("Please fill all the fields");
        inputType.value = "";
        pointInput.value = "";
        inputType.focus();
        return;
    }
    if (Number(pointInput.value) > 100 || Number(pointInput.value) < 0) {
        alert("Please enter a value between 0 and 100");
        inputType.focus();
        return;
    }

    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.setAttribute("class", "name");
    const point = document.createElement("td");
    point.setAttribute("class", "point");
    const buttons = document.createElement("td");
    buttons.innerHTML = `<button class="edit btn btn-warning" onclick="editForm(this)"><i class="fa-regular fa-pen-to-square"> Edit</i></button> &nbsp;&nbsp;&nbsp;<button class="delete btn btn-warning" onclick="deleteRow(this)"><i class="fa-regular fa-trash-can"> Delete</i></button>`;

    row.appendChild(document.createElement("td"));
    row.appendChild(name);
    row.appendChild(point);
    row.appendChild(buttons);
    tableRow.appendChild(row);

    name.innerText = inputType.value;
    point.innerText = pointInput.value;

    inputType.value = "";
    pointInput.value = "";
    inputType.focus();

    calculateAverage()
});
