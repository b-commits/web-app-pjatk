import { css } from '@emotion/react';

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
});

export const dashboardMain = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  width: '80%',
  minHeight: '100vh',
  padding: '8px',
  boxSizing: 'border-box',
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
});

//Mobile

export const dashboardMainMobile = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  width: '100%',
  minHeight: '100vh',
  padding: '8px',
  boxSizing: 'border-box',
});

export const dashboardSidebarMobile = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  width: '100%',
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
});

//Tablet

export const dashboardMainTablet = css({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#FFFFFF',
  width: '60%',
  minHeight: '100vh',
  padding: '8px',
  boxSizing: 'border-box',
});

export const dashboardSidebarTablet = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  width: '40%',
  minHeight: '100vh',
  padding: '8px 16px 8px 8px',
  boxSizing: 'border-box',

  '& h1': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1em',
  },
});

//Laptop

export const dashboardMainLaptop = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  width: '65%',
  minHeight: '100vh',
  padding: '8px',
  boxSizing: 'border-box',
});

export const dashboardSidebarLaptop = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  width: '35%',
  minHeight: '100vh',
  padding: '8px 16px 8px 8px',
  boxSizing: 'border-box',

  '& h1': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1em',
  },
});

//Desktop

export const dashboardMainDesktop = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  width: '75%',
  minHeight: '100vh',
  padding: '8px',
  boxSizing: 'border-box',
});

export const dashboardSidebarDesktop = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  width: '25%',
  minHeight: '100vh',
  padding: '8px 16px 8px 8px',
  boxSizing: 'border-box',

  '& h1': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1em',
  },
});
