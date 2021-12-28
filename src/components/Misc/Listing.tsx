/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { Button, DANGER, INFO, SUCCES } from './Button';
import {
  listingItemWrap,
  listingHeader,
  listingTitle,
  gameBox,
  gameImgStyle,
  gameNameStyle,
  listingDesc,
  listingFooter,
} from './css/Listing.style';
interface ListingProps {
  id: number;
  title: string;
  url: string;
  desc: string;
  gameName: string;
  gameImgUrl: string;
}
export const Listing: FC<ListingProps> = ({
  id,
  title,
  url,
  desc,
  gameName,
  gameImgUrl,
}) => {
  const titleSliced = title.length > 40 ? desc.slice(0, 40) + '...' : title;
  const description = desc.length > 70 ? desc.slice(0, 70) + '...' : desc;
  const gameNameSlice =
    gameName.length > 80 ? gameName.slice(0, 90) + '...' : gameName;

  return (
    <div css={listingItemWrap}>
      <div css={listingHeader}>
        <i className='fas fa-users'></i>

        <h1 title={title} css={listingTitle}>
          {titleSliced}
        </h1>
        <i className='fas fa-share'></i>
      </div>
      <div css={gameBox}>
        <img css={gameImgStyle} src={gameImgUrl} alt={gameName} />
        <span css={gameNameStyle}>{gameNameSlice}</span>
      </div>
      <div css={listingDesc}>
        <p>{description}</p>
      </div>
      <div css={listingFooter}>
        <Button
          title='Delete'
          type={DANGER}
          onCLick={() => {
            console.log('klik');
          }}
        />{' '}
        <Button
          title='Menge'
          type={INFO}
          onCLick={() => {
            console.log('klik');
          }}
        />{' '}
        <Button
          title='Open'
          type={SUCCES}
          onCLick={() => {
            console.log('klik');
          }}
        />
      </div>
    </div>
  );
};
