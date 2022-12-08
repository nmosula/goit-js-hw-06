const categories = document.querySelector('#categories');

const items = categories.querySelectorAll('.item');


console.log("Number of categories: ", items.length);

for (const item of items) {

    const itemName = item.querySelector('h2').textContent;
   
    console.log("Category: ", itemName);

    const itemUl = item.querySelector('ul');
    const itemsLi = itemUl.querySelectorAll('li');

    console.log("Elements: ", itemsLi.length);

}


/* Інший спосіб - доопрацювання */
console.log("---------Доопрацювання------------");

console.log("Number of categories: ", categories.children.length);

for (const item of items) {
    const itemName = item.firstElementChild.textContent;
    console.log("Category: ", itemName);

    const itemUl = item.querySelector('ul');
    const itemsLi = itemUl.querySelectorAll('li');

    console.log("Elements: ", itemsLi.length);
}
