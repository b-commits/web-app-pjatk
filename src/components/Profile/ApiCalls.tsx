import axios from 'axios';

interface IProfilePageComment {
  content: string;
  commentSender?: number;
  commentReceiver?: number;
}

export const getUserListings = (userId: number): any => {
  return axios.get(`http://localhost:5000/api/users/${userId}`, {
    withCredentials: true,
  });
};

export const getUserByID = (userId: string): any => {
  return axios.get(`http://localhost:5000/api/users/user/${userId}`, {
    withCredentials: true,
  });
};

export const getUserProfilePageComments = (userId: string): any => {
  return axios.get(`http://localhost:5000/api/profilePageComments/${userId}`, {
    withCredentials: true,
  });
};

export const postComment = async (
  comment: IProfilePageComment
): Promise<any> => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/profilePageComments',
    data: {
      content: comment.content,
      commentSender: comment.commentSender,
      commentReceiver: comment.commentReceiver,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};
