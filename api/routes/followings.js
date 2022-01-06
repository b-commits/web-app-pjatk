const express = require('express');
const { BAD_REQUEST, OK } = require('./errorConsts');
const Following = require('../models/Following');
const UserAchievement = require('../models/UserAchievement');
const { STALKER } = require('./utils/achievementCodes');
const User = require('../models/User');
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
      .select('followedUser', 'nickname');
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
    await User.query()
      .findById(req.body.followingUser)
      .increment('experience', 1);
    await User.query()
      .findById(req.body.followingUser)
      .increment('numFollowing', 1);
    const numFollowing = await User.query()
      .findById(req.body.followingUser)
      .select('numFollowing');
    if (numFollowing.numFollowing == 5) {
      console.log('IN IF');
      await UserAchievement.query().insert({
        unlockedBy: req.body.followingUser,
        achievement: STALKER,
      });
    }
    res.status(200).json(following);
  } catch (err) {
    console.log(err.message);
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
