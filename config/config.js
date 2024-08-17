require("dotenv").config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: process.env.DATABASE_URL || "./database/development.sqlite3",
  },
  production: {
    dialect: "sqlite",
    storage: process.env.DATABASE_URL || "./database/production.sqlite3",
  },
  staging: {
    dialect: "sqlite",
    storage: process.env.DATABASE_URL || "./database/staging.sqlite3",
  },
};
