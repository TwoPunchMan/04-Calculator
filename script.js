/*  script for calculator functions
	The odin project - calculator
*/

// 1. basic functions
const add = function(a, b) {
	return a + b;
}

const subtract = function(a, b) {
	return a - b;
}

const multiply = function(a, b) {
	return a * b;
}

const divide = function(a, b) {
	return a / b;
}

// 2. takes operator and calls it for a,b
const operate = function(operator, a, b) {

	let result;
	switch (operator) {
		case "+":
			result = add(a, b);
			break;
		case "-":
			result = subtract(a, b);
			break;
		case "*":
			result = multiply(a, b);
			break;
		case "/":
			result = divide(a, b);
			break;
		default:
			break;
	}

	return result;
}