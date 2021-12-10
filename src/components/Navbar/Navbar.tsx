/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { navContainer, navMain, navList } from './Navbar.style';

export const Navbar: React.FC = () => {
  const { authenticated } = useContext(AuthContext);

  const handleLogout = () => {};

  return (
    <div css={navContainer}>
      <nav css={navMain}>
        <ul css={navList}>
          <li>LFG-APP</li>
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
            {authenticated ? (
              <button>Sig nout</button>
            ) : (
              <NavLink
                className="navLink"
                activeClassName="activeNavLink"
                to="/home"
              >
                Sign out
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
