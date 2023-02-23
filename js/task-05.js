
   const input = document.querySelector('input#name-input');
   const nameLabel = document.querySelector('span#name-output');


input.addEventListener('input', onInputChange);


function onInputChange(event){
    if(event.currentTarget.value !== ""){
        nameLabel.textContent = event.currentTarget.value.trim();    
        
    } else
    nameLabel.textContent = "Anonymous";
};
