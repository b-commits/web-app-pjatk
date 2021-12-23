import { css } from '@emotion/react';

export const listingStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '30px',
  width: '30%',
  padding: '10px',
  border: '1px solid #eee',
  boxSizing: 'border-box',
});

export const gameBox = css({
  color: '#ffffff',
  textAlign: 'center',
  width: '80%',
  padding: '8px',
  margin: '0 auto',
  backgroundColor: 'rgb(37,31,255)',
  background:
    'linear-gradient(180deg, rgba(37,31,255,1) 0%, rgba(78,74,198,1) 100%, rgba(0,212,255,1) 100%)',
  borderRadius: '12px',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const gameImgStyle = css({
  width: '100%',
});
export const gameNameStyle = css({
  fontSize: '0.9em',
  fontWeight: 'bold',
});

export const titleStyle = css({
  fontSize: '1.0em',
  marginBottom: 0,
});

export const descStyle = css({
  fontSize: '1em',
});

export const buttonsWrap = css({
  fontSize: '1em',
});
