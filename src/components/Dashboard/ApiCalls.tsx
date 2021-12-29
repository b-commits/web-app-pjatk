import axios from 'axios';

interface AdminReport {
  content: string;
  reporter: number;
}

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

export const postAdminReport = (report: AdminReport): any => {
  return axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/adminReports',
    data: {
      content: report.content,
      reporter: report.reporter,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};
