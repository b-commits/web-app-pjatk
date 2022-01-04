import { css } from '@emotion/react';

/*
----------------------------
----------------------------
      MEDIA QUERIES
----------------------------
----------------------------
*/
const breakpoints = [320, 769, 1024, 1440, 2560];

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

*/
/*
----------------------------
----------------------------
      MEDIA QUERIES
----------------------------
----------------------------
*/
export const navContainer = css({
  position: 'fixed',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  alignItems: 'center',
  top: 0,
  marginTop: 0,
  boxShadow: '3px 3px 5px -1px rgba(55, 58, 54, 1)',
  zIndex: 9999,
  [mq[0]]: {
    height: '300px',
    position: 'static',
  },
  [mq[1]]: {
    height: '300px',
    position: 'static',
  },
  [mq[2]]: {
    height: '180px',
    position: 'fixed',
  },
  [mq[3]]: {
    height: '90px',
    position: 'fixed',
  },
});

export const navMain = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '80%',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 'x-large',
  fontFamily: 'Roboto',
  margin: '0 auto',
  padding: '0px 50px 0px 50px',
  [mq[0]]: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  [mq[1]]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  [mq[2]]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  [mq[3]]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const navList = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'left',
  justifyContent: 'space-between',
  listStyleType: 'none',
  width: '40%',
  paddingLeft: 0,
  boxSizing: 'border-box',
  [mq[0]]: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  [mq[1]]: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  [mq[2]]: {
    flexDirection: 'row',
    width: '100%',
  },
  [mq[3]]: {
    flexDirection: 'row',
    width: '50%',
  },

  '& a': {
    textDecoration: 'none',
  },
});

export const navLogo = css({
  height: '5rem',
});

export const muiSearchbar = css({
  width: '100%',
});

export const buttonSearch = css({
  marginLeft: '10px !important',
  height: '50px',
});

export const formikForm = css({
  display: 'flex',
});
