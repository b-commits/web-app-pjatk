/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { Menu } from "./Menu";
import { UserSection } from "./UserSection";
import { sidebar } from "../css/DashboardSidebar.style";

export const DashboardSidebar: FC = () => {
  return (
    <>
      <div css={sidebar}>
        <UserSection
          avatarURL={"http://bluepito.webd.pro/logopjatk.gif"}
          nickName={"PJATK"}
          isUserOnline={true}
        />
        <Menu />
      </div>
    </>
  );
};
