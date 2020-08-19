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
        updateDisplay('0');
    } else if (this.classList.contains("operator") == true) {
        if (operator) {
            // a second operator is being selected
            console.log('An operator has already been selected')
            operate(a, b, operator);
        } else {
        // an operator has been selected
        console.log('We have an operator here!');
        operator = this.dataset.operation;
        }
    } else if (this.classList.contains("equals") == true) {
        // equals has been selected
        console.log('Equals!');
        operate(a, b, operator);
    } else if (a && operator) {
        // input goes to b if we already have a and an operator
        console.log('We have a and an operator');
        b += this.textContent;
        updateDisplay(b);
    } else {
        // numbers are being inputted without having an operator selected
        console.log('Number');
        a += this.textContent;
        updateDisplay(a);
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
    console.log('Attempting to add');
    a = a + b;
    updateDisplay(a);
    operator = '';
    b = '';
}

function subtract (a, b) {

}

function multiply (a, b) {

}

function divide (a, b) {

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

function updateDisplay (content) {
    console.log('Updating the display!');
    display.textContent = content;
}
// code below is for jasmine testing

// module.exports = {
//     add: add,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     operate: operate,
// };