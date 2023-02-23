const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event){
    if(event.currentTarget.value.length !== Number(input.dataset.length)){
    input.classList.add('invalid');
    } else 
    input.classList.add('valid');
};


