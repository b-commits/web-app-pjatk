/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  footerContainer,
  footerTitle,
  footerTitleImg,
  footerLinks,
  footerLink,
  footerCopyrights,
  footerCopyrightsAuthor,
  footerCopyrightsAuthorLink,
  footerCopyrightsAndCopy,
} from './Footer.style';

import logo from '../../logo.png';

export const Footer: React.FC = () => {
  return (
    <footer css={footerContainer}>
      <div css={footerTitle}>
        <img css={footerTitleImg} src={logo} alt='logo' />
      </div>
      <div css={footerLinks}>
        <a css={footerLink} href='https://github.com/b-commits/web-app-pjatk'>
          <i className='fab fa-github-alt'></i>
        </a>
        <a css={footerLink} href='https://pl-pl.facebook.com/polskojaponska/'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a css={footerLink} href='https://www.instagram.com/polskojaponska/'>
          <i className='fab fa-instagram'></i>
        </a>
        <a css={footerLink} href='https://twitter.com/polskojaponska'>
          <i className='fab fa-twitter'></i>
        </a>
        <a css={footerLink} href='https://www.youtube.com/user/TVPjwstk'>
          <i className='fab fa-youtube'></i>
        </a>
      </div>
      <div css={footerCopyrights}>
        <div css={{ marginTop: '10px' }}>
          <a css={footerCopyrightsAuthorLink} href='#'>
            Terms of Use
          </a>
          <a css={footerCopyrightsAuthorLink} href='#'>
            Privacy Policy
          </a>
        </div>
        <span css={footerCopyrightsAuthor}>
          <span>Authors:</span>
          <a
            css={footerCopyrightsAuthorLink}
            href='https://github.com/b-commits'
          >
            b-commits
          </a>
          <a
            css={footerCopyrightsAuthorLink}
            href='https://github.com/blueversi'
          >
            blueversi
          </a>
          <a css={footerCopyrightsAuthorLink} href='https://github.com/3ciak'>
            3ciak
          </a>
        </span>
        <span css={footerCopyrightsAndCopy}>Copyright © 2022 LFG-APP</span>
      </div>
    </footer>
  );
};
