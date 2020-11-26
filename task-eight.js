const quantityBoxesRef = document.querySelector('#controls input');
const boxesRef = document.querySelector('#boxes');
const createBoxesRef = document.querySelector('button[data-action="render"]');
const clearBoxesRef = document.querySelector('button[data-action="destroy"]');
const startSize = 30;
const growth = 10;
const random = () => {
    const r = Math.round(Math.random() * 256);
    const g = Math.round(Math.random() * 256);
    const b = Math.round(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};
const deleteBox = () => {
    boxesRef.innerHTML = '';
    quantityBoxesRef.value = '';
}
clearBoxesRef.addEventListener('click', deleteBox);
createBoxesRef.addEventListener('click', () => createBoxes(+quantityBoxesRef.value));
const createBox = (elem) => {
    const box = document.createElement('div');
    box.style.backgroundColor = random();
    box.style.height = `${elem * growth + startSize}px`;
    box.style.width = `${elem * growth + startSize}px`;
    return box;
};

const createBoxes = (elem) => {
    const clearArr = [...new Array(elem)];
    const boxesArr = clearArr.map((_, i) => {
        createBox(i);
        return createBox(i)
    });
    boxesRef.append(...boxesArr);
}