/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import {
  userAvatar,
  userStatusDot,
  userDetailsWrap,
} from '../css/DashboardSidebar.style';

// Props Interfaces

type UserSectionProps = {
  avatarURL: string;
  nickName: string;
  isUserOnline: boolean;
};

// USER SECTION
export const UserSection: FC<UserSectionProps> = ({
  avatarURL,
  nickName,
  isUserOnline,
}) => {
  return (
    <>
      <div css={userDetailsWrap}>
        <img
          css={userAvatar}
          src={avatarURL}
          alt={'Avatar użytkowniak: ' + nickName}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = 'http://bluepito.webd.pro/logopjatk.gif';
          }}
        />
        <h1>
          <span
            css={userStatusDot}
            style={
              isUserOnline
                ? { backgroundColor: '#ffffff' }
                : { backgroundColor: '#ffffff' }
            }
          >
            {' '}
          </span>
          {nickName}
        </h1>
      </div>
    </>
  );
};
