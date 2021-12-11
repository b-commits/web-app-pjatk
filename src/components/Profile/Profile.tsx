/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from 'react';
import { profileWrap, profileHeader } from './Profile.style';
import { UserDetails } from './UserDetails';
import { ProfileContent } from './ProfileContent';
import { AuthContext } from '../../context/AuthContext';

interface ProfileProps {}

//all graphics url-s are temporary
export const Profile: React.FC<ProfileProps> = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div css={profileWrap}>
        <div css={profileHeader}>
          <div>
            <UserDetails isUserOnline={false} />
          </div>
        </div>
        <ProfileContent />
      </div>
    </>
  );
};
