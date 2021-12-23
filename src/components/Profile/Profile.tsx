/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { profileWrap, profileHeader } from './Profile.style';

import { UserDetails } from './UserDetails';
import { ProfileContent } from './ProfileContent';
import { ProfileCommentBox } from './ProfileCommentBox';

interface ProfileProps {}

//all graphics url-s are temporary
export const Profile: React.FC<ProfileProps> = () => {
  return (
    <>
      <div css={profileWrap}>
        <div css={profileHeader}>
          <div>
            <UserDetails isUserOnline={false} />
          </div>
        </div>
        <ProfileContent />
        <ProfileCommentBox />
      </div>
    </>
  );
};
