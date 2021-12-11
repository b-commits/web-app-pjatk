/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { navContainer, navMain, navList } from './Navbar.style';
import { logoutUser } from './ApiCalls';
import { Button } from '@material-ui/core';
import { HOME } from '../../utils/URL';

export const Navbar: React.FC = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    logoutUser().then(() => {
      setAuthenticated(false);
      history.push(HOME);
    });
  };

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
              <Button onClick={handleLogout}>Sign out</Button>
            ) : (
              <NavLink
                className="navLink"
                activeClassName="activeNavLink"
                to="/login"
              >
                Sign in
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
