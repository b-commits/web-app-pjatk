/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { AuthContext } from '../../context/AuthContext';
import { friendElement } from './css/FavGames.styles';
import { getFriends } from './ApiCalls';

export const FriendsDashboard: FC = () => {
  const { currentUser } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) return;
    getFriends(currentUser.id).then((res: any) => {
      setFriends(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Your friends:</h1>
      {friends.map((friend: any) => {
        return (
          <div css={friendElement}>
            <Avatar src={`/profilePics/${friend.nickname}.jpg`} />
            {friend.nickname}
            <i
              className="fas fa-envelope-open-text"
              onClick={() => {
                history.push({
                  pathname: '/message',
                  state: {
                    receiverId: friend.followedUser,
                  },
                });
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
