function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let result = document.getElementById('result').value;
    try {
        result = eval(result);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}
