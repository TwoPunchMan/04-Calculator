/*  script for calculator functions
	The odin project - calculator
*/

// variables
let first_num;
let second_num;
let operator;

// get selectors
const output = document.querySelector('.output-window');
const digit_btns = document.querySelectorAll('.digit');
const operator_btns = document.querySelectorAll('.operator');
const equal_btn = document.querySelector('.equals');
const clear_btn = document.querySelector('.clear');

// set output window to 0
output.textContent = 0;

digit_btns.forEach(btn => 
	btn.addEventListener('click', function() {
		if (!first_num) {
			first_num = parseInt(btn.value);
		} else {
			second_num = parseInt(btn.value);
		}
		output.textContent = btn.value;
	})
);

operator_btns.forEach(btn => btn.addEventListener('click', function() {
	if (!operator) {
		operator = btn.value;
	}
}));

equal_btn.addEventListener('click', function() {
	output.textContent = operate(operator, first_num, second_num);
	operator = null;
});

clear_btn.addEventListener('click', function() {
	output.textContent = 0;
	first_num = null;
	second_num = null;
	operator = null;
});

function getNum(btn) {
	return btn.value;
}

//  basic functions
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

//  takes operator and calls it for a,b
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