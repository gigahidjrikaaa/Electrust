const express = require('express');
const { getUser } = require('../controllers/userController');
const { ensureAuthenticated } = require('../middlewares/auth');
const router = express.Router();

router.get('/', ensureAuthenticated, getUser);

module.exports = router;
