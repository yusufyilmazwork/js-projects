const imageAlbume = document.querySelector(".image-container");
const btn = document.querySelector(".btn-add");
let imageCount = 5;

btn.addEventListener("click", () => {
    addNewImages()
})


function addNewImages () {
        for( let i=0 ; i< imageCount; i++)
    {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
        imageAlbume.appendChild(img);
    }
}