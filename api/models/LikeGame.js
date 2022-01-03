const { Model } = require('objection');

class LikeGame extends Model {
  static get tableName() {
    return 'likeGame';
  }
}

module.exports = LikeGame;
