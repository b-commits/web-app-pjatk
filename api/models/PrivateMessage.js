const { Model } = require('objection');

class PrivateMessage extends Model {
  static get tableName() {
    return 'privateMessage';
  }
}

module.exports = PrivateMessage;
