exports.up = function (knex) {
  return knex.schema.createTable('likeGame', (table) => {
    table.increments();
    table.integer('likedBy').notNullable().references('id').inTable('user');
    table.integer('gameLiked').notNullable().references('id').inTable('game');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {};
