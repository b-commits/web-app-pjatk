/** @jsxImportSource @emotion/react */
import React from 'react';
import { profileWrap, profileHeader } from './Profile.style';
import { UserDetails } from './UserDetails';
import { ProfileContent } from './ProfileContent';
import { ProfileCommentBox } from './ProfileCommentBox';

export const Profile: React.FC<any> = () => {
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
