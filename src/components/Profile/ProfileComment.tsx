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

export const ProfileComment: React.FC<ProfileCommentProps | any> = (
  comment: ProfileCommentProps | any
) => {
  const getTime = () => {
    return comment.ProfileCommentProps.created_at.substring(11, 16);
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
