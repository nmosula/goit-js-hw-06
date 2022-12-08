const inputEl = document.querySelector('#font-size-control');
const outputEl = document.querySelector('#text');

inputEl.addEventListener('input', onInput);

function onInput(evt) {
    const elem = evt.currentTarget.value;
    outputEl.style.fontSize = elem+'px';
}