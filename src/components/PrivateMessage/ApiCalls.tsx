import axios from 'axios';

interface IPrivateMessage {
  content: string;
  messageSender?: number;
  messageReceiver?: number;
}

export const sendPrivateMessage = async (
  comment: IPrivateMessage
): Promise<any> => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/privateMessages',
    data: {
      content: comment.content,
      messageSender: comment.messageSender,
      messageReceiver: comment.messageReceiver,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};
