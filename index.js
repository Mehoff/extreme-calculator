let resultValue = document.getElementById('resultValue');
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');

function showValidationErrorWithMessage(errorBlockName, errorInputName, msg = 'Error') {
    let errorBlock = document.getElementById(errorBlockName);
    errorBlock.style.display = 'block';
    errorBlock.innerText = msg;

    let errorInput = document.getElementById(errorInputName);
    let classList = errorInput.classList;
    classList.add('is-invalid');
    errorInput.classList = classList;
}

function hideValidationError(errorBlockName, errorInputName) {
    let error = document.getElementById(errorBlockName);
    error.style.display = 'none';

    let errorInput = document.getElementById(errorInputName);
    let classList = errorInput.classList;
    classList.remove('is-invalid');
    errorInput.classList = classList;
}

function handleCalculate() {
    showValidationErrorWithMessage('firstNumberError', 'firstNumber', 'What is it');
    showValidationErrorWithMessage('secondNumberError', 'secondNumber', 'What is it');

    // hideValidationError('firstNumberError', 'firstNumber');
    // hideValidationError('secondNumberError', 'secondNumber');

    resultValue.innerText = firstNumber + secondNumber;
}