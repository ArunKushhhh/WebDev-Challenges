const btn = document.querySelectorAll(".btn");
// console.log(btn);
const body = document.body;
// console.log(body);

btn.forEach((button) => {
  button.addEventListener("click", () => {
    color = button.value;
    changeBackground(color);
  });
});

function changeBackground(color) {
  body.className = "";

  switch (color) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
      break;
  }
}
