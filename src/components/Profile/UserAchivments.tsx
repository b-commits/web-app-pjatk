/** @jsxImportSource @emotion/react */
import React from "react";
import { userAchivments, userAchivmentsItem } from "./Profile.style";

export const UserAchivments: React.FC = () => {
  return (
    <div css={userAchivments}>
      <UserAchivmentsItem achivmentName={"2 years account"} achivmentUrl={""} />
      <UserAchivmentsItem
        achivmentName={"Made 10 listings"}
        achivmentUrl={""}
      />
      <UserAchivmentsItem
        achivmentName={"Awarded 100 times"}
        achivmentUrl={""}
      />
      <UserAchivmentsItem
        achivmentName={"Community leader"}
        achivmentUrl={""}
      />
      <UserAchivmentsItem achivmentName={"Gamer"} achivmentUrl={""} />
    </div>
  );
};

const UserAchivmentsItem: React.FC<{
  achivmentName: string;
  achivmentUrl: string;
}> = ({ achivmentName, achivmentUrl }) => {
  return (
    <>
      <div css={userAchivmentsItem}>
        <a href={achivmentUrl} title={achivmentName}>
          <img
            src={"http://bluepito.webd.pro/inztmpimg/achiv.webp"}
            alt={achivmentName}
          />
          {achivmentName}
        </a>
      </div>
    </>
  );
};
