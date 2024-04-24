const ulElements = document.querySelectorAll('ul');

ulElements.forEach(ul => {
    ul.querySelector('li:first-child').innerText = 'primer';
    ul.querySelector('li:last-child').innerText = 'últim';
});