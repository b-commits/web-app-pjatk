const express = require('express');
const { BAD_REQUEST, OK } = require('./errorConsts');
const Following = require('../models/Following');
const router = express.Router();

/** 
    @route    GET api/followings/:profileId
    @desc     Gets all users followed by a given profile.
    @access   Public.
*/
router.get('/:profileId', async (req, res, next) => {
  try {
    const { profileId } = req.params;
    const followedUsers = await Following.query()
      .join('user', {
        'user.id': 'followedUser',
      })
      .where({ followingUser: profileId })
      .select('user.id', 'nickname');
    res.status(200).json(followedUsers);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/** 
    @route    POST api/followings/
    @desc     Follows a user (i.e. adds to the one-sided friendlist);
    @access   Public.
*/
router.post('/', async (req, res, next) => {
  try {
    const following = await Following.query().insert({
      followingUser: req.body.followingUser,
      followedUser: req.body.followedUser,
    });
    res.status(200).json(following);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/** 
    @route    DELETE api/followings/
    @desc     Unfollows a user.
    @access   Public.
*/
router.delete('/', async (req, res, next) => {
  try {
    await Following.query()
      .where({
        followedUser: req.body.unfollowId,
        followingUser: req.body.follower,
      })
      .delete();
    res.status(200).json({ msg: OK });
  } catch (err) {
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

module.exports = router;
