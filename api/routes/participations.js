const Participation = require('../models/Participation');
const express = require('express');
const { OK } = require('./errorConsts');
const router = express.Router();

/** 
    @route    GET /api/participations
    @desc     Get all users participating in a given listing.
    @access   Public.
    @param    listingId - a listing for which to get a list of users
*/
router.get('/', async (req, res, next) => {
  try {
    const participations = await Participation.query()
      .join('user', {
        'user.id': 'userId',
      })
      .where({
        listingId: req.body.listingId,
      })
      .select('user.id', 'nickname');
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
*/
router.post('/', async (req, res, next) => {
  try {
    await Rating.query().insert({
      participationId: req.body.participationId,
      rating: req.body.rating,
    });
    res.status(200).json(OK);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;
