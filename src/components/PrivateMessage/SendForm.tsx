/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { TextField, Button } from '@material-ui/core';
import { muiCommentArea } from '../../components/Profile/Profile.style';
import { getUserByID } from '../../components/Profile/ApiCalls';
import { messageWrapper, formWrap, sendButton } from './PrivateMessage.style';

interface PrivateMessage {
  title: string;
  content: string;
  messageSender: number;
  messageReceiver: number;
}

const initialMessageValues: PrivateMessage = {
  title: ' ',
  content: ' ',
  messageSender: 0,
  messageReceiver: 0,
};

export const SendForm: React.FC = () => {
  const { currentUser, authenticated } = useContext(AuthContext);
  const [receiverNickname, setReceiverNickname] = useState<string>(' ');
  const location = useLocation<any>();

  useEffect(() => {
    console.log(location.state.receiverId);
    getUserByID(location.state.receiverId).then((user: any) => {
      console.log(user.data.nickname);
      setReceiverNickname(user.data.nickname);
    });
  });

  const handleMessage = () => {};

  return (
    <div css={messageWrapper}>
      <div css={formWrap}>
        <h1>Sending a private message to: {receiverNickname}</h1>
        <Formik onSubmit={handleMessage} initialValues={initialMessageValues}>
          {() => {
            return (
              <Form>
                {authenticated ? (
                  <>
                    <Field
                      placeholder="Enter your message here..."
                      as={TextField}
                      name="content"
                      css={muiCommentArea}
                      multiline
                      rows={2}
                      maxRows={4}
                    />
                    <br />
                    <br />
                    <Button
                      css={sendButton}
                      type="submit"
                      color="secondary"
                      variant="contained"
                    >
                      Send private message
                    </Button>
                  </>
                ) : (
                  <Redirect to={{ pathname: '/login' }} />
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
