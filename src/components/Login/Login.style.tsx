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
      STRICT LOGIN
----------------------------
----------------------------
*/

export const loginWrap = css({
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

export const loginFormWrap = css({
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
export const loginImage = css({
  background: 'url(http://bluepito.webd.pro/inztmpimg/logininz.jpg) no-repeat',
  backgroundPosition: 'bottom left',
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

export const aboutImage = css({
  background:
    'url(https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80) no-repeat',
  backgroundPosition: 'bottom left',
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

export const loginInputsWrap = css({
  width: '50%',
  padding: '57px 65px',
  paddingBottom: ' 65px',
  display: 'table-cell',
});

export const loginInput = css`(
  margin-top: 10px;
}`;
export const loginFormSubmit = css`
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

export const linkClass = css`
  color: #000000;
  text-decoration: none;
  transition: 0.5s;
  &:hover {
    color: rgb(63, 94, 251);
  }
`;

/*
----------------------------
----------------------------
      STRICT LOGIN
----------------------------
----------------------------
*/
