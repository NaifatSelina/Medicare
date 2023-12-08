const db = require('./db');

db.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Query results:', results);
  });  

console.log('Hello, this is your Node.js application!');
console.log('Starting app.js');
console.log('db.js imported successfully');



