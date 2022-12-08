const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
    evt.preventDefault();

    const frmElements = evt.currentTarget.elements;

    const email = frmElements.email.value;
    const password = frmElements.password.value;

    if (email==="" || password==="") {
        alert("Будь ласка, введіть всі поля форми");
    }

    else {
        const returnElements = {"email": email, "password": password };
        console.log(returnElements);

        form.reset();
    }
}