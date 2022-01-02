const { Model } = require('objection');

class Achievement extends Model {
  static get tableName() {
    return 'achievement';
  }
}

module.exports = Achievement;
