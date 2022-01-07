import axios from 'axios';
import { listing } from '../Profile/Profile.style';

interface AdminReport {
  content: string;
  reporter: number;
}

interface UsernameFormValues {
  id: number;
  nickname: string;
}

interface PasswordFormValues {
  id: number;
  newPassword: string;
}

interface ListingData {
  description: string;
  game: number;
  maxPlayers: number;
  creator: number;
}

export const getUserPrivateMessages = (userId: number): any => {
  return axios.get(`http://localhost:5000/api/privateMessages/${userId}`, {
    withCredentials: true,
  });
};

export const getUserByID = (userId: string): any => {
  return axios.get(`http://localhost:5000/api/users/user/${userId}`, {
    withCredentials: true,
  });
};

export const getUserListings = (userId: number): any => {
  return axios.get(`http://localhost:5000/api/users/${userId}`, {
    withCredentials: true,
  });
};

export const getFriends = (userId: number): any => {
  return axios.get(`http://localhost:5000/api/followings/${userId}`, {
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

export const postListing = (listingData: ListingData): any => {
  return axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/listings',
    data: {
      message: listingData.description,
      maxNumOfPlayers: listingData.maxPlayers,
      creator: listingData.creator,
      listingGame: listingData.game,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const changeUsername = (formValues: UsernameFormValues): any => {
  return axios({
    method: 'PATCH',
    withCredentials: true,
    url: 'http://localhost:5000/api/users',
    data: {
      nickname: formValues.nickname,
      id: formValues.id,
    },
  })
    .then((res) => res.status)
    .catch((err) => {});
};

export const changePassword = (formValues: PasswordFormValues): any => {
  return axios({
    method: 'PATCH',
    withCredentials: true,
    url: 'http://localhost:5000/api/users/changePassword',
    data: {
      id: formValues.id,
      newPassword: formValues.newPassword,
    },
  })
    .then((res) => res.status)
    .catch((err) => {});
};

export const likeGame = async (likedBy: number, gameLiked: number) => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/games',
    data: {
      likedBy: likedBy,
      gameLiked: gameLiked,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const unlikeGame = async (likedBy: number, gameLiked: number) => {
  await axios({
    method: 'DELETE',
    withCredentials: true,
    url: 'http://localhost:5000/api/games',
    data: {
      likedBy: likedBy,
      gameLiked: gameLiked,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const getLikedGames = async (profileId: number) => {
  return axios.get(`http://localhost:5000/api/games/${profileId}`, {
    withCredentials: true,
  });
};

export const getUserAchievments = (userId: number): any => {
  return axios.get(`http://localhost:5000/api/achievements/${userId}`, {
    withCredentials: true,
  });
};
