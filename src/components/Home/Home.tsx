/** @jsxImportSource @emotion/react */
import React from 'react';
import { ListingItem } from './ListingItem';
import {
  homeBanner,
  homeBannerContent,
  bannerConentHeader,
  bannerConentDesc,
  blueText,
  smallText,
  homeMain,
} from './Home.style';

const HOMEPAGE_NUM_LISTINGS: number = 6;

export const Home: React.FC = () => {
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
        {Array(HOMEPAGE_NUM_LISTINGS).fill(<ListingItem />)}
      </main>
    </>
  );
};
