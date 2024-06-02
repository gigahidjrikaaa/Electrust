const express = require('express');
const router = express.Router();
const voteController = require('../controllers/voteController');

router.post('/', voteController.createVote);
router.get('/', voteController.getVotes);

module.exports = router;
