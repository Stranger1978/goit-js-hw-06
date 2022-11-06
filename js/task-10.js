function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const firstParentBox = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputValue = document.querySelector('input');
let amount = 0

//перевірка введеного значення на валідність(+)

function onInputData(event) {
  amount = Number(inputValue.value);
  
  if (amount < 1 || amount > 100) {
    alert('Значення повинно бути цілим числом від 1 до 100!');
  } else {
    //console.log (`повертаємо валідне значення ${amount}`);
    return createBoxes(amount);
  }
}
//створення елементів (+)

btnCreate.addEventListener('click', onInputData)

function createBoxes(amount){
  let startSize = 30;
  for (let i = 0; i < amount; i +=1) {
    const createDiv = document.createElement("div");
    createDiv.style.width = `${startSize +i*10}px`;
    createDiv.style.height = `${startSize +i*10}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    firstParentBox.append(createDiv);
  }
  
}

//вилучення елементів (+)

btnDestroy.addEventListener('click', destroyBoxes)
function destroyBoxes(){
firstParentBox.textContent = '';
}