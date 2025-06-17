// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f5f5f5' }}>
      <Link to="/flights" style={{ margin: '10px' }}>Flights</Link>
      <Link to="/hotels" style={{ margin: '10px' }}>Hotels</Link>
      <Link to="/dashboard" style={{ margin: '10px' }}>Dashboard</Link>
      <Link to="/login" style={{ margin: '10px' }}>Login</Link>
      <Link to="/register" style={{ margin: '10px' }}>Register</Link>
    </nav>
  );
}

export default Navbar;
