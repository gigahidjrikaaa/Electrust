const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');

const register = async (req, res) => {
  try {
    const { name, username, email, password, role } = req.body;

    // Check if fields are empty
    if (!name || !username || !email || !password) return res.status(400).json({ msg: 'Please enter all fields' });

    console.log('Trying to register user...');
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    console.log('Checking if user exists...');
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    const user = new User({ name, username, email, password, role });
    console.log('Saving user...');
    await user.save();
    console.log('User saved!');
    res.status(201).json({ msg: 'User registered' });

  } catch (err) {
    res.status(500).send('Server error. Modar');
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });

googleCallback = (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    if (!user) {
      return res.redirect('/auth/login');
    }

    req.logIn(user, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
        (err, token) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
          }
          res.cookie('jwt', token, { httpOnly: true });
          res.redirect('/dashboard');
        }
      );
    });
  })(req, res, next);
};

getProfile = (req, res) => {
    res.json(req.user);
  };

module.exports = { register, login, googleLogin, googleCallback, getProfile };
