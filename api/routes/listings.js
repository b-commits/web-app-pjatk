const Listing = require('../models/Listing');
const ListingComment = require('../models/ListingComment');
const express = require('express');
const { BAD_REQUEST, SERVER_ERROR, ADDED } = require('./errorConsts');
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

/**
 * @route   GET api/listings/comments/:listingId
 * @desc    Gets all comments for a given listing.
 * @access  Public.
 */
router.get('/comments/:listingId', async (req, res, next) => {
  try {
    const { listingId } = req.params;
    const listingComments = await Listing.query()
      .join('listingComment', {
        'listing.id': 'commentListing',
      })
      .join('user', {
        'user.id': 'commentSender',
      })
      .where({ commentListing: listingId })
      .select(
        'listingComment.created_at',
        'listing.id',
        'status',
        'creator',
        'user.nickname',
        'listingGame',
        'content',
        'commentSender'
      );
    res.status(200).json(listingComments);
  } catch (err) {
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

/**
 * @route   POST /api/listings/comments
 * @desc    Posts a listing comment.
 * @access  Protected.
 */
router.post('/comments', async (req, res) => {
  try {
    await ListingComment.query().insert({
      content: req.body.content,
      commentListing: req.body.commentListing,
      commentSender: req.body.commentSender,
    });
    res.status(200).json({ msg: ADDED });
  } catch (error) {
    console.log(error.message);
    res.status(SERVER_ERROR).json({ errorMsg: error.message });
  }
});

/**
 * @route   POST /api/listings
 * @desc    Adds a listing.
 * @access  Protected.
 */
router.post('/', async (req, res) => {
  try {
    await Listing.query().insert({
      message: req.body.message,
      maxNumberOfPlayers: req.body.maxNumOfPlayers,
      listingGame: req.body.listingGame,
      creator: req.body.creator,
    });
    res.status(200).json({ msg: ADDED });
  } catch (error) {
    res.status(SERVER_ERROR).json({ errorMsg: error.message });
  }
});

module.exports = router;
