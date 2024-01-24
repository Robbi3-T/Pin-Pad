let pinInput = '';

function appendDigit(digit) {
    if (pinInput.length < 4) {
        pinInput += digit;
        updatePinDisplay();
    }
}

function clearPin() {
    pinInput = '';
    updatePinDisplay();
}

function updatePinDisplay() {
    document.getElementById('pin-display').value = pinInput;
}

function checkPin() {
    const correctPin = '1234';
    if (pinInput === correctPin) {
        alert('Correct PIN!');
    } else {
        alert('Incorrect PIN. Try again.');
        clearPin();
    }
}
