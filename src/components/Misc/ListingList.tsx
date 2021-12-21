import React, { FC } from "react";
import { Listing } from "./Listing";
//----------
export const PROFILE_VIEW = "PROFILEVIEW";
export const DASHBOARD_VIEW = "DASHBOARD";
export const HOMEPAGE_VIEW = "HOMPAGE";
//----------

interface ListingListProps {
  type: string;
  dataSet: {
    id: number;
    title: string;
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

    <div>{listings}</div>
  );
};
