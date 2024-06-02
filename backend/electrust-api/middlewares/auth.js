const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = (roles = []) => {
    // roles param can be a single role string (e.g. 'admin') 
    // or an array of roles (e.g. ['admin', 'developer'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        // authenticate JWT token and attach user to request object (req.user)
        (req, res, next) => {
            const token = req.header('x-auth-token');
            if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = decoded.user;
                next();
            } catch (err) {
                res.status(401).json({ msg: 'Token is not valid' });
            }
        },
        // authorize based on user role
        async (req, res, next) => {
            const user = await User.findById(req.user.id);
            if (!user || (roles.length && !roles.includes(user.role))) {
                return res.status(403).json({ msg: 'Access denied' });
            }
            next();
        }
    ];
};

module.exports = auth;
