/*
    This is used for a datafix that cannot be handled by a knex migration.
    Adds ON DELETE CASCADE for [privateMessage] table to allow cascading [user] delation.
*/
ALTER TABLE privateMessage
ADD CONSTRAINT privatemessage_messagereceiver_foreign
FOREIGN KEY (messageReceiver) 
REFERENCES [user](id) 
ON DELETE CASCADE;


/*
    The action above can be easily reverted by dropping the constraint and 
    introducing ON DELETE NO ACTION
*/
ALTER TABLE privateMessage
  ADD CONSTRAINT privatemessage_messagereceiver_foreign
  FOREIGN KEY (messageReceiver) 
  REFERENCES [user](id) 
  ON DELETE NO ACTION;