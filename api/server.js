const express = require('express');
const dbSetup = require('./dbSetup');
const dotenv = require('dotenv').config({ path: '../../env' });
const users = require('./routes/users');

dbSetup();
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use('/api/users', users);

app.get('/', (req, res) => {
  res.send(`Server running at port ${process.env.SERVER_PORT}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
