const ulElements = document.querySelectorAll('ul');

ulElements.forEach(ul => {
    ul.querySelector('li:first-child').innerText = 'primer';
    ul.querySelector('li:last-child').innerText = 'últim';
});

// També es pot fer així:
// const firstList = document.querySelectorAll('li:first-child');
// const lastList = document.querySelectorAll('li:last-child');

// firstList.forEach((li) => (li.textContent = 'primer'));
// lastList.forEach((li) => (li.textContent = 'últim'));