const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

let firstNum;
let secondNum;
let operation;

const operate = function (a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
    default:
      return "ERROR";
  }
};

console.log(operate(1, 2, "+"));
