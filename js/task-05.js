const inputValue = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');

inputValue.addEventListener('input', onInputCange)

function onInputCange(event) {
if (event.currentTarget.value !== '') {
    spanValue.textContent = event.currentTarget.value;   
} else spanValue.textContent = 'Anonymous';
}

console.log(inputValue);
console.log(spanValue);