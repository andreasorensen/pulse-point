import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  return (
    <nav>
      <NavLink className="nav-button" to="/">Top Headlines</NavLink>
      {categories.map(category => (
        <NavLink className='nav-button' key={category} to={`/category/${category}`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
