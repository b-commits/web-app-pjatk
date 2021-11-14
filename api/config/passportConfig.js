const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const MSG_EMAIL_NOT_REGISTERED = 'That email has not been registered yet';
const MSG_PASSWORD_INCORRECT = 'Password incorrect';
const MSG_GENERIC_ERROR = 'Something went wrong';

const verifyCallback = (username, password, done) => {
  User.query()
    .findOne({ email: username })
    .then((user) => {
      if (!user) {
        return done(null, false, {
          message: MSG_EMAIL_NOT_REGISTERED,
        });
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) console.log(err);
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: MSG_PASSWORD_INCORRECT });
        }
      });
    });
};

const strategy = new LocalStrategy({ usernameField: 'email' }, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = User.query().findById(id);
  if (!user) return done(null, false, { message: MSG_GENERIC_ERROR });
  return done(null, user);
});
