/* eslint-disable */
import "bootstrap";
import "./style.css";

class Caculator {
  constructor(previousOperatorTextElement, currentOperatorTextElement) {
    this.previousOperatorTextElement = previousOperatorTextElement;
    this.currentOperatorTextElement = previousOperatorTextElement;
  }
  clear() {}
  delet() {}
}

const numberButtons = document.querySelector("[data-number]");
const operationButtons = document.querySelector("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-clear]");
const previousOperatorTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperatorTextElement = document.querySelector(
  "[data-current-operand]"
);
