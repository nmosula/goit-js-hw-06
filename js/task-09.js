function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const color = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener("click", onClick);

function onClick() {
  const newColor = getRandomHexColor();
  document.body.style.background = newColor;
  
  color.textContent= newColor;
}