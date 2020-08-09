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
    } else if (this.classList.contains("operator") == true) {
        a = input.join('');
        console.log('a is saved as ' + a);
        // store operator in operator variable
        operator = this.dataset.operation;
        console.log('operator saved as ' + operator);
        clearDisplay();
    } else if (this.classList.contains("equals") == true) {
        b = input.join('');
        console.log('b is saved as ' + b);
        // clearDisplay();
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
    console.log('add function has been called');
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// the operate function works correctly when called from the console 
// but it isn't currently working when called by from the equals button
function operate (a, b, operation) {
    // console.log(operation)
    console.log('operator function being called with ' + operation);
    switch(operation) {
        case add:
            console.log('the operator function is trying to add');
            return add(a, b);
            break;
        case subtract:
            return subtract(a, b);
            break;
        case multiply:
            return multiply(a, b);
            break;
        case divide:
            return divide(a, b);
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