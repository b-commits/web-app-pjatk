const Participation = require('../models/Participation');
const Rating = require('../models/Rating');
const User = require('../models/User');
const UserAchievement = require('../models/UserAchievement');
const express = require('express');
const { OK } = require('./errorConsts');
const { ENLISTED } = require('./utils/achievementCodes');
const router = express.Router();

/** 
    @route    GET /api/participations/:id
    @desc     Get all users participating in a given listing.
    @access   Public.
    @param    listingId - a listing for which to get a list of users
*/
router.get('/:id', async (req, res, next) => {
  try {
    const participations = await Participation.query()
      .join('user', {
        'user.id': 'userId',
      })
      .where({
        listingId: req.params.id,
      })
      .select('user.id', 'nickname', 'listingId');
    res.status(200).json(participations);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/** 
    @route    GET /api/participations/perUser
    @desc     Get listings a given user is participating in.
    @access   Public.
    @param    userId - the id of a user for which to get all listings
              he is currently participating in 
*/
router.get('/perUser', async (req, res, next) => {
  try {
    const participations = await Participation.query()
      .join('user', {
        'user.id': 'userId',
      })
      .join('listing', {
        'listing.id': 'listingId',
      })
      .where({
        userId: req.body.userId,
      })
      .select('listingId', 'message', 'listingGame');
    res.status(200).json(participations);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/** 
    @route    POST /api/participations
    @desc     Participate in a given listing.
    @access   Public.
*/
router.post('/', async (req, res, next) => {
  try {
    const alreadyExists = await Participation.query().where({
      userid: req.body.userId,
      listingId: req.body.listingId,
    });
    await User.query().findById(req.body.userId).increment('experience', 1);
    await User.query()
      .findById(req.body.userId)
      .increment('totalListingsJoined', 1);
    const totalListingsJoined = await User.query()
      .findById(req.body.userId)
      .select('totalListingsJoined');
    console.log(totalListingsJoined);
    if (totalListingsJoined.totalListingsJoined == 9) {
      console.log('unlocking...');
      await UserAchievement.query().insert({
        unlockedBy: req.body.userId,
        achievement: ENLISTED,
      });
    }
    if (alreadyExists.length <= 0) {
      await Participation.query().insert({
        userId: req.body.userId,
        listingId: req.body.listingId,
      });
    }
    res.status(200).json(OK);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/** 
    @route    DELETE /api/participations
    @desc     Leave a given listing (deletes Participation record).
    @access   Public.
*/
router.delete('/', async (req, res, next) => {
  try {
    await Participation.query()
      .where({
        userId: req.body.userId,
        listingId: req.body.listingId,
      })
      .delete();
    res.status(200).json({ msg: OK });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/** 
    @route    POST /api/participations/ratings
    @desc     Rate a co-participator.
    @access   Public.
    @param    listingId
    @param    userId
*/
router.post('/ratings', async (req, res, next) => {
  try {
    const participationId = await Participation.query()
      .findOne({
        listingId: req.body.listingId,
        userId: req.body.userId,
      })
      .select('id');
    const alreadyExists = await Rating.query().where({
      participationId: participationId.id,
      rater: req.body.rater,
    });
    if (alreadyExists.length == 0) {
      await Rating.query().insert({
        participationId: participationId.id,
        rating: req.body.rating,
        rater: req.body.rater,
      });
    } else {
      await Rating.query()
        .where({
          participationId: participationId.id,
          rater: req.body.rater,
        })
        .update({ rating: req.body.rating });
    }
    res.status(200).json(OK);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/** 
    @route    POST /api/participations/ratings/perUser
    @desc     Util route for ratings / rating for a given participation.
    @access   Public.
    @param    listingId
    @param    participatorId
    @param    raterId
*/
router.post('/ratings/perUser', async (req, res, next) => {
  try {
    // Find a participation record where the listingId and userId is this and userId is this:
    const participationId = await Participation.query()
      .findOne({
        listingId: req.body.listingId,
        userId: req.body.participatorId,
      })
      .select('id');

    // If there's no participation like this then do nothing:
    if (!participationId) {
      console.log('no participation like this');
    }

    // Find rating for this participation id by a given user:
    const rating = await Rating.query()
      .findOne({ participationId: participationId.id, rater: req.body.raterId })
      .select('rating');

    res.status(200).json(rating);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;
