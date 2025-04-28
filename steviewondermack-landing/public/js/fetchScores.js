const axios = require('axios');

const API_URLS = {
    nba: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
    mlb: 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard',
    'la-liga': 'https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard',
    epl: 'https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard'
};

async function fetchScores(league) {
    try {
        const response = await axios.get(API_URLS[league], {
            params: {
                date: new Date().toISOString().split('T')[0]
            }
        });

        const games = response.data.events;
        const scoresDiv = document.getElementById('scores');
        scoresDiv.innerHTML = '';

        games.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.innerHTML = `
                <h2>${game.name}</h2>
                <p>Status: ${game.status.type.description}</p>
                <p>Score: ${game.competitions[0].competitors[0].score} - ${game.competitions[0].competitors[1].score}</p>
                <hr>
            `;
            scoresDiv.appendChild(gameDiv);
        });
    } catch (error) {
        console.error(`Error fetching ${league} scores:`, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const leagueSelect = document.getElementById('league-select');
    leagueSelect.addEventListener('change', () => {
        const selectedLeague = leagueSelect.value;
        fetchScores(selectedLeague);
    });

    fetchScores('nba');
});
