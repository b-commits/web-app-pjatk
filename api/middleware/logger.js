/**
 * @desc This module is for debugging purposes only.
 *       Add this middleware in server.js with app.use().
 *       Will be replaced with DB logging at some point.
 */
module.exports.logger = ({ req }) => {
  console.log(req.session);
  console.log(req.body);
  console.log(`SESSID: ${req.sessionID}`);
  next();
};
