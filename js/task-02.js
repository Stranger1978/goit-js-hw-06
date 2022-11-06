const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
const createLi = document.createElement("li");
createLi.textContent = ingredient;
createLi.classList.add("item");
listEl.append(createLi);  
}