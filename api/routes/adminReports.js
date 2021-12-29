const express = require('express');
const { BAD_REQUEST, SERVER_ERROR, ADDED } = require('./errorConsts');
const AdminReports = require('../models/AdminReports');
const router = express.Router();

/** 
    @route    GET api/adminReports
    @desc     Gets all private messages for a given user.
    @access   Private.
    @todo     auth() middleaware
*/
router.get('/', async (req, res, next) => {
  try {
    // todo
  } catch (err) {
    res.status(400).json({ msg: BAD_REQUEST });
  }
});

/**
 * @route   POST /api/adminReports/
 * @desc    Sends a report.
 * @access  Protected.
 * @todo    auth() middleware to the pipeline and make sure that works
 */
router.post('/', async (req, res) => {
  try {
    await AdminReports.query().insert({
      content: req.body.content,
      reporter: req.body.reporter,
    });
    res.status(200).json({ msg: ADDED });
  } catch (error) {
    res.status(SERVER_ERROR).json({ msg: error.message });
  }
});

module.exports = router;
