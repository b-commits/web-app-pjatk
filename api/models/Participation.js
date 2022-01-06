const { Model } = require('objection');

class Participation extends Model {
  static get tableName() {
    return 'participation';
  }
}

module.exports = Participation;
