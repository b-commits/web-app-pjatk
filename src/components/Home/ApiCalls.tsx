import axios from 'axios';

export const getAllListings = (): any => {
  return axios.get('http://localhost:5000/api/listings/', {
    withCredentials: true,
  });
};
