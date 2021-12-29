exports.up = function (knex) {
  return knex.schema.createTable('adminReport', (table) => {
    table.increments();
    table.string('content').notNullable();
    table.integer('reporter').notNullable().references('id').inTable('user');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {};
