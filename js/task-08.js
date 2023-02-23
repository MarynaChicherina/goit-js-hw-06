const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        window.alert("Будь ласка заповніть поля форми!");
      } else
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    
    event.currentTarget.reset();  
};