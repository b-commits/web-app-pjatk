/** @jsxImportSource @emotion/react */
import React, { FC, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getUserPrivateMessages } from './ApiCalls';
import { Alert } from '@material-ui/lab';
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from '@material-ui/core';

export const InboxDashboard: FC = () => {
  const [privateMessages, setPrivateMessages] = useState<any>([]);
  const { currentUser, authenticated } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (authenticated) {
      getUserPrivateMessages(currentUser.id).then((messages: any) => {
        setPrivateMessages(messages.data.reverse());
      });
    }
  }, []);

  //todo add a table warpper for MQ
  return (
    <>
      {authenticated ? (
        <>
          <h1>Inbox</h1>
          {privateMessages.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Content</TableCell>
                  <TableCell>From</TableCell>
                  <TableCell>Received</TableCell>
                  <TableCell> </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {privateMessages.map((message: any, index: any) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {message.content}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {message.nickname}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {message.created_at}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Button
                        onClick={() => {
                          history.push({
                            pathname: '/message',
                            state: {
                              receiverId: message.messageSender,
                            },
                          });
                        }}
                      >
                        Reply
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Alert severity="info">
              You have not received any messages yet.
            </Alert>
          )}
        </>
      ) : (
        <Alert severity="error">You have to log in first!</Alert>
      )}
    </>
  );
};
