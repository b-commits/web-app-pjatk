/** @jsxImportSource @emotion/react */
import React, { FC, useState } from 'react';
import { Redirect } from 'react-router';
import Alert from '@material-ui/lab/Alert';
import { Formik, Form } from 'formik';
import { submitButton } from '../css/UserSettingsDashboard.style';
import { validationSchema } from './validation/ChangePassValidation';
import FormikField from './FormikField';

interface FormValues {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
}

const initialValues: FormValues = {
  currentPassword: '',
  password: '',
  passwordConfirm: '',
};

export const ChangePassword: FC = () => {
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
              <FormikField
                name='currentPassword'
                label='Current Password'
                type='password'
                required
              />
              <FormikField
                name='newPassword'
                label='New Password'
                type='password'
                required
              />
              <FormikField
                name='newPasswordConfirm'
                label='Confirm New Password'
                type='password'
                required
              />
              <button
                css={submitButton}
                disabled={!dirty || !isValid}
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
