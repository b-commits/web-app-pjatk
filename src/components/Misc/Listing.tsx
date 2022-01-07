/** @jsxImportSource @emotion/react */
import { FC, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ListingComment } from './ListingComment';
import { Formik, Form, Field } from 'formik';
import {
  getAllListingComments,
  getAllParticipators,
  joinListing,
  leaveListing,
  postListingComment,
} from './ApiCalls';
import { Modal, Box, Typography, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { UserParticipationRating } from './UserParticipationRating';
import { UserFavGamesItem } from '../Profile/UserFavGames';
import { Button, DANGER, INFO, SUCCES } from './Button';
import {
  listingItemWrap,
  listingItemWrapHomePage,
  listingHeader,
  listingTitle,
  gameBox,
  gameImgStyle,
  gameNameStyle,
  listingDesc,
  listingFooter,
  buttonLine,
  wrapButton,
} from './css/Listing.style';

import { modalStyle, muiField, imgStyle } from '../Home/Home.style';

export const PROFILE_VIEW = 'PROFILEVIEW';
export const DASHBOARD_VIEW = 'DASHBOARD';
export const HOMEPAGE_VIEW = 'HOMPAGE';

interface ListingProps {
  id: number;
  title: string;
  url: string;
  maxNumberOfPlayers: string;
  desc: string;
  gameName: string;
  gameImgUrl: string;
  createdAt?: any;
  status?: boolean;
  activeView?: string;
}

interface ListingCommentProps {
  content: string;
  nickname: string;
  commentSender?: number;
  createdAt?: Date;
}

const initialCommentValues: ListingCommentProps = {
  content: ' ',
  commentSender: 0,
  nickname: '',
};

export const Listing: FC<ListingProps> = ({
  id,
  title,
  url,
  maxNumberOfPlayers,
  desc,
  gameName,
  gameImgUrl,
  createdAt,
  status,
  activeView,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const [listingComments, setListingComments] = useState<any>([]);
  const [participators, setParticipators] = useState<any>([]);
  const { authenticated } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);
  const description = desc.length > 70 ? desc.slice(0, 70) + '...' : desc;
  const history = useHistory();

  let listingItemWrapCSS;
  switch (activeView) {
    case HOMEPAGE_VIEW: {
      listingItemWrapCSS = listingItemWrapHomePage;
      break;
    }
    case DASHBOARD_VIEW: {
      listingItemWrapCSS = listingItemWrap;
      break;
    }
    case PROFILE_VIEW: {
      listingItemWrapCSS = listingItemWrap;
      break;
    }
    default: {
      listingItemWrapCSS = listingItemWrap;
    }
  }

  const getGameName = (id: number) => {
    switch (id) {
      case 1:
        return 'Apex Legends';
      case 2:
        return 'CS: GO';
      case 3:
        return 'DOTA 2';
      case 4:
        return 'Ready or Not';
      case 5:
        return 'Rainbow Six: Siege';
      case 6:
        return 'Stardew Valley';
      case 7:
        return 'It Takes Two';
      case 8:
        return 'Terraria';
      case 9:
        return 'Valheim';
      case 10:
        return 'World of Warships';
    }
  };

  const handleJoin = () => {
    joinListing(currentUser.id, id)
      .then(() => {
        setParticipators([...participators, currentUser]);
      })
      .catch((err) => console.log(err));
  };

  const handleLeave = () => {
    leaveListing(currentUser.id, id)
      .then(() => {
        const removed = participators.filter(
          (participator: any) => participator != currentUser
        );
        setParticipators(removed);
      })
      .catch((err) => console.log(err));
  };

  const handleListingComment = async (values: ListingCommentProps) => {
    const newComment = {
      content: values.content,
      nickname: currentUser.nickname,
      commentListing: currentUser.id,
      created_at: new Date().toLocaleTimeString().substring(0, 5),
    };
    await postListingComment({
      content: newComment.content,
      commentSender: currentUser.id,
      commentListing: id,
    })
      .then(() => {
        setListingComments([newComment, ...listingComments]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllListingComments(id).then((listingComments: any) => {
      setListingComments(listingComments.data.reverse());
    });
  }, [id]);

  useEffect(() => {
    getAllParticipators(id).then((res: any) => {
      setParticipators(res.data);
    });
  }, [id]);

  return (
    <div css={listingItemWrapCSS}>
      <div css={listingHeader}>
        <i className="fas fa-users">
          {'  '}
          {participators.length}/{maxNumberOfPlayers}
        </i>
        <h1 title={title} css={listingTitle}>
          {getGameName(parseInt(gameName))}
        </h1>
        {participators.includes(currentUser) ? (
          <i onClick={handleLeave} className="fas fa-user-minus"></i>
        ) : (
          <i onClick={handleJoin} className="fas fa-user-plus"></i>
        )}
      </div>
      <div css={gameBox}>
        <img css={gameImgStyle} src={gameImgUrl} alt={gameName} />
        <span css={gameNameStyle}></span>
      </div>
      <div css={listingDesc}>
        <p>{description}</p>
      </div>
      <div css={listingFooter}>
        {currentUser ? (
          <div css={buttonLine}>
            <div css={wrapButton}>
              <Button title="Details" type={SUCCES} onCLick={handleModalOpen} />
            </div>
            <Button
              title="Manage"
              type={INFO}
              onCLick={() => {
                console.log('Manage Listing Button');
              }}
            />
          </div>
        ) : (
          <Button
            title="Details"
            type={INFO}
            onCLick={() => {
              history.push('/login');
            }}
          >
            Log in to view the details
          </Button>
        )}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Listing #{id}
          </Typography>
          <UserFavGamesItem
            gameImgUrl={`/gamePics/${gameName}.jpeg`}
            gameName={gameName}
            gameUrl={'/'}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            List of players:
            {participators.map((participator: any, index: number) => {
              return (
                <UserParticipationRating
                  participators={participators}
                  maxNumberOfPlayers={maxNumberOfPlayers}
                  nickname={participator.nickname}
                  participatorId={participator.id}
                  listingId={id}
                  key={index}
                />
              );
            })}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Number of players: {participators.length}/{maxNumberOfPlayers}
          </Typography>
          {!currentUser ? (
            <p>Log in to join a listing</p>
          ) : (
            [
              participators.length >= maxNumberOfPlayers ? (
                <div>
                  <Alert severity="info">This listing is already full.</Alert>
                  {participators.includes(currentUser) ? (
                    <Button
                      onCLick={() => handleLeave()}
                      title="Leave"
                      type={DANGER}
                    />
                  ) : null}
                </div>
              ) : (
                [
                  participators.includes(currentUser) ? (
                    <Button
                      onCLick={() => handleLeave()}
                      title="Leave"
                      type={DANGER}
                    />
                  ) : (
                    <Button
                      title="Join In"
                      type={SUCCES}
                      onCLick={() => handleJoin()}
                    />
                  ),
                ]
              ),
            ]
          )}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comments:
          </Typography>

          {authenticated ? (
            <Formik
              onSubmit={handleListingComment}
              initialValues={initialCommentValues}
            >
              {() => {
                return (
                  <Form>
                    <Field
                      placeholder="Leave a comment..."
                      css={muiField}
                      as={TextField}
                      name="content"
                      multiline
                      minRows={2}
                      maxRows={4}
                    />
                    <br />
                    <br />
                    <Button
                      title="Add Comment"
                      type={INFO}
                      isSubmit={true}
                      onCLick={() => {
                        console.log('[MODAL][BUTTON] - Add Comment');
                      }}
                    />
                  </Form>
                );
              }}
            </Formik>
          ) : (
            <div>Log in to add a comment</div>
          )}

          {listingComments.map((listingComment: any, index: any) => {
            return (
              <ListingComment
                ListingCommentProps={listingComment}
                key={index}
              />
            );
          })}
        </Box>
      </Modal>
    </div>
  );
};
