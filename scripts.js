let input = [];
let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let a;
let b;
let operator;
let answer;

buttons.forEach(button => button.addEventListener('mousedown', function() {
    button.classList.add("down");
    if (this.textContent == 'c') {
        clearDisplay();
        operator = '';
    } else if (this.classList.contains("operator") == true) {
        if (operator) {
            console.log('We have a second operator over here!');
            // operate
            b = input.join('');
            operate(a, b, operator);
            // display the answer and store in variable 'a'
            a = answer;
        } else {
        a = input.join('');
        // store operator in operator variable
        operator = this.dataset.operation;
        clearDisplay();
        }
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
    answer = a + b;
}

function subtract (a, b) {
    display.textContent = a - b;
    answer = a - b;
}

function multiply (a, b) {
    display.textContent = a * b;
    answer = a * b;
}

function divide (a, b) {
    display.textContent = a / b;
    answer = a / b;
}

// iss1 - If you enter 4 + 5 = 9 should be displayed. If you
// enter 1 + 2 then another operator the answer so far should be
// displayed and await further input.

// Thoughts on how to implement
//  - when 1 + 2 is entered and another operator is entered
//  (maybe run a check the value of the operator variable)
//  run the operate function and store the answer in 'a'

function operate (a, b, c) {
    switch(c) {
        case 'add':
            add(+a, +b);
            operator = '';
            break;
        case 'subtract':
            subtract(+a, +b);
            operator = '';
            break;
        case 'multiply':
            multiply(+a, +b);
            operator = '';
            break;
        case 'divide':
            divide(+a, +b);
            operator = '';
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