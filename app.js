let firstNum;
let secondNum;
let operation;
let result;
let displayValue = [];

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

const operate = function (a, b, op) {
  switch (op) {
    case "+":
      console.log("+++");
      return add(a, b);
    case "-":
      console.log("minus");
      return subtract(a, b);
    case "*":
      console.log("multiply");
      return multiply(a, b);
    case "/":
      console.log("divide");
      return divide(a, b);
    default:
      return "ERROR";
  }
};

const numbers = document.querySelectorAll("div.number>button");
const operations = document.querySelectorAll("button.operation");
const equalTo = document.querySelector("div.result>button");
const reset = document.querySelector("div.clear>button");

function updateDisplay(value) {
  if (value !== undefined) {
    return (document.querySelector("div.display").innerText = value);
  } else {
    return document.querySelector("div.display").innerText;
  }
}

function clear() {
  document.querySelector("div.display").innerText = "";
  firstNum = 0;
  secondNum = 0;
  operation = "";
  displayValue = [];
}

function handleButtonClick(event) {
  //   console.log(event.target.textContent);

  if (event.target.parentElement.classList.value == "number") {
    displayValue.push(event.target.textContent);

    if (operation === undefined || operation === "") {
      firstNum = displayValue.join("");
      updateDisplay(parseInt(displayValue.join("")));
      console.log(`First Num: ${firstNum}`);
    } else {
      secondNum = displayValue.join("");
      updateDisplay(parseInt(displayValue.join("")));
      console.log(`Second Num: ${secondNum}`);
    }
  } else if (event.srcElement.classList.value == "operation") {
    operation = event.target.textContent;
    displayValue = [];
  } else if (event.target.parentElement.classList.value == "result") {
    displayValue = [];
    result = operate(parseInt(firstNum), parseInt(secondNum), operation);
    displayValue.push(result);
    result = updateDisplay(parseInt(displayValue.join("")));
    firstNum = result;
    operation = "";
    console.log(typeof result);
  } else if (event.target.parentElement.classList.value == "clear") {
    clear();
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", handleButtonClick);
});

operations.forEach((symbol) => {
  symbol.addEventListener("click", handleButtonClick);
});

equalTo.addEventListener("click", handleButtonClick);

reset.addEventListener("click", handleButtonClick);
