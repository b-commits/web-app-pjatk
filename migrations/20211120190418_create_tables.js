const tableNames = [
  'listing',
  'user',
  'message',
  'friendship',
  'group',
  'groupParticipation',
  'gameRank',
  'listing',
  'listingComment',
  'profilePageComment',
  'privateMessage',
  'game',
];

exports.up = function (knex) {
  return knex.schema
    .createTable('user', (table) => {
      table.increments();
      table.string('nickname').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.string('profilePicSrc');
      table.boolean('isActive');
      table.boolean('hasNewsletter');
      table.integer('age');
      table.timestamps(true, true);
    })
    .createTable('message', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.string('content').notNullable();
      table.integer('userId').notNullable().references('id').inTable('user');
      table.timestamps(true, true);
    })
    .createTable('friendship', (table) => {
      table.increments();
      table.timestamps(true, true);
      table.integer('user').notNullable().references('id').inTable('user');
      table.integer('friend').notNullable().references('id').inTable('user');
    })
    .createTable('group', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('description');
      table.string('groupPicSrc');
      table.timestamps();
    })
    .createTable('groupParticipation', (table) => {
      table.increments();
      table.timestamps();
      table.integer('member').notNullable().references('id').inTable('user');
      table.integer('group').notNullable().references('id').inTable('group');
    })
    .createTable('gameRank', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.string('badgeSrc');
      table.float('userScoreAvgMax');
      table.float('userScoreAvgMin');
    })
    .createTable('listing', (table) => {
      table.increments();
      table.string('message');
      table.date('dateAdded');
      table.date('dateEnded');
      table.integer('maxNumberOfPlayers');
      table.integer('creator').notNullable().references('id').inTable('user');
      //   table.integer('listingGame').references('id').inTable('game');
    })
    .createTable('listingComment', (table) => {
      table.increments();
      table.string('content');
      table.date('dateAdded');
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
    })
    .createTable('profilePageComment', (table) => {
      table.increments();
      table.date('date');
      table.string('content');
      table
        .integer('commentSender')
        .notNullable()
        .references('id')
        .inTable('user');
      table
        .integer('commentReceiver')
        .notNullable()
        .references('id')
        .inTable('user');
    })
    .createTable('privateMessage', (table) => {
      table.increments();
      table.date('sentAt');
      table
        .integer('messageSender')
        .notNullable()
        .references('id')
        .inTable('user');
      table
        .integer('messageReceiver')
        .notNullable()
        .references('id')
        .inTable('user');
      table
        .integer('parentMessageId')
        .notNullable()
        .references('id')
        .inTable('privateMessage');
    })
    .createTable('game', (table) => {
      table.increments();
      table.string('title');
      table.date('releaseDate');
    });
};

exports.down = function (knex) {
  return tableNames.forEach((name) => {
    knex.schema.dropTableIfExists(name);
  });
  // knex.schema
  //   .dropTableIfExists('user')
  //   .dropTableIfExists('listing')
  //   .dropTableIfExists('message');
  //   .dropTable('abc');
};
