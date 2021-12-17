/** @jsxImportSource @emotion/react */
import React from 'react';
import { listing } from '../Dashboard/css/Dashboard.style';
import {
  blueText,
  listingItem,
  listingHeader,
  listingHeaderTitle,
  listingImg,
  listingDesc,
  listingFooter,
} from './Home.style';

interface ListingProps {
  id: number;
  title: string;
  message: string;
  createdAt: any;
  status: boolean;
}

export const ListingItem: React.FC<any> = ({
  id,
  title,
  message,
  createdAt,
  status,
}: ListingProps) => {
  return (
    <div css={listingItem}>
      <div>
        <div css={listingHeader}>
          <i className="fas fa-users"></i>
          <span css={listingHeaderTitle}>
            Listing {id} <br /> Stardew Valley
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
      <div css={listingDesc}>{message}</div>
      <div css={listingFooter}>
        <span css={blueText}>JOIN IN</span>
        <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
        <span css={blueText}>HIDE</span>
      </div>
    </div>
  );
};
