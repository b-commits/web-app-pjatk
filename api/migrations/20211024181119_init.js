exports.up = function (knex) {
  knex.raw('DROP TABLE ');

  return knex.schema
    .createTable('listing', (table) => {
      table.increments();
      table.string('description').notNullable();
      table.timestamps(true, true);
    })
    .createTable('user', (table) => {
      table.increments();
      table.string('nickname').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.integer('listingId').references('id').inTable('listing');
      table.timestamps(true, true);
    })
    .createTable('message', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.string('content').notNullable();
      table.integer('userId').notNullable().references('id').inTable('user');
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('user')
    .dropTableIfExists('listing')
    .dropTableIfExists('message');
};
