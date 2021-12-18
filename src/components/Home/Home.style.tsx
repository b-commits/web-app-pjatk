import { css } from '@emotion/react';
import { findByLabelText } from '@testing-library/dom';

export const homeBanner = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '300px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
});

export const homeBannerContent = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  fontWeight: 'bold',
  width: '40%',

  '& div': { marginTop: '10px' },

  '& h1': {
    fontSize: '42px',
    margin: 0,
  },

  '& button': {
    borderRadius: '18px',
    border: '1px solid #000',
    cursor: 'pointer',
    color: '#FFFFFF',
    fontSize: '17px',
    padding: '20px',
    width: '200px',
    height: '60px',
    textDecoration: 'none',
    backgroundColor: '#251fff',
    boxSizing: 'border-box',
    opacity: '0.8',
  },

  '& p': {
    marginLeft: '15px',
    marginTop: '0px',
  },
});

export const bannerConentHeader = css({
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
});

export const bannerConentDesc = css({
  display: 'flex',
  flexDirection: 'row',
});

export const blueText = css({
  color: '#251fff',
});

export const smallText = css({
  fontSize: '12px',
});

export const homeMain = css({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  margin: 'auto',
  marginTop: '30px',
});

export const listingItem = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  width: '30%',
  marginTop: '30px',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
});

export const listingHeader = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignContent: 'center',
  padding: '10px',
  boxSizing: 'border-box',

  '& i': {
    fontSize: '20px',
    opacity: '0.6',
  },
});

export const listingHeaderTitle = css({
  width: '80%',
});

export const listingImg = css({
  height: '220px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#cfcfcf',
  '& img': {
    height: '220px',
    width: '80%',
  },
});

export const listingDesc = css({
  padding: '10px',
  boxSizing: 'border-box',
});

export const listingFooter = css({
  padding: '10px',
  boxSizing: 'border-box',

  '& span': {
    fontSize: '15px',
  },
});

export const muiPagination = {
  marginTop: '15px',
  display: 'flex',
  justifyContent: 'center',
};
