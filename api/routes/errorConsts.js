/**
 * Error messages for server responses.
 */
const EMAIL_TAKEN = 'That e-mail is already taken';
const USERNAME_TAKEN = 'That username is already taken';
const ADDED = 'Entity has been added';

/**
 * Reusable HTTP status codes.
 */
const CREATED = 201;
const OK = 200;
const SERVER_ERROR = 500;
const BAD_REQUEST = 400;

module.exports = {
  EMAIL_TAKEN,
  USERNAME_TAKEN,
  ADDED,
  CREATED,
  OK,
  SERVER_ERROR,
  BAD_REQUEST,
};
