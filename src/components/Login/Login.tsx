/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import FormikField from '../Register/FormikField';
import { Button } from '@material-ui/core';
import { homeMain } from '../Register/Register.style';
import { validationSchema } from './LoginValidationSchema';
import { getCurrentUser, loginUser } from './ApiCalls';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

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
  const { authenticated, setAuthenticated, setCurrentUser } =
    useContext(AuthContext);

  const handleLogin = async (values: FormValues) => {
    await loginUser(values).then(() => {
      setAuthenticated(true);
    });
    console.log('handle login');
    const currentUser = await getCurrentUser();
    setCurrentUser(currentUser.currentUser);
  };

  if (authenticated) return <Redirect to={{ pathname: '/profile' }}></Redirect>;
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
        Don't have an account yet? <a href="/register">Sign up</a>
      </main>
    </>
  );
};
