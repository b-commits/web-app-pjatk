exports.up = function (knex) {
  return knex.schema
    .createTable('listing', (table) => {
      table.increments();
      table.string('description').notNullable();
      table.timestamps(true, true);
    })
    .createTable('user', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.integer('listingId').references('id').inTable('listing');
      table.timestamps(true, true);
    })
    .createTable('message', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.string('content').notNullable();
      table.timestamps(true, true);
      table.integer('userId').notNullable().references('id').inTable('user');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('user')
    .dropTableIfExists('listing')
    .dropTableIfExists('message');
};
