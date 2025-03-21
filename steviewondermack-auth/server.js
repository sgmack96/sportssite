const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');

const app = express();
app.use(bodyParser.json());
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
