/** @jsxImportSource @emotion/react */
import React from 'react';
import { ListingComment } from './ListingComment';
import { Formik, Form, Field } from 'formik';
import {
  Modal,
  Box,
  Typography,
  Backdrop,
  Button,
  TextField,
} from '@material-ui/core';
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

const handleProfileComment = async () => {};

export const ListingItem: React.FC<any> = ({
  id,
  title,
  message,
  createdAt,
  status,
}: ListingProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            onClick={handleOpen}
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
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 2000,
            }}
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Listing!
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

              <Formik onSubmit={handleProfileComment} initialValues={{}}>
                {() => {
                  return (
                    <Form>
                      <Field
                        placeholder="Leave a comment..."
                        css={muiField}
                        as={TextField}
                        name="content"
                        multiline
                        rows={2}
                        maxRows={4}
                      />
                      <br />
                      <br />
                    </Form>
                  );
                }}
              </Formik>
              <Button type="submit" color="secondary" variant="contained">
                Send comment
              </Button>
              <ListingComment />
            </Box>
          </Modal>
        </span>
        <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
        <span css={blueText}>
          <Button
            onClick={handleOpen}
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
