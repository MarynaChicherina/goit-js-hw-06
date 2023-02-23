const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
    event.preventDefault();
    const formElems = event.currentTarget.elements;
    const email = formElems.email.value;
    const password = formElems.password.value;

    const formData = {
        email,
        password,
    }
    if (email === "" || password === "") {
        alert("Будь ласка заповніть поля форми!");
      } else if(email.value !== "" && password.value !== ""){
        console.log(formData);
    };
  
    event.currentTarget.reset();  
};