console.log('Starting db.js');
const mysql = require('mysql');
require('dotenv').config(); // Load environment variables from .env file

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'youruser',
  password: process.env.DB_PASSWORD || 'yourpassword',
  database: process.env.DB_DATABASE || 'yourdbname',
  port: process.env.DB_PORT || 3306,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

module.exports = connection;
