const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0

prevBtn.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slides[currentSlide].classList.add("active");
} )

nextBtn.addEventListener("click", () => {
    slides[currentSlide].classList.remove("active");
    currentSlide++;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    slides[currentSlide].classList.add("active");
})