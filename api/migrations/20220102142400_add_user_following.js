exports.up = function (knex) {
  return knex.schema.createTable('following', (table) => {
    table.increments();
    table.integer('user').notNullable().references('id').inTable('user');
    table.integer('follows').notNullable().references('id').inTable('user');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {};
