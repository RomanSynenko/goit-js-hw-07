const categoryRef = document.querySelector('#categories');
const categotyRefElementLength = categoryRef.querySelectorAll('ul').length;
console.log(`В списке ${categotyRefElementLength} категории.`);
const titleRef = document.querySelectorAll('.item h2');
Array.from(titleRef).map(elem => {
    console.log(`Категория: ${elem.textContent}`);
    console.log(`Количество: ${elem.parentNode.lastElementChild.children.length}`);
});