/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Listing, MY_PARTICIPATION_VIEW } from '../Misc/Listing';
import { AuthContext } from '../../context/AuthContext';
import { getFriends, getListingsUserJoined } from './ApiCalls';
import {
  gridWrapper,
  participationListingListStyle,
} from './css/Dashboard.style';

export const ParticipationsDashboard: FC = () => {
  const { currentUser } = useContext(AuthContext);
  const [userListings, setUserListings] = useState([]);
  const [friends, setFriends] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) return;
    getFriends(currentUser.id).then((res: any) => {
      setFriends(res.data);
    });
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    getListingsUserJoined(currentUser.id).then((res: any) => {
      setUserListings(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div css={gridWrapper}>
      <h1>Your listings:</h1>
      {friends.length == 0 ? (
        <div>You haven't joined any listings just yet.</div>
      ) : null}
      <div css={participationListingListStyle}>
        {userListings.map((listing: any, index: any) => {
          return (
            <Listing
              key={index}
              maxNumberOfPlayers={listing.maxNumberOfPlayers}
              id={listing.listingId}
              title={listing.message}
              url={''}
              desc={listing.message}
              gameName={listing.listingGame}
              gameImgUrl={`/gamePics/${listing.listingGame}.jpeg`}
              createdAt={listing.created_at}
              status={listing.status}
              activeView={MY_PARTICIPATION_VIEW}
            />
          );
        })}
      </div>
    </div>
  );
};
