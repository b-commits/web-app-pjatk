/** @jsxImportSource @emotion/react */
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  loginWrap,
  loginFormWrap,
  aboutImage,
  loginInputsWrap,
} from '../Login/Login.style';
import { Button } from '@material-ui/core';

export const About: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <main css={loginWrap}>
        <div css={loginFormWrap}>
          <div css={aboutImage}></div>
          <div css={loginInputsWrap}>
            <h1>Hi!</h1>
            <p>
              lfg-app is a web-app that we've built to learn a thing or two
              about how modern apps are built and to try out a modern webdev
              tech stack.
            </p>
            <p>
              we think the process has taught us quite a lot along the way, but
              there are still lots of bugs to squash, code to refactor and
              features to improve.
            </p>
            <p>
              we hope that you won't find the site particularly frustrating. who
              knows, maybe you'll even find a thing you like.
            </p>
            <p>anyways, that's that! </p>
            <p>cheers!</p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                history.push('/register');
              }}
            >
              Sign up now!
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
