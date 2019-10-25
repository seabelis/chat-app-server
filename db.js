const Sequelize = require("sequelize");

const databaseUrl = //this lin is in SLACK.
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync({ force: false })
  .then(() => console.log("dagabase synced"))
  .catch(error => console.log("db error", error));

module.exports = db;
