/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { ListingItem } from './ListingItem';
import { getAllListings } from './ApiCalls';
import {
  homeBanner,
  homeBannerContent,
  bannerConentHeader,
  bannerConentDesc,
  blueText,
  smallText,
  homeMain,
} from './Home.style';

export const Home: React.FC = () => {
  const [listings, setListings] = useState<Array<any>>([{}]);

  useEffect(() => {
    getAllListings().then((listings: any) => {
      setListings(listings.data);
    });
  }, []);

  return (
    <>
      <div css={homeBanner}>
        <div css={homeBannerContent}>
          <div css={bannerConentHeader}>
            <span css={smallText}>LOOK FOR A GROUP</span>
            <h1>
              and spend <span css={blueText}>less time in queue</span>.
            </h1>
          </div>
          <div css={bannerConentDesc}>
            <div>
              <button>SIGN UP NOW</button>
            </div>
            <div>
              <p>
                <span css={blueText}>lfg-app</span> allows you to find teammates
                for <span css={blueText}>any</span> online game out there. Sign
                up now to browse through
                <span css={blueText}> multiple listings</span> and connect with{' '}
                <span css={blueText}>other people</span>.
              </p>
              <p>
                <span css={blueText}>lfg-app</span> is very simple to use, so we
                are hoping you can spend some quality time playing with your new
                buddies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main css={homeMain}>
        {listings.map((listing, index) => {
          return (
            <ListingItem
              key={index}
              id={listing.id}
              message={listing.message}
            />
          );
        })}
      </main>
    </>
  );
};
