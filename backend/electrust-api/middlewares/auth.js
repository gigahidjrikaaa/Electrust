const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    (req, res, next) => {
      const token = req.header('Authorization').replace('Bearer ', '');
      if (!token) return res.status(401).send('Access Denied');
      try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
      } catch (err) {
        res.status(400).send('Invalid Token');
      }
    },
    async (req, res, next) => {
      const user = await User.findById(req.user._id);
      if (!user || (roles.length && !roles.includes(user.role))) {
        return res.status(403).send('Access Denied');
      }
      next();
    }
  ];
};

module.exports = auth;
