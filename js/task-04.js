let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const resultValue = document.querySelector('#value');

btnDecrement.addEventListener('click', decrementValue)

function decrementValue() {
    counterValue -= 1;
    resultValue.textContent = counterValue;
};

btnIncrement.addEventListener('click', incrementValue)

function incrementValue() {
    counterValue += 1;
    resultValue.textContent = counterValue;
};

