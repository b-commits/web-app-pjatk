/** @jsxImportSource @emotion/react */
import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { friends, friendsItem } from './Profile.style';
import { getFriends } from '../Dashboard/ApiCalls';

interface RouteParams {
  id: string;
}

export const UserFriends: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [friendList, setFriendList] = useState<any>([]);
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
            userProfileUrl={`/profile/${friend.id}`}
            userName={friend.nickname}
            userAvatarUrl={
              'https://opgg-static.akamaized.net/images/profile_icons/profileIcon4293.jpg'
            }
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
          <img src={userAvatarUrl} alt={userName} />
        </a>
      </div>
    </>
  );
};
