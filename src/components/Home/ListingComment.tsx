/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useContext } from 'react';
import { Divider, Avatar, Grid, Paper } from '@material-ui/core';
import {
  muiPaper,
  commentHeader,
  commentParagraph,
  commentTimestamp,
  muiDivider,
} from '../Profile/Profile.style';

const imgLink = 'http://bluepito.webd.pro/logopjatk.gif';

interface ListingCommentProps {
  content: string;
  nickname: string;
  createdAt?: Date;
}

const PROP_TIME_LENGTH: number = 5;
const DB_TIME_STR_START: number = 11;
const DB_TIME_STR_END: number = 16;

export const ListingComment: React.FC<ListingCommentProps | any> = (
  comment: ListingCommentProps | any
) => {
  const getTime = () => {
    if (comment.ListingCommentProps.created_at.length == PROP_TIME_LENGTH)
      return comment.ListingCommentProps.created_at;
    return comment.ListingCommentProps.created_at.substring(
      DB_TIME_STR_START,
      DB_TIME_STR_END
    );
  };

  return (
    <Paper css={muiPaper}>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid item>
          <Avatar src={imgLink} />
        </Grid>
        <Grid item xs zeroMinWidth>
          <h4 css={commentHeader}>{comment.ListingCommentProps.nickname}</h4>
          <p css={commentParagraph}>{comment.ListingCommentProps.content}</p>
          <p css={commentTimestamp}>{getTime()}</p>
        </Grid>
      </Grid>
      <Divider variant='fullWidth' css={muiDivider} />
    </Paper>
  );
};
