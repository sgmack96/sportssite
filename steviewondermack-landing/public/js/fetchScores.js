// fetchScores.js
async function getNBAScores() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    try {
        const response = await fetch(`https://v1.basketball.api-sports.io/games?date=${formattedDate}`, {
            headers: {
                'x-apisports-key': '3d5f43dceb19bd4fc42a5b39d60abfe1'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Debugging line
        return data;
    } catch (error) {
        console.error('Error fetching NBA scores:', error); // Debugging line
    }
}

async function displayScores() {
    const scores = await getNBAScores();
    if (scores && scores.response) {
        const scoresTableBody = document.querySelector('#scores tbody');
        scores.response.forEach(game => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${game.teams.home.name}</td>
                <td>${game.scores.home.points}</td>
                <td>${game.teams.away.name}</td>
                <td>${game.scores.away.points}</td>
            `;
            scoresTableBody.appendChild(row);
        });
    } else {
        console.error('No scores data available'); // Debugging line
    }
}

displayScores();
