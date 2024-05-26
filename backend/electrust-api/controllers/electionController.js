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

module.exports = { getElections, getElection, getCandidates, getCandidate };
