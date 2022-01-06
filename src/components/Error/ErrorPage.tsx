/** @jsxImportSource @emotion/react */
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  loginWrap,
  loginFormWrap,
  errorImage,
  loginInputsWrap,
} from '../Login/Login.style';
import { Button } from '@material-ui/core';

export const ErrorPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <main css={loginWrap}>
        <div css={loginFormWrap}>
          <div css={errorImage}></div>
          <div css={loginInputsWrap}>
            <h1>404</h1>
            <p>Sorry, we couldn't find that page for you.</p>
            <Button
              color="primary"
              onClick={() => {
                history.push('/');
              }}
            >
              Go back home
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
