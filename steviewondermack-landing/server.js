const express = require('express');
const path = require('path');
const authRoutes = require('./auth');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Serve static files from Steviewondermack-landing/public
app.use(express.static(path.join(__dirname, 'public')));

// Use authentication routes
app.use('/auth', authRoutes);

// Serve the main landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Callback route to handle the redirection after authentication
app.get('/callback', async (req, res) => {
    const code = req.query.code;
    const redirectUri = 'https://yourdomain.com/callback'; // Update with your actual callback URL
    const tokenEndpoint = 'https://soccer-stats.stephenmack96.workers.dev/token';

    try {
        const response = await axios.post(tokenEndpoint, {
            code,
            redirect_uri: redirectUri,
            client_id: 'your-client-id', // Replace with your actual client ID
            client_secret: 'your-client-secret', // Replace with your actual client secret
            grant_type: 'authorization_code'
        });

        const tokens = response.data;
        // Save tokens in session or cookies
        // For example, using express-session:
        // req.session.tokens = tokens;

        res.redirect('/dashboard'); // Redirect to a protected page
    } catch (error) {
        res.status(500).send('Authentication failed');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
