import { css } from '@emotion/react';

export const submitButton = css`
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
