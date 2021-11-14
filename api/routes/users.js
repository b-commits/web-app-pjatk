const User = require('../models/User');
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const router = express.Router();

/*
    @route    POST api/users
    @desc     Register a user.
    @access   Public.
*/
router.post('/', async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    await User.query().insert({
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log('[SERVER] User Registered.');
    res.status(200).json({ msg: 'User added' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

/*
    @route    POST api/users/login
    @desc     Log in a user using Passport.js local strategy config. 
    @access   Public.
*/
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.status(200).json({ msg: 'Sucessfully authenticated' });
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
    console.error(err);
    res.status(400).json({ msg: 'Bad request' });
  }
});

/*
    @route    GET api/users
    @desc     Get all users.
    @access   Public.
*/
router.get('/', async (req, res, next) => {
  try {
    const users = await User.query();
    res.json(users);
  } catch (err) {
    console.error(error);
    res.status(400).json({ msg: 'Bad request' });
  }
});

module.exports = router;
