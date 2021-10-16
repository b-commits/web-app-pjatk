import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className="navLink"
            activeClassName="activeNavLink"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navLink"
            activeClassName="activeNavLink"
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
