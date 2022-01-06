const { Model } = require('objection');

class Rating extends Model {
  static get tableName() {
    return 'rating';
  }
}

module.exports = Rating;
