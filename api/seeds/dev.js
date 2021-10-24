const faker = require('faker');

exports.seed = async function (knex) {
  await knex('channel').insert([
    {
      name: faker.name.findName(),
    },
    {
      name: faker.name.findName(),
    },
  ]);

  await knex('user').insert([
    {
      name: faker.name.findName(),
      email: faker.internet.email(),
      channelId: 1,
    },
    {
      name: faker.name.findName(),
      email: faker.internet.email(),
    },
  ]);

  return knex('video').insert([
    {
      title: 'video1',
      channelId: 2,
    },
  ]);
};
