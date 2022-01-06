const Participation = require('../models/Participation');
const Listing = require('../models/Listing');
const User = require('../models/User');
const express = require('express');
const { OK } = require('./errorConsts');
const router = express.Router();

/** 
    @route    GET /api/participations
    @desc     Get all users participating in a given listing.
    @access   Public.
*/
router.get('/', async (req, res, next) => {
  try {
    const participations = await Participation.query()
      .where({
        userId: req.body.userId,
      })
      .select('id');
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
    await Participation.query().insert({
      userId: req.body.userId,
      listingId: req.body.listingId,
    });
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
