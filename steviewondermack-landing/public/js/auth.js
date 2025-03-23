const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const USERS = USERS;  // Cloudflare KV binding

// Signup Route
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = await USERS.get(username);
    if (user) {
        return res.status(400).send('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await USERS.put(username, hashedPassword);
    res.status(201).send('User created');
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const storedPassword = await USERS.get(username);
    if (storedPassword && await bcrypt.compare(password, storedPassword)) {
        const token = jwt.sign({ username }, 'secret_key');
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

module.exports = router;
