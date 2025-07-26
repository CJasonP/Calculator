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
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

function showDisplay(){
    display.textContent = '';
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === '=') {
                display.textContent = result;
            } else if (button.textContent === 'C') {
                display.textContent = '';
            } else {
                display.textContent += button.textContent;
            }
        });
    });
}

showDisplay();