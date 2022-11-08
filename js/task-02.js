const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const createLi = [];
for (const ingredient of ingredients) {
const newLi = document.createElement("li");
newLi.textContent = ingredient;
newLi.classList.add("item");
 createLi.push(newLi); 
}
listEl.append(...createLi);