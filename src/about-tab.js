export function aboutTab () {
    const mainDiv = document.querySelector('.main');
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = "HOURS";
    pageTitle.classList.add('title');

    var table, row, cell;
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    table = document.createElement('table');
    row = document.createElement('tr');
    cell = document.createElement('th');

    cell.innerText = "Day"
    row.appendChild(cell);

    cell = document.createElement('th');
    cell.innerText = "Hours"
    row.appendChild(cell);

    table.appendChild(row);

    mainDiv.appendChild(pageTitle);
    mainDiv.appendChild(table);


    
    
    daysOfWeek.forEach(day => {
        row = document.createElement('tr');
        cell = document.createElement('td');
        cell.innerText = day;

        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerText = "7:00AM - 9:00PM";
        row.appendChild(cell);
        table.appendChild(row);

    })
    

}