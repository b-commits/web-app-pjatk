/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import FormikField from '../UserSettings/FormikField';
import { validationSchema } from './validation/AddListingValdiation';
import { CircularProgress } from '@material-ui/core';
import { postListing } from '../ApiCalls';
import { submitButton } from '../css/UserSettingsDashboard.style';
import { selectField } from '../css/ListingsDashboard.style';
import { AuthContext } from '../../../context/AuthContext';

interface FormValues {
  description: string;
  game: number;
  maxPlayers: number;
  creator: number;
}

export const AddListingForm: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, isSuccess] = useState<boolean>(false);
  const [taken, isTaken] = useState<boolean>(false);
  const { currentUser } = useContext(AuthContext);

  const initialValues = {
    description: '',
    game: 0,
    maxPlayers: 0,
    creator: currentUser.id,
  };

  const handlePostListing = (listing: FormValues) => {
    postListing(listing)
      .then(() => {
        console.log('Listing has been added');
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handlePostListing(values)}
      >
        {() => {
          return (
            <Form>
              <FormikField
                name="description"
                label="Description"
                type="text"
                required
              />
              <br />
              <div className="FormikField">
                <Field name="game" css={selectField} as="select">
                  <option value="1" label="Apex Legends" />
                  <option value="2" label="CS: GO" />
                  <option value="3" label="Dota 2" />
                  <option value="4" label="Ready or Not" />
                  <option value="5" label="Rainbow Six: Siege" />
                  <option value="6" label="Stardew Valley" />
                  <option value="7" label="It Takes Two" />
                  <option value="8" label="Terraria" />
                  <option value="9" label="Valheim" />
                  <option value="10" label="World of Warships" />
                </Field>
              </div>
              <br></br>
              <FormikField
                name="maxPlayers"
                label="Max Players"
                type="number"
                required
              />
              {loading ? (
                <CircularProgress />
              ) : (
                <button css={submitButton} type="submit">
                  Submit
                </button>
              )}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
