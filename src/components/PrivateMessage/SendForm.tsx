/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { TextField, Button } from '@material-ui/core';
import { muiCommentArea } from '../../components/Profile/Profile.style';
import { getUserByID } from '../../components/Profile/ApiCalls';
import { sendPrivateMessage } from './ApiCalls';
import {
  messageWrapper,
  formWrap,
  sendButton,
  receiverStyle,
} from './PrivateMessage.style';

interface Receiver {
  id: number;
  nickname: string;
}

const initialValues = {
  id: 0,
  nickname: '',
};

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
  const [receiver, setReceiver] = useState<Receiver>(initialValues);
  const location = useLocation<any>();
  const history = useHistory();

  const handleMessage = async (values: PrivateMessage) => {
    const newComment = {
      content: values.content,
      nickname: currentUser.nickname,
      messageReceiver: receiver.id,
      messageSender: currentUser.id,
    };
    await sendPrivateMessage({
      content: newComment.content,
      messageReceiver: newComment.messageReceiver,
      messageSender: newComment.messageSender,
    })
      .then(() => {
        history.push('/success');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserByID(location.state.receiverId).then((user: any) => {
      const receiver = {
        id: user.data.id,
        nickname: user.data.nickname,
      };
      setReceiver(receiver);
    });
  }, [location.state.receiverId]);

  return (
    <div css={messageWrapper}>
      <div css={formWrap}>
        <div>
          <h1>
            Sending a private message to:{' '}
            <span css={receiverStyle}>{receiver.nickname}</span>
          </h1>
        </div>
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
                      minRows={2}
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
