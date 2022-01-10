import { css } from '@emotion/react';
import { NoEncryptionTwoTone } from '@mui/icons-material';

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

export const inboxWrap = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
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
});

export const inboxSidebar = css({
  width: '30%',

  [mq[0]]: {
    width: '100%',
  },
  [mq[1]]: {
    width: '30%',
  },
  [mq[2]]: {
    width: '30%',
  },
  [mq[3]]: {
    width: '30%',
  },
});

export const contactList = css({
  paddingLeft: 0,
  margin: 0,
  listStyleType: 'none',
  height: '100vh',
  overflowY: 'scroll',
  backgroundColor: '#eee',
  borderRadius: '12px',

  [mq[0]]: {
    borderRadius: '0px',
  },
  [mq[1]]: {
    borderRadius: '12px',
  },
  [mq[2]]: {
    borderRadius: '12px',
  },
  [mq[3]]: {
    borderRadius: '12px',
  },

  '& li': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: '1s',
  },

  '& li:hover': {
    color: '#eee',
    backgroundColor: '#444444',
  },

  '& li img': {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
  },

  '& li div': {
    marginLeft: '10px',
  },

  '& li h1,h2,h3': {
    margin: '0px',
  },
});

export const inboxConversation = css({
  color: '#eee',
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  height: '100vh',
  overflowY: 'scroll',
  boxSizing: 'border-box',
  backgroundColor: '#353535',

  [mq[0]]: {
    width: '100%',
  },
  [mq[1]]: {
    width: '70%',
  },
  [mq[2]]: {
    width: '70%',
  },
  [mq[3]]: {
    width: '70%',
  },
});

export const inboxConversationHeader = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '10px',
  boxSizing: 'border-box',
  backgroundColor: '#444444',
  '&  img': {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    marginRight: '15px',
  },
});

export const inboxMessages = css({
  flexDirection: 'column',
  listStyleType: 'none',
  padding: '15px',
});

export const inboxMessagePointerMe = css({
  width: '0px',
  height: '0px',
  borderStyle: 'solid',
  borderWidth: '10px 10px 0px 10px',
  borderColor: '#0ebd60 transparent transparent transparent',
  marginLeft: '90%',
});

export const inboxMessagePointerYou = css({
  width: '0px',
  height: '0px',
  borderStyle: 'solid',
  borderWidth: '10px 10px 0px 10px',
  borderColor: '#2b8ee2 transparent transparent transparent',
  marginLeft: '5%',
});

export const inboxMessageAuthorMe = css({
  marginTop: '10px',
  marginRight: '5px',
  textAlign: 'right',
  fontSize: '0.8em',
});
export const inboxMessageAuthorYou = css({
  marginTop: '10px',
  marginLeft: '5px',
  textAlign: 'left',
  fontSize: '0.8em',
});

export const inboxMessageMe = css({
  backgroundColor: '#0ebd60',
  borderRadius: '12px',
  marginLeft: '45%',
  width: '50%',
  marginTop: '15px',
  padding: '15px',
  textAlign: 'justify',
});
export const inboxMessageYou = css({
  backgroundColor: '#2b8ee2',
  borderRadius: '12px',
  padding: '15px',
  marginRight: '45%',
  width: '50%',
  marginTop: '15px',
  textAlign: 'justify',
});
