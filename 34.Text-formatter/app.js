//input
const input = document.getElementById("input-field");
//output
const output = document.getElementById("output-field");
//buttons
const buttons = document.querySelectorAll(".btn");

// console.log(input);
// console.log(output);
// console.log(buttons);

input.addEventListener("keyup", () => (output.innerHTML = input.value));

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      output.innerHTML = output.innerHTML.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      output.innerHTML = output.innerHTML.toLowerCase();
    } else if (btn.classList.contains("capitalise")) {
      output.innerHTML =
        output.innerHTML.charAt(0).toUpperCase() +
        output.innerHTML.slice(1).toLowerCase();
    } else if (btn.classList.contains("bold")) {
        output.style.fontWeight = "900";
      } else if (btn.classList.contains("italic")) {
        output.style.fontStyle = "italic";
      } else if (btn.classList.contains("underline")) {
        output.style.textDecoration = "underline";
      }
  });
});
