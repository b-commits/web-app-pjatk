const User = require('../models/User');
const express = require('express');

const router = express.Router();

/*
    @route    GET /user/:id
    @desc     Get user by id.
    @access   Public.
*/
router.get('/:id', async (req, res, next) => {
  console.log(req);
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
    @route    GET /user/:id
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
