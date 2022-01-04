/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { buttonStyle } from './css/Button.style';
export const SUCCES = 'SUCCES';
export const WARN = 'WARN';
export const DANGER = 'DANGER';
export const INFO = 'INFO';

interface ButtonProps {
  title: string;
  isSubmit?: boolean;
  type: string; //succes -  green, warn - yellow,  danger - red, info|default - blue,
  onCLick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ title, isSubmit, type, onCLick }) => {
  let backgroundColor = { backgroundColor: '#000' };
  const test = buttonStyle;
  switch (type) {
    case SUCCES: {
      backgroundColor = { backgroundColor: '#44c767' };
      break;
    }
    case WARN: {
      backgroundColor = { backgroundColor: '#f24437' };
      break;
    }
    case DANGER: {
      backgroundColor = { backgroundColor: '#f24437' };
      break;
    }
    case INFO: {
      backgroundColor = { backgroundColor: '#007dc1' };
      break;
    }
    default: {
      backgroundColor = { backgroundColor: '#007dc1' };
    }
  }
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      css={buttonStyle}
      style={backgroundColor}
      onClick={onCLick}
    >
      {title}
    </button>
  );
};
