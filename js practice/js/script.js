const inputTextEl = document.getElementsByClassName("inputText")[0];
const btnAdd = document.getElementById("addButton");
const btnSort = document.getElementById("sort");
const reserveBtn = document.getElementsByClassName("reserve")[0];
const removeLastBtn = document.getElementsByClassName("removeLast")[0];
const removeFirstBtn = document.getElementsByClassName("removeFirst")[0];
const removeAllBtn = document.getElementsByClassName("removeAll")[0];
const mixBtn = document.getElementsByClassName("mix")[0];
let listEl = document.getElementById("test");

btnAdd.addEventListener("click", () => {
  	listEl.innerHTML += `<li>${inputTextEl.value}</li>`;
  	inputTextEl.value = "";
	  inputTextEl.focus();
});

btnSort.addEventListener("click", () => {
  const listItems = Array.from(listEl.getElementsByTagName("li"));
  const sortedItems = listItems.sort((a, b) => a.innerText.localeCompare(b.innerText));
  sortedItems.forEach((item) => listEl.appendChild(item));
});

reserveBtn.addEventListener("click", () => {
  const listItems = Array.from(listEl.getElementsByTagName("li"));
  const reversedItems = listItems.reverse()
  reversedItems.forEach((item) => listEl.appendChild(item));
});

removeLastBtn.addEventListener("click", () => {
  const listItems = Array.from(listEl.getElementsByTagName("li"));
  if (listItems.length > 0) {
    listItems[listItems.length - 1].remove();
  }
});


removeFirstBtn.addEventListener("click", () => {
  const listItems = listEl.getElementsByTagName("li");
  if (listItems.length > 0) {
    listItems[0].remove();
  }
});



removeAllBtn.addEventListener("click", () => {
  listEl.innerHTML = ""
});



mixBtn.addEventListener("click", () => {
  const listItems = Array.from(listEl.getElementsByTagName("li"));
  const randomItems = listItems.sort(() => Math.random() - 0.5);
  randomItems.forEach((item) => listEl.appendChild(item));
});
