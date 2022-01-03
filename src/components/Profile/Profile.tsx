/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { profileWrap, profileHeader } from './Profile.style';
import { UserDetails } from './UserDetails';
import { ProfileContent } from './ProfileContent';
import { ProfileCommentBox } from './ProfileCommentBox';
import { AuthContext } from '../../context/AuthContext';

interface ProfileProps {}

//all graphics url-s are temporary
export const Profile: React.FC<ProfileProps> = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/login"></Redirect>;
  }
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
