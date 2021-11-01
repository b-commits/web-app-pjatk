/** @jsxImportSource @emotion/react */
import React from 'react';
import { Formik, Form } from 'formik';
import FormikField from './FormikField';
import { Button, Checkbox } from '@material-ui/core';
import { RegisterBanner } from './RegisterBanner';
import { homeMain } from './Register.style';
import { validationSchema } from './RegistrationValidationSchema';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

interface FormValues {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const initialValues: FormValues = {
  nickname: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export const Register: React.FC = () => {
  let history = useHistory();

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (authorized) {
      return () => {
        <Redirect to="/login"></Redirect>;
      };
    }
  });

  const handleSubmit = () => {
    setAuthorized(true);
    // history.push('/login');
  };

  return (
    <>
      <RegisterBanner />
      <main css={homeMain}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <FormikField name="nickname" label="Nickname" required />
                <FormikField name="email" label="E-mail" required />
                <FormikField
                  name="password"
                  label="Password"
                  type="password"
                  required
                />
                <FormikField
                  name="passwordConfirm"
                  label="Confirm Password"
                  type="password"
                  required
                />
                <Checkbox color="primary" />{' '}
                <label>I want to receive a monthly newsletter.</label>
                <br />
                <Checkbox color="primary" />
                <label>I agree to terms and conditions.</label>
                <br />
                <Button
                  color="primary"
                  disabled={!dirty || !isValid}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </main>
    </>
  );
};
