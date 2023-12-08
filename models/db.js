require('dotenv').config();
console.log('Starting db.js');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'database-1.csg0aeybpskz.eu-west-2.rds.amazonaws.com',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'abdallah123.',
  database: process.env.DB_DATABASE || 'database-1',
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
