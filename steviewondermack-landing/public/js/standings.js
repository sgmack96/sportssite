const API_URL = 'https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/standings?season=2024';

async function fetchNBAStandings() {
    try {
        console.log('Fetching NBA standings...');
        const response = await fetch(API_URL);
        const data = await response.json();
        const standings = data.children[0].standings.entries;
        const tableBody = document.querySelector('#standingsTable tbody');
        tableBody.innerHTML = ''; // Clear previous standings

        standings.forEach((team, index) => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${index + 1}</td>
                <td>${team.team.displayName}</td>
                <td>${team.stats[0].value}</td>
                <td>${team.stats[1].value}</td>
                <td>${team.stats[2].value}</td>
                <td>${team.stats[3].value}</td>
                <td>${team.stats[4].value}</td>
                <td>${team.stats[5].value}</td>
                <td>${team.stats[6].value}</td>
                <td>${team.stats[7].value}</td>
                <td>${team.stats[8].value}</td>
                <td>${team.stats[9].value}</td>
                <td>${team.stats[10].value}</td>
                <td>${team.stats[11].value}</td>
                <td>${team.stats[12].value}</td>
            `;
            tableBody.appendChild(newRow);
        });

        console.log('Standings appended to the page.');
    } catch (error) {
        console.error('Error fetching NBA standings:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchNBAStandings);
