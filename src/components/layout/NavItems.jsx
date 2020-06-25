import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
  return (
    <React.Fragment>
      <Link to="/signin" className="nav-link">
        Sign Out
      </Link>
      <Link to="/signup" className="nav-link">
        Sign Up
      </Link>
      <Link to="/signin" className="nav-link">
        Sign In
      </Link>
    </React.Fragment>
  );
};

export default NavItems;
