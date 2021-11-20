const { knexSnakeCaseMappers } = require('objection');
const dotenv = require('dotenv').config({ path: '../../.env' });

/**
 * knexfile.js is a standard file that contains all of the configuration for the database.
 * It can optionally provide different configuration for different environments.
 * knexSnakeCaseMapper makes it so that the migarted table names follow the snakeCase pattern.
 */

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
    migrations: {
      tableName: 'knex_migrations',
      directory: '../../migrations',
    },
    seeds: {
      directory: '../seeds',
    },
    ...knexSnakeCaseMappers,
  },
};
