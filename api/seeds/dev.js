/*
  Inserts fake data to the migrated tables.
  Run "npm run seed" from the root directory to populate the tables.
*/
const faker = require('faker');

exports.seed = async function (knex) {
  await knex('listing').insert([
    {
      description: faker.commerce.productDescription(),
    },
    {
      description: faker.commerce.productDescription(),
    },
  ]);

  await knex('user').insert([
    {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      listingId: 2,
    },
    {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      listingId: 2,
    },
  ]);

  return knex('message').insert([
    {
      title: faker.lorem.words(5),
      content: faker.lorem.words(20),
      userId: 2,
    },
  ]);
};
