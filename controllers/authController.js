const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'youruser',
  password: process.env.DB_PASSWORD || 'yourpassword',
  database: process.env.DB_DATABASE || 'yourdbname',
  port: process.env.DB_PORT || 3306,
});

// User registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user details into the database
  connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error registering user');
    } else {
      res.status(201).send('User registered successfully');
    }
  });
});

// User login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Retrieve hashed password from the database
  connection.query('SELECT password FROM users WHERE username = ?', [username], async (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error logging in');
    } else {
      if (results.length > 0) {
        const storedPassword = results[0].password;
        const passwordMatch = await bcrypt.compare(password, storedPassword);

        if (passwordMatch) {
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid credentials');
        }
      } else {
        res.status(401).send('Invalid credentials');
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
