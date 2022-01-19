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

/*
----------------------------
----------------------------
   DASHBOARD MAIN STYLES
----------------------------
----------------------------
*/
export const main = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  width: '80%',
  minHeight: '100vh',
  padding: '8px',
  boxSizing: 'border-box',
});

export const userListings = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

export const listing = css({
  width: '230px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '15px',
  borderBottom: '1px dashed #cfcfcf',
  paddingBottom: '10px',
  boxSizing: 'border-box',
  '& img': {
    height: '120px',
    width: '210px',
    padding: '2px',
    backgroundColor: '#cfcfcf',
    borderRadius: '8px',
    marginRight: '10px',
  },
  '& p': {
    width: '210px',
    padding: '2px',
  },
  '& h3': {
    width: '210px',
    marginTop: '0px',
  },
});

export const uploadLabelWrap = css({
  display: 'inline-block',
  padding: '6px 12px',
  cursor: 'pointer',
});

export const gridWrapper = css({
  display: 'grid',
});

export const participationListingListStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 32%);',
  gridGap: '1px',
  justifyContent: 'space-between',
  padding: '8px',
  boxSizing: 'border-box',
  width: '100%',
  [mq[0]]: {
    gridTemplateColumns: 'repeat(auto-fill, 99%);',
  },
  [mq[1]]: {
    gridTemplateColumns: 'repeat(auto-fill, 99%);',
  },
  [mq[2]]: {
    gridTemplateColumns: 'repeat(auto-fill, 49%);',
  },
  [mq[3]]: {
    gridTemplateColumns: 'repeat(auto-fill, 32%);',
  },
});
