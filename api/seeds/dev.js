/*
  Inserts fake data to the migrated tables.
  Run "npm run seed" from the root directory to populate the tables.
*/
const faker = require('faker');

exports.seed = async (knex) => {
  const users = [];
  const profilePageComments = [];
  const listings = [];
  const listingComments = [];
  const privateMessages = [];
  const numEntries = 50;

  for (let i = 0; i < numEntries; i++) {
    users.push(createUser());
    profilePageComments.push(createProfilePageComment());
    listings.push(createListing());
    listingComments.push(createListingComment());
    privateMessages.push(createPrivateMessage());
  }
  // await knex('user').insert(users);
  // await knex('profilePageComment').insert(profilePageComments);
  // await knex('listing').insert(listings);
  // await knex('listingComment').insert(listingComments);
  await knex('privateMessage').insert(privateMessages);
};

const createUser = () => ({
  nickname: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  isActive: 1,
  hasNewsletter: 1,
  age: 25,
});

const createProfilePageComment = () => ({
  content: faker.lorem.words(10),
  commentSender: faker.datatype.number({
    min: 5,
    max: 50,
  }),
  commentReceiver: faker.datatype.number({
    min: 5,
    max: 50,
  }),
});

const createPrivateMessage = () => ({
  content: faker.lorem.words(20),
  messageSender: faker.datatype.number({ min: 2, max: 25 }),
  messageReceiver: faker.datatype.number({ min: 2, max: 25 }),
});

const createFriendship = () => ({
  user: faker.datatype.number({ min: 1, max: 50 }),
  friend: faker.datatype.number({ min: 1, max: 50 }),
});

const createGroup = () => ({
  name: faker.lorem.words(3),
  description: faker.lorem.words(10),
});

const createGroupPartictipation = () => ({
  member: faker.datatype.number({ min: 1, max: 50 }),
  group: faker.datatype.number({ min: 1, max: 10 }),
});

const createGameRank = () => ({
  title: faker.lorem.words(3),
  userScoreAvgMax: faker.datatype.float({ min: 1, max: 2 }),
  userScoreAvgMin: faker.datatype.float({ min: 1, max: 2 }),
});

const createListing = () => ({
  status: 1,
  message: faker.lorem.words(15),
  maxNumberOfPlayers: faker.datatype.number({ min: 1, max: 5 }),
  creator: faker.datatype.number({ min: 1, max: 50 }),
  listingGame: null,
});

const createListingComment = () => ({
  content: faker.lorem.words(25),
  commentListing: faker.datatype.number({ min: 2, max: 25 }),
  commentSender: faker.datatype.number({ min: 2, max: 25 }),
});
