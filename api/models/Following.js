const { Model } = require('objection');

class Following extends Model {
  static get tableName() {
    return 'following';
  }
}

module.exports = Following;
