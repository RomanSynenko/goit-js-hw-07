const nameOutputRef = document.querySelector('#name-output');
const nameInputRef = document.querySelector('#name-input');
const nameDefault = 'незнакомец';

const addInput = (input) => {
    const inputValue = input.target.value;
    nameOutputRef.textContent = inputValue ? inputValue : nameDefault;
};
nameInputRef.addEventListener('input', addInput);