const express = require('express');
const { getUser } = require('../controllers/userController');
const { auth } = require('../middlewares/auth');
const router = express.Router();

router.get('/', getUser);

module.exports = router;
