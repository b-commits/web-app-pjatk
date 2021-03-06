const Listing = require('../models/Listing');
const User = require('../models/User');
const Participation = require('../models/Participation');
const UserAchievement = require('../models/UserAchievement');
const ListingComment = require('../models/ListingComment');
const express = require('express');
const { BAD_REQUEST, SERVER_ERROR, ADDED } = require('./errorConsts');
const { INITIATION } = require('./utils/achievementCodes');
const router = express.Router();

/** 
    @route    GET api/listings/:userId
    @desc     Gets all listings created by a given users.
    @access   Public.
*/
router.get('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const listing = await Listing.query().where({ creator: userId });
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
    await User.query()
      .findById(req.body.commentSender)
      .increment('experience', 1);
    await User.query()
      .findById(req.body.commentSender)
      .increment('numListingComment', 1);
    const numListingComments = await User.query()
      .findById(req.body.commentSender)
      .select('numListingComment');

    console.log(numListingComments);
    if (numListingComments.numListingComment == 1) {
      await UserAchievement.query().insert({
        unlockedBy: req.body.commentSender,
        achievement: INITIATION,
      });
    }
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
    await User.query()
      .findById(req.body.creator)
      .increment('numListingsCreated', 1);
    await Listing.query().insert({
      message: req.body.message,
      maxNumberOfPlayers: req.body.maxNumOfPlayers,
      listingGame: req.body.listingGame,
      creator: req.body.creator,
    });
    const listingId = await Listing.query()
      .findOne({
        message: req.body.message,
        maxNumberOfPlayers: req.body.maxNumOfPlayers,
        listingGame: req.body.listingGame,
        creator: req.body.creator,
      })
      .select('id');
    console.log(listingId);
    await Participation.query().insert({
      userId: req.body.creator,
      listingId: listingId.id,
    });
    res.status(200).json({ msg: ADDED });
  } catch (error) {
    res.status(SERVER_ERROR).json({ errorMsg: error.message });
  }
});

module.exports = router;
