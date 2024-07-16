document.addEventListener("DOMContentLoaded", function() {
    let display = document.getElementById('display');
    let currentInput = '';

    function appendNumber(number) {
        if (number === '.' && currentInput.includes('.')) return;
        currentInput += number.toString();
        updateDisplay();
    }

    function appendOperator(operator) {
        if (currentInput === '' && operator !== '-') return; 
        if (/[+\-*/]$/.test(currentInput)) return; 
        currentInput += operator;
        updateDisplay();
    }

    function clearDisplay() {
        currentInput = '';
        updateDisplay();
    }

    function deleteLast() {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }

    function calculate() {
        try {
            currentInput = eval(currentInput).toString();
            updateDisplay();
        } catch (e) {
            alert('Invalid calculation');
            clearDisplay();
        }
    }

    function updateDisplay() {
        display.innerText = currentInput || '0';
    }

    window.appendNumber = appendNumber;
    window.appendOperator = appendOperator;
    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.calculate = calculate;
});