const imgLogo = 'Mario-Logo.svg';
const divElement = document.querySelector('div');
const imgElement = document.createElement('img');

imgElement.src = imgLogo;
divElement.appendChild(imgElement);