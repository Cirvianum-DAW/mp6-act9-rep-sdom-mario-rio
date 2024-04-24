const languages = [
    {
        name: 'JavaScript',
        releaseDate: 1995,
        fileExtension: '.js',
        creator: 'Brendan Eich',
    },
    {
        name: 'Java',
        releaseDate: 1995,
        fileExtension: '.java',
        creator: 'James Gosling',
    },
    {
        name: 'PHP',
        releaseDate: 1995,
        fileExtension: '.php',
        creator: 'Rasmus Lerdorf',
    },
    {
        name: 'C++',
        releaseDate: 1985,
        fileExtension: '.cpp',
        creator: 'Bjarne Stroustrup',
    },
];

function createTable(dataArray, targetElement) {
    const table = document.createElement('table');
    const headers = ['Nom', 'Data de Llançament', 'Extensió de Fitxer', 'Creador'];

    const headerRow = headers.reduce((row, header) => {
        const th = document.createElement('th');
        th.textContent = header;
        row.appendChild(th);
        return row;
    }, document.createElement('tr'));

    const tbody = dataArray.reduce((body, obj) => {
        const tr = Object.values(obj).reduce((row, val) => {
            const td = document.createElement('td');
            td.textContent = val;
            row.appendChild(td);
            return row;
        }, document.createElement('tr'));
        body.appendChild(tr);
        return body;
    }, document.createElement('tbody'));

    table.append(headerRow, tbody);
    targetElement.appendChild(table);
}

createTable(languages, document.body);