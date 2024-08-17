require("dotenv").config();
module.exports = {
  development: {
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    dialect: "sqlite",
    storage: process.env.DATABASE_URL_DEV, //Pointing to the dev database
  },
  staging: {
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    dialect: "sqlite",
    storage: process.env.DATABASE_URL_STAGING, //Pointing to the staging database
  },
  production: {
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    dialect: "sqlite",
    storage: process.env.DATABASE_URL_PROD, //Pointing to the production database
  },
};
