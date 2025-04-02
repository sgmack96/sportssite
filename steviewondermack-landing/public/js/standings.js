document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.espn.com/nba/standings')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const standingsTable = doc.querySelector('#fittPageContainer .Table__TBODY');
            const rows = standingsTable.querySelectorAll('tr');

            const tableBody = document.querySelector('#standingsTable tbody');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                const newRow = document.createElement('tr');
                cells.forEach(cell => {
                    const newCell = document.createElement('td');
                    newCell.textContent = cell.textContent;
                    newRow.appendChild(newCell);
                });
                tableBody.appendChild(newRow);
            });
        })
        .catch(error => console.error('Error fetching standings:', error));
});
