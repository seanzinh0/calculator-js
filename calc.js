"use strict";

//initialize DOM elements
const input = document.getElementById("calc-input");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

/**
 * Calculator object that contains five properties: input, answer, operators, chosenOperator, and equation
 * Defaults chosenOperator to + because it adds the initial input to input area if it wasn't then no initial number would be available to calculate based off of
 * updateInput() method updates the text of the input element to show current input such as inputted numbers or answers
 * addInput(val) method adds value to input if input was an answer it resets it
 * clearInput() method resets all input values to the default ones
 * calculate() method performs calculations for my calculator
 * createEquation() method takes input and adds it into an array to create an equation
 * checkMultDiv() checks for multiplication or division and solves based off the operator and puts the solution at the index of the operator
 * checkkAddSub() checks for addition or subtraction and solves based off the operator and puts the solution at the index of the operator
 * calculationHelper() computes simple math based on operation
 */
const calculator = {
    input: "",
    answer: 0,
    operators: ["+", "-", "*", "/"],
    chosenOperator: "+",
    equation: [],
    updateInput() {
        input.textContent = this.input;
    },
    addInput(val){
        if(this.input === this.answer.toString() && !this.operators.includes(val)){ //checks if input is answer and if not an operator
            this.input = val; //changes input to the value you put in
        }else {
            this.input += val;//if an operator appends the val to the input to add operator to continue with a new operation on top of prev answer
        }
        this.updateInput();
    },
    clearInput(){
        this.input = "";
        this.answer = 0;
        this.chosenOperator = "+";
        this.equation = [];
        this.updateInput();
    },
    calculate(){
        this.createEquation()//create the equation
        //check mdas
        this.checkMultDiv()
        this.checkAddSub()

        this.answer = this.equation[0] //store answer
        this.equation = []; //resets the equation
        this.input = this.answer.toString(); //sets the input to the answer
        this.updateInput();//displays the answer
    },
    createEquation(){
        //set equation to an empty array
        this.equation = [];
        //set inputNum to an empty string
        let inputNum = "";
        //create prevAnswer to store and keep track of answers to get proper calculations
        //loop through characters in the input string
        for (let i = 0; i < this.input.length; i++) {
            const char = this.input[i];
            if(!isNaN(char) || char === "."){
                inputNum += char;// if condition is met then append the char to the string inputNum
                //check if char is an operator
            }else if (this.operators.includes(char)){
                //checks to make sure that it is inputNum
                if(inputNum) {
                   this.equation.push(Number(inputNum));// add input num to the equation array and type cast to a number
                    inputNum = "";// resets inputNum
                }
                this.equation.push(char); //adds operator to my equation
            }
        }
        //checks if number needs to be calculated after loop and updates answer, basically allows for more than one operation to be used
        if(inputNum) {
            this.equation.push(Number(inputNum));
        }
    },
    checkMultDiv(){
        for (let i = 0; i < this.equation.length; i++) {
            if(this.equation[i] === "*" || this.equation[i] === "/"){
                let numA = this.equation[i-1];
                let operation = this.equation[i];
                let numB = this.equation[i+1];
                let answer = this.calculationHelper(numA, numB, operation);
                this.equation.splice(i - 1, 3, answer);// replaces the first mult or div calc with the new answer
                i--; //decrement i so that it checks from the initial index to continue to check for mult or div
            }
        }
    },
    checkAddSub(){
        for (let i = 0; i < this.equation.length; i++) {
            if(this.equation[i] === "+" || this.equation[i] === "-"){
                let numA = this.equation[i-1];
                let operation = this.equation[i];
                let numB = this.equation[i+1];
                let answer = this.calculationHelper(numA, numB, operation);
                this.equation.splice(i - 1, 3, answer);// replaces the first sub or add calc with the new answer
                i--; //decrement i so that it checks from the initial index to continue to check for sub or add
            }
        }
    },
    calculationHelper(numA, numB, operation) {
        switch (operation) {
            case "+":
                return numA + numB;
            case "-":
                return numA - numB;
            case "*":
                return numA * numB;
            case "/":
                if(numB === 0) {
                    return "UNDEFINED";
                }
                return numA/numB;
            default:
                return numA;
        }
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

//allows for keyboard compatibility if a key is pressed that meets the conditional it will add the input of the value of the key.
document.addEventListener("keydown", checkKey);

function checkKey(e){
    const key = e.key;
    //allows for numbers to be used on keyboard
    if ((key >= "0" && key <= "9") || key === ".") {
        calculator.addInput(key);
    }
    //allows for keyboard operations to be used
    if (key === "+" || key === "-" || key === "*" || key === "/") {
        calculator.addInput(key);
    }
    //when enter is pressed the calculation is performed
    if (key === "Enter") {
        calculator.calculate();
    }
    //if esc or backspace is selected then teh input is deleted
    if (key === "Escape" || key === "Backspace") {
        calculator.clearInput();
    }
}
