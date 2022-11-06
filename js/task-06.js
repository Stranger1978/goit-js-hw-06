const inputValue = document.querySelector('#validation-input');
const validLength = Number(inputValue.dataset.length);

inputValue.addEventListener('blur', onInputBlor)

function onInputBlor (event) {
    let inputValueLength = event.currentTarget.value.split("").length;
   // console.log(validLength, inputValueLength);

if (inputValueLength === validLength) {
    inputValue.classList.remove('invalid');
    inputValue.classList.add('valid');
} else {
    inputValue.classList.remove('valid');
    inputValue.classList.add('invalid');
}
}