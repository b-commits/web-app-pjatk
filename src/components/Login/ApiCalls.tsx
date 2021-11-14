import axios from 'axios';

interface FormValues {
  email: string;
  password: string;
}

export const loginUser = async (User: FormValues): Promise<any> => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/users/login',
    // todo: pass object?
    data: {
      email: User.email,
      password: User.password,
    },
  }).then((res) => res.status);
};
