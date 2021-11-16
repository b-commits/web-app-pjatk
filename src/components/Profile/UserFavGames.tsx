/** @jsxImportSource @emotion/react */
import React from 'react';
import { favoriteGames, favoriteGamesItem } from './Profile.style';

export const UserFavGames: React.FC = () => {
  return (
    <div css={favoriteGames}>
      <UserFavGamesItem
        gameImgUrl={'http://bluepito.webd.pro/inztmpimg/lol.jpg'}
        gameName={'League of Legends'}
        gameUrl={''}
      />
      <UserFavGamesItem
        gameImgUrl={'http://bluepito.webd.pro/inztmpimg/over.jpg'}
        gameName={'Overwatch'}
        gameUrl={''}
      />
      <UserFavGamesItem
        gameImgUrl={'http://bluepito.webd.pro/inztmpimg/genshin.jpg'}
        gameName={'Genshin Impact'}
        gameUrl={''}
      />
      <UserFavGamesItem
        gameImgUrl={'http://bluepito.webd.pro/inztmpimg/bf2042.jpg'}
        gameName={'Battlefield 2042'}
        gameUrl={''}
      />
      <UserFavGamesItem
        gameImgUrl={'http://bluepito.webd.pro/inztmpimg/csgo.jpg'}
        gameName={'Counter Strike: Global Offensive'}
        gameUrl={''}
      />
    </div>
  );
};

const UserFavGamesItem: React.FC<{
  gameImgUrl: string;
  gameName: string;
  gameUrl: string;
}> = ({ gameImgUrl, gameName, gameUrl }) => {
  return (
    <>
      <div css={favoriteGamesItem}>
        <a href={gameUrl} title={gameName}>
          <img src={gameImgUrl} alt={gameName} />
        </a>
      </div>
    </>
  );
};
