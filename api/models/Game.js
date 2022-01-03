const { Model } = require('objection');

class Game extends Model {
  static get tableName() {
    return 'game';
  }
}

module.exports = Game;
