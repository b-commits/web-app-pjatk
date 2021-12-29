const dotenv = require('dotenv').config({ path: '../.env' });
const express = require('express');
const session = require('express-session');
const setupDB = require('./config/dbSetup');
const cors = require('cors');
const passport = require('passport');
const users = require('./routes/users');
const profilePageComments = require('./routes/profilePageComments');
const privateMessages = require('./routes/privateMessages');
const listings = require('./routes/listings');
require('./config/passportConfig.js');

const app = express();
const port = process.env.SERVER_PORT;

setupDB();
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
app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.body);
  console.log(req.sessionID);
  next();
});

app.use('/api/users', users);
app.use('/api/listings', listings);
app.use('/api/profilePageComments', profilePageComments);
app.use('/api/privateMessages', privateMessages);

app.listen(port, () => {
  console.log(`[server] listening at http://localhost:${port}.`);
});
