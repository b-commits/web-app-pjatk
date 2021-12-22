exports.up = function (knex) {
  knex.schema.table('listingComment', (table) => {
    table.dropColumn('commentListing');
    table.dropColumn('commentSender');
    table
      .integer('commentListing')
      .notNullable()
      .references('id')
      .inTable('listing');
    table
      .integer('commentSender')
      .notNullable()
      .references('id')
      .inTable('user');
  });
};

exports.down = function (knex) {
  knex.schema.table('listingComment', (table) => {
    table
      .integer('commentListing')
      .notNullable()
      .references('id')
      .inTable('user');
    table
      .integer('commentSender')
      .notNullable()
      .references('id')
      .inTable('group');
  });
};
