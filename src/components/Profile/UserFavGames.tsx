/** @jsxImportSource @emotion/react */
import { Button, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getLikedGames } from '../Dashboard/ApiCalls';
import { favoriteGames, favoriteGamesItem } from './Profile.style';

interface RouteParams {
  id: string;
}

export const UserFavGames: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const { id } = useParams<RouteParams>();

  const [likedGames, setLikedGames] = useState<any>([]);

  useEffect(() => {
    getLikedGames(parseInt(id)).then((res) => {
      setLikedGames(res.data);
    });
  }, []);

  if (!currentUser) {
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
        ;
      </div>
    );
  }

  return (
    <div css={favoriteGames}>
      {likedGames.length > 0
        ? likedGames.map((game: any) => {
            return (
              <UserFavGamesItem
                gameImgUrl={`/gamePics/${game.id}.jpeg`}
                gameName={game.title}
                gameUrl={''}
              />
            );
          })
        : [
            currentUser.id == id ? (
              <Button onClick={() => history.push('/dashboard/favgames')}>
                + Select your favourite games
              </Button>
            ) : (
              <div>This user has no favourite games.</div>
            ),
          ]}
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
