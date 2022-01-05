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
export const gameGallery = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 350px);',
  gridGap: '1px',
  justifyContent: 'space-between',
  alignItems: 'center',

  [mq[0]]: {
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fill, 100%);',
  },
  [mq[1]]: {
    gridTemplateColumns: 'repeat(auto-fill, 320px);',
    justifyContent: 'space-between',
  },
  [mq[2]]: {
    gridTemplateColumns: 'repeat(auto-fill, 48%);',
    justifyContent: 'space-between',
  },
  [mq[3]]: {
    gridTemplateColumns: 'repeat(auto-fill, 32%);',
    justifyContent: 'space-between',
  },
  [mq[4]]: {
    gridTemplateColumns: 'repeat(auto-fill, 350px);',
    justifyContent: 'space-between',
  },
});

export const galleryItem = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
  width: '100%',
  borderRadius: '8px',
  transition: '2s',

  '&:hover': {
    transform: 'scale(1.01)',
  },
});

export const galleryGameImg = css({
  width: '100%',
  borderRadius: '8px',
});
export const galleryGameTitle = css({
  display: 'flex',
  justifyContent: 'space-between',
  color: '#ffffff',
  height: '20px',
  background: 'rgba(0,0,0,0.7)',
  width: '100%',
  marginTop: '-30px',
  padding: ' 5px 0px',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',

  '& label': {
    padding: ' 0px 5px',
    width: '95%',
    overflow: 'hidden',
  },
  '& span': {
    width: '5%',
    padding: ' 0px 5px',
  },
  '& input': {
    borderColor: '#fff',
    border: '1px solid #fff',
  },
});
export const muiAlert = css({
  marginBottom: '15px',
});

export const friendElement = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '15px',
  marginRight: '15%',
});
