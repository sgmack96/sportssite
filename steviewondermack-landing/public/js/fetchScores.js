const axios = require('axios');

const API_URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';

async function fetchNBAScores() {
    try {
        const response = await axios.get(API_URL, {
            params: {
                date: new Date().toISOString().split('T')[0]
            }
        });

        const games = response.data.events;
        const scoresDiv = document.getElementById('scores');
        scoresDiv.innerHTML = ''; // Clear previous scores

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
        console.error('Error fetching NBA scores:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchNBAScores);
