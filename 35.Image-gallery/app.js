//images
let images = document.querySelectorAll("img")
//wrapper
let wrapper = document.getElementById("wrapper")
//img-wrapper
let imgWrapper = document.getElementById("fullImg")
//close-btn
let closeBtn = document.querySelector("span")

// console.log(images);
// console.log(wrapper);
// console.log(imgWrapper);
// console.log(closeBtn);

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(`images/img${index}.jpg`)
    })
})

function openModal(pic) {
    wrapper.style.display = "flex"
    imgWrapper.src = pic
}

closeBtn.addEventListener("click", () => {
    wrapper.style.display = "none"
})