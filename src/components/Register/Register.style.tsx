import { css } from '@emotion/react';

export const mainBanner = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
});

export const mainBannerContent = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  fontWeight: 'bold',
  width: '100%',

  '& div': { marginTop: '10px' },

  '& h1': {
    fontSize: '32px',
    margin: 0,
  },

  '& button': {
    borderRadius: '18px',
    border: '1px solid #000',
    cursor: 'pointer',
    color: '#FFFFFF',
    fontSize: '17px',
    padding: '20px',
    width: '150px',
    height: '60px',
    textDecoration: 'none',
    backgroundColor: '#251fff',
    boxSizing: 'border-box',
    opacity: '0.8',
  },
});

export const bannerConentHeader = css({
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
});

export const bannerConentDesc = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
});

export const blueText = css({
  color: '#251fff',
});

export const smallText = css({
  fontSize: '12px',
});

export const homeMain = css({
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  alignItems: 'center',
  width: '50%',
  margin: 'auto',
  marginTop: '10px',
});

export const listingItem = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  width: '80%',
  marginTop: '10px',
  alignContent: 'center',
  justifyContent: 'center',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
});

export const footerStyle = css({
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: 'auto',
  marginTop: '10px',
});

export const checkStyle = css({
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  flexWrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  width: '600%',
  marginRight: '100px',
});
