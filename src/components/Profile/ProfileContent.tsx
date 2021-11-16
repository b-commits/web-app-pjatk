/** @jsxImportSource @emotion/react */
import React from "react";
import {
  profileContent,
  profileMain,
  profileSidebar,
  profileContentItem,
} from "./Profile.style";
import { UserAchivments } from "./UserAchivments";
import { UserFavGames } from "./UserFavGames";
import { UserFriends } from "./UserFriends";
import { UserListings } from "./UserListings";

export const ProfileContent: React.FC = () => {
  return (
    <>
      <div css={profileContent}>
        <div css={profileMain}>
          <ProfileContentItem
            title={"Favorite Games"}
            contentComponent={<UserFavGames />}
          />

          <ProfileContentItem
            title={"Recent listings"}
            contentComponent={<UserListings />}
          />
        </div>

        <div css={profileSidebar}>
          <ProfileContentItem
            title={"Level"}
            contentComponent={<UserLevel lvl={15} />}
          />
          <ProfileContentItem
            title={"Friends"}
            contentComponent={<UserFriends />}
          />

          <ProfileContentItem
            title={"Achivments"}
            contentComponent={<UserAchivments />}
          />
        </div>
      </div>
    </>
  );
};

const ProfileContentItem: React.FC<{
  title: string;
  contentComponent: React.ReactNode;
}> = ({ title, contentComponent }) => {
  return (
    <div css={profileContentItem}>
      <h1>{title}</h1>
      {contentComponent}
    </div>
  );
};

const UserLevel: React.FC<{
  lvl: number;
}> = ({ lvl }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{lvl}</h2>
    </div>
  );
};
