/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import {
  userListings,
  listing,
  listingInfo,
  listingButtonsWrap,
  listingButton,
} from './Profile.style';
import { useParams } from 'react-router-dom';
import { getUserListings } from './ApiCalls';

interface RouteParams {
  id: string;
}

const getGameName = (id: number) => {
  switch (id) {
    case 1:
      return 'Apex Legends';
    case 2:
      return 'CS: GO';
    case 3:
      return 'DOTA 2';
    case 4:
      return 'Ready or Not';
    case 5:
      return 'Rainbow Six: Siege';
    case 6:
      return 'Stardew Valley';
    case 7:
      return 'It Takes Two';
    case 8:
      return 'Terraria';
    case 9:
      return 'Valheim';
    case 10:
      return 'World of Warships';
  }
};

export const UserListings: React.FC = () => {
  const [userListings, setUserListings] = useState([]);
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    getUserListings(parseInt(id)).then((res: any) => {
      console.log(res.data);
      setUserListings(res.data);
    });
  }, []);

  return (
    <div css={userListings}>
      {userListings.length == 0 && <p>You haven't created any listings yet.</p>}
      {userListings.map((listing: any, index: any) => {
        return (
          <Listing
            key={index}
            listingName={getGameName(listing.listingGame)}
            listingUrl={''}
            listingDesc={listing.message}
            gameName={listing.game}
            gameImgUrl={`/gamePics/${listing.listingGame}.jpeg`}
          />
        );
      })}
    </div>
  );
};

const Listing: React.FC<{
  listingName?: string;
  listingUrl: string;
  listingDesc: string;
  gameName: string;
  gameImgUrl: string;
}> = ({ listingName, listingUrl, listingDesc, gameName, gameImgUrl }) => {
  return (
    <>
      <div css={listing}>
        <img alt="gameImage" src={gameImgUrl} />
        <div css={listingInfo}>
          <h3>{listingName}</h3>
          {listingDesc}
          <br />
        </div>
        <div css={listingButtonsWrap}>
          <UserListingsButton
            listingUrl={''}
            color={'#44c767'}
            value={'Open'}
          />
          <UserListingsButton
            listingUrl={'/'}
            color={'#007dc1'}
            value={'Home'}
          />
          <UserListingsButton
            listingUrl={'/dashboard/settings'}
            color={'#f24437'}
            value={'Report'}
          />
        </div>
      </div>
    </>
  );
};

const UserListingsButton: React.FC<{
  listingUrl: string;
  color: string;
  value: string;
}> = ({ listingUrl, color, value }) => {
  return (
    <a href={listingUrl}>
      <button css={listingButton} style={{ backgroundColor: color }}>
        {value}
      </button>
    </a>
  );
};
