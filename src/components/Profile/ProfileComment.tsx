/** @jsxImportSource @emotion/react */
import React from 'react';
import { Divider, Avatar, Grid, Paper } from '@material-ui/core';
import {
  muiDivider,
  muiPaper,
  commentHeader,
  commentParagraph,
  commentTimestamp,
} from './Profile.style';

const imgLink = 'http://bluepito.webd.pro/logopjatk.gif';

interface ProfileCommentProps {
  content: string;
  nickname: string;
  commentReceiver: number;
  commentSender: number;
  created_at: Date;
}

const PROP_TIME_LENGTH: number = 5;
const DB_TIME_STR_START: number = 11;
const DB_TIME_STR_END: number = 16;

export const ProfileComment: React.FC<ProfileCommentProps | any> = (
  comment: ProfileCommentProps | any
) => {
  const getTime = () => {
    if (comment.ProfileCommentProps.created_at.length == PROP_TIME_LENGTH)
      return comment.ProfileCommentProps.created_at;
    return comment.ProfileCommentProps.created_at.substring(
      DB_TIME_STR_START,
      DB_TIME_STR_END
    );
  };

  return (
    <Paper css={muiPaper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar src={imgLink} />
        </Grid>
        <Grid item xs zeroMinWidth>
          <h4 css={commentHeader}>{comment.ProfileCommentProps.nickname}</h4>
          <p css={commentParagraph}>{comment.ProfileCommentProps.content}</p>
          <p css={commentTimestamp}>{getTime()}</p>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" css={muiDivider} />
    </Paper>
  );
};
