const express = require('express');
const dbSetup = require('./dbSetup');
const cors = require('cors');
const passport = require('passport');
const dotenv = require('dotenv').config({ path: '../../env' });
const users = require('./routes/users');
const intializePassport = require('./passportConfig');

initializePassport(passport);
dbSetup();
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());
app.use('/api/users', users);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});