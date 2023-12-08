import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (medicine) => {
    // Handle adding medicine to the cart
    setCartItems([...cartItems, medicine]);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
