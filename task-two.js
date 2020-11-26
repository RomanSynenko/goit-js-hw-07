const ingredientsRef = document.querySelector('#ingredients');
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ingredientsItem = ingredients.map(elem => {
    const item = document.createElement('li');
    item.textContent = elem;
    return item
});
ingredientsRef.append(...ingredientsItem);