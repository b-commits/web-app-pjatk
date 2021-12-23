/** @jsxImportSource @emotion/react */
import React from 'react';
import { friends, friendsItem } from './Profile.style';

export const UserFriends: React.FC = () => {
  return (
    <div css={friends}>
      <UserFriendsItem
        userProfileUrl={'#'}
        userName={'User_1'}
        userAvatarUrl={
          'https://opgg-static.akamaized.net/images/profile_icons/profileIcon4293.jpg'
        }
      />
      <UserFriendsItem
        userProfileUrl={'#'}
        userName={'User_2'}
        userAvatarUrl={
          'https://opgg-static.akamaized.net/images/lol/champion/Galio.png'
        }
      />
      <UserFriendsItem
        userProfileUrl={'#'}
        userName={'User_3'}
        userAvatarUrl={
          'https://opgg-static.akamaized.net/images/lol/champion/Jax.png'
        }
      />
      <UserFriendsItem
        userProfileUrl={'#'}
        userName={'User_4'}
        userAvatarUrl={
          'https://opgg-static.akamaized.net/images/lol/champion/Malphite.png'
        }
      />
      <UserFriendsItem
        userProfileUrl={'#'}
        userName={'User_5'}
        userAvatarUrl={
          'https://opgg-static.akamaized.net/images/profile_icons/profileIcon4086.jpg'
        }
      />
      <UserFriendsItem
        userProfileUrl={'#'}
        userName={'User_6'}
        userAvatarUrl={
          'https://static.wikia.nocookie.net/gensin-impact/images/0/02/Character_Diluc_Thumb.png'
        }
      />
      <UserFriendsItem
        userProfileUrl={'#'}
        userName={'User_7'}
        userAvatarUrl={
          'https://opgg-static.akamaized.net/images/profile_icons/profileIcon4970.jpg'
        }
      />
      <UserFriendsItem
        userProfileUrl={'#'}
        userName={'User_8'}
        userAvatarUrl={
          'https://opgg-static.akamaized.net/images/profile_icons/profileIcon3156.jpg'
        }
      />
      <UserFriendsItem
        userProfileUrl={'#'}
        userName={'User_9'}
        userAvatarUrl={
          'https://opgg-static.akamaized.net/images/profile_icons/profileIcon4893.jpg'
        }
      />
    </div>
  );
};

const UserFriendsItem: React.FC<{
  userProfileUrl: string;
  userName: string;
  userAvatarUrl: string;
}> = ({ userProfileUrl, userName, userAvatarUrl }) => {
  return (
    <>
      <div css={friendsItem}>
        <a href={userProfileUrl} title={userName}>
          <img src={userAvatarUrl} alt={userName} />
        </a>
      </div>
    </>
  );
};
