const express = require('express');
const dbSetup = require('./dbSetup');
const dotenv = require('dotenv').config({ path: '../.env' });
const users = require('./routes/users');

dbSetup();
const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use('/api/users', users);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${PORT}.`)
);
