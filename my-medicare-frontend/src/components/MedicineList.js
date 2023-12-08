import React, { useState, useEffect } from 'react';

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    // Fetch medicines from the server and update the state
    // Example: fetch('/api/medicines').then(response => response.json()).then(data => setMedicines(data));
  }, []);

  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>{medicine.name} - {medicine.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineList;
