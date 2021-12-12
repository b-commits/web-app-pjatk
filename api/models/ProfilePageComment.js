const { Model } = require('objection');

class ProfilePageComment extends Model {
  static get tableName() {
    return 'profilePageComment';
  }
}

module.exports = ProfilePageComment;
