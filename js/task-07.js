const input = document.querySelector('input#font-size-control');
const nameLabel = document.querySelector('span#text');


input.addEventListener('input', onInputChange);

function onInputChange (event) {
    
    nameLabel.style.fontSize =  `${event.currentTarget.value}px`;
   
};
