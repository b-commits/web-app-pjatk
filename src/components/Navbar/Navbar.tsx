/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { TextField, Button } from '@material-ui/core';
import {
  navContainer,
  navMain,
  navList,
  navLogo,
  muiSearchbar,
  buttonSearch,
  formikForm,
} from './Navbar.style';
import { logoutUser } from './ApiCalls';
import { HOME } from '../../utils/URL';
import logo from '../../logo.png';

export const Navbar: React.FC = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  interface FormikSearchValues {
    search: string;
  }

  const handleLogout = () => {
    logoutUser().then(() => {
      setAuthenticated(false);
      history.push(HOME);
    });
  };

  const handleUserSearch = (values: FormikSearchValues) => {
    const query = values.search;
    history.push({
      pathname: '/search',
      state: {
        queryString: query,
      },
    });
  };

  return (
    <div css={navContainer}>
      <nav css={navMain}>
        <ul css={navList}>
          <li>
            <NavLink
              className="navLink"
              activeClassName="activeNavLink"
              exact
              to="/"
            >
              <img css={navLogo} src={logo} />
            </NavLink>
          </li>
          {authenticated ? (
            <>
              <Formik
                onSubmit={handleUserSearch}
                initialValues={{ search: '' }}
              >
                <Form css={formikForm}>
                  <Field
                    as={TextField}
                    name="search"
                    css={muiSearchbar}
                    color="primary"
                    id="filled-basic"
                    label="Find users..."
                    variant="filled"
                    size="small"
                  />
                  <Button
                    variant="contained"
                    css={buttonSearch}
                    color="primary"
                    type="submit"
                  >
                    Search
                  </Button>
                </Form>
              </Formik>
            </>
          ) : null}
          <li>
            <NavLink
              className="navLink"
              activeClassName="activeNavLink"
              exact
              to="/"
            >
              Listings
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
              <NavLink to="/" onClick={handleLogout}>
                Sign out
              </NavLink>
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
