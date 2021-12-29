exports.up = function (knex) {
  return knex.raw(
    'ALTER TABLE privateMessage '
      .concat('ADD CONSTRAINT privatemessage_messagereceiver_foreign ')
      .concat('FOREIGN KEY (messageReceiver) ')
      .concat('REFERENCES [user](id) ')
      .concat('ON DELETE CASCADE; ')
  );
};
