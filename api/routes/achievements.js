const UserAchievement = require('../models/UserAchievement');
const express = require('express');
const { BAD_REQUEST } = require('./errorConsts');
const router = express.Router();

/** 
    @route    GET api/achievements/:profileId
    @desc     Get all achievements of a given user.
    @access   Public.
*/
router.get('/:profileId', async (req, res, next) => {
  try {
    const { profileId } = req.params;
    const achievements = await UserAchievement.query()
      .join('achievement', {
        'achievement.id': 'achievement',
      })
      .where({ unlockedBy: profileId })
      .select(
        'title',
        'description',
        'unlockedBy',
        'userAchievement.achievement'
      );
    res.status(200).json(achievements);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

/** 
    @route    POST api/achievements/:profileId
    @desc     Unlock achievement for a given user.
    @access   Public.
*/
router.post('/:id(d+)', async (req, res, next) => {
  try {
    const { achievementId } = req.body.achievementId;
    const { profileId } = req.params;
    await UserAchievement.query().insert({
      unlockedBy: profileId,
      achievement: achievementId,
    });
    res.status(200).json({ msg: ADDED });
  } catch (err) {
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

module.exports = router;
