exports.up = function (knex) {
  return knex.schema
    .createTable('participation', (table) => {
      table.increments();
      table
        .integer('listingId')
        .notNullable()
        .references('id')
        .inTable('listing');
      table.integer('userId').notNullable().references('id').inTable('user');
      table.timestamps(true, true);
    })
    .createTable('rating', (table) => {
      table.increments();
      table
        .integer('participationId')
        .notNullable()
        .references('id')
        .inTable('participation');
      table.integer('rating').notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {};
