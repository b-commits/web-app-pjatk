/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { gameGallery, galleryItem, galleryGame } from './css/FavGames.styles';
import { Checkbox } from '@material-ui/core';

export const FavGamesDashboard: FC = () => {
  return (
    <>
      <h1>Pick at most five of your favourite games:</h1>
      <div css={gameGallery}>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/1.jpeg"></img>
          <Checkbox></Checkbox>
          <label>Apex Legends</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/2.jpeg"></img>
          <Checkbox></Checkbox>
          <label>Counter Strike: Global Offensive</label>
        </div>{' '}
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/3.jpeg"></img>
          <Checkbox></Checkbox>
          <label>Dota 2</label>
        </div>{' '}
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/4.jpeg"></img>
          <Checkbox></Checkbox>
          <label>Ready or Not</label>
        </div>{' '}
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/5.jpeg"></img>
          <Checkbox></Checkbox>
          <label>Rainbow Six: Siege</label>
        </div>{' '}
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/6.jpeg"></img>
          <Checkbox></Checkbox>
          <label>Stardew Valley</label>
        </div>{' '}
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/7.jpeg"></img>
          <Checkbox></Checkbox>
          <label>It Takes Two</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/8.jpeg"></img>
          <Checkbox></Checkbox>
          <label>Terraria</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/9.jpeg"></img>
          <Checkbox></Checkbox>
          <label>Valheim</label>
        </div>
        <div css={galleryItem}>
          <img css={galleryGame} src="/gamePics/10.jpeg"></img>
          <Checkbox></Checkbox>
          <label>World of Warships</label>
        </div>
      </div>
    </>
  );
};
