const User = require('../models/User');
const Listing = require('../models/Listing');
const ListingComment = require('../models/ListingComment');
const PrivateMessage = require('../models/PrivateMessage');
const ProfilePageComment = require('../models/ProfilePageComment');
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { EMAIL_TAKEN, USERNAME_TAKEN, ADDED } = require('./errorConsts');
const { CREATED, SERVER_ERROR, BAD_REQUEST } = require('./errorConsts');
const { isAuthenticated } = require('../middleware/authentication');
const router = express.Router();

/**
    @route    POST api/users
    @desc     Register a user.
    @access   Public.
*/
router.post('/', async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  let emailTaken = false;
  try {
    await User.query()
      .where({ email: req.body.email })
      .then((data) => {
        if (data[0]) emailTaken = true;
      });
    await User.query().insert({
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(CREATED).json({ msg: ADDED });
  } catch (error) {
    if (emailTaken) res.status(SERVER_ERROR).json({ msg: EMAIL_TAKEN });
    else res.status(SERVER_ERROR).json({ msg: USERNAME_TAKEN });
  }
});

/**
    @route    GET api/users/user/:id
    @desc     Get user by id.
    @access   Public.
*/
router.get('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.query().findById(id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

/**
    @route    DELETE api/users/delete/:id
    @desc     Get user by id.
    @access   Public.
*/
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Listing.query().where({ creator: id }).delete();
    await ListingComment.query().where({ commentSender: id }).delete();
    await PrivateMessage.query().where({ messageReceiver: id }).delete();
    await PrivateMessage.query().where({ messageSender: id }).delete();
    await ProfilePageComment.query().where({ commentSender: id }).delete();
    await ProfilePageComment.query().where({ commentReceiver: id }).delete();
    await User.query().deleteById(id);
    res.json({ msg: `User ${id} deleted.` });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/**
    @route    POST api/users/login
    @desc     Log in a user using Passport.js local strategy config.
              Passport adds user information to the HTTP requests. 
    @access   Public.
*/
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.status(200).json({ msg: 'Sucessfully authenticated' });
});

/**
    @route    POST api/users/logout
    @desc     Logs out a user using Passport.js logout() function
              which delets the passport user header from the request. 
    @access   Public.
*/
router.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Sucessfully logged out' });
});

/**
  @route      GET api/users/currentUser
  @desc       Returns an object of a user who is currently authenticated.
  @access     Public.
*/
router.get('/currentUser', async (req, res, next) => {
  try {
    const currentUser = await User.query().where({
      id: req.session.passport.user,
    });
    res.status(200).json({ currentUser: currentUser });
  } catch (err) {
    res.status(400).json({ msg: 'Not logged in' });
  }
});

/** 
  @route      GET api/users/:id/listings
  @desc       Returns an array of listings created by a given user.
  @access     Public.
*/
router.get('/:id/listings', async (req, res, next) => {
  try {
    const userListings = await Listing.query().where({
      creator: req.params.id,
    });
    res.status(200).json({ userListings: userListings });
  } catch (err) {
    // res.status(400).json({ msg: 'Not logged in' });
  }
});

/**
    @route    GET api/users/messages
    @desc     Gets user private messages.
    @access   Protected.
*/
router.get('/messages', isAuthenticated, (req, res, next) => {
  res.send('Placeholder...');
});

/**
    @route    GET api/users
    @desc     Get all users.
    @access   Public.
*/
router.get('/', async (req, res, next) => {
  try {
    const users = await User.query();
    res.json(users);
  } catch (err) {
    res.status(400).json({ msg: 'Bad request' });
  }
});

/**
    @route    GET api/users/search/:userQueryString
    @desc     Get users whose nicknames matches the query string.
    @access   Public.
*/
router.get('/search/:userQueryString', async (req, res, next) => {
  try {
    const filteredUsers = await User.query().where(
      'nickname',
      'like',
      '%' + req.params.userQueryString + '%'
    );
    res.status(200).json(filteredUsers);
  } catch (err) {
    res.status(400).json({ msg: 'Bad request ' });
  }
});

/**
    @route    PATCH api/users/
    @desc     Updates the username.
    @access   Protected.
*/
router.patch('/', async (req, res) => {
  try {
    const nickanameAlreadyExists = await User.query().where({
      nickname: req.body.nickname,
    });
    if (nickanameAlreadyExists.length == 0) {
      await User.query()
        .where({ id: req.body.id })
        .update({ nickname: req.body.nickname });
      res.status(200).json({ msg: 'Updated' });
    } else res.status(400).json({ msg: 'Nickname already taken' });
  } catch (error) {
    res.status(SERVER_ERROR).json({ msg: error.message });
  }
});

/**
    @route    PATCH api/users/changePassword
    @desc     Updates the user password.
    @access   Protected.
*/
router.patch('/changePassword', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);
    await User.query()
      .where({ id: req.body.id })
      .update({ password: hashedPassword });
    res.status(200).json({ msg: 'Updated' });
  } catch (error) {
    res.status(SERVER_ERROR).json({ msg: error.message });
  }
});

module.exports = router;
