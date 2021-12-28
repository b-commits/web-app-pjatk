/** @jsxImportSource @emotion/react */
import React, { FC, useState } from 'react';
import { Redirect } from 'react-router';
import Alert from '@material-ui/lab/Alert';
import { Formik, Form } from 'formik';
import { submitButton } from '../css/UserSettingsDashboard.style';
import { validationSchema } from './validation/ChangePassValidation';
import FormikField from './FormikField';

interface FormValues {
  report: string;
}

const initialValues: FormValues = {
  report: '',
};

export const ReportAdmin: FC = () => {
  const [authorized, setAuthorized] = useState(false);
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
                name='report'
                label='report'
                type='textarea'
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
