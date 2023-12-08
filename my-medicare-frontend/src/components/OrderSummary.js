import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <p>Total Price: {calculateTotalPrice()}</p>
      {/* Add a button to proceed to payment */}
    </div>
  );
}

export default OrderSummary;
