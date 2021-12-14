/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { sidebarMenuItem } from "../css/DashboardSidebar.style";

// Props Interfaces

type MenuItemProps = {
  title: string;
  href: string;
};

//MENU ITEM
export const MenuItem: FC<MenuItemProps> = (props) => {
  return (
    <li css={sidebarMenuItem}>
      <NavLink className={""} activeClassName={""} exact to={props.href}>
        {props.title}
      </NavLink>
    </li>
  );
};
