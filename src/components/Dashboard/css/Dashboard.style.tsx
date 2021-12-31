import { css } from '@emotion/react';

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
    cursor: 'pointer'
})
