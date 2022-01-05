/** @jsxImportSource @emotion/react */
import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { friends, friendsItem, userAvatar } from './Profile.style';
import { getFriends } from '../Dashboard/ApiCalls';
import haha from '../../../public/gamePics/haha.jpg';

interface RouteParams {
  id: string;
}

export const UserFriends: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [friendList, setFriendList] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    getFriends(parseInt(id)).then((res: any) => {
      setFriendList(res.data);
      setLoading(false);
    });
  }, []);

  if (!friendList) return <></>;
  return (
    <div css={friends}>
      {friendList.map((friend: any) => {
        return (
          <UserFriendsItem
            userProfileUrl={`/profile/${friend.followedUser}`}
            userName={friend.nickname}
            userAvatarUrl={`/profilePics/${friend.nickname}.jpg`}
          ></UserFriendsItem>
        );
      })}
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
          <img
            src={userAvatarUrl}
            alt={userName}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = 'http://bluepito.webd.pro/logopjatk.gif';
            }}
          />
        </a>
      </div>
    </>
  );
};
