# calculator-js
Welcome to my Javascript calculator
I went a different approach with creating the logic for my calculator app.
I wanted to use princiciples of object oriented programming.
I created a calculator object with various methods to help the calculator function.
Inside the calculator object it contains five properties that include:
input, answer, operators, chosenOperator, and equation.
Input is initialized to an empty string. Answer is initialized to 0. Operators contains an array of operators used for calculation;
ChosenOperator is initialized to + so that it adds the first value into the input. Lastly, equation is an empty array.

There were 8 methods I created that are inside the calculator object: updateInput, addInput, clearInput, calculate, createEquation, checkMultDiv, checkAddSub, calculationHelper.

updateInput() method updates the text of the input element to show current input such as inputted numbers or answers.
addInput(val) method adds value to input if input was an answer it resets it.
clearInput() method resets all input values to the default ones.
calculate() method performs calculations for my calculator.
createEquation() method takes input and adds it into an array to create an equation.
checkMultDiv() checks for multiplication or division and solves based off the operator and puts the solution at the index of the operator.
checkkAddSub() checks for addition or subtraction and solves based off the operator and puts the solution at the index of the operator.
calculationHelper() computes simple math based on operation.

Link to my calculator: https://seanzinh0.github.io/calculator-js/

To use the calculator just press any number with an operator button to calculate what you want to calculate.
The calculator performs PEMDAS without exponents or parentheses.
You can hit clear to clear the input or if you want to create another equation right away if you press a number after getting an answer
the calculator will auto clear. Also if you would like to perform more calculations after getting an answer you can do so by selecting an operator
the answer is stored and will be the first number in your next calculation.
The calculator is also keyboard compatible so you can use any key from 0-9 and also use . to input numbers.
For operations you can use the keyboard keys *, /, +, - and that will input the operator.
To submit use the equals key and to clear use backspace or esc keys. You cannot have operators inputted consecutively as well.

I hope you enjoy the way I added functionality into my calculator app.

THANK YOU!!