const express = require('express');
const { BAD_REQUEST, OK } = require('./errorConsts');
const LikeGame = require('../models/LikeGame');
const router = express.Router();

/** 
    @route    POST api/games/
    @desc     'Likes' a game.
    @access   Public.
*/
router.post('/', async (req, res, next) => {
  try {
    const like = await LikeGame.query().insert({
      likedBy: req.body.likedBy,
      gameLiked: req.body.gameLiked,
    });
    res.status(200).json(like);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/** 
    @route    DELETE api/games/
    @desc     'Unlikes' a game.
    @access   Public.
*/
router.delete('/', async (req, res, next) => {
  try {
    await LikeGame.query()
      .where({
        likedBy: req.body.likedBy,
        gameLiked: req.body.gameLiked,
      })
      .delete();
    res.status(200).json({ msg: OK });
  } catch (err) {
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

/** 
    @route    GET api/games/:profileId
    @desc     Gets all games like by a user.
    @access   Public.
*/
router.get('/:profileId', async (req, res, next) => {
  try {
    const { profileId } = req.params;
    const likedGames = await LikeGame.query()
      .join('user', {
        'user.id': 'likedBy',
      })
      .join('game', {
        'game.id': 'gameLiked',
      })
      .where({ likedBy: profileId })
      .select('title', 'nickname');
    res.status(200).json(likedGames);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;
