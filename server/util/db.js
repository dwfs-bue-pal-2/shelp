var mysql = require("mysql");
var dotenv = require("dotenv");
var util = require("util");

dotenv.config();
console.log(process.env.DBPORT);
var connection = mysql.createConnection({
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBSCHEMA
});

connection.query = util.promisify(connection.query); //para mysql. A ese callback (query) le agrego el lenguaje de promesa

module.exports = connection;
