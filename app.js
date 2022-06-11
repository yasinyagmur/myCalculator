let result = document.querySelector(".screen");
let reset = document.querySelector(".reset");
let mop = document.querySelector(".mop");
let modulus = document.querySelector(".modulus");
let divide = document.querySelector(".divide");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let multiply = document.querySelector(".mult");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let minus = document.querySelector(".minus");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let plus = document.querySelector(".plus");
let zero = document.querySelector(".zero");
let doted = document.querySelector(".dot");
let equal = document.querySelector(".equal");

reset.addEventListener("click", () => {
  location.reload();
});
one.addEventListener("click", () => {
  result.innerText += 1;
});
two.addEventListener("click", () => {
  result.innerText += 2;
});
three.addEventListener("click", () => {
  result.innerText += 3;
});
four.addEventListener("click", () => {
  result.innerText += 4;
});
five.addEventListener("click", () => {
  result.innerText += 5;
});
six.addEventListener("click", () => {
  result.innerText += 6;
});
seven.addEventListener("click", () => {
  result.innerText += 7;
});
eight.addEventListener("click", () => {
  result.innerText += 8;
});
nine.addEventListener("click", () => {
  result.innerText += 9;
});
zero.addEventListener("click", () => {
  if (result.innerText == "") {
    result.innerText = ".0";
  } else {
    result.innerText += 0;
  }
});
minus.addEventListener("click", () => {
  result.innerText += "-";
});
plus.addEventListener("click", () => {
  result.innerText += "+";
});
multiply.addEventListener("click", () => {
  result.innerText += "*";
});
mop.addEventListener("click", () => {
  result.innerText *= -1;
});
modulus.addEventListener("click", () => {
  result.innerText = result.innerText / 100;
});
divide.addEventListener("click", () => {
  result.innerText += "/";
});
doted.addEventListener("click", () => {
  if (result.innerText == 0) {
    result.innerText = ".0";
  } else {
    result.innerText += ".";
  }
});
equal.addEventListener("click", () => {

  let final =  `${result.innerText}`;
  console.log(final)
  result.innerText = final;
  return `${result.value}`
});
