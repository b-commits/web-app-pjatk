const dotenv = require('dotenv').config({ path: '../../env' });
const express = require('express');
const session = require('express-session');
const dbSetup = require('./config/dbSetup');
const cors = require('cors');
const passport = require('passport');
const users = require('./routes/users');
require('./config/passportConfig.js');

const app = express();
const port = process.env.SERVER_PORT;

dbSetup();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.json(req.sessionID);
  console.log(req.session);
  console.log(req.sessionID);
  console.log(req.user);
  next();
});

app.use('/api/users', users);

app.listen(port, () => {
  console.log(`[server] listening at http://localhost:${port}.`);
});
