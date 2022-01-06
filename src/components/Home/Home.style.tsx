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

export const homeBanner = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '300px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
});

export const homeBannerContent = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  fontWeight: 'bold',
  width: '40%',

  [mq[0]]: {
    width: '80%',
  },
  [mq[1]]: {
    width: '70%',
  },
  [mq[2]]: {
    width: '60%',
  },
  [mq[3]]: {
    width: '50%',
  },

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

  [mq[0]]: {
    justifyContent: 'center',
    alignItems: 'center',
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

export const muiPagination = {
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'center',
};

export const muiSearchBarWrapper = {
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'center',
};

export const muiSearchBar = {
  width: '40%',
};

export const modalStyle = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 800,
  bgcolor: 'background.paper',
  overflowY: 'auto',
  border: '3px solid',
  boxShadow: 10,
  p: 4,
};

export const muiField = {
  width: '100%',
};

export const imgStyle = {
  width: '100%',
};

export const skeletonWrapper = {
  marginTop: '-100px',
};
