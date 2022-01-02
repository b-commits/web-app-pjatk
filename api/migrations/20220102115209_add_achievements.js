// from root: npx knex migrate:make --knexfile ./api/config/knexfile.js add_achievements
exports.up = function (knex) {
  return knex.schema
    .createTable("achievement", (table) => {
      table.increments();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.timestamps(true, true);
    })
    .createTable("userAchievement", (table) => {
      table.increments();
      table
        .integer("unlockedBy")
        .notNullable()
        .references("id")
        .inTable("user");
      table
        .integer("achievement")
        .notNullable()
        .references("id")
        .inTable("achievement");
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {};
