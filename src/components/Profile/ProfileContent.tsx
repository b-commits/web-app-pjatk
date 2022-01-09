/** @jsxImportSource @emotion/react */
import React, { useContext, useState, useEffect } from 'react';
import {
  profileContent,
  profileMain,
  profileSidebar,
  profileContentItem,
} from './Profile.style';
import { UserAchievements } from './UserAchievements';
import { getUserByID } from './ApiCalls';
import { useParams } from 'react-router-dom';
import { UserFavGames } from './UserFavGames';
import { UserFriends } from './UserFriends';
import { UserListings } from './UserListings';
import { UserLevel } from '../Misc/UserLevel';

interface RouteParams {
  id: string;
}

export const ProfileContent: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [userExp, setUserExp] = useState<number>(0);

  useEffect(() => {
    getUserByID(id).then((res: any) => {
      setUserExp(res.data.experience);
    });
  });

  const calculateLevel = (exp: number) => {
    if (exp < 10) return 1;
    if (exp < 20) return 2;
    if (exp < 30) return 3;
    if (exp < 40) return 4;
    if (exp >= 40) return 5;
    return 0;
  };

  return (
    <>
      <div css={profileContent}>
        <div css={profileMain}>
          <ProfileContentItem
            title={'Favorite Games'}
            contentComponent={<UserFavGames />}
          />

          <ProfileContentItem
            title={'Your listings'}
            contentComponent={<UserListings />}
          />
        </div>

        <div css={profileSidebar}>
          <ProfileContentItem
            title={'Level'}
            contentComponent={
              <UserLevel
                userLvl={calculateLevel(userExp)}
                userExp={userExp}
                progressBarWidthPercentage={50}
              />
            }
          />
          <ProfileContentItem
            title={'Friends'}
            contentComponent={<UserFriends />}
          />

          <ProfileContentItem
            title={'Achievements'}
            contentComponent={<UserAchievements />}
          />
        </div>
      </div>
    </>
  );
};

const ProfileContentItem: React.FC<{
  title: string;
  contentComponent: React.ReactNode;
}> = ({ title, contentComponent }) => {
  return (
    <div css={profileContentItem}>
      <h1>{title}</h1>
      {contentComponent}
    </div>
  );
};
