import axios from 'axios';

interface FormValues {
  nickname: string;
  email: string;
  password: string;
}

export const postUser = async ({ nickname, email, password }: FormValues) => {
  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/users',
    data: {
      nickname: nickname,
      email: email,
      password: password,
    },
  });
};
