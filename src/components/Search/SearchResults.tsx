/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const [filteredUsers, setFilteredUsers] = useState<Array<any>>([]);

  useEffect(() => {
    getUsersByNickname(location.state.queryString).then((users: any) => {
      setFilteredUsers(users.data);
    });
  }, []);

  return (
    <div css={searchWrapper}>
      <h1>Search results:</h1>
      <ul css={searchList}>
        <Divider />
        {filteredUsers.map((user, index) => {
          return (
            <div key={index}>
              <li css={listItem}>
                <Avatar css={avatar} src={imgLink} />
                <p css={nickname}>{user.nickname}</p>
                <Button>View profile</Button>
                <Button>Follow</Button>
              </li>
              <Divider />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
