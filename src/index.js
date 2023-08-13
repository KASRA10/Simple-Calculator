// Choose And Get Input Onto JavaScript
let screen = document.querySelector(".output");
//Get All Buttons And Create Number Variables
let numbers = document.querySelectorAll(".mybutton");
// Define Necessary Variables
var lastNumber = 0;
var operation = "";
var newNumber = 0;
//Show Number On Input Screen
var showScreen = (number) => { screen.value = number; };
// Set Number
let inputNumber = (number) => {
  (newNumber === 0) ? newNumber = parseFloat(number) : newNumber = parseFloat(newNumber) + number;

};
// Add Even On Each Number to Get them And Show On InputScreen
numbers.forEach(
  (numbers) => {
    numbers.addEventListener("click", function (event) {
      inputNumber(event.target.value);
      showScreen(newNumber);
    });
  }
);
// Add Numbers by Operator
// Get operator Elements
const operators = document.querySelectorAll(".operators");
// Update last And New Numbers
let inputOperator = function (operator) {
  lastNumber = parseFloat(newNumber);
  operation = operator;
  showScreen(operator);
  newNumber = 0;
};
// iterate among operators and add event for each of them
operators.forEach((operators) => {
  operators.addEventListener("click", function (event) {
    //Get The Value Of Operator
    inputOperator(event.target.value);
  });
});
// Get Element Of "=" Button And Put Into Variable
const equal = document.querySelector(".equal");
// Add Event To Operate Equality
equal.addEventListener("click", () => {
  execute();
  showScreen(newNumber);
});
// Define Instruction To Do Operation input
var execute = function () {
  var result = 0;
  switch (operation) {
    case '+':
      result = parseFloat(lastNumber) + parseFloat(newNumber);
      break;
    case '-':
      result = parseFloat(lastNumber) - parseFloat(newNumber);
      break;
    case '*':
      result = parseFloat(lastNumber) * parseFloat(newNumber);
      break;
    case '/':
      result = parseFloat(lastNumber) / parseFloat(newNumber);
      break;
    case '%':
      result = (parseFloat(lastNumber) / 100) * parseFloat(newNumber);
      break;
    default:
      return;
  }
  newNumber = result;
  operation = "";
};
// Get Clear AC Button 
const AC = document.querySelector(".AC");
// Clearing Function
const clean = () => {
  lastNumber = 0;
  operation = "";
  newNumber = 0;
};
// Define Clear Event Onto Element Button
AC.addEventListener("click", function () {
  clean();
  showScreen(newNumber);
});
