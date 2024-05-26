const express = require('express');
const { getElections, getElection, getCandidates, getCandidate } = require('../controllers/electionController');
const router = express.Router();

router.get('/', getElections);
router.get('/:id', getElection);
router.get('/:id/candidates', getCandidates);
router.get('/candidates/:id', getCandidate);

module.exports = router;
