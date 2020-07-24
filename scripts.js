let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mousedown', function() {
    button.classList.add("down");
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
    return a + b;
}

function subtract (a ,b) {
    return a - b;
}

function multiply (a ,b) {
    return a * b;
}

function divide (a ,b) {
    return a / b;
}

function operate (a, b, operation) {
    switch(operation) {
        case add:
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

// code below is for jasmine testing

// module.exports = {
//     add: add,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     operate: operate,
// };