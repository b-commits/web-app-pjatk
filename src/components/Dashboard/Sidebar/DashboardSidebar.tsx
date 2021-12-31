/** @jsxImportSource @emotion/react */
import { FC, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Menu } from './Menu';
import { UserSection } from './UserSection';

export const DashboardSidebar: FC = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <UserSection
        avatarURL={`profilePics/${currentUser.nickname}.jpg`}
        nickName={currentUser.nickname}
        isUserOnline={true}
      />
      <Menu />
    </>
  );
};
