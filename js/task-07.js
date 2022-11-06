const inputRange = document.querySelector('#font-size-control');
const spanContent = document.querySelector('#text');

inputRange.addEventListener('input', onInputChange)

function onInputChange(event) {
    let inputValue = event.currentTarget.value;
    spanContent.style.fontSize = `${inputValue}px`;
}