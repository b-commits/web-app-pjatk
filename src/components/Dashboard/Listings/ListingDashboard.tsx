/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { SectionDashboard } from '../SectionDashboard';
import { AddListingForm } from './AddListingForm';
import { ListingList, DASHBOARD_VIEW } from '../../Misc/ListingList';
import { LISTING_DATA_SET } from '../../../Data/ListingsData';

export const ListingDashboard: FC = () => {
  const addListingForm = <AddListingForm />;

  return (
    <>
      <SectionDashboard title="Add new listing" component={addListingForm} />
    </>
  );
};
