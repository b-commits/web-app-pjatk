/** @jsxImportSource @emotion/react */
import { FC, useState, useEffect, useContext } from 'react';
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
import { UserParticipationRating } from './UserParticipationRating';
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
} from './css/Listing.style';

import { modalStyle, muiField, imgStyle } from '../Home/Home.style';

//----------
export const PROFILE_VIEW = 'PROFILEVIEW';
export const DASHBOARD_VIEW = 'DASHBOARD';
export const HOMEPAGE_VIEW = 'HOMPAGE';
//----------

interface ListingProps {
  id: number;
  title: string;
  url: string;
  desc: string;
  gameName: string;
  gameImgUrl: string;
  createdAt?: any; // UWAGA DODAC DO KONTENERA optional na potrzeby unifikacji z komponentem z home
  status?: boolean; // UWAGA DODAC DO KONTENERA optional na potrzeby unifikacji z komponentem z home
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
  desc,
  gameName,
  gameImgUrl,
  createdAt,
  status,
  activeView,
}) => {
  //State
  const [open, setOpen] = useState<boolean>(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const [listingComments, setListingComments] = useState<any>([]);
  const [participators, setParticipators] = useState<any>([]);
  const { authenticated } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

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
  }, []);

  //Vars
  const titleSliced = title.length > 35 ? desc.slice(0, 35) + '...' : title;
  const description = desc.length > 70 ? desc.slice(0, 70) + '...' : desc;
  // const gameNameSlice =
  //   gameName.length > 80 ? gameName.slice(0, 90) + '...' : gameName;

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
  return (
    <div css={listingItemWrapCSS}>
      <div css={listingHeader}>
        <i className="fas fa-users"></i>

        <h1 title={title} css={listingTitle}>
          {titleSliced}
        </h1>
        <i className="fas fa-share"></i>
      </div>
      <div css={gameBox}>
        <img css={gameImgStyle} src={gameImgUrl} alt={gameName} />
        <span css={gameNameStyle}></span>
      </div>
      <div css={listingDesc}>
        <p>{description}</p>
      </div>
      <div css={listingFooter}>
        <Button
          title="Manage"
          type={INFO}
          onCLick={() => {
            console.log('Manage Listing Button');
          }}
        />{' '}
        <Button title="Details" type={SUCCES} onCLick={handleModalOpen} />
        <Button
          title="Delete"
          type={DANGER}
          onCLick={() => {
            console.log('Delete listing Button');
          }}
        />{' '}
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
            {id}
          </Typography>
          <img
            css={imgStyle}
            alt=""
            src="https://d-art.ppstatic.pl/kadry/k/r/1/51/a5/5e287d9223f8f_o_large.jpg"
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Game: {gameName}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            List of players:
            {participators.map((participator: any, index: number) => {
              return (
                <UserParticipationRating
                  nickname={participator.nickname}
                  participatorId={participator.id}
                  listingId={id}
                  key={index}
                />
              );
            })}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Number of players: 4/5
          </Typography>
          {!currentUser ? (
            <p>Log in to join a listing</p>
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
