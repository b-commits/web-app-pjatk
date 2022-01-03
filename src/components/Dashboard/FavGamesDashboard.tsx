/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState, useContext } from 'react';
import {
  gameGallery,
  galleryItem,
  galleryGame,
  muiAlert,
} from './css/FavGames.styles';
import { Checkbox, LinearProgress } from '@material-ui/core';
import { getLikedGames, likeGame, unlikeGame } from './ApiCalls';
import { AuthContext } from '../../context/AuthContext';
import { Alert } from '@material-ui/lab';

export const FavGamesDashboard: FC = () => {
  const { currentUser } = useContext(AuthContext);
  // Array of boolean flags for each of the 10 predefined games:
  const [likes, updateLikes] = useState(Array(10).fill(false));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    setLoading(true);
    const tempLikes = Array(10).fill(false);
    getLikedGames(currentUser.id).then((res) => {
      res.data.forEach((game: any) => {
        tempLikes[game.id - 1] = true;
      });
      updateLikes(tempLikes);
      setLoading(false);
    });
  }, []);

  /*
    Gets the id of a <Choicebox/> element and updates an array of boolean flags.
    Copying to the temp variable is needed because react state is immutable.
  */
  const handleChange = (event: any) => {
    setLoading(true);
    let temp = [...likes];
    if (temp[event.target.id]) {
      unlikeGame(currentUser.id, parseInt(event.target.id) + 1).then(() => {});
      temp[event.target.id] = !temp[event.target.id];
    } else {
      if (likes.filter((value) => value == true).length <= 3) {
        likeGame(currentUser.id, parseInt(event.target.id) + 1).then(() => {});
        temp[event.target.id] = !temp[event.target.id];
      } else setError(true);
    }
    updateLikes(temp);
    setLoading(false);
  };

  return (
    <>
      <h1>Pick at most five of your favourite games:</h1>
      <h4>
        Your favourite games will be displayed first when you're browsing
        through listings.
      </h4>
      {loading && <LinearProgress color="primary" />}
      {error && (
        <Alert severity="warning" css={muiAlert}>
          Sorry, you can only favourite a maximum of five games.
        </Alert>
      )}

      <div css={gameGallery}>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/1.jpeg"></img>
          <Checkbox id="0" checked={likes[0]} onChange={handleChange} />
          <label>Apex Legends</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/2.jpeg"></img>
          <Checkbox id="1" checked={likes[1]} onChange={handleChange} />
          <label>Counter Strike: Global Offensive</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/3.jpeg"></img>
          <Checkbox id="2" checked={likes[2]} onChange={handleChange} />
          <label>Dota 2</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/4.jpeg"></img>
          <Checkbox id="3" checked={likes[3]} onChange={handleChange} />
          <label>Ready or Not</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/5.jpeg"></img>
          <Checkbox id="4" checked={likes[4]} onChange={handleChange} />
          <label>Rainbow Six: Siege</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/6.jpeg"></img>
          <Checkbox id="5" checked={likes[5]} onChange={handleChange} />
          <label>Stardew Valley</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/7.jpeg"></img>
          <Checkbox id="6" checked={likes[6]} onChange={handleChange} />
          <label>It Takes Two</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/8.jpeg"></img>
          <Checkbox id="7" checked={likes[7]} onChange={handleChange} />
          <label>Terraria</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/9.jpeg"></img>
          <Checkbox id="8" checked={likes[8]} onChange={handleChange} />
          <label>Valheim</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/10.jpeg"></img>
          <Checkbox id="9" checked={likes[9]} onChange={handleChange} />
          <label>World of Warships</label>
        </div>
      </div>
    </>
  );
};
