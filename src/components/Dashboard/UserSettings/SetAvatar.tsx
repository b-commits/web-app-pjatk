/** @jsxImportSource @emotion/react */
import React, { FC, useState } from 'react';
import { submitButton } from '../css/UserSettingsDashboard.style';

export const SetAvatar: FC = () => {
  return (
    <>
      <p>Formik image file input, tmp input </p>
      <label>
        Choose your avatar
        <br />
        <input name='userAvatar' type='file' accept='image/png, image/jpeg' />
      </label>
    </>
  );
};
