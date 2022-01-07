/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { Listing } from './Listing';
import { listingListStyle } from './css/ListingList.style';
//----------
export const PROFILE_VIEW = 'PROFILEVIEW';
export const DASHBOARD_VIEW = 'DASHBOARD';
export const HOMEPAGE_VIEW = 'HOMPAGE';
//----------

interface ListingListProps {
  type: string;
  dataSet: {
    id: number;
    title: string;
    maxNumberOfPlayers?: string;
    url: string;
    desc: string;
    gameName: string;
    gameImgUrl: string;
  }[];
}

export const ListingList: FC<ListingListProps> = ({ type, dataSet }) => {
  let cssList = {};
  switch (type) {
    case HOMEPAGE_VIEW: {
      break;
    }
    case DASHBOARD_VIEW: {
      break;
    }
    case PROFILE_VIEW: {
      break;
    }
    default: {
    }
  }
  const listings = dataSet.map((listing) => (
    <Listing
      key={listing.id}
      id={listing.id}
      maxNumberOfPlayers={'0'}
      title={listing.title}
      url={listing.url}
      desc={listing.desc}
      gameName={listing.gameName}
      gameImgUrl={listing.gameImgUrl}
    />
  ));
  //------
  //RETURN
  //------
  return (
    // klasa listujaca css

    <div css={listingListStyle}>{listings}</div>
  );
};
