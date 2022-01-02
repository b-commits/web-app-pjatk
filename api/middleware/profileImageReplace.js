const fs = require("fs");
module.exports.clearPicIfExists = (req, res, next) => {
  console.log("middleware running...");
  if (req.files.myImage.name) {
    try {
      fs.unlink("../public/profilePics/" + req.files.myImage.name, (err) => {
        if (err) {
          console.log("failed to delete local image:" + err);
        } else {
          console.log("successfully deleted local image");
        }
      });
    } catch (err) {
      console.log(err);
    }
    next();
  } else {
    res.status(401).json({ msg: "Unauthorized " });
  }
};
