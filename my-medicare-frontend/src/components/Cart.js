import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const medicineData = [
    { id: 1, name: 'Medicine 1', price: 10.99 },
    { id: 2, name: 'Medicine 2', price: 19.99 },
    { id: 3, name: 'Medicine 3', price: 5.99 },
  ];

  const handleAddToCart = (medicine) => {
    setCartItems([...cartItems, medicine]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div style={cartContainerStyle}>
      <h2 style={cartHeaderStyle}>Your Cart</h2>
      <div style={medicineListStyle}>
        {medicineData.map((medicine, index) => (
          <div key={medicine.id} style={medicineCardStyle}>
            <h3>{medicine.name}</h3>
            <p>${medicine.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(medicine)} style={addToCartButtonStyle}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div style={cartItemsStyle}>
        <h3>Items in Cart:</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}{' '}
                <button onClick={() => handleRemoveFromCart(index)} style={removeFromCartButtonStyle}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Styles
const cartContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
};

const cartHeaderStyle = {
  textAlign: 'center',
  fontSize: '28px',
  color: '#333',
  marginBottom: '20px',
};

const medicineListStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const medicineCardStyle = {
  width: '200px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '10px',
  marginBottom: '20px',
  textAlign: 'center',
};

const addToCartButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '8px',
  fontSize: '14px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
};

const removeFromCartButtonStyle = {
  backgroundColor: '#dc3545',
  color: '#fff',
  padding: '8px',
  fontSize: '14px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
  marginLeft: '10px',
};

const cartItemsStyle = {
  marginTop: '40px',
};

export default Cart;
