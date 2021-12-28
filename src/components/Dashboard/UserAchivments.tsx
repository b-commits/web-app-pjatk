/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import {
  achivmentBox,
  achivmentsWrap,
  achivmentImg,
  achivmentTitle,
  achivmentDesc,
} from './css/UserAchivments.style';
interface UserAchivment {
  progressBarWidthPercentage: number;
  userLvl: number;
  userExp: number;
}

export const UserAchivmentsDashboard: FC = () => {
  return (
    <>
      <div css={achivmentsWrap}>
        <div css={achivmentBox}>
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt='achiv'
            css={achivmentImg}
          />
          <span css={achivmentTitle}>2 years account</span>
          <span css={achivmentDesc}>
            Given for users registered more than 2 year ago
          </span>
        </div>

        <div css={achivmentBox}>
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt='achiv'
            css={achivmentImg}
          />
          <span css={achivmentTitle}>2 years account</span>
          <span css={achivmentDesc}>
            Given for users registered more than 2 year ago
          </span>
        </div>
        <div css={achivmentBox}>
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt='achiv'
            css={achivmentImg}
          />
          <span css={achivmentTitle}>2 years account</span>
          <span css={achivmentDesc}>
            Given for users registered more than 2 year ago
          </span>
        </div>
        <div css={achivmentBox}>
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt='achiv'
            css={achivmentImg}
          />
          <span css={achivmentTitle}>2 years account</span>
          <span css={achivmentDesc}>
            Given for users registered more than 2 year ago
          </span>
        </div>
        <div css={achivmentBox}>
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt='achiv'
            css={achivmentImg}
          />
          <span css={achivmentTitle}>2 years account</span>
          <span css={achivmentDesc}>
            Given for users registered more than 2 year ago
          </span>
        </div>
        <div css={achivmentBox}>
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt='achiv'
            css={achivmentImg}
          />
          <span css={achivmentTitle}>2 years account</span>
          <span css={achivmentDesc}>
            Given for users registered more than 2 year ago
          </span>
        </div>
        <div css={achivmentBox}>
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt='achiv'
            css={achivmentImg}
          />
          <span css={achivmentTitle}>2 years account</span>
          <span css={achivmentDesc}>
            Given for users registered more than 2 year ago
          </span>
        </div>
        <div css={achivmentBox}>
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt='achiv'
            css={achivmentImg}
          />
          <span css={achivmentTitle}>2 years account</span>
          <span css={achivmentDesc}>
            Given for users registered more than 2 year ago
          </span>
        </div>
      </div>
    </>
  );
};
