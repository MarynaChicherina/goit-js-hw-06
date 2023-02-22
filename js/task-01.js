
const listElems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listElems.length}`);

for (const elem of listElems) {
  const categoryTitle = elem.querySelector("h2").textContent;
  const categoryItems = elem.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
}

