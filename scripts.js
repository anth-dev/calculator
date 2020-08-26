let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let decimalButton = document.querySelector('.decimal');

let a = '';
let b = '';
let operator = '';

buttons.forEach(button => button.addEventListener('mousedown', function() {
    button.classList.add("down");
    if (this.textContent == 'c') {
        // clear has been selected
        a = '';
        b = '';
        operator = '';
        decimalButton.disabled = false;
        display.textContent = '0';
    } else if (this.classList.contains("operator") == true) {
        if (operator) {
            // a second operator is being selected
            operate(a, b, operator);
            operator = this.dataset.operation;
            decimalButton.disabled = false;
        } else {
        // an operator has been selected
        operator = this.dataset.operation;
        decimalButton.disabled = false;
        }
    } else if (this.classList.contains("equals") == true) {
        // equals has been selected
        operate(a, b, operator);
        operator = '';
        a = '';
        decimalButton.disabled = false;
    } else if (a && operator) {
        // input goes to b if we already have a and an operator
        b += this.textContent;
        display.textContent = b;
        // Detect decimal button press.
        if (this.textContent == '.') {
            // Disable the decimal button.
            decimalButton.disabled = true;
            decimalButton.classList.remove('down');
        }
    } else {
        // numbers are being inputted without having an operator selected
        a += this.textContent;
        display.textContent = a;
        // Detect decimal button press.
        if (this.textContent == '.') {
            // Disable the decimal button.
            decimalButton.disabled = true;
            decimalButton.classList.remove('down');
        }
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

// These functions used to have the parameters a and b.
// They were causing scope issues and were not necessary.
function add () {
    a = +a + +b;
    trimAndDisplay(a);
    b = '';
}

function subtract () {
    a = +a - +b;
    trimAndDisplay(a);
    b = '';
}

function multiply () {
    a = +a * +b;
    trimAndDisplay(a);
    b = '';
}

function divide () {
    if (b === '0') {
        display.textContent = String.raw`(⌐■_■)`;
        alert(String.raw`(⌐■_■) Dividing by zero is not possible.`);
        a = '';
        b = '';
    } else {
    a = +a / +b;
    trimAndDisplay(a);
    b = '';
    }
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

function trimAndDisplay (inputNumber) {
    answer = inputNumber.toString();
    display.textContent = answer.substring(0, 9);
}

// code below is for jasmine testing

// module.exports = {
//     add: add,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     operate: operate,
// };