const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Local strategy
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email }, async (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'No user found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false, { message: 'Password incorrect' });

        return done(null, user);
    });
}));

// Google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'https://localhost:4000/auth/google/callback'
}, async (token, tokenSecret, profile, done) => {
    const newUser = {
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value
    };
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
            done(null, user);
        } else {
            user = await User.create(newUser);
            done(null, user);
        }
    } catch (err) {
        done(err, false);
    }
}));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
});
