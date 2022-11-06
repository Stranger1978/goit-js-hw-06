function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const bodyColor = document.querySelector('body');

btnChangeColor.addEventListener('click', onButtonChangeColor)

function onButtonChangeColor(event){
  const defaultColor = getRandomHexColor();
  colorValue.textContent = defaultColor;
  bodyColor.style.backgroundColor = defaultColor;
}