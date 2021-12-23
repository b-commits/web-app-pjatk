/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import {} from '../css/Dashboard.style';

export const AddListingForm: FC = () => {
  return (
    <>
      <form>
        <label htmlFor=''>
          Title
          <input type='text' />
        </label>
        <label htmlFor=''>
          Game
          <input type='text' />
        </label>
        <label htmlFor=''>
          Advance level
          <input type='text' />
        </label>
        <input type={'submit'} />
      </form>
    </>
  );
};
