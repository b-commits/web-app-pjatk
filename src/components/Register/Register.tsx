/** @jsxImportSource @emotion/react */
import React from 'react';
import FormikField from './FormikField';
import Alert from '@material-ui/lab/Alert';
import { Formik, Form } from 'formik';
import { Button, Checkbox } from '@material-ui/core';
import { RegisterBanner } from './RegisterBanner';
import { homeMain } from './Register.style';
import { validationSchema } from './RegistrationValidationSchema';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { postUser } from './ApiCalls';

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
  const [authorized, setAuthorized] = useState(false);
  const [hasErrors, setErrors] = useState(false);

  const handleRegistration = (values: FormValues) => {
    postUser(values)
      .then(() => {
        setAuthorized(true);
      })
      .catch((error) => {
        setErrors(true);
      });
  };

  useEffect(() => {
    if (authorized) {
      return () => {
        <Redirect to={{ pathname: '/login', state: { isAuthorized: true } }} />;
      };
    }
  }, [authorized]);

  if (authorized) return <Redirect to="/login"></Redirect>;
  else
    return (
      <>
        <RegisterBanner />
        <main css={homeMain}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleRegistration(values)}
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
          {hasErrors && (
            <Alert severity="error">
              That email or password is already taken.
            </Alert>
          )}
        </main>
      </>
    );
};
