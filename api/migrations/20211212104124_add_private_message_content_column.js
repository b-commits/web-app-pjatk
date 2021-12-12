exports.up = function (knex) {
  return knex.schema.table('privateMessage', (table) => {
    table.string('content');
  });
};

exports.down = function (knex) {
  return knex.schema.table('privateMessage', (table) => {
    table.dropColumn('content');
  });
};
