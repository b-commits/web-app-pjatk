/*
  Inserts fake data to the migrated tables.
  Run "npm run seed" from the root directory to populate the tables.
*/
const { lorem } = require('faker');
const faker = require('faker');

exports.seed = async (knex) => {
  const users = [];
  const numUsers = 50;
  for (let i = 0; i < numUsers; i++) {
    users.push(createUser());
  }
  await knex('user').insert(users);
};

const createUser = () => ({
  nickname: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  isActive: 1,
  hasNewsletter: 1,
  age: 25,
});

const createMessage = () => ({
  title: faker.lorem.words(10),
  content: faker.lorem.content(75),
  userId: faker.datatype.number({
    min: 1,
    max: 50,
  }),
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
  message: faker.lorem.words(30),
});
