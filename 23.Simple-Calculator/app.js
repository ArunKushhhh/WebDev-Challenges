document.getElementById("btn").addEventListener("click", () => {
  //get elements from DOM
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");
  let operator = document.querySelector("#selectOp").value;

  switch (operator) {
    //ES5 code
    // case "plus":
    //   result.innerHTML = Number(num1) + Number(num2);
    //   break;
    // case "min":
    //   result.innerHTML = Number(num1) - Number(num2);
    //   break;
    // case "dev":
    //   result.innerHTML = Number(num1) / Number(num2);
    //   break;
    // case "multi":
    //   result.innerHTML = Number(num1) * Number(num2);
    //   break;

    //ES6 code
    //another way to convert strings to number is by adding + sign before the name of the variable in which the number is stored
    case "plus":
      result.innerHTML = +num1 + +num2;
      break;
    case "min":
      result.innerHTML = +num1 - +num2;
      break;
    case "dev":
      result.innerHTML = +num1 / +num2;
      break;
    case "multi":
      result.innerHTML = +num1 * +num2;
      break;
  }
});
