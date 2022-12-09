const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onBlur);

function onBlur(evt) {
    const valueInput = evt.currentTarget.value;

    if (valueInput.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.remove("valid")
        inputEl.classList.add('invalid');
    } 
}