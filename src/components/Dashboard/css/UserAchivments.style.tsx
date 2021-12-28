import { css } from '@emotion/react';

export const achivmentsWrap = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  padding: '15px',
});

export const achivmentBox = css({
  height: '150px',
  width: '150px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginTop: '10px',
  marginLeft: '10px',
  marginRight: '10px',
  padding: '10px',
  borderRadius: '5px',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
});

export const achivmentImg = css({
  width: '50px',
  height: '50px',
  padding: '2px',
  borderRadius: '5px',
});

export const achivmentTitle = css({
  fontSize: '0.9em',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '10px',
});

export const achivmentDesc = css({
  fontSize: '0.7em',
  height: '40',
  fontStyle: 'italic',
  textAlign: 'center',
  marginTop: '10px',
});
