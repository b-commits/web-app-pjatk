const Listing = require('../models/Listing');
const express = require('express');
const { BAD_REQUEST } = require('./errorConsts');
const router = express.Router();

/** 
    @route    GET api/listings/:listingId
    @desc     Gets all listings created by a given users.
    @access   Public.
*/
router.get('/:id(d+)', async (req, res, next) => {
  try {
    const { listingId } = req.params;
    const listing = await Listing.query().where({ creator: listingId });
    res.status(200).json(listing);
  } catch (err) {
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

/** 
    @route    GET api/listings/
    @desc     Gets all listings.
    @access   Public.
*/
router.get('/', async (req, res, next) => {
  try {
    const listings = await Listing.query();
    res.status(200).json(listings);
  } catch (err) {
    res.status(400).json({ msg: 'Bad request' });
  }
});

module.exports = router;
