//* Selectors
const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

const btnContainer = document.querySelector(".buttons-container");

let currOperand = "";
let previousOperand = "";
let operation = "";
let equalOrPercentPressed = false;
//! butonların parentına event tanımlandı
btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    appendNumber(e.target.textContent);
    updatedisplay();
  }
  if (e.target.classList.contains("operator")) {
    choosOperator(e.target.textContent);
    updatedisplay();
  }
  if (e.target.classList.contains("equal")) {
    calculate();
    updatedisplay();
    equalOrPercentPressed = true;
  }
  if (e.target.classList.contains("ac")) {
    location.reload();
  }
  if (e.target.classList.contains("pm")) {
    if (!currOperand) return;
    currOperand *= -1;
    updatedisplay();
  }
  if (e.target.classList.contains("percent")) {
    if (!currOperand) return;
    currOperand = currOperand / 100;
    updatedisplay();
    equalOrPercentPressed = true;
  }
});

const appendNumber = (num) => {
  if (currOperand === "0" && num === "0") return;
  if (currOperand === "0" && num !== ".") {
    currOperand = num;
    return;
  }
  if (num === "." && currOperand.includes(".")) return;

  if (currOperand.length > 10) return;
  if (equalOrPercentPressed) {
    currOperand = num;
    equalOrPercentPressed = false;
    return;
  }

  currOperand += num;
};

const updatedisplay = () => {
  if (currOperand.toString().length > 11) {
    currOperand = Number(currOperand).toExponential(7);
  }
  currDisp.textContent = currOperand;
  prevDisp.textContent = `${previousOperand}${operation}`;
};

const choosOperator = (op) => {
  if (previousOperand) {
    calculate();
  }

  operation = op;
  previousOperand = currOperand;
  currOperand = "";
};