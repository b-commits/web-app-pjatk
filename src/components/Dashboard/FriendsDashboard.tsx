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
      {friends.length == 0 ? (
        <div>You haven't added any friends yet.</div>
      ) : null}
      {friends.map((friend: any) => {
        console.log(friend);
        return (
          <div css={friendElement}>
            <div
              style={{ cursor: 'pointer' }}
              title={`Visit ${friend.nickname} profile`}
              onClick={() => {
                history.push({
                  pathname: `/profile/${friend.followedUser}`,
                  state: {
                    receiverId: friend.followedUser,
                  },
                });
              }}
            >
              <Avatar src={`/profilePics/${friend.nickname}.jpg`}>
                <img
                  className='MuiAvatar-img'
                  src='http://bluepito.webd.pro/logopjatk.gif'
                />
              </Avatar>
            </div>
            {friend.nickname}
            <div>
              <i
                className='far fa-id-card'
                style={{ cursor: 'pointer', marginRight: '30px' }}
                title={`Visit ${friend.nickname} profile`}
                onClick={() => {
                  history.push({
                    pathname: `/profile/${friend.followedUser}`,
                    state: {
                      receiverId: friend.followedUser,
                    },
                  });
                }}
              />
              <i
                className='fas fa-envelope-open-text'
                style={{ cursor: 'pointer' }}
                title={`Write Message to ${friend.nickname}`}
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
          </div>
        );
      })}
    </div>
  );
};
