import axios from 'axios';

interface IProfilePageComment {
  content: string;
  commentSender?: number;
  commentReceiver?: number;
}

export const getUserListings = (userId: number): any => {
  return axios.get(`http://localhost:5000/api/users/${userId}`, {
    withCredentials: true,
  });
};

export const getUserByID = (userId: string): any => {
  return axios.get(`http://localhost:5000/api/users/user/${userId}`, {
    withCredentials: true,
  });
};

export const getUserDetails = (userId: string): any => {
  return axios.get(`http://localhost:5000/api/users/details/${userId}`, {
    withCredentials: true,
  });
};

export const getUserProfilePageComments = (userId: string): any => {
  return axios.get(`http://localhost:5000/api/profilePageComments/${userId}`, {
    withCredentials: true,
  });
};

export const postComment = async (
  comment: IProfilePageComment
): Promise<any> => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/profilePageComments',
    data: {
      content: comment.content,
      commentSender: comment.commentSender,
      commentReceiver: comment.commentReceiver,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const followUser = async (
  followingUser: number,
  followedUser: number
) => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/followings',
    data: {
      followingUser: followingUser,
      followedUser: followedUser,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const unfollowUser = async (follower: number, unfollowId: number) => {
  await axios({
    method: 'DELETE',
    withCredentials: true,
    url: 'http://localhost:5000/api/followings',
    data: {
      follower: follower,
      unfollowId: unfollowId,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const getFollowedUsers = async (profileId: number) => {
  return axios.get(`http://localhost:5000/api/followings/${profileId}`, {
    withCredentials: true,
  });
};
