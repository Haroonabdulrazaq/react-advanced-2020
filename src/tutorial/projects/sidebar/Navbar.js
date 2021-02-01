import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to="/about"> About </Link>
      <Link to="/calendar"> Calendar </Link>
    </div>
  )
}
// Put links here
// ul, li and styling
// Add icons here
export default Navbar
