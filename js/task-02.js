const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

const returnList = ingredients.map(ingredient => {
  const newEl = document.createElement('li');
  newEl.classList.add('item');
  newEl.textContent = ingredient;
  return newEl;
}
)

  ingredientsList.append(...returnList);