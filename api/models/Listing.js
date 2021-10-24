const { Model } = require('objection');

class Listing extends Model {
  static get tableName() {
    return 'listing';
  }
}

module.exports = Listing;
