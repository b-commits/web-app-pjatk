/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { navContainer, navMain, navList, navLogo } from './Navbar.style';
import { logoutUser } from './ApiCalls';
import { HOME } from '../../utils/URL';
import logo from '../../logo.png';

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
          <li>
            <NavLink
              className='navLink'
              activeClassName='activeNavLink'
              exact
              to='/'
            >
              <img css={navLogo} src={logo} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navLink'
              activeClassName='activeNavLink'
              exact
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navLink'
              activeClassName='activeNavLink'
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            {authenticated ? (
              <NavLink to='/' onClick={handleLogout}>
                Sign out
              </NavLink>
            ) : (
              <NavLink
                className='navLink'
                activeClassName='activeNavLink'
                to='/login'
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
