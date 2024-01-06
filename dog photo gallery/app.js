const inputEl = document.getElementById("numberInput");
const btnEl = document.getElementById("submitButton");
const photoGallery = document.getElementById("photoGallery");

const getRandomImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message;
}

btnEl.addEventListener("click", async () => {
    photoGallery.innerHTML = ""
    const inputNumber = Number(inputEl.value)
    for(let i = 0; i < inputNumber; i++){
        const imageUrl = await getRandomImage();
        const imgEl = document.createElement("img");
        const cardImage = document.createElement("div");
        cardImage.classList.add("card-flex");
        imgEl.classList.add("image");
        imgEl.src = imageUrl;
        cardImage.appendChild(imgEl);
        photoGallery.appendChild(cardImage);
    }
})
