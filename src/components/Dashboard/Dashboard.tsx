/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { Main } from "./css/Dashboard.style";
import { UserLevel } from "./UserLevel";

export const Dashboard: FC = () => {
  return (
    <>
      <div css={Main}>
        <h1> [TODO] </h1>
        <div>
          <h1>Your Level</h1>
          <UserLevel
            userLvl={17}
            userExp={330}
            progressBarWidthPercentage={35}
          />
        </div>

        <div>
          <h1>Rewards</h1>
        </div>

        <div>
          <h1>Achivments</h1>
        </div>
      </div>
    </>
  );
};
