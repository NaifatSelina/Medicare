const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'database-1.csg0aeybpskz.eu-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Abdallah123.',
  database: 'Abdallah123.',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

module.exports = connection;
