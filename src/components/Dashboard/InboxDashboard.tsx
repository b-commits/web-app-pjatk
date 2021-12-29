/** @jsxImportSource @emotion/react */
import React, { FC, useEffect, useState, useContext } from 'react';
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
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser.id);
    getUserPrivateMessages(currentUser.id).then((messages: any) => {
      setPrivateMessages(messages.data.reverse());
    });
    console.log(privateMessages);
  }, []);

  return (
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
              <TableRow>
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
                  <Button>Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Alert severity="info">You have not received any messages yet.</Alert>
      )}
    </>
  );
};
