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
