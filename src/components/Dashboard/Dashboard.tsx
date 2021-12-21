/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { UserLevel } from "../Misc/UserLevel";
import { SectionDashboard } from "./SectionDashboard";

export const Dashboard: FC = () => {
  const userLevelComponent = (
    <UserLevel userLvl={17} userExp={330} progressBarWidthPercentage={35} />
  );

  return (
    <>
      <h1> Home </h1>
      <div>
        <SectionDashboard title={"Your level"} component={userLevelComponent} />
      </div>

      <div>
        <h1>Rewards</h1>
      </div>

      <div>
        <h1>Achivments</h1>
      </div>
    </>
  );
};
