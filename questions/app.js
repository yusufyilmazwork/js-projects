const iconsEl = document.querySelectorAll(".icon");
const contentEl = document.querySelectorAll(".content");

iconsEl.forEach((icon, index) => {
    icon.addEventListener("click", function() {
        change(this, index);
    });
});

function change(element, index) {
    const iconPlus = '<i class="fa-solid fa-square-plus"></i>';
    const iconMinus = '<i class="fa-regular fa-square-minus"></i>';

    const isActive = element.classList.contains("active");

    iconsEl.forEach((icon, i) => {
        icon.innerHTML = iconPlus;
        icon.classList.remove("active");
        contentEl[i].style.display = "none";
    });

    if (!isActive) {
        element.innerHTML = iconMinus;
        element.classList.add("active");
        contentEl[index].style.display = "block";
    }
}