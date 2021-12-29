/** @jsxImportSource @emotion/react */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { messageWrapper, formWrap, goBack } from './PrivateMessage.style';

export const Success: React.FC = () => {
  const history = useHistory();

  return (
    <div css={messageWrapper}>
      <div css={formWrap}>
        <h1>Message sent!</h1>
        <a
          css={goBack}
          onClick={() => {
            history.push('/');
          }}
        >
          Go back to home page.
        </a>
      </div>
    </div>
  );
};
