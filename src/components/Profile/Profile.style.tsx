import { css } from '@emotion/react';

export const profileWrap = css({
  width: '1280px',
  margin: 'auto',
  marginTop: '15px',
  boxSizing: 'border-box',
});

export const profileHeader = css({
  width: '1280px',
  margin: 'auto',
  padding: '8px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxSizing: 'border-box',
});

export const userDetailsWrap = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '8px',
  height: '300px',
  boxSizing: 'border-box',
});

export const userDetailsData = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 340,
  padding: '8px',
  boxSizing: 'border-box',

  '& h1': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: '42px',
    marginLeft: '10px',
  },
});

export const userAvatar = css({
  verticalAlign: 'middle',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
});

export const userStatusDot = css({
  height: '25px',
  width: '25px',
  marginRight: '10px',
  backgroundColor: '#64a338',
  borderRadius: '50%',
  boxShadow: '',
  boxSizing: 'border-box',
});

export const userInfoWrap = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: '180px',
  marginTop: '8px',
  boxSizing: 'border-box',

  '& i': {
    borderLeft: '2px solid #cfcfcf',
    height: '50px',
    marginLeft: '25px',
    marginRight: '25px',
  },
});

export const userInfoWrapItem = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',
  boxSizing: 'border-box',

  '& span': {
    color: '#000',
    fontSize: '22px',
    fontWeight: 'bold',
  },
});

export const userActions = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '350px',
  '& button:hover': {
    boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
    WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
    MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  },
});

export const userActionsButton = css({
  fontSize: '18px',
  color: '#ffffff',
  height: '40px',
  alignContent: 'center',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  padding: '10px 20px',
  textDecoration: 'none',
  boxSizing: 'border-box',
  alignItems: 'center',
});

export const profileContent = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  marginTop: '15px',
});

export const profileMain = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '885px',
  boxSizing: 'border-box',
});

export const profileSidebar = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '375px',
  boxSizing: 'border-box',
});

export const profileContentItem = css({
  width: '100%',
  marginBottom: '15px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  padding: '8px',
  boxSizing: 'border-box',

  '& h1': {
    color: '#000',
    fontSize: '26px',
    fontWeight: 'bold',
    borderBottom: '2px solid #cfcfcf',
    marginTop: '0px',
  },
});

export const favoriteGames = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const favoriteGamesItem = css({
  '& img': {
    height: '280px',
    width: '160px',
    borderRadius: '8px',
    transition: '3s',
  },

  '& img:hover': {
    transform: 'scale(1.05)',
    transition: '3s',
    boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
    WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
    MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  },
});

export const friends = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

export const friendsItem = css({
  marginLeft: '10px',
  marginRight: '10px',
  '& img': {
    height: '60px',
    width: '60px',
    backgroundColor: '#000',
    borderRadius: '50%',
    border: '1px solid #cfcfcf',
  },

  '& img:hover': {
    transition: '3s',
    boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
    WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
    MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  },
});

export const userAchievements = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

export const userAchievementsItem = css({
  margin: '10px',

  '& a': {
    color: '#000',
    fontSize: '18px',
    textDecoration: 'none',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  '& img': {
    height: '50px',
    width: '50px',
    padding: '2px',
    backgroundColor: '#EBA63F',
    borderRadius: '50%',
    marginRight: '10px',
  },
});

export const userListings = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const listing = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
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
  '& h3': {
    marginTop: '0px',
  },
});

export const listingButton = css({
  fontSize: '12px',
  color: '#ffffff',
  height: '30px',
  width: '100px',
  marginBottom: '10px',
  alignContent: 'center',
  alignSelf: 'center',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  padding: '10px 20px',
  textDecoration: 'none',
  boxSizing: 'border-box',
});
