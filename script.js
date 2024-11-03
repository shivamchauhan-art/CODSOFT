const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function backspace() {
   display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const operators = ['+', '-', '*', '/',];

    if (!isNaN(key) || key === '.') {
        appendToDisplay(key);
    } else if (operators.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});  

