/** @jsxImportSource @emotion/react */
import React from 'react';
import { userAchievements, userAchievementsItem } from './Profile.style';

export const UserAchievements: React.FC = () => {
  return (
    <div css={userAchievements}>
      <UserAchievementsItem
        achievementName={'2 years account'}
        achievementUrl={''}
      />
      <UserAchievementsItem
        achievementName={'Made 10 listings'}
        achievementUrl={''}
      />
      <UserAchievementsItem
        achievementName={'Awarded 100 times'}
        achievementUrl={''}
      />
      <UserAchievementsItem
        achievementName={'Community leader'}
        achievementUrl={''}
      />
      <UserAchievementsItem achievementName={'Gamer'} achievementUrl={''} />
    </div>
  );
};

const UserAchievementsItem: React.FC<{
  achievementName: string;
  achievementUrl: string;
}> = ({ achievementName: achievementName, achievementUrl }) => {
  return (
    <>
      <div css={userAchievementsItem}>
        <a href={achievementUrl} title={achievementName}>
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt={achievementName}
          />
          {achievementName}
        </a>
      </div>
    </>
  );
};
