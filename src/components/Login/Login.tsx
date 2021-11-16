/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import FormikField from '../Register/FormikField';
import { Button } from '@material-ui/core';
import { homeMain } from '../Register/Register.style';
import { validationSchema } from './LoginValidationSchema';
import { loginUser } from './ApiCalls';
import { Redirect } from 'react-router-dom';

interface FormValues {
  email: string;
  password: string;
  isRedirect?: boolean;
}

const initialValues: FormValues = {
  email: '',
  password: '',
  isRedirect: false,
};

export const Login: React.FC<FormValues> = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (values: FormValues) => {
    loginUser(values).then(() => {
      setLoggedIn(true);
    });
  };

  if (loggedIn) return <Redirect to="/profile"></Redirect>;
  return (
    <>
      <main css={homeMain}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <FormikField name="email" label="E-mail" required />
                <FormikField
                  name="password"
                  label="Password"
                  type="password"
                  required
                />
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
