const jwt = require('jsonwebtoken');
const passport = require('passport');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true }).status(201).json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true }).json({ token });
  })(req, res, next);
};

const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });

const googleCallback = (req, res) => {
  passport.authenticate('google', { session: false }, (err, user, info) => {
    if (err || !user) return res.status(400).json({ msg: 'Google login failed' });

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true }).redirect('/'); // Redirect to your frontend route after login
  })(req, res);
};

module.exports = { register, login, googleLogin, googleCallback };
