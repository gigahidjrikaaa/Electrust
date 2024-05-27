const Election = require('../models/Election');
const Candidate = require('../models/Candidate');

const getElections = async (req, res) => {
    try {
        const elections = await Election.find();
        res.json(elections);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const getElection = async (req, res) => {
    try {
        const election = await Election.findById(req.params.id);
        if (!election) return res.status(404).json({ msg: 'Election not found' });
        res.json(election);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find({ election: req.params.id });
        res.json(candidates);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const getCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });
        res.json(candidate);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const Election = require('../models/Election');
const User = require('../models/User');
const cardano = require('../utils/cardano');

// CARDANO CLI COMMANDS
getElection = async (req, res) => {
    try {
        const { title, description, startDate, endDate, candidates } = req.body;

        const newElection = new Election({
            title,
            description,
            startDate,
            endDate,
            candidates,
        });

        await newElection.save();

        // Interact with Cardano to register the election
        // Build, sign, and submit the transaction
        const txIn = 'user-tx-in'; // REPLACE THIS
        const txOut = 'election-tx-out'; // REPLACE THIS
        const amount = 1000000; // Amount in lovelace (1 ADA = 1,000,000 lovelace)
        const scriptAddress = './cardano.js'; // REPLACE THIS

        cardano.buildTransaction(txIn, txOut, amount, scriptAddress);
        cardano.signTransaction('path/to/signing-key');
        cardano.submitTransaction();

        res.status(201).json(newElection);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

//! Implement other election-related controllers for Cardano blockchain here


module.exports = { getElections, getElection, getCandidates, getCandidate, getElection };
