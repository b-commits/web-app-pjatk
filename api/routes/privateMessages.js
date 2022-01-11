const PrivateMessage = require('../models/PrivateMessage');
const User = require('../models/User');
const UserAchievement = require('../models/UserAchievement');
const express = require('express');
const { BAD_REQUEST, SERVER_ERROR, ADDED } = require('./errorConsts');
const { EPISTOLOGRAPHY } = require('./utils/achievementCodes');
const router = express.Router();

/** 
    @route    GET api/privateMessages/:profileId
    @desc     Gets all private messages for a given user.
    @access   Private.
    @todo     auth() middleaware
*/
router.get('/:profileId', async (req, res, next) => {
  try {
    const { profileId } = req.params;
    const messages = await PrivateMessage.query()
      .join('user as u1', {
        'u1.id': 'messageSender',
      })
      .join('user as u2', {
        'u2.id': 'messageReceiver',
      })
      .where({ messageReceiver: profileId })
      .orWhere({ messageSender: profileId })
      .select(
        'content',
        'u1.nickname as senderNickname',
        'u2.nickname as receiverNickname',
        'messageSender',
        'messageReceiver',
        'PrivateMessage.created_at'
      );
    res.status(200).json(messages);
  } catch (err) {
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

/**
 * @route   POST /api/privateMessages/
 * @desc    Sends a private message.
 * @access  Protected.
 * @todo    auth() middleware to the pipeline and make sure that works
 */
router.post('/', async (req, res) => {
  try {
    await PrivateMessage.query().insert({
      content: req.body.content,
      messageSender: req.body.messageSender,
      messageReceiver: req.body.messageReceiver,
    });
    // Update private message count for an achievement:
    await User.query()
      .findById(req.body.messageSender)
      .increment('numPrivateMessagesSent', 1);
    await User.query()
      .findById(req.body.messageSender)
      .increment('experience', 1);
    // Check if achievement requirements have been met:
    const numMessages = await User.query()
      .findById(req.body.messageSender)
      .select('numPrivateMessagesSent');
    // Unlock achievement:
    if (numMessages.numPrivateMessagesSent == 10) {
      console.log('Requirements met');
      await UserAchievement.query().insert({
        unlockedBy: req.body.messageSender,
        achievement: EPISTOLOGRAPHY,
      });
    }
    res.status(200).json({ msg: ADDED });
  } catch (error) {
    console.log(error.message);
    res.status(SERVER_ERROR).json({ msg: error.message });
  }
});

module.exports = router;
