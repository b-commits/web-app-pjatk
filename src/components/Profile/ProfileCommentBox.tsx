/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useContext } from 'react';
import { getUserProfilePageComments } from './ApiCalls';
import { Formik, Form, Field } from 'formik';
import { AuthContext } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { ProfileComment } from './ProfileComment';
import { muiCommentArea } from './Profile.style';
import { postComment } from './ApiCalls';

interface RouteParams {
  id: string;
}

interface ProfilePageComment {
  content: string;
  commentSender?: number;
  commentReceiver?: number;
}

const initialCommentValues: ProfilePageComment = {
  content: ' ',
  commentSender: 0,
  commentReceiver: 0,
};

export const ProfileCommentBox: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [profileComments, setProfileComments] = useState<any>([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getUserProfilePageComments(id).then((comments: any) => {
      setProfileComments(comments.data.reverse());
    });
  }, []);

  const handleProfileComment = async (values: ProfilePageComment) => {
    const newComment = {
      content: values.content,
      nickname: currentUser.nickname,
      commentReceiver: parseInt(id),
      commentSender: currentUser.id,
      created_at: new Date().toLocaleTimeString().substring(0, 5),
    };
    await postComment({
      content: newComment.content,
      commentReceiver: newComment.commentReceiver,
      commentSender: newComment.commentSender,
    })
      .then(() => {
        setProfileComments([newComment, ...profileComments]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // todo replace brs with margins
  return (
    <div style={{ padding: 14 }}>
      <h1>Comments</h1>
      <Formik
        onSubmit={handleProfileComment}
        initialValues={initialCommentValues}
      >
        {() => {
          return (
            <Form>
              <Field
                as={TextField}
                name="content"
                css={muiCommentArea}
                multiline
                rows={2}
                maxRows={4}
              />
              <br />
              <br />
              <Button type="submit" color="secondary" variant="contained">
                Send comment
              </Button>
            </Form>
          );
        }}
      </Formik>
      <br />
      <br />
      {profileComments.map((comment: any, index: any) => {
        return <ProfileComment key={index} ProfileCommentProps={comment} />;
      })}
    </div>
  );
};
