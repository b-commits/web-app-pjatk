import axios from 'axios';

export const logoutUser = async (): Promise<any> => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/users/logout',
  }).then((res) => res.status);
};

export const getUsersByNickname = (nickname: string): any => {
  return axios.get(`http://localhost:5000/api/users/search/${nickname}`, {
    withCredentials: true,
  });
};
