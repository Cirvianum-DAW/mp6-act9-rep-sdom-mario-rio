const fruitList = ['poma', 'plàtan', 'tomàquet'];

const ulElement = document.querySelector('ul');

fruitList.forEach(fruit => {
    const liElement = document.createElement('li');
    liElement.innerHTML = fruit;
    ulElement.appendChild(liElement);
});