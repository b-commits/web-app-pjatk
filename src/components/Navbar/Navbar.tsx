/** @jsxImportSource @emotion/react */
import React from "react";
import { NavLink } from "react-router-dom";
import { navContainer, navMain, navList } from "./Navbar.style";

export const Navbar: React.FC = () => {
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
    </div>
  );
};
