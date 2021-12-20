/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { MenuItem } from "./MenuItem";
import { sidebarMenu, hrSidebarBreaker } from "../css/DashboardSidebar.style";

//MENU SECTION
export const Menu: FC = () => {
  return (
    <>
      <ul css={sidebarMenu}>
        <h3>Menu</h3>
        <MenuItem title={"Home"} href={"/dashboard"} />

        <MenuItem title={"Listings"} href={"/dashboard/listings"} />

        <MenuItem title={"Friends"} href={"/dashboard/friends"} />

        <MenuItem title={"Favorite Games"} href={"/dashboard/favgames"} />

        <MenuItem title={"Admin"} href={"/dashboard/admin"} />

        <MenuItem title={"Reports"} href={"/dashboard/reports"} />
      </ul>
    </>
  );
};
