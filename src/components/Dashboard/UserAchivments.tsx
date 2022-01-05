/** @jsxImportSource @emotion/react */
import React, { FC, useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getUserAchievments } from './ApiCalls';
import {
  achivmentBox,
  achivmentsWrap,
  achivmentImg,
  achivmentTitle,
  achivmentDesc,
  achivmentBoxLocked,
} from './css/UserAchivments.style';

interface UserAchivment {
  progressBarWidthPercentage: number;
  userLvl: number;
  userExp: number;
}

export const UserAchivmentsDashboard: FC = () => {
  const { currentUser } = useContext(AuthContext);
  const [userAchivements, setUserAchievements] = useState([]);

  useEffect(() => {
    if (!currentUser) return;
    getUserAchievments(parseInt(currentUser.id)).then((res: any) => {
      setUserAchievements(res.data);
      console.log(userAchivements);
    });
  }, []);

  return (
    <>
      <div css={achivmentsWrap}>
        <div
          css={
            userAchivements.filter((ach: any) => ach.achievement == 1).length >
            0
              ? achivmentBox
              : achivmentBoxLocked
          }
        >
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt="achiv"
            css={achivmentImg}
          />
          <span css={achivmentTitle}>INITIATION</span>
          <span css={achivmentDesc}>Leave your first listing comment</span>
        </div>

        <div
          css={
            userAchivements.filter((ach: any) => ach.achievement == 2).length >
            0
              ? achivmentBox
              : achivmentBoxLocked
          }
        >
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt="achiv"
            css={achivmentImg}
          />
          <span css={achivmentTitle}>KEYBOARD ENTHUSIAST</span>
          <span css={achivmentDesc}>Leave five profile page comments</span>
        </div>
        <div
          css={
            userAchivements.filter((ach: any) => ach.achievement == 3).length >
            0
              ? achivmentBox
              : achivmentBoxLocked
          }
        >
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt="achiv"
            css={achivmentImg}
          />
          <span css={achivmentTitle}>STALKER</span>
          <span css={achivmentDesc}>Follow at least five users</span>
        </div>
        <div
          css={
            userAchivements.filter((ach: any) => ach.achievement == 4).length >
            0
              ? achivmentBox
              : achivmentBoxLocked
          }
        >
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt="achiv"
            css={achivmentImg}
          />
          <span css={achivmentTitle}>ENLISTED</span>
          <span css={achivmentDesc}>Join ten listings</span>
        </div>
        <div
          css={
            userAchivements.filter((ach: any) => ach.achievement == 5).length >
            0
              ? achivmentBox
              : achivmentBoxLocked
          }
        >
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt="achiv"
            css={achivmentImg}
          />
          <span css={achivmentTitle}>ART ENTHUSIAST</span>
          <span css={achivmentDesc}>Upload your own profile picture</span>
        </div>
        <div
          css={
            userAchivements.filter((ach: any) => ach.achievement == 6).length >
            0
              ? achivmentBox
              : achivmentBoxLocked
          }
        >
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt="achiv"
            css={achivmentImg}
          />
          <span css={achivmentTitle}>RECRUIT</span>
          <span css={achivmentDesc}>
            Granted on registration for "real" users!
          </span>
        </div>
        <div
          css={
            userAchivements.filter((ach: any) => ach.achievement == 7).length >
            0
              ? achivmentBox
              : achivmentBoxLocked
          }
        >
          <img
            src={'http://bluepito.webd.pro/inztmpimg/achiv.webp'}
            alt="achiv"
            css={achivmentImg}
          />
          <span css={achivmentTitle}>EPISTOLOGRAHY</span>
          <span css={achivmentDesc}>Send ten private messages</span>
        </div>
      </div>
    </>
  );
};
