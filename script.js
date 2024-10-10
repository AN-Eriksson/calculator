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

// Display
const accumulatedDisplay = document.querySelector('#accumulatedDisplay')
const currentInputDisplay = document.querySelector('#currentInputDisplay')

// Buttons and logic
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.classList.contains('number')) {
			currentInputDisplay.textContent += button.textContent
			accumulatedDisplay.textContent += button.textContent
		} else if (button.classList.contains('operator') && !operator) {
			if (!firstNumber) {
				firstNumber = Number(currentInputDisplay.textContent)
			} else {
				secondNumber = Number(currentInputDisplay.textContent)
			}
			operator = button.textContent

			currentInputDisplay.textContent = ''
			accumulatedDisplay.textContent += ` ${operator} `
		} else if (button.classList.contains('operator') && operator) {
			secondNumber = Number(currentInputDisplay.textContent)
			accumulatedDisplay.textContent = operate(
				firstNumber,
				operator,
				secondNumber
			)
			firstNumber = operate(firstNumber, operator, secondNumber)
			currentInputDisplay.textContent = ''
			operator = button.textContent
			accumulatedDisplay.textContent += ` ${operator} `
			operator = button.textContent
			currentInputDisplay.textContent = ''
		} else if (button.classList.contains('equals')) {
			secondNumber = Number(currentInputDisplay.textContent)
			currentInputDisplay.textContent = ''

			if (firstNumber && operator === '/' && secondNumber === 0) {
				accumulatedDisplay.textContent = 'NEJ'
			} else {
				// Round answer if not an integer
				const result = operate(firstNumber, operator, secondNumber)
				accumulatedDisplay.textContent = Number.isInteger(result)
					? result
					: result.toFixed(10)

				firstNumber = operate(firstNumber, operator, secondNumber)
				secondNumber = ''
				operator = ''
			}
		} else if (button.classList.contains('clear')) {
			currentInputDisplay.textContent = ''
			accumulatedDisplay.textContent = ''
			firstNumber = ''
			secondNumber = ''
			operator = ''
		}
	})
})
