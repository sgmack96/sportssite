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
                <td>${team.stats.find(stat => stat.name === 'wins').value}</td>
                <td>${team.stats.find(stat => stat.name === 'losses').value}</td>
                <td>${team.stats.find(stat => stat.name === 'winPercent').value}</td>
                <td>${team.stats.find(stat => stat.name === 'gamesBehind').value}</td>
                <td>${team.stats.find(stat => stat.name === 'homeRecord').summary}</td>
                <td>${team.stats.find(stat => stat.name === 'awayRecord').summary}</td>
                <td>${team.stats.find(stat => stat.name === 'divisionRecord').summary}</td>
                <td>${team.stats.find(stat => stat.name === 'conferenceRecord').summary}</td>
                <td>${team.stats.find(stat => stat.name === 'pointsPerGame').value}</td>
                <td>${team.stats.find(stat => stat.name === 'opponentPointsPerGame').value}</td>
                <td>${team.stats.find(stat => stat.name === 'pointDifferential').value}</td>
                <td>${team.stats.find(stat => stat.name === 'streak').value}</td>
                <td>${team.stats.find(stat => stat.name === 'lastTen').summary}</td>
            `;
            tableBody.appendChild(newRow);
        });

        console.log('Standings appended to the page.');
    } catch (error) {
        console.error('Error fetching NBA standings:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchNBAStandings);
