/** @jsxImportSource @emotion/react */
import { FC, useState, useContext } from 'react';
import { Rating } from '@material-ui/lab';
import { AuthContext } from '../../context/AuthContext';
import { postRating } from './ApiCalls';

interface UserLevelProps {
  nickname: string;
  participatorId: number;
  listingId: number;
}
export const UserParticipationRating: FC<UserLevelProps> = ({
  nickname,
  participatorId,
  listingId,
}) => {
  const { currentUser } = useContext(AuthContext);
  const [currentRating, setCurrentRating] = useState(0);

  return (
    <>
      <div>{nickname}</div>
      <Rating
        onChange={(event, newValue: any) => {
          setCurrentRating(newValue);
          postRating(listingId, participatorId, newValue, currentUser.id)
            .then(() => {
              setCurrentRating(newValue);
            })
            .catch((error: any) => {
              console.log(error);
            });
        }}
      />
    </>
  );
};
