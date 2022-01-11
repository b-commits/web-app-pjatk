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

export const listingListStyle = css({
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
    gridTemplateColumns: 'repeat(auto-fill, 32%);',
  },
  [mq[2]]: {
    gridTemplateColumns: 'repeat(auto-fill, 32%);',
  },
  [mq[3]]: {
    gridTemplateColumns: 'repeat(auto-fill, 32%);',
  },
});
