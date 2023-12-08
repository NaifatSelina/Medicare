import React, { useState } from 'react';

// Styles
const navStyle = {
  backgroundColor: '#f8f9fa',
  padding: '10px 0',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const brandStyle = {
  textDecoration: 'none',
  fontSize: '24px',
  color: '#007bff',
};

const navLinksStyle = {
  display: 'flex',
  gap: '20px',
};

const cartContainerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
};

const cartHeaderStyle = {
  fontSize: '32px',
  color: '#007bff',
  textAlign: 'center',
  marginBottom: '30px',
};

const medicineListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
};

const medicineCardStyle = {
  border: '1px solid #ddd',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
  maxWidth: '300px',
};

const medicineImageStyle = {
  width: '100%',
  marginBottom: '20px',
};

const addToCartButtonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const cartItemsStyle = {
  marginTop: '30px',
};

const removeFromCartButtonStyle = {
  marginLeft: '10px',
  padding: '5px 10px',
  fontSize: '14px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const footerStyle = {
  backgroundColor: '#343a40',
  color: '#fff',
  padding: '20px 0',
  position: 'fixed',
  width: '100%',
  bottom: 0,
  textAlign: 'center',
};

// Checkout Component
const Checkout = ({ cartItems }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    // Implement actual payment processing logic here (e.g., communicate with a payment gateway)
    console.log(`Processing ${paymentMethod} payment for items: `, cartItems);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Select Payment Method:</h3>
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
          />
          Card Payment
        </label>
        <label>
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={() => setPaymentMethod('cash')}
          />
          Cash on Delivery
        </label>
      </div>

      {paymentMethod === 'card' && (
        <div>
          <p>Card Payment Form</p>
        </div>
      )}

      <div>
        <br></br>
        <button onClick={handlePayment}>Complete Payment</button>
      </div>
    </div>
  );
};

// Cart Component
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);


  const medicineData = [
    {
      id: 1,
      name: 'Medicine A',
      price: 19.99,
      description: 'Description of Medicine A.',
      image: 'https://example.com/medicineA.jpg',
    },
    {
      id: 2,
      name: 'Medicine B',
      price: 29.99,
      description: 'Description of Medicine B.',
      image: 'https://example.com/medicineB.jpg',
    },
    {
      id: 3,
      name: 'Medicine C',
      price: 14.99,
      description: 'Description of Medicine C.',
      image: 'https://example.com/medicineC.jpg',
    },
    {
      id: 4,
      name: 'Medicine D',
      price: 24.99,
      description: 'Description of Medicine D.',
      image: 'https://example.com/medicineD.jpg',
    },
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
    <div>
      {/* Header */}
      <nav style={navStyle}>
        <div style={containerStyle}>
          <a href="#" style={brandStyle}>
            Medicare
          </a>
          <div style={navLinksStyle}>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
            <a href="#">Login</a>
          </div>
        </div>
      </nav>

      {/* Cart Container */}
      <div style={cartContainerStyle}>
        <h2 style={cartHeaderStyle}>Your Cart</h2>
        <div style={medicineListStyle}>
          {medicineData.map((medicine, index) => (
            <div key={medicine.id} style={medicineCardStyle}>
              <img src={medicine.image} alt={medicine.name} style={medicineImageStyle} />
              <h3>{medicine.name}</h3>
              <p>${medicine.price.toFixed(2)}</p>
              <p>{medicine.description}</p>
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

      {/* Checkout Component */}
      <Checkout cartItems={cartItems} />

      {/* Footer */}
      <div style={footerStyle}>
        <p>&copy; 2023 Medicare. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Cart;
