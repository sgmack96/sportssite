// js/odds.js
const apiKey = ' b344efd179ea1c39183acde698dd14e5';
const apiUrl = `https://api.the-odds-api.com/v4/sports/basketball_nba/odds?regions=us&markets=h2h,spreads,totals&oddsFormat=american&apiKey=${apiKey}`;

async function fetchOdds() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayOdds(data);
    } catch (error) {
        console.error('Error fetching odds:', error);
    }
}

function displayOdds(odds) {
    const oddsContainer = document.getElementById('odds');
    oddsContainer.innerHTML = '';

    odds.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.className = 'game';

        const teams = `${game.home_team} vs ${game.away_team}`;
        const commenceTime = new Date(game.commence_time).toLocaleString();

        gameElement.innerHTML = `
            <h2>${teams}</h2>
            <p>Commence Time: ${commenceTime}</p>
            <p>Moneyline: ${game.bookmakers[0].markets[0].outcomes.map(outcome => `${outcome.name}: ${outcome.price}`).join(', ')}</p>
            <p>Spreads: ${game.bookmakers[0].markets[1].outcomes.map(outcome => `${outcome.name}: ${outcome.point} (${outcome.price})`).join(', ')}</p>
            <p>Totals: ${game.bookmakers[0].markets[2].outcomes.map(outcome => `${outcome.name}: ${outcome.point} (${outcome.price})`).join(', ')}</p>
        `;

        oddsContainer.appendChild(gameElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchOdds);
