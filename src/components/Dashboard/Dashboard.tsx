/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { UserLevel } from '../Misc/UserLevel';
import { UserAchivmentsDashboard } from './UserAchivments';
import { SectionDashboard } from './SectionDashboard';

export const Dashboard: FC = () => {
  const userLevelComponent = (
    <UserLevel userLvl={17} userExp={330} progressBarWidthPercentage={35} />
  );

  return (
    <>
      <SectionDashboard title={'Your level'} component={userLevelComponent} />
      <SectionDashboard
        title={'Your Achivments'}
        component={<UserAchivmentsDashboard />}
      />
    </>
  );
};
