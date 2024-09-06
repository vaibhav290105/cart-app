import React from 'react';

const Navbar = ({ totalItems }) => {
  return (
    <nav className="navbar sticky">
      <h2>CartPage</h2>
      <div>Total Items: {totalItems}</div>
    </nav>
  );
};

export default Navbar;