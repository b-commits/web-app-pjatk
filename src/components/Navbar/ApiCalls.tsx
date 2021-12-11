import axios from 'axios';

export const logoutUser = async (): Promise<any> => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/users/logout',
  }).then((res) => res.status);
};
