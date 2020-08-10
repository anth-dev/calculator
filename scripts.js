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
        console.log(operator);
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
    console.log('add function is running');
    answer = a + b;
    display.textContent = answer;
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

// when called by using the calculator gui the operate function seems to
// get stuck at the switch statement with 'operator function being called
// with add' being the last item being logged
//
// if you call the function from the console [-example operate(2, 3, add);]
// the calculator works and the answer is displayed on the screen
//
// if you set the a, b, and operator variables [-example a to 2, b to 3, and
// operator to "add"] and try to run the function 
// [-example operate(a, b, operator);] it gets stuck at the same point
// as with the calculator gui with 'operator function being called
// with add' being the last item logged... this also happens if you try
// [-example operate(2, 3, operator);] with operator being the only variable
// passed to the function
//
// below is why the parameters are (a, b, c) instead of (a, b, operation)
//
// function paramaters were previously (a, b, operation) but that was
// causing a bug where the console.log would output the contents of the
// function of the same name. For example, operate(a, b, operator), with
// the operator variable containing "add" instead of logging 'operator function
// being called with add' it would log 'operator function being called with
//
// function add (a, b) {
//     console.log('add function is running');
//     answer = a + b;
//     display.textContent = answer;
// }'
//
// or similar output

function operate (a, b, c) {
    console.log('operator function being called with ' + c);
    switch(c) {
        case add:
            console.log('add switch case selected');
            add(a, b);
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