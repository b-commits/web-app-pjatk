import axios from 'axios';

export const getUserPrivateMessages = (userId: number): any => {
  return axios.get(`http://localhost:5000/api/privateMessages/${userId}`, {
    withCredentials: true,
  });
};

export const deleteAccount = (userId: number): any => {
  return axios.delete(`http://localhost:5000/api/users/delete/${userId}`, {
    withCredentials: true,
  });
};
