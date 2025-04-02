document.addEventListener('DOMContentLoaded', function() {
    const standingsDiv = document.getElementById('standings');

    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/standings')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the entire response to inspect its structure
        })
        .catch(error => {
            console.error('Error fetching standings:', error);
        });
});
