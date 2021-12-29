const { Model } = require('objection');

class AdminReports extends Model {
  static get tableName() {
    return 'adminReport';
  }
}

module.exports = AdminReports;
