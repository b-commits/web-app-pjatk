const PrivateMessage = require('../models/PrivateMessage');
const express = require('express');
const { BAD_REQUEST, SERVER_ERROR, ADDED } = require('./errorConsts');
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
      .join('user', {
        'user.id': 'messageSender',
      })
      .where({ messageReceiver: profileId })
      .select(
        'content',
        'nickname',
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
    res.status(200).json({ msg: ADDED });
  } catch (error) {
    res.status(SERVER_ERROR).json({ msg: error.message });
  }
});

module.exports = router;
