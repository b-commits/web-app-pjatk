/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { main } from "./css/Dashboard.style";
import { UserLevel } from "./UserLevel";

export const Dashboard: FC = () => {
  return (
    <>
      <div css={main}>
        <h1> Home </h1>
        <div>
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
