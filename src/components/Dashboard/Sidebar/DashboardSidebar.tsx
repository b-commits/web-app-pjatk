/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { Menu } from "./Menu";
import { UserSection } from "./UserSection";

export const DashboardSidebar: FC = () => {
  return (
    <>
      <UserSection
        avatarURL={"http://bluepito.webd.pro/logopjatk.gif"}
        nickName={"PJATK"}
        isUserOnline={true}
      />
      <Menu />
    </>
  );
};
