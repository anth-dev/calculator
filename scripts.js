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

// module.exports = {
//     add: add,
//     subtract: subtract,
//     multiply: multiply
// };