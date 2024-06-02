const express = require('express');
const router = express.Router();
const voteController = require('../controllers/voteController');
const auth = require('../middlewares/auth');

router.post('/:electionId/vote', auth(['voter']), voteController.submitVote);
router.get('/:electionId/results', auth(['admin', 'developer']), voteController.getResults);

module.exports = router;
