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
