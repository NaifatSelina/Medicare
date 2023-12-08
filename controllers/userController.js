n
// Search for medicines
app.get('/search', (req, res) => {
    const searchTerm = req.query.term;
  
    // Search for medicines in the database
    connection.query('SELECT * FROM medicines WHERE name LIKE ?', [`%${searchTerm}%`], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error searching for medicines');
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Filter and sort medicines
  app.get('/filterSort', (req, res) => {
    const filterBy = req.query.filterBy;
    const sortBy = req.query.sortBy;
  
    // Filter and sort medicines in the database
    const query = `SELECT * FROM medicines WHERE category = ? ORDER BY ${sortBy}`;
    connection.query(query, [filterBy], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error filtering and sorting medicines');
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Add items to the cart
  app.post('/addToCart', (req, res) => {
    const { userId, medicineId, quantity } = req.body;
  
    // Add items to the cart in the database
    connection.query('INSERT INTO cart (user_id, medicine_id, quantity) VALUES (?, ?, ?)',
      [userId, medicineId, quantity],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error adding items to the cart');
        } else {
          res.status(201).send('Items added to the cart successfully');
        }
      });
  });
  
  // Process payments
  app.post('/processPayment', (req, res) => {
    const { userId, cartId, paymentDetails } = req.body;
  
    // Process payments and update order status in the database
    connection.query('UPDATE orders SET status = ? WHERE user_id = ? AND cart_id = ?',
      ['Paid', userId, cartId],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error processing payment');
        } else {
          res.status(200).send('Payment processed successfully');
        }
      });
  });
  
  // ... (other endpoints for user portal)
  
  // End of the User Portal code
  
  // ... (other code)
  
  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  