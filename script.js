// Variables

let firstNumber = 0
let secondNumber = 0
let operator = ''

// Operations

function add(a, b) {
	return a + b
}

function subtract(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b
}

function divide(a, b) {
	return a / b
}

function operate(firstNumber, operator, secondNumber) {
  let result
	switch (operator) {
		case '+':
      result = add(firstNumber, secondNumber)

			break

		case '-':
      result = subtract(firstNumber, secondNumber)

			break

		case '*':
      result = multiply(firstNumber, secondNumber)

			break
		case '/':
      result = divide(firstNumber, secondNumber)

			break
	}
  return result
}
