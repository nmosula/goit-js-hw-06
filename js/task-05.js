const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');


inputName.addEventListener('input', onInput);

function onInput(evt) {
    const valueInput = evt.currentTarget.value;
    if (valueInput==="") outputName.textContent = "Anonymous";
    else outputName.textContent = valueInput;
}