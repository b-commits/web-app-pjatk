/** @jsxImportSource @emotion/react */
import React from 'react';
import { Formik } from 'formik';
import { Button, Checkbox, TextField } from '@material-ui/core';
import {
  bannerConentDesc,
  blueText,
  checkStyle,
  footerStyle,
  homeMain,
  listingItem,
  mainBanner,
  mainBannerContent,
  smallText,
} from './Register.style';

export const Register: React.FC = () => {
  return (
    <>
      <div css={mainBanner}>
        <div css={mainBannerContent}>
          <span css={smallText}>WE APPRECIATE YOUR INTEREST IN LFG-APP</span>
          <h1>please fill out the form below</h1>
          <div css={bannerConentDesc}></div>
        </div>
      </div>

      <main css={homeMain}>
        <Formik
          initialValues={{
            nickname: 'Nickname...',
            email: 'E-mail...',
            password: 'Password...',
            passwordConfirm: 'Password...',
          }}
          onSubmit={(data) => {
            // todo form submit
            console.log(data);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} css={homeMain}>
              <div css={listingItem}>
                <TextField
                  name="nickname"
                  placeholder="Nickname..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div css={listingItem}>
                <TextField
                  name="email"
                  placeholder={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div css={listingItem}>
                <TextField
                  type="password"
                  name="password"
                  placeholder={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div css={listingItem}>
                <TextField
                  type="password"
                  name="passwordConfirm"
                  placeholder={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <ul css={footerStyle}>
                <li css={checkStyle}>
                  <Checkbox id="checkboxNewsletter" />
                  <label>I want to receive a monthly newsletter</label>
                </li>
                <li css={checkStyle}>
                  <Checkbox id="checkboxNewsletter" />
                  <label>
                    I agree to <span css={blueText}> terms and conditions</span>
                  </label>
                </li>
              </ul>
              <div css={mainBannerContent}>
                <Button type="submit">SIGN UP</Button>
              </div>
            </form>
          )}
        </Formik>
      </main>
    </>
  );
};
