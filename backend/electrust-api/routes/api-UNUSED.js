const express = require('express');
const router = express.Router();
const Election = require('../models/Election');
const Candidate = require('../models/Candidate');
const User = require('../models/User');

// Get list of elections
router.get('/elections', async (req, res) => {
    try {
        const elections = await Election.find().populate('candidates');
        res.json(elections);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get data of a specific election
router.get('/elections/:id', async (req, res) => {
    try {
        const election = await Election.findById(req.params.id).populate('candidates');
        if (!election) return res.status(404).json({ msg: 'Election not found' });
        res.json(election);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get list of candidates in a specific election
router.get('/elections/:id/candidates', async (req, res) => {
    try {
        const candidates = await Candidate.find({ election: req.params.id });
        res.json(candidates);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get data of a specific candidate
router.get('/candidates/:id', async (req, res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });
        res.json(candidate);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get data of the logged-in user
router.get('/user', async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
