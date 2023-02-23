
const listElems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listElems.length}`);

for (const elem of listElems) {
  const categoryTitle = elem.firstElementChild.textContent;
  const categoryItems = elem.lastElementChild.children.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
};


