import axios from 'axios';

interface FormValues {
  email: string;
  password: string;
}

export const loginUser = async (User: FormValues) => {
  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/users/login',
    // todo: pass object?
    data: {
      email: User.email,
      password: User.password,
    },
  });
};
