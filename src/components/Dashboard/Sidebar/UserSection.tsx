/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { userAvatar, userStatusDot } from "../css/DashboardSidebar.style";

// Props Interfaces

type UserSectionProps = {
  avatarURL: string;
  nickName: string;
  isUserOnline: boolean;
};

// USER SECTION
export const UserSection: FC<UserSectionProps> = (props) => {
  return (
    <>
      <img
        css={userAvatar}
        src={props.avatarURL}
        alt={"Avatar użytkowniak: " + props.nickName}
      />
      <h1>
        <span
          css={userStatusDot}
          style={
            props.isUserOnline
              ? { backgroundColor: "#64a338" }
              : { backgroundColor: "#e03b24" }
          }
        >
          {" "}
        </span>
        {props.nickName}
      </h1>
    </>
  );
};
