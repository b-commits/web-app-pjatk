const ProfilePageComment = require('../models/ProfilePageComment');
const express = require('express');
const { BAD_REQUEST, SERVER_ERROR, ADDED } = require('./errorConsts');
const User = require('../models/User');
const UserAchievement = require('../models/UserAchievement');
const router = express.Router();
const { KEYBOARD_ENTHUSIAST } = require('./utils/achievementCodes');

/** 
    @route    GET api/profilePageComments/:profileId
    @desc     Gets all profile comments for a given user.
    @access   Public.
*/
router.get('/:profileId', async (req, res, next) => {
  try {
    const { profileId } = req.params;
    const comments = await ProfilePageComment.query()
      .join('user', {
        'user.id': 'commentSender',
      })
      .where({ commentReceiver: profileId })
      .select(
        'content',
        'nickname',
        'commentSender',
        'commentReceiver',
        'profilePageComment.created_at'
      );
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

/**
 * @route   POST /api/profilePageComments/
 * @desc    Posts a profile page comment.
 * @access  Protected.
 * @todo    auth() middleware to the pipeline and make sure that works
 */
router.post('/', async (req, res) => {
  try {
    await ProfilePageComment.query().insert({
      content: req.body.content,
      commentSender: req.body.commentSender,
      commentReceiver: req.body.commentReceiver,
    });
    await User.query()
      .findById(req.body.commentSender)
      .increment('experience', 1);
    await User.query()
      .findById(req.body.commentSender)
      .increment('numProfileComments', 1);
    const numComments = await User.query()
      .findById(req.body.commentSender)
      .select('numProfileComments');
    if (numComments.numProfileComments == 5) {
      await UserAchievement.query().insert({
        unlockedBy: req.body.commentSender,
        achievement: KEYBOARD_ENTHUSIAST,
      });
    }
    res.status(200).json({ msg: ADDED });
  } catch (error) {
    res.status(SERVER_ERROR).json({ msg: error.message });
  }
});

module.exports = router;
