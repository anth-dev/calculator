let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', console.log('clicked')));

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