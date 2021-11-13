const express = require('express');
const session = require('express-session');
const dbSetup = require('./dbSetup');
const cors = require('cors');
const passport = require('passport');
const dotenv = require('dotenv').config({ path: '../../env' });
const users = require('./routes/users');
const intializePassport = require('./passportConfig');
const User = require('./models/User');
require('./passportConfig.js')(passport);

dbSetup();
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use('/api/users', users);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
