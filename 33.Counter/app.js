//countEl
const countEl = document.getElementById("count");
//saveEl
const saveEl = document.getElementById("save");
//increment-btn
const incrementBtn = document.querySelector(".increment-btn");
//save-btn
const saveBtn = document.querySelector(".save-btn");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count += 1;
  countEl.innerText = count;
});

saveBtn.addEventListener("click", () => {
  let countStr = count + ", ";
  saveEl.innerText += countStr;
  countEl.textContent = 0;
  count = 0;
});
