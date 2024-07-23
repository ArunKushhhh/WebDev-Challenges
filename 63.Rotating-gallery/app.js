//img-container
const imageContainer = document.querySelector(".image-container");
//prev
const prevBtn = document.getElementById("prev");
//next
const nextBtn = document.getElementById("next");

// console.log(imageContainer);
// console.log(prevBtn);
// console.log(nextBtn);

let x = 0;

function rotate() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

prevBtn.addEventListener("click", () => {
  x = x + 45;
  rotate();
});

nextBtn.addEventListener("click", () => {
  x = x - 45;
  rotate();
});
