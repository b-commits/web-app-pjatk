import { css } from '@emotion/react';

export const UserLevelWrap = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
});

export const Badge = css({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontWeight: 'bold',
  alignItems: 'center',
  fontFamily: 'Tahoma',
  fontSize: '1.5em',
  color: 'white',
  width: 100,
  height: 100,
  margin: 5,
  boxSizing: 'inherit',
  borderRadius: '50%',
  backgroundColor: 'rgb(37,31,255)',
  background:
    'linear-gradient(180deg, rgba(37,31,255,1) 0%, rgba(78,74,198,1) 100%, rgba(0,212,255,1) 100%)',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  border: '4px solid #fff',
});

export const userLevelExp = css({
  color: 'rgb(37,31,255)',
  fontFamily: 'Tahoma',
  fontSize: '0.8em',
  fontWeight: 'lighter',
  fontStyle: 'italic',
  textAlign: 'center',

  margin: 5,
});
