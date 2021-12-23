import { css } from '@emotion/react';

/*
----------------------------
----------------------------
      MEDIA QUERIES
----------------------------
----------------------------
*/
const breakpoints = [320, 769, 1024, 1440];

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

export const appStyle = css({
  fontFamily: 'Roboto',
});

/*
----------------------------
----------------------------
   DASHBOARD RWD STYLES
----------------------------
----------------------------
*/

export const dashboardWrap = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '80%',
  margin: 'auto',
  marginTop: '50px',
  borderRadius: '20px',
  padding: '10px',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',

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
});

export const dashboardSidebar = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  width: '20%',
  minHeight: '100vh',
  padding: '8px 16px 8px 8px',
  boxSizing: 'border-box',

  '& h1': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5em',
  },

  [mq[0]]: {
    width: '100%',
  },
  [mq[1]]: {
    width: '40%',
  },
  [mq[2]]: {
    width: '35%',
  },
  [mq[3]]: {
    width: '25%',
  },
});
export const dashboardMain = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  width: '80%',
  minHeight: '100vh',
  padding: '8px',
  boxSizing: 'border-box',

  [mq[0]]: {
    width: '100%',
  },
  [mq[1]]: {
    width: '60%',
  },
  [mq[2]]: {
    width: '65%',
  },
  [mq[3]]: {
    width: '75%',
  },
});
