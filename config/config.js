require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": "Dispatch_DB_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    logging: false
  },
  "test": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": "Dispatch_DB_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    logging: false
  },
  "production": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": "Dispatch_DB_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    logging: false
  }
}
