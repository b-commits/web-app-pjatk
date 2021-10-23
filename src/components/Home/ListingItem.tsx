/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  blueText,
  listingItem,
  listingHeader,
  listingHeaderTitle,
  listingImg,
  listingDesc,
  listingFooter,
} from './Home.style';

export const ListingItem: React.FC = () => {
  return (
    <div css={listingItem}>
      <div>
        <div css={listingHeader}>
          <i className="fas fa-users"></i>
          <span css={listingHeaderTitle}>
            Listing X <br /> Stardew Valley
          </span>
          <i className="fas fa-share"></i>
        </div>
      </div>
      <div css={listingImg}>
        <img
          alt=""
          src="https://d-art.ppstatic.pl/kadry/k/r/1/51/a5/5e287d9223f8f_o_large.jpg"
        />
      </div>
      <div css={listingDesc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga mollitia
        reiciendis cum nostrum, unde exercitationem, libero assumenda,
        temporibus vero est totam dolor delectus neque cupiditate commodi
        facilis necessitatibus atque dicta.
      </div>
      <div css={listingFooter}>
        <span css={blueText}>JOIN IN</span>
        <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
        <span css={blueText}>HIDE</span>
      </div>
    </div>
  );
};
