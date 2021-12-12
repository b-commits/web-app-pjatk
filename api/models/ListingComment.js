const { Model } = require('objection');

class ListingComment extends Model {
  static get tableName() {
    return 'listing';
  }
}

module.exports = ListingComment;
