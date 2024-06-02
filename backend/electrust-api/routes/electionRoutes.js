const express = require('express');
const router = express.Router();
const electionController = require('../controllers/electionController');
const auth = require('../middlewares/auth');

// Election Admin routes
router.post('/', auth(['admin', 'developer']), electionController.createElection);
router.get('/', auth(['admin', 'developer', 'voter']), electionController.getElections);
router.put('/:id', auth(['admin', 'developer']), electionController.updateElection);
router.delete('/:id', auth(['admin', 'developer']), electionController.deleteElection);

// Voting routes
router.post('/:id/vote', auth('voter'), electionController.submitVote);

module.exports = router;
