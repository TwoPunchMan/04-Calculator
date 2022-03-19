/*  script for calculator functions
	The odin project - calculator
*/

// variables
let first_num;
let second_num;
let operator;
let is_second_num_exist = false;
let is_operator_pressed = false;
let result;

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
		handle_number_input(btn.value);
	})
);

function handle_number_input(button_val) {
	if (is_operator_pressed) {
		output.textContent = '';
		is_operator_pressed = false;
		is_second_num_exist = true;
	}

	if (output.textContent == '0') {
		output.textContent = button_val;
	} else {
		output.textContent += button_val;
	}

	result = output.textContent;
	console.log(result);
}
function handle_window(button_val, operator) {
	if (!operator) {
		handle_number_input(button_val);
	} else {

	}
}

operator_btns.forEach(btn => btn.addEventListener('click', function() {
	if (!first_num) {
		first_num = parseInt(output.textContent);
	} 
	if (is_second_num_exist) {
		second_num = parseInt(output.textContent);
		first_num = result = operate(operator, first_num, second_num);
		output.textContent = result;
	}
	result = output.textContent;
	operator = btn.value;
	is_operator_pressed = true;
	console.log(`${first_num} ${operator}`)

}));

equal_btn.addEventListener('click', function() {
	if (is_second_num_exist) {
		second_num = parseInt(output.textContent);
		first_num = result = operate(operator, first_num, second_num);
		output.textContent = result;
		second_num = null;
		operator = null;
		is_second_num_exist = false;
	} 
});

clear_btn.addEventListener('click', function() {
	output.textContent = 0;
	first_num = null;
	second_num = null;
	operator = null;
	result = null;
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