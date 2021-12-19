const ProfilePageComment = require('../models/ProfilePageComment');
const express = require('express');
const { BAD_REQUEST, SERVER_ERROR, ADDED } = require('./errorConsts');
const router = express.Router();

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
 */
router.post('/', async (req, res) => {
  try {
    await ProfilePageComment.query().insert({
      content: req.body.content,
      commentSender: req.body.commentSender,
      commentReceiver: req.body.commentReceiver,
    });
    res.status(200).json({ msg: ADDED });
  } catch (error) {
    res.status(SERVER_ERROR).json({ msg: error.message });
  }
});

module.exports = router;
