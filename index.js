let resultValue = document.getElementById('resultValue');
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');

function showValidationError(errorInputName) {
    let errorInput = document.getElementById(errorInputName);
    let classList = errorInput.classList;
    classList.add('is-invalid');
    errorInput.classList = classList;
}

function hideValidationError(errorInputName) {
    let errorInput = document.getElementById(errorInputName);
    let classList = errorInput.classList;
    classList.remove('is-invalid');
    errorInput.classList = classList;
}

function showValidationErrorMessage(errorBlockName, msg = '') {
    let errorBlock = document.getElementById(errorBlockName);
    errorBlock.style.display = 'block';
    errorBlock.innerText = msg;
}

function hideValidationErrorMessage(errorBlockName) {
    let error = document.getElementById(errorBlockName);
    error.style.display = 'none';
}

function handleCalculate() {
    if (!firstNumber.value.length || !secondNumber.value.length) {
        hideValidationError('firstNumber');
        hideValidationError('secondNumber');
        hideValidationErrorMessage('errorMessage');

        return;
    }

    let result = sum(firstNumber.value, secondNumber.value);

    if (result.error) {
        showValidationError('firstNumber');
        showValidationError('secondNumber');
        showValidationErrorMessage('errorMessage', result.error);

        resultValue.innerText = '';
    } else {
        hideValidationError('firstNumber');
        hideValidationError('secondNumber');
        hideValidationErrorMessage('errorMessage');

        resultValue.innerText = result.answer;
    }
}