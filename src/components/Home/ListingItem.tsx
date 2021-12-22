/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ListingComment } from './ListingComment';
import { Formik, Form, Field } from 'formik';
import { getAllListingComments, postListingComment } from './ApiCalls';
import { Modal, Box, Typography, Button, TextField } from '@material-ui/core';
import {
  blueText,
  listingItem,
  listingHeader,
  listingHeaderTitle,
  listingImg,
  listingDesc,
  listingFooter,
  modalStyle,
  muiField,
  imgStyle,
} from './Home.style';

interface ListingProps {
  id: number;
  title: string;
  message: string;
  createdAt: any;
  status: boolean;
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

export const ListingItem: React.FC<any> = ({
  id,
  title,
  message,
  createdAt,
  status,
}: ListingProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const [listingComments, setListingComments] = useState<any>([]);
  const { currentUser } = useContext(AuthContext);

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
  }, []);

  return (
    <div css={listingItem}>
      <div>
        <div css={listingHeader}>
          <i className="fas fa-users"></i>
          <span css={listingHeaderTitle}>
            Listing {id} <br /> Stardew Valley
          </span>
          <i className="fas fa-share"></i>
        </div>
      </div>
      <div css={listingImg}>
        <img
          alt=""
          src="https://d-art.ppstatic.pl/kadry/k/r/1/51/a5/5e287d9223f8f_o_large.jpg"
        />
      </div>
      <div css={listingDesc}>{message}</div>
      <div css={listingFooter}>
        <span css={blueText}>
          <Button
            onClick={handleModalOpen}
            type="submit"
            color="primary"
            variant="contained"
          >
            Details
          </Button>

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
                Game:
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                List of players:
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Number of players: 4/5
              </Typography>
              <Button type="submit" color="primary" variant="contained">
                JOIN IN
              </Button>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Comments:
              </Typography>

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
                        type="submit"
                        color="secondary"
                        variant="contained"
                      >
                        Send comment
                      </Button>
                    </Form>
                  );
                }}
              </Formik>

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
        </span>
        <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
        <span css={blueText}>
          <Button
            onClick={handleModalOpen}
            type="submit"
            color="secondary"
            variant="contained"
          >
            HIDE
          </Button>
        </span>
      </div>
    </div>
  );
};
