import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here (e.g., send credentials to the server)
    console.log('Logging in with:', email, password);
  };

  return (
    <div style={pageContainerStyle}>
      <div style={loginContainerStyle}>
        <h2 style={loginHeaderStyle}>Login</h2>
        <form style={formStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Username:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
          </div>
          <button type="button" onClick={handleLogin} style={loginButtonStyle}>
            Login
          </button>
        </form>
        <p style={registerLinkStyle}>
          Don't have an account? <Link to="/register" style={linkStyle}>Register here</Link>
        </p>
      </div>
    </div>
  );
}

// Styles
const pageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const loginContainerStyle = {
  maxWidth: '400px',
  width: '100%',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
};

const loginHeaderStyle = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '20px',
  color: '#333',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  fontSize: '16px',
  marginBottom: '5px',
  color: '#333',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box', // Added to include padding in the width
};

const loginButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px',
  fontSize: '18px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const registerLinkStyle = {
  textAlign: 'center',
  marginTop: '20px',
  fontSize: '16px',
  color: '#555',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
};

export default Login;
