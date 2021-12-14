/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { Main } from "./css/Dashboard.style";

export const Dashboard: FC = () => {
  return (
    <>
      <div css={Main}>
        <h1> [TODO] </h1>
        <div>
          <h1>Your Level</h1>
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
