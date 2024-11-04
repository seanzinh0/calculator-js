const input = document.getElementById("calc-input");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

const calculator = {
    input: "",
    updateInput() {
        input.textContent = this.input;
    },
    addInput(val){
        this.input += val;
        this.updateInput();
    },
    clearInput(){
        this.input = "";
        this.updateInput();
    },
    calculate(){
        let numA = "";
        let numB = "";
        let operator = "";
        let hasOperator = false;

        for (let i = 0; i < this.input.length; i++) {
            const char = this.input[i];

            if(!isNaN(char) && char !== ""){
                if(!hasOperator){
                    numA += char;
                }else {
                    numB += char;
                }
            }else if (["+", "-", "*", "/"].includes(char)){
                if(!hasOperator){
                    operator = char;
                    hasOperator = true;
                }else {
                    return "You have more than one operator"
                }
            }
        }
        const numberA = Number(numA);
        const numberB = Number(numB);
        return this.calculationHelper(numberA, numberB, operator);
    },
    calculationHelper(numberA, numberB, operator) {
        switch (operator) {
            case "+":
                return (numberA + numberB).toString();
            case "-":
                return (numberA - numberB).toString();
            case "*":
                return (numberA * numberB).toString();
            case "/":
                if(numberB === 0) {
                    return "Can't divide by zero";
                }
                return (numberA / numberB).toString();
            default:
                return "There was an error you had no valid operator";
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
    const answer = calculator.calculate();
    calculator.input = Number(answer);
    calculator.updateInput();
})

