const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');

const li = ingredients.map(value => {

  const listItem = document.createElement('li');
  listItem.textContent = value;
  return listItem;
  
  });
  
  list.append(...li);

//2й варіант з циклом 
//const elements = [];

//for (let i=0; i < ingredients.length; i++) {

   //const liItem = document.createElement('li');
   //liItem.textContent = ingredients[i];

   //elements.push(liItem);
//};
//list.append(...elements);


//3й варіант додавання кожного з елементов послідовно
//ingredients.forEach(value => {
  //const listItem = document.createElement('li');
  //listItem.textContent = value;
  //list.append(listItem);
//});

