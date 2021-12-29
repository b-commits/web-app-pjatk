import { css } from '@emotion/react';
const breakpoints = [320, 769, 1024, 1440, 2560];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const messageWrapper = css({
    display: 'flex',
    justifyContent: 'center',
    width: '30%',
    margin: '0 auto',
    marginTop: '50px',
    padding: '0px',
    boxSizing: 'inherit',
  
    [mq[0]]: {
      width: '100%',
    },
    [mq[1]]: {
      width: '50%',
    },
    [mq[2]]: {
      width: '70%',
    },
    [mq[3]]: {
      width: '50%',
    },
    [mq[4]]: {
      width: '35%',
    },
  });

  export const formWrap = css({
    textAlign: 'center',
    borderRadius: '10px',
    width: '100%',
    display: ' table',
    boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
    WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
    MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
    boxSizing: 'inherit',
    '& form div': {
      marginTop: '20px',
    },
  });

  export const sendButton = css({
    width: '100%'
  })

  export const receiverStyle = css({
    color: '#3f50b5',
  })

  export const goBack = css({
    color: '#3f50b5',
    cursor: 'pointer',
  })