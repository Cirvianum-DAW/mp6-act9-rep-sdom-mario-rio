const listApp = document.querySelector('#list-app');

const inputElement = document.createElement('input');
inputElement.type = 'text';
listApp.appendChild(inputElement);

const buttonElement = document.createElement('button');
buttonElement.innerText = 'Afegeix nou item';
listApp.appendChild(buttonElement);

const ulElement = document.createElement('ul');
listApp.appendChild(ulElement);

buttonElement.addEventListener('click', () => {
    const liElement = document.createElement('li');
    liElement.innerText = inputElement.value;

    liElement.addEventListener('click', () => {
        const newText = prompt('Afegeix un nou text:');
        liElement.innerText = newText;
    });

    ulElement.appendChild(liElement);

    inputElement.value = '';
});