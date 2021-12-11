/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  userDetailsWrap,
  userDetailsData,
  userAvatar,
  userStatusDot,
  userInfoWrap,
  userInfoWrapItem,
  userActions,
  userActionsButton,
} from './Profile.style';

export const UserDetails: React.FC<{ isUserOnline: boolean }> = ({
  isUserOnline,
}) => {
  return (
    <>
      <div
        css={userDetailsWrap}
        style={{
          background:
            'url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg) no-repeat ',
          backgroundSize: 'cover',
        }}
      >
        <div css={userDetailsData}>
          <UserAvatar
            avatarURL="http://bluepito.webd.pro/logopjatk.gif"
            nickName="PJATK"
            isUserOnline={isUserOnline}
          />
        </div>
      </div>
      <UserInfo />
    </>
  );
};

const UserAvatar: React.FC<{
  avatarURL: string;
  nickName: string;
  isUserOnline: boolean;
}> = ({ avatarURL, nickName, isUserOnline }) => {
  return (
    <>
      <img
        css={userAvatar}
        src={avatarURL}
        alt={'Avatar użytkowniak: ' + nickName}
      />
      <h1>
        <span
          css={userStatusDot}
          style={
            isUserOnline
              ? { backgroundColor: '#64a338' }
              : { backgroundColor: '#e03b24' }
          }
        >
          {' '}
        </span>
        {nickName}
      </h1>
    </>
  );
};

const UserInfo: React.FC = () => {
  return (
    <>
      <div css={userInfoWrap}>
        <UserInfoWrapItem number={237316} value={'Profile Views'} />
        <UserInfoWrapItem number={137} value={'Games'} />
        <UserInfoWrapItem number={34} value={'Achievements'} />
        <UserInfoWrapItem number={12} value={'Games Played'} />
        <UserInfoWrapItem number={7} value={'Friends'} />

        <UserActions />
      </div>
    </>
  );
};

const UserInfoWrapItem: React.FC<{
  number: number;
  value: string;
}> = ({ number, value }) => {
  return (
    <>
      <div css={userInfoWrapItem}>
        <span>{number}</span>
        {value}
      </div>

      <i></i>
    </>
  );
};

const UserActions: React.FC = () => {
  return (
    <>
      <div css={userActions}>
        <ProfileActionButton color={'#44c767'} value={'Add friend'} />
        <ProfileActionButton color={'#eeb44f'} value={'Reward'} />
        <ProfileActionButton color={'#f24437'} value={'Report'} />
      </div>
    </>
  );
};

const ProfileActionButton: React.FC<{
  color: string;
  value: string;
}> = ({ color, value }) => {
  return (
    <button css={userActionsButton} style={{ backgroundColor: color }}>
      {value}
    </button>
  );
};
