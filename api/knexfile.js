const { knexSnakeCaseMappers } = require('objection');
const dotenv = require('dotenv').config({ path: '../.env' });

module.exports = {
  development: {
    client: 'mssql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      options: {
        encrypt: true,
        trustedConnection: true,
      },
    },
    migration: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
    ...knexSnakeCaseMappers,
  },
};
