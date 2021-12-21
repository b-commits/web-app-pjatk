/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { UserLevel } from "./UserLevel";
import { DashboardSection } from "./DashboardSection";
export const Dashboard: FC = () => {
  return (
    <>
      <h1> Home </h1>
      <div>
        <DashboardSection
          title={"Your level"}
          component={
            <UserLevel
              userLvl={17}
              userExp={330}
              progressBarWidthPercentage={35}
            />
          }
        />
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
