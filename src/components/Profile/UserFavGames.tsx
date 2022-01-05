/** @jsxImportSource @emotion/react */
import { Button, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { GAME_LINKS } from '../../utils/GameURL';
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

  const getGameUrl = (id: string) => {
    switch (parseInt(id)) {
      case 1:
        return GAME_LINKS.APEX;
      case 2:
        return GAME_LINKS.CSGO;
      case 3:
        return GAME_LINKS.DOTA;
      case 4:
        return GAME_LINKS.RON;
      case 5:
        return GAME_LINKS.SIEGE;
      case 6:
        return GAME_LINKS.STARDEW;
      case 7:
        return GAME_LINKS.ITT;
      case 8:
        return GAME_LINKS.TERRARIA;
      case 9:
        return GAME_LINKS.VALHEIM;
      case 10:
        return GAME_LINKS.WARSHIPS;
      default:
        return GAME_LINKS.WARSHIPS;
    }
  };

  if (!currentUser) {
    return (
      <div css={favoriteGames}>
        {likedGames.map((game: any) => {
          return (
            <UserFavGamesItem
              gameImgUrl={`/gamePics/${game.id}.jpeg`}
              gameName={game.title}
              gameUrl={getGameUrl(game.id)}
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
                gameUrl={getGameUrl(game.id)}
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
  gameUrl: string | undefined;
}> = ({ gameImgUrl, gameName, gameUrl }) => {
  console.log('got nothing' + gameUrl);
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
