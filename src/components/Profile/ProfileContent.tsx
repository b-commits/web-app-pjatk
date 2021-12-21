/** @jsxImportSource @emotion/react */
import React from "react";
import {
  profileContent,
  profileMain,
  profileSidebar,
  profileContentItem,
} from "./Profile.style";
import { UserAchievements } from "./UserAchievements";
import { UserFavGames } from "./UserFavGames";
import { UserFriends } from "./UserFriends";
import { UserListings } from "./UserListings";
import { UserLevel } from "../Misc/UserLevel";

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
            contentComponent={
              <UserLevel
                userLvl={52}
                userExp={770}
                progressBarWidthPercentage={50}
              />
            }
          />
          <ProfileContentItem
            title={"Friends"}
            contentComponent={<UserFriends />}
          />

          <ProfileContentItem
            title={"Achievements"}
            contentComponent={<UserAchievements />}
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
