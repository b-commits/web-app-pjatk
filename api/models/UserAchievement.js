const { Model } = require('objection');

class UserAchievement extends Model {
  static get tableName() {
    return 'userAchievement';
  }
}

module.exports = UserAchievement;
