import axios from "axios";

interface FormValues {
  nickname: string;
  email: string;
  password: string;
  newsletter: boolean;
}

export const postUser = async ({
  nickname,
  email,
  password,
  newsletter,
}: FormValues) => {
  return await axios({
    method: "POST",
    url: "http://localhost:5000/api/users",
    data: {
      nickname: nickname,
      email: email,
      password: password,
      newsletter: newsletter,
    },
  });
};
