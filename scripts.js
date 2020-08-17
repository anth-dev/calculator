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
    } else if (this.classList.contains("operator") == true) {
        if (operator) {
            console.log('We have a second operator over here!');
            // second operator has been selected
        } else {
            // first operator has been selected
            console.log('We have an operator here!');
        }
    } else if (this.classList.contains("equals") == true) {
        // equals has been selected
        console.log('Equals!');
    } else {
        // numbers are being pushed
        console.log('Number');
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

// code below is for jasmine testing

// module.exports = {
//     add: add,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     operate: operate,
// };