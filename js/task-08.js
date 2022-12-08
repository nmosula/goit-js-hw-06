const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
    evt.preventDefault();

    const frmElements = evt.currentTarget.elements;

    const email = frmElements.email.value;
    const password = frmElements.password.value;

    if (email==="" || password==="") alert("Будь ласка, введіть всі поля форми");

    const formData = new FormData(evt.currentTarget);
    formData.forEach ((value, name) => {
        console.log ('name=',name);
        console.log ('value=',value);
    })

    form.reset();
}