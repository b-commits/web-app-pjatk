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
    data: {
      email: User.email,
      password: User.password,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const getCurrentUser = async (): Promise<any> => {
  console.log('runs...');
  await axios({
    method: 'GET',
    withCredentials: true,
    url: 'http://localhost:5000/api/users/currentUser',
  }).then((res) => console.log(res.data.currentUser[0]));
};
