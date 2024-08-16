const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const db = require("./models");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Test the database connection
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => console.log("Error: " + err));

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000/graphql");
});
