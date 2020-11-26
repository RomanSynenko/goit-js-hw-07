const valueRef = document.querySelector('#value');
const minusRef = document.querySelector('button[data-action="decrement"]');
const plusRef = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

function increment() {
    counterValue = counterValue + 1;
    valueRef.textContent = counterValue;
};

function decrement() {
    counterValue = counterValue - 1;
    valueRef.textContent = counterValue;
};
minusRef.addEventListener('click', decrement);
plusRef.addEventListener('click', increment);