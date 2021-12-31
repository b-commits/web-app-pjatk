const express = require('express');
const router = express.Router();

/** 
    @route    POST api/profilePictureUpload
    @desc     Uploads a profile picture to the static files directory.
    @access   Public (for now)
*/
router.post('/', (req, res) => {

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ msg: 'No files were uploaded.' });
  }

  console.log(req.files.myImage);
  myImage = req.files.myImage;
  let path = '../public/profilePics/' + myImage.name;

  myImage.mv(path, (err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('Image uploaded.');
  });
});

module.exports = router;
