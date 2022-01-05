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

/*
----------------------------
----------------------------
      STRICT REGISTER
----------------------------
----------------------------
*/

export const registerWrap = css({
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

export const registerFormWrap = css({
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
export const registerImage = css({
  background:
    'url(http://bluepito.webd.pro/inztmpimg/registerinz.jpg) no-repeat',
  backgroundPosition: 'top left',
  backgroundSize: 'cover',
  borderTopLeftRadius: '10px',
  borderEndStartRadius: '10px',
  display: 'table-cell',
  width: '50%',
  padding: 0,
  margin: 0,
  boxSizing: 'inherit',

  [mq[0]]: {
    display: 'none',
  },
  [mq[1]]: {
    display: 'table-cell',
  },
});
export const registerInputsWrap = css({
  width: '50%',
  padding: '57px 65px',
  paddingBottom: ' 65px',
  display: 'table-cell',
});

export const registerInput = css`(
  margin-top: 10px;
}`;
export const registerFormSubmit = css`
  display: inline-block;
  color: #fff;
  font-weight: bold;
  border: none;
  width: auto;
  padding: 15px 40px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  background: rgb(63, 94, 251);
  background: linear-gradient(
    360deg,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  transition: 2s;
  box-sizing: border-box;
  &:hover {
    transform: scale(1.1);
  }
`;
/*
----------------------------
----------------------------
      STRICT REGISTER
----------------------------
----------------------------
*/

export const mainBanner = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
});

export const mainBannerContent = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  fontWeight: 'bold',
  width: '100%',

  '& div': { marginTop: '10px' },

  '& h1': {
    fontSize: '32px',
    margin: 0,
  },

  '& button': {
    borderRadius: '18px',
    border: '1px solid #000',
    cursor: 'pointer',
    color: '#FFFFFF',
    fontSize: '17px',
    padding: '20px',
    width: '150px',
    height: '60px',
    textDecoration: 'none',
    backgroundColor: '#251fff',
    boxSizing: 'border-box',
    opacity: '0.8',
  },
});

export const bannerConentHeader = css({
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
});

export const bannerConentDesc = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
});

export const blueText = css({
  color: '#251fff',
});

export const smallText = css({
  fontSize: '12px',
});

export const homeMain = css({
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  alignItems: 'center',
  width: '50%',
  margin: 'auto',
  marginTop: '10px',
});

export const listingItem = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  width: '80%',
  marginTop: '10px',
  alignContent: 'center',
  justifyContent: 'center',
  boxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
  WebkitBoxShadow: '0px 4x 14px -4px rgba(55, 58, 54, 1)',
  MozBoxShadow: '0px 4px 14px -4px rgba(55, 58, 54, 1)',
});

export const footerStyle = css({
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: 'auto',
  marginTop: '10px',
});

export const checkStyle = css({
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  flexWrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  width: '600%',
  marginRight: '100px',
});

export const labelAbout = css({
  color: '#3f51b5',
  cursor: 'pointer',
});
