// fetchScores.js
async function getNBAScores() {
    const response = await fetch('https://api-basketball.p.rapidapi.com/games', {
        headers: {
            'X-RapidAPI-Key': '3d5f43dceb19bd4fc42a5b39d60abfe1',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
    });
    const data = await response.json();
    return data;
}

async function displayScores() {
    const scores = await getNBAScores();
    const scoresDiv = document.getElementById('scores');
    scores.response.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.innerHTML = `<p>${game.teams.home.name} ${game.scores.home.points} - ${game.teams.away.name} ${game.scores.away.points}</p>`;
        scoresDiv.appendChild(gameDiv);
    });
}

displayScores();
