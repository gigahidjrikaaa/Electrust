const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const { ensureAuthenticated } = require('./middlewares/auth');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));

// Passport configuration
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api', ensureAuthenticated, apiRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Sign In with Google</a>');
});

app.get('/status', (req, res) => {
    // show the status-page from the public folder
    res.sendFile(__dirname + '/public/status-page/index.html');
    }
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
