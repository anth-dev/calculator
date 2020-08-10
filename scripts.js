let input = [];
let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let a;
let b;
let operator;

buttons.forEach(button => button.addEventListener('mousedown', function() {
    button.classList.add("down");
    if (this.textContent == 'c') {
        clearDisplay();
    } else if (this.classList.contains("operator") == true) {
        a = input.join('');
        // store operator in operator variable
        operator = this.dataset.operation;
        clearDisplay();
    } else if (this.classList.contains("equals") == true) {
        b = input.join('');
        operate(a, b, operator);
    } else {
    input.push(this.textContent);
    updateDisplay(input);
    }
}));
buttons.forEach(button => button.addEventListener('mouseup', function() {
    button.classList.remove("down");
}));
buttons.forEach(button => button.addEventListener('mouseleave', function() {
    button.classList.remove("down");
}));
buttons.forEach(button => button.addEventListener('touchstart', function() {
    button.classList.add("down");
}));
buttons.forEach(button => button.addEventListener('touchend', function() {
    button.classList.remove("down");
}));

function add (a, b) {
    display.textContent = a + b;
}

function subtract (a, b) {
    display.textContent = a - b;
}

function multiply (a, b) {
    display.textContent = a * b;
}

function divide (a, b) {
    display.textContent = a / b;
}

function operate (a, b, c) {
    switch(c) {
        case 'add':
            add(+a, +b);
            break;
        case 'subtract':
            subtract(+a, +b);
            break;
        case 'multiply':
            multiply(+a, +b);
            break;
        case 'divide':
            divide(+a, +b);
            break;
    }
}

function updateDisplay (array) {
    let content = array.join('');
    display.textContent = content;
}

function clearDisplay () {
    input = [];
    display.textContent = '0';
}

// code below is for jasmine testing

// module.exports = {
//     add: add,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     operate: operate,
// };