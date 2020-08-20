let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

let a = '';
let b = '';
let operator = '';

buttons.forEach(button => button.addEventListener('mousedown', function() {
    button.classList.add("down");
    if (this.textContent == 'c') {
        // clear has been selected
        console.log('Clear!');
        a = '';
        b = '';
        operator = '';
        display.textContent = '0';
    } else if (this.classList.contains("operator") == true) {
        if (operator) {
            // a second operator is being selected
            console.log('An operator has already been selected')
            operate(a, b, operator);
            operator = this.dataset.operation;
        } else {
        // an operator has been selected
        console.log('We have an operator here!');
        operator = this.dataset.operation;
        }
    } else if (this.classList.contains("equals") == true) {
        // equals has been selected
        console.log('Equals!');
        operate(a, b, operator);
        operator = '';
    } else if (a && operator) {
        // input goes to b if we already have a and an operator
        console.log('We have a and an operator');
        b += this.textContent;
        display.textContent = b;
    } else {
        // numbers are being inputted without having an operator selected
        console.log('Number');
        a += this.textContent;
        display.textContent = a;
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
// Chaining operations isn't working if you change operators
function add () {
    console.log('Attempting to add');
    a = +a + +b;
    display.textContent = a;
    b = '';
}

function subtract () {
    console.log('Attempting to subtract');
    a = +a - +b;
    display.textContent = a;
    b = '';
}

function multiply () {
    console.log('Attempting to multiply');
    a = +a * +b;
    display.textContent = a;
    b = '';
}

function divide () {
    console.log('Attempting to divide');
    a = +a / +b;
    display.textContent = a;
    b = '';
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

// code below is for jasmine testing

// module.exports = {
//     add: add,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     operate: operate,
// };