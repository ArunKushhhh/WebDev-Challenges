//copyText
const copyText = document.querySelector("textarea[name=copyTxt]");
//finalText
const finalText = document.querySelector("textarea[name=finalTxt]");
//moveBtn
const moveBtn = document.querySelector(".moverBtn");
//copyBtn
const copyBtn = document.querySelector(".copyBtn");
//output
const output = document.querySelector(".output");

// console.log(copyText);
// console.log(finalText);
// console.log(moveBtn);
// console.log(copyBtn);
// console.log(output);

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToClipBoard(temp);
});

moveBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
});

copyText.addEventListener("click", () => {
  this.select();
});

finalText.addEventListener("click", () => {
  this.select();
});

function copyToClipBoard(str) {
  const outputContainer = document.querySelector(".output-container");
  const textarea = document.createElement("textarea");
  textarea.value = str;
  outputContainer.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  outputContainer.removeChild(textarea);
  output.innerHTML = `
        <h3>Content Copied </h3>
    `;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.toggle("added");
    output.textContent = "";
  }, 2000);
}
