/*  script for calculator functions
	The odin project - calculator
*/

// variables
let first_num;
let second_num;
let operator;
let is_decimal_exist = false;
let is_first_num_exist = false;
let is_second_num_exist = false;
let is_operator_pressed = false;
let result;

// get selectors
const output = document.querySelector('.output-window');
const digit_btns = document.querySelectorAll('.digit');
const decimal_btn = document.querySelector('.decimal');
const back_btn = document.querySelector('.back');
const operator_btns = document.querySelectorAll('.operator');
const equal_btn = document.querySelector('.equals');
const clear_btn = document.querySelector('.clear');

// keyboard support
document.addEventListener('keydown', (event) => {

	const OPERATORS = '+-*/';
	const DIGITS = '0123456789';

	if (DIGITS.includes(event.key)) {
		press_digit_key(event.key);
	}
	
	if (event.key == 'Backspace') {
		press_backspace_key();
	}

	if (OPERATORS.includes(event.key)) {
		press_operator_key(event.key);
	}

	if (event.key == '.') {
		press_decimal_key();
	}

	if (event.key == 'Enter') {
		press_enter_key();
	}
});

// functions can be used with actual keyboard or hitting the html buttons
const press_digit_key = function(val) {
	// display handling when input number after pressing '=' with no operator
	if (!is_first_num_exist) {
		output.value = '';
		is_first_num_exist = true;
	}
	
	// If there is already a first num, handle display to reflect second num input
	if (is_operator_pressed) {
		output.value = '';
		is_decimal_exist = false;
		is_operator_pressed = false;
		is_second_num_exist = true;
	}

	// number input handling
	if (output.value == '0') {
		output.value = val;
	} else {
		output.value += val;
	}

	result = output.value;
	console.log("digit = " + result);
}

// add decimal if not exist to number
const press_decimal_key = function() {
	
	if (!is_decimal_exist) {
		if (!is_first_num_exist) {
			output.value = '0.';
			is_first_num_exist = true;
		} else if (is_operator_pressed && !is_second_num_exist) {
			output.value = '0.';
			is_operator_pressed = false;
			is_second_num_exist = true;
		} else {
			output.value += '.';
		}
		
		is_decimal_exist = true;
	}
	console.log(first_num)
	console.log(is_first_num_exist)
	console.log(is_operator_pressed)
	console.log(second_num)
}

// undo last key input
const press_backspace_key = function() {
	if (output.value) {
		// delete last key input and update screen
		let parser = output.value.charAt(output.value.length - 1);
		output.value = output.value.slice(0, output.value.length - 1);
		
		// if decimal deleted
		if (parser == '.') is_decimal_exist = false;
	}
	
	if (output.value == '') {
		output.value = '0';
	}
}

// operator + - * /
const press_operator_key = function(value) {
	// if no first num store the value as soon as operator pressed
	if (!first_num) {
		first_num = parseFloat(output.value);
		is_first_num_exist = true;
		is_decimal_exist = false;
	} 

	// if there is a second num and this function for chaining operators
	if (is_second_num_exist) {
		second_num = parseFloat(output.value);
		first_num = result = operate(operator, first_num, second_num);
		output.value = result;
	}

	operator = value;
	is_operator_pressed = true;
	console.log(`${first_num} ${operator}`)
}

// evaulate expression
const press_enter_key = function() {
	if (is_second_num_exist) {
		// only chcuk norris can divide by 0
		second_num = parseFloat(output.value);
		if (operator == '/' && second_num == '0') {
			result = "Muda Muda Muda!";
		} else {
			result = operate(operator, first_num, second_num);
		}

		if (result != 'Muda Muda Muda!' && result.toString().length > 8) {
			output.value = result.toPrecision(8);
		} else {
			output.value = result;
		}
		clear_all();
		if (output.value.includes('.')) is_decimal_exist = true;
	}
}

// attaching event listeners to buttons

back_btn.addEventListener('click', function() {
	press_backspace_key();
});

// 1-9 digit press on html
digit_btns.forEach(btn => 
	btn.addEventListener('click', function() {
		press_digit_key(btn.value);
	}
));

decimal_btn.addEventListener('click', function() {
	press_decimal_key();
});

operator_btns.forEach(btn => btn.addEventListener('click', function() {
	press_operator_key(btn.value);
}));

// evaluate number and operators
equal_btn.addEventListener('click', function() {
	press_enter_key();
});

// clear variables cache totally
clear_btn.addEventListener('click', function() {
	output.value = 0;
	clear_all();
});

const clear_all = function() {
	first_num = null;
	second_num = null;
	operator = null;
	is_first_num_exist = false;
	is_second_num_exist = false;
	is_operator_pressed = false;
	is_decimal_exist = false;
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