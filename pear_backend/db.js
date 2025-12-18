// db.js (fixed version)
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password_here',
  database: 'pear'
});

connection.connect((err) => {
  if (err) {
    console.error("Database Connection Failed:", err);
  } else {
    console.log("Connected to MySQL Database!");
  }
});

module.exports = connection;
