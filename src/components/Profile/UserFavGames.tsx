/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getLikedGames } from '../Dashboard/ApiCalls';
import { favoriteGames, favoriteGamesItem } from './Profile.style';

export const UserFavGames: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const [likedGames, setLikedGames] = useState<any>([]);

  useEffect(() => {
    if (!currentUser) return;
    getLikedGames(currentUser.id).then((res) => {
      setLikedGames(res.data);
    });
    console.log(likedGames);
  }, []);

  return (
    <div css={favoriteGames}>
      {likedGames.map((game: any) => {
        return (
          <UserFavGamesItem
            gameImgUrl={`/gamePics/${game.id}.jpeg`}
            gameName={game.title}
            gameUrl={''}
          />
        );
      })}
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
