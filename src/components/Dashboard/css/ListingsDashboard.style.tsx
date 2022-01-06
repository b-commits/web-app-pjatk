import { css } from '@emotion/react';
import { BorderStyle } from '@material-ui/icons';

export const selectField = css({
  color: 'rgba(0, 0, 0, 0.87)',
  display: 'block',
  width: '100%',
  height: '50px',
  fontSize: '1.1em',
  border: 'none',
  borderBottom: '1px solid #aaaaaa',
  outline: 'none',
  '&:hover': {
    borderBottom: '2px solid #000000',
  },
  '&:focus': {
    transition: '0.5s',
    borderBottom: '2px solid #3f51b5',
  },
});
