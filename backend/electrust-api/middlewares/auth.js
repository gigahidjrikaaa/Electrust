const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = (roles = []) => {
    return async (req, res, next) => {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id);

            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'User role not authorized' });
            }

            next();
        } catch (err) {
            console.error(err);
            res.status(401).json({ message: 'Token is not valid' });
        }
    };
};

module.exports = auth;
