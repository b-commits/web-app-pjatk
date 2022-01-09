/** @jsxImportSource @emotion/react */
import React, { FC, useContext } from 'react';
import { MenuItem } from './MenuItem';
import { sidebarMenu, hrSidebarBreaker } from '../css/DashboardSidebar.style';
import { AuthContext } from '../../../context/AuthContext';

//MENU SECTION
export const Menu: FC = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <ul css={sidebarMenu}>
        <h3>Menu</h3>

        <MenuItem title={'Home'} href={'/dashboard'} />

        <MenuItem title={'Profile'} href={`/profile/${currentUser.id}`} />

        <MenuItem title={'Inbox'} href={'/dashboard/inbox'} />

        <MenuItem title={'User Settings'} href={'/dashboard/settings'} />

        <MenuItem title={'Listings'} href={'/dashboard/listings'} />

        <MenuItem title={'Friends'} href={'/dashboard/friends'} />

        <MenuItem title={'Favorite Games'} href={'/dashboard/favgames'} />

        {currentUser.isAdmin ? (
          <MenuItem title={'Admin'} href={'/dashboard/admin'} />
        ) : null}
      </ul>
    </>
  );
};
