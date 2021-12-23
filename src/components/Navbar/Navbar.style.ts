import { css } from '@emotion/react';

export const navContainer = css({
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  top: 0,
  marginTop: 0,
  boxShadow: "3px 3px 5px -1px rgba(55, 58, 54, 1)",
  height: '125px',
});

export const navMain = css({
  display: 'flex',
  width: '100%',
  fontSize: 'x-large',
  fontFamily: 'Roboto',
  margin: 0,
});

export const navList = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  listStyleType: 'none',
  width: '80%',
  padding: '50px',
  margin: 'auto',
  boxSizing: 'border-box',
  '& a': {
    textDecoration: 'none',
  },
});

export const navLogo = css({
  height: '5rem',
  marginTop: '-29px'
})

export const muiSearchbar = css({
  width: '100%',
  paddingBottom: '70px !important',
  marginTop: '-10px !important'
})

export const buttonSearch = css({
  marginTop: '-11px !important',
  marginLeft: '10px !important',
  height: '50px',
})

export const formikForm = css({
  display: 'flex',
})
