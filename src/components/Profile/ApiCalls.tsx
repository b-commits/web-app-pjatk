import axios from 'axios';

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
