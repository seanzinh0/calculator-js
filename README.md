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

I hope you enjoy the way I added functionality into my calculator app.

THANK YOU!!