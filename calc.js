"use strict";

//initialize DOM elements
const input = document.getElementById("calc-input");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

/**
 * Calculator object that contains four properties: input, answer, operators, and chosenOperator
 * Defaults chosenOperator to + because it adds the initial input to input area if it wasn't then no initial number would be available to calculate based off of
 * updateInput() method updates the text of the input element to show current input such as inputted numbers or answers
 * addInput(val) method adds value to input if input was an answer it resets it
 * clearInput() method resets all input values to the default ones
 * calculate() method takes in inputs and creates numbers out of them and uses updateAnswer method when using operators to calc the answer
 * calculationHelper method does the basic math for all the operations and is used in the updateAnswer method it takes two numbers and an operator
 * updateAnswer() method updates the answer by calling the calculation helper method and assigning it to the answer property
 */
const calculator = {
    input: "",
    answer: 0,
    operators: ["+", "-", "*", "/"],
    chosenOperator: "+",
    updateInput() {
        input.textContent = this.input;
    },
    addInput(val){
        if(this.input === this.answer.toString()){
            this.input = "";
        }
        this.input += val;
        this.updateInput();
    },
    clearInput(){
        this.input = "";
        this.answer = 0;
        this.chosenOperator = "+";
        this.updateInput();
    },
    calculate(){
       //set inputNum to an empty string
       let inputNum = "";
       //create prevAnswer to store and keep track of answers to get proper calculations
       let prevAnswer = this.answer;
       //loop through characters in the input string
        for (let i = 0; i < this.input.length; i++) {
            const char = this.input[i];//current char
            //check if char is a digit or decimal
            if(!isNaN(char) || char === "."){
                inputNum += char;// if condition is met then append the char to the string inputNum
            //check if char is an operator which means user is ready to do a calculation
            }else if (this.operators.includes(char)){
                if(inputNum) {
                    this.updateAnswer(inputNum, prevAnswer);// if a number exists updates the answer with said number
                    prevAnswer = this.answer;
                }
                this.chosenOperator = char;// sets operator to char
                inputNum = "";// resets inputNum
            }
        }
        //checks if number needs to be calculated after loop and updates answer, basically allows for more than one operation to be used
        if(inputNum) {
            this.updateAnswer(inputNum, prevAnswer);// update answer if there is a number that needs to be calculated
        }
        //turns answer into a string and stores in the input property
        this.input = this.answer.toString();
        //updates input to show the new answer
        this.updateInput();
    },
    calculationHelper(number, newAnswer, operator) {
        switch (operator) {
            case "+":
                return newAnswer + number;
            case "-":
                return newAnswer - number;
            case "*":
                return newAnswer * number;
            case "/":
                if(number === 0) {
                    return "UNDEFINED";
                }
                return newAnswer/number;
            default:
                return newAnswer;
        }
    },
    updateAnswer(inputNum, prevAnswer){
        const number = Number(inputNum);
        this.answer = this.calculationHelper(number, prevAnswer, this.chosenOperator);
    }
};

/**
 * iterates through all buttons and looks for the number buttons
 * adds an event listener that when a button that has the class: num
 * adds input to the calculator object
 */
numberButtons.forEach(button => {
    button.addEventListener("click",() => {
        calculator.addInput(button.textContent);
    });
});

/**
 * iterates through all buttons and looks for the operator buttons
 * adds an event listener that when a button that has the class: operator
 * adds input to the calculator object
 */
operatorButtons.forEach(button => {
    button.addEventListener("click",() => {
        calculator.addInput(button.textContent);
    });
});

//when clear button is pressed clear the input from the calculator
clear.addEventListener("click",() => {
    calculator.clearInput();
})

//when equals button is pressed calculate using the calculate method
equals.addEventListener("click", () => {
    calculator.calculate();
})

