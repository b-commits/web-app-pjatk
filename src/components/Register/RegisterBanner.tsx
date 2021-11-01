/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  bannerConentDesc,
  mainBanner,
  smallText,
  mainBannerContent,
} from './Register.style';

export const RegisterBanner: React.FC = () => {
  return (
    <div css={mainBanner}>
      <div css={mainBannerContent}>
        <span css={smallText}>WE APPRECIATE YOUR INTEREST IN LFG-APP</span>
        <h1>please fill out the form below</h1>
        <div css={bannerConentDesc}></div>
      </div>
    </div>
  );
};
