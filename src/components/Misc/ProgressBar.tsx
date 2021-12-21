/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { ProgressBarWrap, ProgressBarPercent } from "./css/ProgressBar.style";

interface UserLevelProps {
  generalWidthAsPercent: number;
  progressPercentage: number;
  userExp: number;
}
export const ProgressBar: FC<UserLevelProps> = ({
  generalWidthAsPercent,
  progressPercentage,
  userExp,
}) => {
  return (
    <>
      <div css={ProgressBarWrap} style={{ width: `${generalWidthAsPercent}%` }}>
        <div
          css={ProgressBarPercent}
          style={{ width: `${progressPercentage}%` }}
        >
          {progressPercentage}%
        </div>
      </div>
    </>
  );
};
