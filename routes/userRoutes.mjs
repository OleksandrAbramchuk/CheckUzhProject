import bcrypt from 'bcryptjs';
import express from 'express';

import User from '../models/User.mjs';

const router = express.Router();

router.post('/register', async (request, response) => {
    try {
        const { username, password } = request.body;

        if (!username || !password) {
            return response.status(400).json({ message: 'Username and password are required' });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return response.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });

        await newUser.save();
        response.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

router.post('/login', async (request, response) => {
    try {
        const { username, password } = request.body;

        if (!username || !password) {
            return response.status(400).json({ message: 'Username and password are required' });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return response.status(400).json({ message: 'Invalid credentials' });
        }

        response.status(200).json({ message: 'Login successful', user: { username: user.username } });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

export default router;
