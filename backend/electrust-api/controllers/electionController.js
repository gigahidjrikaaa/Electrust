const Election = require('../models/Election');
const Candidate = require('../models/Candidate');
const Vote = require('../models/vote');
const { createElectionOnCardano, submitVoteToCardano } = require('../utils/cardano');

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

const createElection = async (req, res) => {
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

        const electionData = req.body;
        try {
            const result = await createElectionOnCardano(electionData);
            if (result.success) {
            res.status(201).json({ message: result.message, policyId: result.policyId, assetName: result.assetName, newElection: newElection });
            } else {
            res.status(500).json({ message: result.message });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }

        // res.status(201).json(newElection);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateElection = async (req, res) => {
    try {
        const election = await Election.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!election) return res.status(404).json({ msg: 'Election not found' });
        res.json(election);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const deleteElection = async (req, res) => {
    try {
        const election = await Election.findByIdAndRemove(req.params.id);
        if (!election) return res.status(404).json({ msg: 'Election not found' });
        res.json({ msg: 'Election deleted' });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const submitVote = async (req, res) => {
    try {
        const { candidateId } = req.body;
        const userId = req.user.id;
        const electionId = req.params.id;

        // Ensure the user has not voted already
        const existingVote = await Vote.findOne({ userId, electionId });
        if (existingVote) return res.status(400).json({ msg: 'User has already voted in this election' });

        const newVote = new Vote({
            userId,
            electionId,
            candidateId
        });

        await newVote.save();

        const voteData = req.body;
        try {
            const result = await submitVoteToCardano(voteData);
            if (result.success) {
            res.status(200).json({ message: result.message, newVote: newVote });
            } else {
            res.status(500).json({ message: result.message });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }

        // res.status(201).json(newVote);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getElections, getElection, getCandidates, getCandidate, createElection, updateElection, deleteElection, submitVote };
