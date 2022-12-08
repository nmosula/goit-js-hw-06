const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');


for (const ingredient of ingredients) {
  const newEl = document.createElement('li');
  newEl.classList.add('item');
  newEl.textContent = ingredient;
  
  ingredientsList.append(newEl);
}
