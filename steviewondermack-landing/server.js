const express = require('express');
const path = require('path');
const authRoutes = require('./auth');

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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
