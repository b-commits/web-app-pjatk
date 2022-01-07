/** @jsxImportSource @emotion/react */
import { FC, useState, useContext, useEffect } from 'react';
import { Rating } from '@material-ui/lab';
import { AuthContext } from '../../context/AuthContext';
import { postRating } from './ApiCalls';
import axios from 'axios';

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
  const [currentRating, setCurrentRating] = useState<number>();

  useEffect(() => {
    axios({
      method: 'POST',
      withCredentials: true,
      url: 'http://localhost:5000/api/participations/ratings/perUser',
      data: {
        listingId: listingId,
        participatorId: participatorId,
        raterId: currentUser.id,
      },
    })
      .then((res) => {
        setCurrentRating(res.data.rating);
        console.log(currentRating);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!currentUser || currentUser.nickname === nickname)
    return <div>{currentUser.nickname}</div>;
  if (!currentRating)
    return (
      <div>
        {nickname}{' '}
        <Rating
          defaultValue={currentRating}
          onChange={(_event, newValue: any) => {
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
      </div>
    );
  return (
    <>
      <div>{nickname}</div>
      {currentUser.nickname === nickname ? null : (
        <Rating
          defaultValue={currentRating}
          onChange={(_event, newValue: any) => {
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
      )}
    </>
  );
};
