const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        user = new User({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('jwt', token, { httpOnly: true }).status(201).json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('jwt', token, { httpOnly: true }).json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const googleLogin = async (req, res) => {
    const { tokenId } = req.body;
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    try {
        const ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const { name, email } = ticket.getPayload();
        let user = await User.findOne({ email });
        if (!user) {
            user = new User({ name, email, password: email + process.env.JWT_SECRET });
            await user.save();
        }

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('jwt', token, { httpOnly: true }).json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

module.exports = { register, login, googleLogin };
