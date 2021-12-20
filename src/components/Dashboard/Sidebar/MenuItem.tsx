/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { sidebarMenuItem } from "../css/DashboardSidebar.style";
import "../css/MenuNavLinkStyles.css";

// Props Interfaces

type MenuItemProps = {
  title: string;
  href: string;
};

//MENU ITEM
export const MenuItem: FC<MenuItemProps> = ({ title, href }) => {
  return (
    <li css={sidebarMenuItem}>
      <NavLink
        className="dashboardMenuItem"
        activeClassName="dashboardMenuItemActive"
        exact
        to={href}
      >
        {title}
      </NavLink>
    </li>
  );
};
