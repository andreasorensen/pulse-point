import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {categories.map(category => (
        <NavLink className='nav-button' key={category} to={`/category/${category}`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
