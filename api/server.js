const express = require('express');
const dbSetup = require('./dbSetup');
const dotenv = require('dotenv').config({ path: '../.env' });

const User = require('./models/User');

dbSetup();
const app = express();

app.use(express.json());
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

app.get('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.query().findById(id);
    res.json(user);
  } catch (err) {
    console.error(err);
  }
});
