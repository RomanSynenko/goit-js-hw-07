const validationInputRef = document.querySelector('#validation-input');
const inputLength = Number(validationInputRef.getAttribute('data-length'));
const validationFunc = (elem) => {
    const inputValue = elem.target.value.length;
    inputValue === inputLength ? (validationInputRef.classList.add('valid'), validationInputRef.classList.remove('invalid')) : (validationInputRef.classList.add('invalid'), validationInputRef.classList.remove('valid'));
};

validationInputRef.addEventListener('blur', validationFunc);