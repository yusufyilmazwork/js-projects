const player = document.querySelector(".switch-btn");
const videoEl = document.querySelector(".video-bcg")

player.addEventListener("click", () => {
    player.classList.toggle("slide");
    if (player.classList.contains("slide")) {
        videoEl.pause()
    } else {
        videoEl.play()
    }
})