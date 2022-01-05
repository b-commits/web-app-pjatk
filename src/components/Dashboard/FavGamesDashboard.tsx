/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState, useContext } from 'react';
import {
  gameGallery,
  galleryItem,
  galleryGameImg,
  galleryGameTitle,
  muiAlert,
} from './css/FavGames.styles';
import { Checkbox, LinearProgress } from '@material-ui/core';
import { getLikedGames, likeGame, unlikeGame } from './ApiCalls';
import { AuthContext } from '../../context/AuthContext';
import { Alert } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';

const CustomColorCheckbox = withStyles({
  root: {
    color: '#ffffff',
    '&$checked': {
      color: '#f50057',
    },
  },
  checked: {},
})((props: any) => <Checkbox color='default' {...props} />);

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
      if (likes.filter((value) => value == true).length <= 4) {
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
      {loading && <LinearProgress color='primary' />}
      {error && (
        <Alert severity='warning' css={muiAlert}>
          Sorry, you can only favourite a maximum of five games.
        </Alert>
      )}

      <div css={gameGallery}>
        <div css={galleryItem}>
          <img css={galleryGameImg} src='/gamePics/1.jpeg' alt='Apex'></img>
          <div css={galleryGameTitle}>
            <label>Apex Legends</label>
            <CustomColorCheckbox
              id='0'
              checked={likes[0]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div css={galleryItem}>
          <img css={galleryGameImg} src='/gamePics/2.jpeg'></img>
          <div css={galleryGameTitle}>
            <label>Counter Strike: Global Offensive</label>
            <CustomColorCheckbox
              id='1'
              checked={likes[1]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div css={galleryItem}>
          <img css={galleryGameImg} src='/gamePics/3.jpeg'></img>
          <div css={galleryGameTitle}>
            <label>Dota 2</label>
            <CustomColorCheckbox
              id='2'
              checked={likes[2]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div css={galleryItem}>
          <img css={galleryGameImg} src='/gamePics/4.jpeg'></img>
          <div css={galleryGameTitle}>
            <label>Ready or Not</label>
            <CustomColorCheckbox
              id='3'
              checked={likes[3]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div css={galleryItem}>
          <img css={galleryGameImg} src='/gamePics/5.jpeg'></img>
          <div css={galleryGameTitle}>
            <label>Rainbow Six: Siege</label>
            <CustomColorCheckbox
              id='4'
              checked={likes[4]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div css={galleryItem}>
          <img css={galleryGameImg} src='/gamePics/6.jpeg'></img>
          <div css={galleryGameTitle}>
            <label>Stardew Valley</label>
            <CustomColorCheckbox
              id='5'
              checked={likes[5]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div css={galleryItem}>
          <img css={galleryGameImg} src='/gamePics/7.jpeg'></img>
          <div css={galleryGameTitle}>
            <label>It Takes Two</label>
            <CustomColorCheckbox
              id='6'
              checked={likes[6]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div css={galleryItem}>
          <img css={galleryGameImg} src='/gamePics/8.jpeg'></img>
          <div css={galleryGameTitle}>
            <label>Terraria</label>
            <CustomColorCheckbox
              id='7'
              checked={likes[7]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div css={galleryItem}>
          <img css={galleryGameImg} src='/gamePics/9.jpeg'></img>
          <div css={galleryGameTitle}>
            <label>Valheim</label>
            <CustomColorCheckbox
              id='8'
              checked={likes[8]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div css={galleryItem}>
          <img css={galleryGameImg} src='/gamePics/10.jpeg'></img>
          <div css={galleryGameTitle}>
            <label>World of Warships</label>
            <Checkbox id='9' checked={likes[9]} onChange={handleChange} />
          </div>
        </div>
      </div>
    </>
  );
};
