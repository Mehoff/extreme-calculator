let resultValue = document.getElementById('resultValue');
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');

function showValidationErrorWithMessage(errorBlockName, msg = 'Error') {
    let error = document.getElementById(errorBlockName);
    error.style.display = 'block';
    error.innerText = msg;
}

function hideValidationError(errorBlockName) {
    let error = document.getElementById(errorBlockName);
    error.style.display = 'none';
}

function handleCalculate() {
    showValidationErrorWithMessage('firstNumberError', 'What is it');
    showValidationErrorWithMessage('secondNumberError', 'What is it');

    resultValue.innerText = sum(firstNumber, secondNumber);
}