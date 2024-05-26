const jwt = require('jsonwebtoken');
const passport = require('passport');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if fields are empty
    if (!name || !email || !password) return res.status(400).json({ msg: 'Please enter all fields' });

    console.log('Trying to register user...');
    const existingUser = await User.findOne({ email });
    console.log('Checking if user exists...');
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    const user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    console.log('Saving user...');
    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true }).status(201).json({ token });
  } catch (err) {
    res.status(500).send('Server error. Modar');
  }
};

const login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) return res.status(400).json({ msg: 'Invalid credentials' });

    req.login(user, (err) => {
        if (err) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('jwt', token, { httpOnly: true }).json({ token });
    });

  })(req, res, next);
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
