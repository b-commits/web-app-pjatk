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
  const nextLevelPercent = Math.abs(userExp - (userLvl - 1) * 10) * 10;
  if (userExp >= 40) {
    return (
      <>
        <div css={UserLevelWrap}>
          <span css={Badge}>5</span>
          <span css={userLevelExp}>40/40</span>
          <span css={userLevelExp}>
            Congratulations, you've reached level 5!
          </span>
        </div>
      </>
    );
  }
  return (
    <>
      <div css={UserLevelWrap}>
        <span css={Badge}>{userLvl}</span>
        <span css={userLevelExp}>
          {userExp}/{userLvl * 10}
        </span>
        <ProgressBar
          generalWidthAsPercent={progressBarWidthPercentage}
          progressPercentage={nextLevelPercent}
          userExp={userExp}
        />
      </div>
    </>
  );
};
