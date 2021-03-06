const dotenv = require('dotenv').config({ path: '../.env' });
const fileUpload = require('express-fileupload');
const express = require('express');
const session = require('express-session');
const setupDB = require('./config/dbSetup');
const cors = require('cors');
const passport = require('passport');
const users = require('./routes/users');
const profilePageComments = require('./routes/profilePageComments');
const profilePictureUpload = require('./routes/profilePictureUpload');
const adminReports = require('./routes/adminReports');
const privateMessages = require('./routes/privateMessages');
const followings = require('./routes/followings');
const listings = require('./routes/listings');
const achievements = require('./routes/achievements');
const participations = require('./routes/participations');
const games = require('./routes/games');
require('./config/passportConfig.js');
const path = require('path');

const app = express();
const port = process.env.SERVER_PORT;

setupDB();
app.use(express.static('public'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      /* 
        This atribute is now needed in order to make cookies persist in the browser. 
        We can set it to either 'strict' or 'lax'; 'lax' will allow the cookie to persist when the calls
        are being made from an entirely different domain. Removing this option will cause the cookie to be deleted.
      */
      sameSite: 'strict',
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
// app.use(fileUpload({ debug: true }));
// app.use((req, res, next) => {
//   console.log(req.session);
//   console.log(req.body);
//   console.log(`SESSID: ${req.sessionID}`);
//   next();
// });

app.use('/api/users', users);
app.use('/api/listings', listings);
app.use('/api/profilePageComments', profilePageComments);
app.use('/api/privateMessages', privateMessages);
app.use('/api/adminReports', adminReports);
app.use('/api/profilePictureUpload', profilePictureUpload);
app.use('/api/achievements', achievements);
app.use('/api/followings', followings);
app.use('/api/games', games);
app.use('/api/participations', participations);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`[server] listening at http://localhost:${port}.`);
});
