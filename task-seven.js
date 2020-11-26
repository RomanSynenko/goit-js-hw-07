const textRef = document.querySelector('#text');
const fontControlRef = document.querySelector('#font-size-control');
const controlFunc = () => textRef.style.fontSize = fontControlRef.value + 'px';
fontControlRef.addEventListener('input', controlFunc);