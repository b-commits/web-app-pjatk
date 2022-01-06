/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getUsersByNickname } from '../Navbar/ApiCalls';
import {
  searchList,
  searchWrapper,
  listItem,
  avatar,
  nickname,
} from './Search.style';
import { Avatar, Button, Divider } from '@material-ui/core';

const imgLink = 'http://bluepito.webd.pro/logopjatk.gif';

export const SearchResults: React.FC<any> = () => {
  const location: any = useLocation();
  const history = useHistory();
  const [filteredUsers, setFilteredUsers] = useState<Array<any>>([]);

  useEffect(() => {
    getUsersByNickname(location.state.queryString).then((users: any) => {
      setFilteredUsers(users.data);
    });
  }, [location.state.queryString]);

  const navigateToProfile = (id: any) => {
    history.push(`/profile/${id}`);
  };

  return (
    <div css={searchWrapper}>
      <h1>Search results:</h1>
      <ul css={searchList}>
        <Divider />
        {filteredUsers.map((user, index) => {
          return (
            <div key={index}>
              <li css={listItem}>
                <Avatar css={avatar} src={`/profilePics/${user.nickname}.jpg`}>
                  <img
                    className="MuiAvatar-img"
                    src="http://bluepito.webd.pro/logopjatk.gif"
                  />
                </Avatar>
                <p css={nickname}>{user.nickname}</p>
                <Button
                  onClick={() => {
                    navigateToProfile(user.id);
                  }}
                >
                  View profile
                </Button>
              </li>
              <Divider />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
