/** @jsxImportSource @emotion/react */
import { FC, useContext } from 'react';
import { UserLevel } from '../Misc/UserLevel';
import { UserAchivmentsDashboard } from './UserAchivments';
import { SectionDashboard } from './SectionDashboard';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

export const Dashboard: FC = () => {
  const { currentUser } = useContext(AuthContext);

  const calculateLevel = (exp: number) => {
    if (exp < 10) return 1;
    if (exp < 20) return 2;
    if (exp < 30) return 3;
    if (exp < 40) return 4;
    if (exp >= 40) return 5;
    return 0;
  };

  if (!currentUser) return <CircularProgress />;
  const userLevelComponent = (
    <UserLevel
      userLvl={calculateLevel(currentUser.experience)}
      userExp={currentUser.experience}
      progressBarWidthPercentage={50}
    />
  );

  return (
    <>
      <SectionDashboard title={'Your level'} component={userLevelComponent} />
      <SectionDashboard
        title={'Your Achievements'}
        component={<UserAchivmentsDashboard />}
      />
    </>
  );
};
