/** @jsxImportSource @emotion/react */
import React, { FC, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, INFO } from '../Misc/Button';

import {
  inboxConversationHeader,
  inboxMessages,
  inboxMessagePointerMe,
  inboxMessagePointerYou,
  inboxMessageMe,
  inboxMessageYou,
  inboxMessageAuthorMe,
  inboxMessageAuthorYou,
} from './css/InboxDashboard.style';

interface ConversationProps {
  msgs: any;
  currentUser: any;
}

const trimDate = (unformatted: string) => {
  return unformatted.substring(0, 10) + ' ' + unformatted.substring(11, 16);
};

export const Conversation: FC<ConversationProps> = (props) => {
  const history = useHistory();
  var partnerId: any = '';
  var partnerNickname: any;

  for (var i in props.msgs) {
    if (props.msgs[i].messageReceiver != props.currentUser.id) {
      partnerId = props.msgs[i].messageReceiver;
      partnerNickname = props.msgs[i].nickname;
      break;
    }
  }

  if (partnerId.length < 1) {
    for (var i in props.msgs) {
      if (props.msgs[i].messageSender != props.currentUser.id) {
        partnerId = props.msgs[i].messageSender;
        partnerNickname = 'User with ID:' + props.msgs[i].messageSender;
        break;
      }
    }
  }
  return (
    <>
      <header css={inboxConversationHeader}>
        <img
          src={`/profilePics/${partnerNickname}.jpg`}
          alt={partnerNickname}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = 'http://bluepito.webd.pro/logopjatk.gif';
          }}
          style={{ cursor: 'pointer' }}
          title={`Visit ${partnerNickname} profile`}
          onClick={() => {
            history.push({
              pathname: `/profile/${partnerId}`,
            });
          }}
        />
        <div>
          <h3
            style={{ cursor: 'pointer' }}
            title={`Visit ${partnerNickname} profile`}
            onClick={() => {
              history.push({
                pathname: `/profile/${partnerId}`,
              });
            }}
          >
            Messeges with <span>{partnerNickname}</span>
          </h3>
          <div title={`Reply to ${partnerNickname}`}>
            <></>

            <Button
              title='Send Message'
              type={INFO}
              onCLick={() => {
                history.push({
                  pathname: '/message',
                  state: {
                    receiverId: partnerId,
                  },
                });
              }}
            />
          </div>
        </div>
      </header>

      <ul css={inboxMessages}>
        {props.msgs.map((item: any, index: any) => {
          return (
            <>
              <li key={index}>
                <div
                  css={
                    props.currentUser.id === item.messageSender
                      ? inboxMessageMe
                      : inboxMessageYou
                  }
                >
                  {item.content}
                </div>
                <div
                  css={
                    props.currentUser.id === item.messageSender
                      ? inboxMessagePointerMe
                      : inboxMessagePointerYou
                  }
                ></div>
                <div
                  css={
                    props.currentUser.id === item.messageSender
                      ? inboxMessageAuthorMe
                      : inboxMessageAuthorYou
                  }
                >
                  {props.currentUser.id === item.messageSender
                    ? props.currentUser.nickname
                    : partnerNickname}{' '}
                  |{' '}
                  <span css={{ color: '#ccc' }}>
                    {trimDate(item.created_at)}
                  </span>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
