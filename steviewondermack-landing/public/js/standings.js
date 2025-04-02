document.addEventListener('DOMContentLoaded', function() {
    const standingsLink = document.getElementById('standings-link');

    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/standings')
        .then(response => response.json())
        .then(data => {
            standingsLink.href = data.fullViewLink.href;
        })
       (error => {
            console.error('Error fetching standings:', error);
        });
});
