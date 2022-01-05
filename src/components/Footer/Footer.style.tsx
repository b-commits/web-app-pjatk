import { css } from '@emotion/react';

export const footerContainer = css({
  fontFamily: 'Roboto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '150px',
  marginTop: '50px',
  marginBottom: '0px',
  padding: '50px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '3px 3px 10px 1px rgba(55, 58, 54, 1)',
  boxSizing: 'border-box',
});

export const footerTitle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.1em',
});

export const footerTitleImg = css({
  height: '80px',
});

export const footerLinks = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '20%',
  fontSize: '1em',
  marginTop: '10px',
});

export const footerLink = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '30px',
  color: '#ffffff',
  textDecoration: 'none',
  marginTop: '10px',
  marginLeft: '5px',
  marginRight: '5px',
  width: '50px',
  height: '50px',
  padding: '5px',
  borderRadius: '50%',
  transition: '2s',
  backgroundColor: 'rgb(37,31,255)',
  background:
    'linear-gradient(270deg, rgba(37,31,255,1) 0%, rgba(78,74,198,1) 100%, rgba(0,212,255,1) 100%)',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

export const footerCopyrights = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.9em',
  marginTop: '25px',
});
export const footerCopyrightsAndCopy = css({
  color: '#aeaeae',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.8em',
  marginTop: '10px',
});

export const footerCopyrightsAuthor = css({
  marginTop: '10px',
});

export const footerCopyrightsAuthorLink = css({
  color: '#000000',
  marginLeft: '10px',
  marginBottom: '10px',
  textDecoration: 'none',
  '&:hover ': {
    color: 'rgba(78,74,198,1)',
  },
});
