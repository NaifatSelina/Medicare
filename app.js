// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Enable JSON parsing for incoming requests
app.use(bodyParser.json());

// Import the database connection from the db module
const db = require('./models/db');

// Backend APIs:

// Example API endpoint for user registration
app.post('/api/register', (req, res) => {
  const { username, password, email } = req.body;

  // Perform user registration logic here (placeholder)
  // For simplicity, we'll just send a success message
  res.json({ message: 'User registered successfully' });
});

// Example API endpoint for user login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Perform user login logic here (placeholder)
  // For simplicity, we'll just send a success message
  res.json({ message: 'User logged in successfully' });
});

// Example API endpoint to get a list of medicines
app.get('/api/medicines', (req, res) => {
  // Perform database query to get medicines
  db.query('SELECT * FROM medicines', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching medicines' });
    } else {
      res.status(200).json(results);
    }
  });
});

// End of Backend APIs

// ... (other code)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


