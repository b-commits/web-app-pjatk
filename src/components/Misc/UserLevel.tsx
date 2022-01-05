/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { UserLevelWrap, Badge, userLevelExp } from './css/UserLevel.style';
import { ProgressBar } from './ProgressBar';

interface UserLevelProps {
  progressBarWidthPercentage: number;
  userLvl: number;
  userExp: number;
}

export const UserLevel: FC<UserLevelProps> = ({
  progressBarWidthPercentage,
  userLvl,
  userExp,
}) => {
  const nextLevelPercent = (userExp / 10) * 100;
  return (
    <>
      <div css={UserLevelWrap}>
        <span css={Badge}>{userLvl}</span>
        <span css={userLevelExp}>{userExp}/10</span>
        <ProgressBar
          generalWidthAsPercent={progressBarWidthPercentage}
          progressPercentage={nextLevelPercent}
          userExp={userExp}
        />
      </div>
    </>
  );
};
