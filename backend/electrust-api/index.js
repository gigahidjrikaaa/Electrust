const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();  // Load environment variables from .env

const app = express();

// Middleware configurations
app.use(cookieParser());
app.use(session({
  secret: 'your-session-secret',  // This can also be moved to .env
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET;

// Routes
app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id, displayName: req.user.displayName }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true, secure: true });
    res.redirect('/profile');
  }
);

app.get('/profile', (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.redirect('/');
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.send(`<h1>Hello ${decoded.displayName}</h1><a href="/logout">Logout</a>`);
  } catch (err) {
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  req.logout();
  res.redirect('/');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
