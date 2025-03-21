const express = require('express');
const path = require('path');
const authRoutes = require('./auth');

const app = express();

// Serve static files from Steviewondermack-landing/public
app.use('/landing', express.static(path.join(__dirname, '../Steviewondermack-landing/public')));

// Serve static files from Steviewondermack-auth/public
app.use('/auth', express.static(path.join(__dirname, 'public')));

// Use authentication routes
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
