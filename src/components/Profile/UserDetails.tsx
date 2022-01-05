/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useState } from 'react';
import {
  getFollowedUsers,
  getUserByID,
  getUserDetails,
  unfollowUser,
} from './ApiCalls';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';
import { followUser } from './ApiCalls';
import {
  userDetailsWrap,
  userDetailsData,
  userAvatar,
  userStatusDot,
  userInfoWrap,
  userInfoWrapItem,
  userActions,
  userActionsButton,
  userInfoStats,
} from './Profile.style';

interface RouteParams {
  id: string;
}

export const UserDetails: React.FC<{ isUserOnline: boolean }> = ({
  isUserOnline,
}) => {
  const { id } = useParams<RouteParams>();
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getUserByID(id).then((user: any) => {
      setUser(user);
    });
  }, [id]);

  if (user.data != null) {
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
              nickName={user.data.nickname}
              isUserOnline={isUserOnline}
            />
          </div>
        </div>
        <UserInfo />
      </>
    );
  } else return <CircularProgress />;
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
        ></span>
        {nickName}
      </h1>
    </>
  );
};

const UserInfo: React.FC = () => {
  /**
    @desc Ideally, the calls should only be made in the UserDetails component and the user
    object should be passed down as a props.
  */
  const { id } = useParams<RouteParams>();
  const [userDetails, setUserDetails] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getUserDetails(id).then((res: any) => {
      setUserDetails(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <CircularProgress />;
  return (
    <>
      <div css={userInfoWrap}>
        <div css={userInfoStats}>
          <UserInfoWrapItem number={userDetails.numExp} value={'Experience'} />
          <UserInfoWrapItem number={userDetails.numFavGames} value={'Games'} />
          <UserInfoWrapItem
            number={userDetails.numAchivements}
            value={'Achievements'}
          />
          <UserInfoWrapItem number={0} value={'Games Played'} />
          <UserInfoWrapItem number={userDetails.numFriends} value={'Friends'} />
        </div>
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

const UserActions: any = () => {
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const { currentUser } = useContext(AuthContext);
  const [isFollowing, setFollowing] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);

  // Check if user is followed to rerender the button:
  useEffect(() => {
    if (!currentUser) return;
    getFollowedUsers(parseInt(currentUser.id)).then((res) => {
      if (
        res.data.filter((followed: any) => followed.followedUser == id).length >
        0
      ) {
        setFollowing(true);
      }
    });
  }, []);

  const handleMessageRedirect = () => {
    history.push({
      pathname: '/message',
      state: {
        receiverId: id,
      },
    });
  };

  const handleFollow = () => {
    isLoading(true);
    followUser(currentUser.id, parseInt(id)).then(() => {
      isLoading(false);
      setFollowing(true);
    });
  };

  const handleUnfollow = () => {
    isLoading(true);
    unfollowUser(currentUser.id, parseInt(id))
      .then(() => {
        isLoading(false);
        setFollowing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (currentUser) {
    if (currentUser.id == id) {
      return (
        <>
          <ProfileActionButton
            color={'#3f51b5'}
            value={'Home'}
            handleClick={() => {
              history.push('/');
            }}
          />
        </>
      );
    } else {
      return (
        <>
          <div css={userActions}>
            {loading ? (
              <CircularProgress />
            ) : (
              [
                isFollowing ? (
                  <ProfileActionButton
                    color={'orange'}
                    value={'Unfollow   '}
                    handleClick={handleUnfollow}
                  />
                ) : (
                  <ProfileActionButton
                    color={'#44c767'}
                    value={'Follow   '}
                    handleClick={handleFollow}
                  />
                ),
              ]
            )}
            <ProfileActionButton
              color={'#eeb44f'}
              value={'Message'}
              handleClick={handleMessageRedirect}
            />
            <ProfileActionButton color={'#f24437'} value={'Report'} />
          </div>
        </>
      );
    }
  }
  if (!currentUser)
    return (
      <>
        <div css={userActions}></div>
      </>
    );
};

export const ProfileActionButton: React.FC<{
  color: string;
  value: string;
  handleClick?: any;
}> = ({ color, value, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      css={userActionsButton}
      style={{ backgroundColor: color }}
    >
      {value}
    </button>
  );
};
