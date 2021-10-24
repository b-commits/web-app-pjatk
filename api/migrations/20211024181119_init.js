exports.up = function (knex) {
  return knex.schema
    .createTable('listing', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamps(true, true);
    })
    .createTable('user', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.integer('listingId').references('id').inTable('listing');
      table.timestamps(true, true);
    })
    .createTable('message', (table) => {
      table.increments();
      table.timestamps(true, true);
      table
        .integer('channelId')
        .notNullable()
        .references('id')
        .inTable('listing');
      table.string('title').notNullable;
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('listing')
    .dropTableIfExists('user')
    .dropTableIfExists('message');
};
