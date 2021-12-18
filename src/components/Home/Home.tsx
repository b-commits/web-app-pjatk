/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { ListingItem } from './ListingItem';
import { Pagination } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { getAllListings } from './ApiCalls';
import {
  homeBanner,
  homeBannerContent,
  bannerConentHeader,
  bannerConentDesc,
  blueText,
  homeMain,
  muiPagination,
  muiSearchBar,
  muiSearchBarWrapper,
} from './Home.style';
import { NavLink } from 'react-router-dom';

const LISTINGS_PER_PAGE: number = 12;
const DEFAULT_CURRENT_PAGE: number = 1;

export const Home: React.FC = () => {
  const [listings, setListings] = useState<Array<any>>([]);
  const [filteredListings, setFilteredListings] =
    useState<Array<any>>(listings);
  const [listingsPerPage] = useState<number>(LISTINGS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_CURRENT_PAGE);
  const lastListingIdx: number = currentPage * listingsPerPage;
  const firstListingIdx: number = lastListingIdx - listingsPerPage;
  const currentListings = filteredListings.slice(
    firstListingIdx,
    lastListingIdx
  );

  const handlePageChange = (_event: any, value: any) => {
    setCurrentPage(value);
  };

  const handleSearch = (event: any) => {
    const filteredListings = listings.filter((listing) =>
      listing.message.toLowerCase().trim().includes(event.target.value)
    );
    setFilteredListings(filteredListings);
  };

  useEffect(() => {
    getAllListings().then((listings: any) => {
      setListings(listings.data);
      setFilteredListings(listings.data);
    });
  }, []);

  return (
    <>
      <div css={homeBanner}>
        <div css={homeBannerContent}>
          <div css={bannerConentHeader}>
            <span css={blueText}>find a group</span>
            <h1>
              and spend <span css={blueText}>less time in queue</span>.
            </h1>
          </div>
          <div css={bannerConentDesc}>
            <div>
              <NavLink
                className="navLink"
                activeClassName="activeNavLink"
                exact
                to="/register"
              >
                <button>SIGN UP NOW</button>
              </NavLink>
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

      <div css={muiSearchBarWrapper}>
        <TextField onChange={handleSearch} type="search" css={muiSearchBar} />
      </div>
      <Pagination
        size="large"
        onChange={handlePageChange}
        count={Math.round(filteredListings.length / LISTINGS_PER_PAGE)}
        css={muiPagination}
        color="primary"
      />

      <main css={homeMain}>
        {currentListings.map((listing, index) => {
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
