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




// Buttons
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      accumulatedDisplay.textContent += button.textContent
      currentInputDisplay.textContent += button.textContent

    } else if (button.classList.contains('operator')) {
      firstNumber = Number(currentInputDisplay.textContent)
      currentInputDisplay.textContent = ''
      operator = button.textContent
      accumulatedDisplay.textContent += ` ${operator} `    

    } else if (button.classList.contains('equals')) {
      secondNumber = Number(currentInputDisplay.textContent)
      currentInputDisplay.textContent = ''

      accumulatedDisplay.textContent = operate(firstNumber, operator, secondNumber)
      
    } else if (button.classList.contains('clear')) {
      currentInputDisplay.textContent = ''
      accumulatedDisplay.textContent = ''
      firstNumber = ''
      secondNumber = ''
      operator = ''

    }



  })






})