function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


const btn = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

btn.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor (){
  const color = getRandomHexColor();
  
  span.textContent = color;
  document.body.style.background =  span.textContent;
}

