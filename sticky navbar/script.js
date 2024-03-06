const navbarEl = document.querySelector(".container");
const contentEl = document.querySelector(".text");


window.addEventListener("scroll", () => {
    if(
    navbarEl.classList.toggle("active", window.scrollY > contentEl.offsetTop - navbarEl.offsetHeight - 50)
    )
    {
        navbarEl.classList.add("active");

    }
    else {
        navbarEl.classList.remove("active");
    }
})


console.log(navbarEl.offsetHeight);

console.log(contentEl.offsetTop);
console.log(window.scrollY)