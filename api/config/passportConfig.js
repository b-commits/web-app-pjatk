const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const MSG_EMAIL_NOT_REGISTERED = 'That email has not been registered yet';
const MSG_PASSWORD_INCORRECT = 'Password incorrect';
const MSG_GENERIC_ERROR = 'Something went wrong';

const authCallback = (reqEmail, reqPassword, done) => {
  User.query()
    .findOne({ email: reqEmail })
    .then((user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: MSG_EMAIL_NOT_REGISTERED,
        });
      }
      validatePassword(reqPassword, user.password, user, done);
    });
};

const validatePassword = (reqPassword, userPassword, user, done) => {
  bcrypt.compare(reqPassword, userPassword, (err, isMatch) => {
    if (isMatch) {
      return done(null, user);
    } else {
      return done(null, false, { message: MSG_PASSWORD_INCORRECT, err });
    }
  });
};

// Tells Passport.js to look for email instead of a username in the database during auth.
const strategy = new LocalStrategy({ usernameField: 'email' }, authCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = User.query().findById(id);
  if (user) return done(null, user);
  else return null, false, { message: MSG_GENERIC_ERROR };
});
