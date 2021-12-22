const { Model } = require('objection');

class ListingComment extends Model {
  static get tableName() {
    return 'listingComment';
  }
}

module.exports = ListingComment;
