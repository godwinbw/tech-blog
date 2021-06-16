const Sequelize = require("sequelize");

require("dotenv").config();
// create connection to our db

let sequelize;
if (process.env.JAWSDB_URL) {
  //if we are on heroku, use jaws db
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  //use local mysql database
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
