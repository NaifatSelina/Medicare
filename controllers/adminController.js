// Assume you have a middleware for admin authentication

// Add medicine
app.post('/admin/addMedicine', (req, res) => {
    const { name, price, seller, description, offers } = req.body;
  
    // Insert medicine details into the database
    connection.query('INSERT INTO medicines (name, price, seller, description, offers) VALUES (?, ?, ?, ?, ?)',
      [name, price, seller, description, offers],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error adding medicine');
        } else {
          res.status(201).send('Medicine added successfully');
        }
      });
  });
  
  // Remove medicine
  app.delete('/admin/removeMedicine/:id', (req, res) => {
    const medicineId = req.params.id;
  
    // Delete medicine from the database
    connection.query('DELETE FROM medicines WHERE id = ?', [medicineId], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error removing medicine');
      } else {
        res.status(200).send('Medicine removed successfully');
      }
    });
  });
  
  // Edit medicine
  app.put('/admin/editMedicine/:id', (req, res) => {
    const medicineId = req.params.id;
    const { name, price, seller, description, offers } = req.body;
  
    // Update medicine details in the database
    connection.query('UPDATE medicines SET name = ?, price = ?, seller = ?, description = ?, offers = ? WHERE id = ?',
      [name, price, seller, description, offers, medicineId],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error editing medicine');
        } else {
          res.status(200).send('Medicine edited successfully');
        }
      });
  });
  
  // Enable medicine
  app.put('/admin/enableMedicine/:id', (req, res) => {
    const medicineId = req.params.id;
  
    // Enable medicine in the database
    connection.query('UPDATE medicines SET enabled = true WHERE id = ?', [medicineId], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error enabling medicine');
      } else {
        res.status(200).send('Medicine enabled successfully');
      }
    });
  });
  
  // Disable medicine
  app.put('/admin/disableMedicine/:id', (req, res) => {
    const medicineId = req.params.id;
  
    // Disable medicine in the database
    connection.query('UPDATE medicines SET enabled = false WHERE id = ?', [medicineId], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error disabling medicine');
      } else {
        res.status(200).send('Medicine disabled successfully');
      }
    });
  });
  