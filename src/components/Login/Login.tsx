/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import FormikField from '../Register/FormikField';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { homeMain } from '../Register/Register.style';
import { loginUser } from './ApiCalls';
import { Redirect } from 'react-router-dom';
import { validationSchema } from './LoginValidationSchema';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

export const Login: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (values: FormValues) => {
    loginUser(values).then(() => {
      setLoggedIn(true);
    });
  };

  useEffect(() => {
    console.log('runs...');
    if (loggedIn) {
      return () => {
        <Redirect push to={{ pathname: '/profile' }} />;
      };
    }
  }, [loggedIn]);

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
