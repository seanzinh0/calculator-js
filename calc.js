"use strict";

const input = document.getElementById("calc-input");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

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
       let inputNum = "";

        for (let i = 0; i < this.input.length; i++) {
            const char = this.input[i];
            if(!isNaN(char) || char === "."){
                inputNum += char;
            }else if (this.operators.includes(char)){
                if(inputNum){
                    const number = Number(inputNum)
                    this.answer = this.calculationHelper(number,this.answer, this.chosenOperator);
                }
                this.chosenOperator = char;
                inputNum = "";
            }
        }
        if(inputNum){
            const number = Number(inputNum);
            this.answer = this.calculationHelper(number, this.answer, this.chosenOperator);
        }
        this.input = this.answer.toString();
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
    }
};

numberButtons.forEach(button => {
    button.addEventListener("click",() => {
        calculator.addInput(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click",() => {
        calculator.addInput(button.textContent);
    });
});

clear.addEventListener("click",() => {
    calculator.clearInput();
})

equals.addEventListener("click", () => {
    calculator.calculate();
})

