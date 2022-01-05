/** @jsxImportSource @emotion/react */
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userAchievements, userAchievementsItem } from './Profile.style';
import { AuthContext } from '../../context/AuthContext';
import { getUserAchievments } from '../Dashboard/ApiCalls';

export const UserAchievements: React.FC = () => {
  interface RouteParams {
    id: string;
  }
  const { id } = useParams<RouteParams>();
  const [userAchievements, setUserAchievements] = useState<any>([]);

  useEffect(() => {
    getUserAchievments(parseInt(id)).then((res: any) => {
      setUserAchievements(res.data);
    });
  }, []);

  if (!userAchievements || userAchievements.length == 0)
    return <div>This user hasn't unlocked any achievements yet.</div>;
  return (
    <div css={userAchievements}>
      {userAchievements.map((ach: any) => {
        return (
          <UserAchievementsItem
            achievementName={ach.title}
            achievementUrl={'/dashboard'}
          />
        );
      })}
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
