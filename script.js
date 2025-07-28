const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function showDisplay(){
    display.textContent = '';
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === '=') {
                calculate();
                // display.textContent = result;
            } else if (button.textContent === 'clear') {
                display.textContent = '';
            } else {
                display.textContent += button.textContent;
            }
        });
    });
}

function calculate() {
    const input = display.textContent;
    let currentNum = '';
    let result = null;
    let lastOperator = null;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (['+', '-', '*', '/'].includes(char)) {
            if (result === null) {
                result = parseFloat(currentNum);
            } else {
                result = operate(result, parseFloat(currentNum), lastOperator);
            }
            lastOperator = char;
            currentNum = '';
        } else {
            currentNum += char;
        }
    }

    if (lastOperator && currentNum !== '') {
        result = operate(result, parseFloat(currentNum), lastOperator);
    }

    display.textContent = result;
}

showDisplay();