/** @jsxImportSource @emotion/react */
import React, { FC, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getUserPrivateMessages } from './ApiCalls';
import { Alert } from '@material-ui/lab';
import { Conversation } from './Conversation';
import {
  inboxWrap,
  inboxSidebar,
  contactList,
  inboxConversation,
} from './css/InboxDashboard.style';
interface MurwaProps {
  msgs: any;
  currentUser: any;
  partner: any;
}

const trimDate = (unformatted: string) => {
  return unformatted.substring(0, 10) + ' ' + unformatted.substring(11, 16);
};

export const InboxDashboard: FC = () => {
  const [privateMessages, setPrivateMessages] = useState<any>([]);
  const { currentUser, authenticated } = useContext(AuthContext);
  const history = useHistory();
  const [conversation, setConversation] = useState<any>([]);

  useEffect(() => {
    if (authenticated) {
      getUserPrivateMessages(currentUser.id).then((messages: any) => {
        setPrivateMessages(messages.data.reverse());
      });
      setConversation(conversations[0]);
    }
  }, []);

  var recivers: number[] = [];

  for (var i in privateMessages) {
    const tmp = privateMessages[i].messageReceiver;

    if (!recivers.includes(tmp) && tmp != currentUser.id) {
      recivers.push(tmp);
    }
  }

  for (var i in privateMessages) {
    const tmp = privateMessages[i].messageSender;

    if (!recivers.includes(tmp) && tmp != currentUser.id) {
      recivers.push(tmp);
    }
  }

  //grouping messeges as conversations of 2 users
  var conversations: any[] = [];
  for (var i in recivers) {
    //conversation
    const conversation: any[] = [];

    for (var j in privateMessages) {
      const tmpReceiver = privateMessages[j].messageReceiver;
      const tmpSender = privateMessages[j].messageSender;

      if (tmpReceiver === recivers[i]) {
        //if id from recivers list is equal to message reciver
        conversation.push(privateMessages[j]);
      } else if (tmpReceiver === currentUser.id && tmpSender === recivers[i]) {
        //if id from recivers list is equal to current user id
        // AND
        // reciver id is in the reciver list
        conversation.push(privateMessages[j]);
      }
    }
    //add new conversation
    conversations.push(conversation);
  }

  // Sorting by date
  conversations.sort((a, b) => {
    return b[0].created_at.localeCompare(a[0].created_at);
  });

  return (
    <>
      {authenticated ? (
        <>
          <h1>Inbox</h1>
          <div css={inboxWrap}>
            {privateMessages.length > 0 ? (
              <>
                <div css={inboxSidebar}>
                  <ul css={contactList}>
                    {
                      //Maping conversation
                      conversations.map((item: any, index: any) => {
                        var partnerId: any = '';
                        var partnerNickname: any;

                        for (var i in item) {
                          if (item[i].messageReceiver != currentUser.id) {
                            partnerId = item[i].messageReceiver;
                            partnerNickname = item[i].receiverNickname;
                            break;
                          }
                        }

                        if (partnerId.length < 1) {
                          for (var i in item) {
                            if (item[i].messageSender != currentUser.id) {
                              partnerId = item[i].messageSender;
                              partnerNickname = item[i].senderNickname;
                              break;
                            }
                          }
                        }

                        return (
                          <>
                            <li
                              key={index}
                              onClick={() => setConversation(item)}
                            >
                              <img
                                src={`/profilePics/${partnerNickname}.jpg`}
                                alt={partnerNickname}
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null;
                                  currentTarget.src =
                                    'http://bluepito.webd.pro/logopjatk.gif';
                                }}
                              />
                              <div>
                                <h3>{partnerNickname}</h3>
                              </div>
                            </li>
                          </>
                        );
                      })
                    }
                  </ul>
                </div>

                <div css={inboxConversation}>
                  {conversation ? (
                    <Conversation
                      msgs={conversation}
                      currentUser={currentUser}
                    />
                  ) : (
                    <div
                      css={{
                        width: '90%',
                        padding: '25px',
                        margin: '0 auto',
                      }}
                    >
                      <Alert severity='info'>Please select conversation</Alert>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Alert severity='info'>
                You have not received any messages yet.
              </Alert>
            )}
          </div>
        </>
      ) : (
        <Alert severity='error'>You have to log in first!</Alert>
      )}
    </>
  );
};
