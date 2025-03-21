// fetchscores.js

const axios = require('axios');

const API_URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';

async function fetchNBAScores() {
    try {
        const response = await axios.get(API_URL, {
            params: {
                // Add any required parameters here
                // For example, if the API requires a date parameter
                date: new Date().toISOString().split('T')[0]
            }
        });

        const games = response.data.events;
        games.forEach(game => {
            console.log(`Game: ${game.name}`);
            console.log(`Status: ${game.status.type.description}`);
            console.log(`Score: ${game.competitions[0].competitors[0].score} - ${game.competitions[0].competitors[1].score}`);
            console.log('-------------------------');
        });
    } catch (error) {
        console.error('Error fetching NBA scores:', error);
    }
}

fetchNBAScores();
