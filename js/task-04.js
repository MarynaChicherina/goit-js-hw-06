const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const currentValue = document.querySelector('#value');

let counterValue = 0;

increment.addEventListener('click', handleIncrementBtnClick);
decrement.addEventListener('click', handleDecrementBtnClick);

function handleIncrementBtnClick(event){
    counterValue += 1;
    currentValue.textContent = counterValue;
};

function handleDecrementBtnClick(event){
    counterValue -= 1;
    currentValue.textContent = counterValue;
};

