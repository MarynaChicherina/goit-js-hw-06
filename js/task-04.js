const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const currentValue = document.querySelector('#value');

let counterValue = 0;

increment.addEventListener('click', HandleIncrementBtnClick);
decrement.addEventListener('click', HandleDecrementBtnClick);

function HandleIncrementBtnClick(event){
    counterValue += 1;
    currentValue.textContent = counterValue;
};

function HandleDecrementBtnClick(event){
    counterValue -= 1;
    currentValue.textContent = counterValue;
};

