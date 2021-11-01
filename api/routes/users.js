const User = require('../models/User');
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

/*
    @route    POST api/users
    @desc     Registers a user.
    @access   Public.
*/
// todo this works
router.post('/', async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    await User.query().insert({
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(200).json({ msg: 'User added' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

/*
    @route    GET api/users/:id
    @desc     Get user by id.
    @access   Public.
*/
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.query().findById(id);
    res.json(user);
  } catch (err) {
    console.error(error);
    res.status(400).json({ msg: 'Bad request' });
  }
});

/*
    @route    GET api/users
    @desc     Get all users.
    @access   Public.
*/
router.get('/', async (req, res, next) => {
  console.log(req);
  try {
    const users = await User.query();
    res.json(users);
  } catch (err) {
    console.error(error);
    res.status(400).json({ msg: 'Bad request' });
  }
});

module.exports = router;
