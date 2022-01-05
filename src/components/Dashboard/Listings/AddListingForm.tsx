/** @jsxImportSource @emotion/react */
import React, { FC, useState } from 'react';
import { Formik, Form } from 'formik';
import FormikField from '../UserSettings/FormikField';
import { validationSchema } from './validation/AddListingValdiation';
import { CircularProgress } from '@material-ui/core';
import {} from '../css/Dashboard.style';
import { submitButton } from '../css/UserSettingsDashboard.style';
import { selectField } from '../css/ListingsDashboard.style';

interface FormValues {
  id: number;
  title: string;
  maxPlayers: number;
  gameId: number;
}

export const AddListingForm: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, isSuccess] = useState<boolean>(false);
  const [taken, isTaken] = useState<boolean>(false);

  const initialValues = {
    id: 0,
    title: '',
    maxPlayers: 1,
    gameId: 0,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => {
          return (
            <Form>
              <FormikField name='title' label='Title' type='text' required />
              <FormikField
                name='maxPlayers'
                label='Max Players'
                type='number'
                required
              />
              <div className='FormikField'>
                <select css={selectField} value='0'>
                  <option value='0' label='Choose Game' />
                  <option value='1' label='Forza' />
                  <option value='2' label='Witcher 3' />
                  <option value='3' label='CS:GO' />
                </select>
              </div>
              {loading ? (
                <CircularProgress />
              ) : (
                <button css={submitButton} type='submit'>
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
