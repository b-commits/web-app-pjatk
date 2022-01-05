const express = require('express');
const router = express.Router();
const fs = require('fs');
const { clearPicIfExists } = require('../middleware/profileImageReplace');
const User = require('../models/User');
const UserAchievement = require('../models/UserAchievement');
const { ART_ENTHUSIAST } = require('./utils/achievementCodes');

/** 
    @route    POST api/profilePictureUpload
    @desc     Uploads a profile picture to the static files directory.
    @access   Public (for now)
*/
router.post('/', clearPicIfExists, async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ msg: 'No files were uploaded.' });
  }
  myImage = req.files.myImage;

  const nickname = req.files.myImage.name.split('.')[0];

  const user = await User.query().findOne({ nickname: nickname }).select('id');

  await UserAchievement.query().insert({
    unlockedBy: user.id,
    achievement: ART_ENTHUSIAST,
  });

  let path = '../public/profilePics/' + myImage.name;

  myImage.mv(path, (err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('Image uploaded.');
  });
});

module.exports = router;
