// Home.js

import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <div style={containerStyle}>
          <a href="#" style={brandStyle}>
            Medicare
          </a>
          <div style={navLinksStyle}>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={heroStyle}>
        <h1>Welcome to Medicare</h1>
        <p style={leadStyle}>
          Explore our wide range of healthcare products and place your order online.
        </p>
        <button style={buttonStyle}>Get Started</button>
      </div>

      {/* Featured Products Section */}
      <div style={containerStyle}>
        <h2 style={featuredTitleStyle}>Featured Products</h2>
        <div style={featuredProductsStyle}>
          {/* Product 1 */}
          <div style={productCardStyle}>
            <img src="https://via.placeholder.com/150" alt="Product 1" style={productImageStyle} />
            <div style={productInfoStyle}>
              <h5>Product 1</h5>
              <p>Description of Product 1.</p>
              <button style={buttonStyle}>View Details</button>
            </div>
          </div>

          {/* Add similar cards for other featured products */}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div style={callToActionStyle}>
        <h2>Ready to place your order?</h2>
        <p style={leadStyle}>Explore our products and experience top-notch healthcare.</p>
        <button style={buttonStyle}>Shop Now</button>
      </div>
    </div>
  );
};

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

const heroStyle = {
  textAlign: 'center',
  padding: '50px 0',
  backgroundColor: '#007bff',
  color: '#fff',
};

const leadStyle = {
  fontSize: '18px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#fff',
  color: '#007bff',
  border: 'none',
  cursor: 'pointer',
};

const featuredTitleStyle = {
  textAlign: 'center',
  fontSize: '24px',
  margin: '40px 0',
};

const featuredProductsStyle = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
};

const productCardStyle = {
  border: '1px solid #ddd',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
  maxWidth: '300px',
};

const productImageStyle = {
  width: '100%',
  marginBottom: '20px',
};

const productInfoStyle = {
  textAlign: 'left',
};

const callToActionStyle = {
  textAlign: 'center',
  padding: '50px 0',
  backgroundColor: '#f8f9fa',
};

export default Home;
