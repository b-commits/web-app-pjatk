import { css } from '@emotion/react';

/*
----------------------------
----------------------------
      MEDIA QUERIES
----------------------------
----------------------------
*/
const breakpoints = [320, 768, 1024, 1440, 2560];

// mq => media query
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

/* 
for copy paste

  [mq[0]]: {
    flexDirection: 'column',
  },
  [mq[1]]: {
    flexDirection: 'row',
  },
  [mq[2]]: {
    flexDirection: 'row',
  },
  [mq[3]]: {
    flexDirection: 'row',
  },
  [mq[4]: {
    flexDirection: 'row',
  },

*/
/*
----------------------------
----------------------------
      MEDIA QUERIES
----------------------------
----------------------------
*/

export const listingItemWrap = css({
  display: 'flex',
  backgroundColor: '#FFFFFF',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '30px',
  width: '30%',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',

  [mq[0]]: {
    width: '100%',
  },
  [mq[1]]: {
    width: '100%',
  },
  [mq[2]]: {
    width: '100%',
  },
  [mq[3]]: {
    width: '45%',
  },
  [mq[4]]: {
    width: '30%',
  },
});

export const listingItemWrapHomePage = css({
  display: 'flex',
  backgroundColor: '#FFFFFF',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '30px',
  width: '30%',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',

  [mq[0]]: {
    width: '100%',
  },
  [mq[1]]: {
    width: '100%',
  },
  [mq[2]]: {
    width: '100%',
  },
  [mq[3]]: {
    width: '30%',
  },
  [mq[4]]: {
    width: '30%',
  },
});

export const listingHeader = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignContent: 'center',
  padding: '20px 10px',
  backgroundColor: '#ffffff',
  width: '100%',
  height: '60px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  '& i': {
    fontSize: '20px',
    opacity: '0.6',
  },

  [mq[0]]: {
    flexDirection: 'column',
    height: '120px',
  },
  [mq[1]]: {
    flexDirection: 'row',
    height: '80px',
  },
  [mq[2]]: {
    flexDirection: 'row',
    height: '80px',
  },
  [mq[3]]: {
    flexDirection: 'row',
    height: '60px',
  },
  [mq[4]]: {
    flexDirection: 'row',
    height: '60px',
  },
});

export const listingTitle = css({
  fontSize: '1.0em',
  marginTop: '0px',
  marginBottom: '0px',
  marginLeft: '10px',
  marginRight: '10px',

  [mq[0]]: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  [mq[1]]: {
    marginTop: '0px',
    marginBottom: '0px',
  },
  [mq[2]]: {
    marginTop: '0px',
    marginBottom: '0px',
  },
  [mq[3]]: {
    marginTop: '0px',
    marginBottom: '0px',
  },
  [mq[4]]: {
    marginTop: '0px',
    marginBottom: '0px',
  },
});

export const gameBox = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  textAlign: 'center',
  width: '100%',
  margin: '0 auto',
  backgroundColor: 'rgb(37,31,255)',
  background:
    'linear-gradient(180deg, rgba(37,31,255,1) 0%, rgba(78,74,198,1) 100%, rgba(0,212,255,1) 100%)',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const gameImgStyle = css({
  width: '80%',
});
export const gameNameStyle = css({
  color: '#ffffff',
  textAlign: 'center',
  marginTop: '-30px',
  height: '20px',
  width: '80%',
  background: ' rgba(0,0,0,0.7)',
  fontSize: '0.9em',
  fontWeight: 'bold',
  padding: '5px 0px',
});

export const listingDesc = css({
  fontSize: '1em',
  padding: '10px',
  boxSizing: 'border-box',
});

export const listingFooter = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '1em',
  padding: '0px 10px 10px 10px',
  boxSizing: 'border-box',

  [mq[0]]: {
    flexDirection: 'column',
  },
  [mq[1]]: {
    flexDirection: 'row',
  },
  [mq[2]]: {
    flexDirection: 'row',
  },
  [mq[3]]: {
    flexDirection: 'row',
  },
  [mq[4]]: {
    flexDirection: 'row',
  },
});
