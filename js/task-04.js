const counter = document.querySelectorAll('#counter button');
const value = document.querySelector('#value');

let counterValue = 0;


const decrementBtn = counter[0];
const incrementBtn = counter[1];

/*
    Як звернутись до data-action на кнопці використовуючи змінну counter?
    Хочу зменшити скрипт
*/


decrementBtn.addEventListener('click', onChangeValue);
incrementBtn.addEventListener('click', onChangeValue);

function onChangeValue(evt) {
    counterValue+= Number(evt.currentTarget.textContent);
    value.textContent = counterValue;
};