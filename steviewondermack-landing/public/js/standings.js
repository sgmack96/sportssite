document.addEventListener('DOMContentLoaded', () => {
    const standingsDiv = document.getElementById('standings');

    fetch('https://cors-anywhere.herokuapp.com/https://www.balldontlie.io/api/v1/standings')
        .then(response => response.json())
        .then(data => {
            const standings = data.data;
            let html = '<table><tr><th>Team</th><th>Wins</th><th>Losses</th></tr>';
            standings.forEach(team => {
                html += `<tr><td>${team.team.full_name}</td><td>${team.wins}</td><td>${team.losses}</td></tr>`;
            });
            html += '</table>';
            standingsDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching standings:', error);
            standingsDiv.innerHTML = '<p>Failed to load standings.</p>';
        });
});
