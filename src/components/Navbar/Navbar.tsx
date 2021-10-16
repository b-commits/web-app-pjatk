/** @jsxImportSource @emotion/react */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { navMain, navList } from './Navbar.style';

export const Navbar: React.FC = () => {
  return (
    <nav css={navMain}>
      <ul css={navList}>
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
        <li>
          <NavLink
            className="navLink"
            activeClassName="activeNavLink"
            to="/register"
          >
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
