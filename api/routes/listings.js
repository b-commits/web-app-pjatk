const Listing = require('../models/Listing');
const express = require('express');
const { CREATED, SERVER_ERROR, BAD_REQUEST } = require('./errorConsts');
const router = express.Router();

/*
    @route    GET api/listings/:listingId
    @desc     Gets all listings created by a given users.
    @access   Public.
*/
router.get('/:id(d+)', async (req, res, next) => {
  try {
    const { listingId } = req.params;
    const listing = await Listing.query().where({ creator: listingId });
    res.json(listing);
  } catch (err) {
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

module.exports = router;
