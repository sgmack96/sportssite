document.addEventListener('DOMContentLoaded', function() {
    const standingsDiv = document.getElementById('standings');

    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/standings')
        .then(response => response.json())
        .then(data => {
            const standings = data.children[0].standings.entries;
            standings.forEach(team => {
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.innerHTML = `
                    <h2>${team.team.displayName}</h2>
                    <p>Wins: ${team.stats[1].value}</p>
                    <p>Losses: ${team.stats[2].value}</p>
                `;
                standingsDiv.appendChild(teamDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching standings:', error);
        });
});
