const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onBlur);

function onBlur(evt) {
    const valueInput = evt.currentTarget.value;

    console.log(valueInput.length);
    console.log(inputEl.dataset.length);

    if (valueInput.length > inputEl.dataset.length) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.remove("valid")
        inputEl.classList.add('invalid');
    } 
}