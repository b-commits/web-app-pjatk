import axios from 'axios';

interface ListingCommentProps {
  content: string;
  commentListing?: number;
  commentSender?: number;
}

export const getAllListings = (): any => {
  return axios.get('http://localhost:5000/api/listings/', {
    withCredentials: true,
  });
};

export const getAllListingComments = (listingId: number) => {
  return axios.get(`http://localhost:5000/api/listings/comments/${listingId}`, {
    withCredentials: true,
  });
};

export const getAllParticipators = (listingId: number) => {
  return axios.get(`http://localhost:5000/api/participations/${listingId}`, {
    withCredentials: true,
  });
};

export const postListingComment = async (
  comment: ListingCommentProps
): Promise<any> => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/listings/comments',
    data: {
      content: comment.content,
      commentListing: comment.commentListing,
      commentSender: comment.commentSender,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const postRating = async (
  listingId: number,
  userId: number,
  rating: number,
  rater: number
): Promise<any> => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/participations/ratings',
    data: {
      listingId: listingId,
      userId: userId,
      rating: rating,
      rater: rater,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const joinListing = async (userId: number, listingId: number) => {
  await axios({
    method: 'POST',
    withCredentials: true,
    url: 'http://localhost:5000/api/participations/',
    data: {
      listingId: listingId,
      userId: userId,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const leaveListing = async (userId: number, listingId: number) => {
  await axios({
    method: 'DELETE',
    withCredentials: true,
    url: 'http://localhost:5000/api/participations/',
    data: {
      listingId: listingId,
      userId: userId,
    },
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};
