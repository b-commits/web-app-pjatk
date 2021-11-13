const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const bcrypt = require('bcrypt');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      (email, reqPassword, done) => {
        User.query()
          .findOne({ email: email })
          .then((user) => {
            if (!user) {
              return done(null, false, {
                message: 'That email is not registered.',
              });
            }
            bcrypt.compare(reqPassword, user.password, (err, isMatch) => {
              if (err) console.log(err);
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, { message: 'Password incorrect' });
              }
            });
          })
          .catch((err) => console.log(err));
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.query().findById(id, function (err, user) {
      return done(err, user);
    });
  });
};
