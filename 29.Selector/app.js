//selectField
const selectField = document.getElementById("selectField");
//selectText
const selectText = document.getElementById("selectText");
//list
const list = document.getElementById("list");
//arrowIcon
const arrowIcon = document.getElementById("arrowIcon");
//options
const options = document.getElementsByClassName("options");

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}
