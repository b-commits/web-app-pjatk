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
