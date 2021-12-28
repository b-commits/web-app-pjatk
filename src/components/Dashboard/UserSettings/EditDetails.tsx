/** @jsxImportSource @emotion/react */
import React, { FC, useState } from 'react';
import { Redirect } from 'react-router';
import Alert from '@material-ui/lab/Alert';
import { Formik, Form } from 'formik';
import { submitButton } from '../css/UserSettingsDashboard.style';
import { validationSchema } from './validation/ChangePassValidation';
import FormikField from './FormikField';

interface FormValues {
  name: string;
  email: string;
}

const initialValues: FormValues = {
  name: 'testuser',
  email: 'example@example.com',
};

export const EditDetails: FC = () => {
  const [hasErrors, setErrors] = useState(false);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <FormikField name='name' label='New Name' type='text' required />
              <FormikField
                name='email'
                label='New email'
                type='email'
                required
              />
              <button
                css={submitButton}
                // disabled={!dirty || !isValid}
                type='submit'
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
      {hasErrors && (
        <Alert severity='error'>That email or password is already taken.</Alert>
      )}
    </>
  );
};
