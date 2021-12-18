const ProfilePageComment = require('../models/ProfilePageComment');
const User = require('../models/User');
const express = require('express');
const { BAD_REQUEST } = require('./errorConsts');
const { useScrollTrigger } = require('@material-ui/core');
const { knex } = require('../models/ProfilePageComment');
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

module.exports = router;
