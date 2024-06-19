const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const trailorContainer = document.querySelector(".trailor-container");

const video = document.querySelector("video");

console.log(btn);
console.log(closeIcon);
console.log(trailorContainer);
console.log(video);

btn.addEventListener("click", () => {
  trailorContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  trailorContainer.classList.add("active");
  video.pause;
  video.currentTime = 0;
});
