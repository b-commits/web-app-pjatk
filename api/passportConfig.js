const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('./models/User');
const bcrypt = require('bcrypt');

const verifyCallback = (username, password, done) => {
  User.query()
    .findOne({ email: username })
    .then((user) => {
      if (!user) {
        return done(null, false, {
          message: 'That email is not registered.',
        });
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) console.log(err);
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Password incorrect' });
        }
      });
    });
};

const strategy = new LocalStrategy({ usernameField: 'email' }, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log(`Serialize user: ${user.id}`);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log(`Deserialize id: ${id}`);
  const user = User.query().findById(id);
  if (user) return done(null, user);
  else console.log('No user found...');
});
