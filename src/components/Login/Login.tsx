/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import FormikField from '../Register/FormikField';
import Alert from '@material-ui/lab/Alert';
import {
  loginImage,
  loginWrap,
  loginFormWrap,
  loginInputsWrap,
  loginFormSubmit,
  linkClass,
} from './Login.style';
import { validationSchema } from './LoginValidationSchema';
import { getCurrentUser, loginUser } from './ApiCalls';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

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
  const [hasErrors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const { authenticated, setAuthenticated, currentUser, setCurrentUser } =
    useContext(AuthContext);

  const handleLogin = async (values: FormValues) => {
    setLoading(true);
    await loginUser(values)
      .then(async () => {
        await getCurrentUser().then((res: any) =>
          setCurrentUser(res.data.currentUser[0])
        );
        setLoading(false);
        setAuthenticated(true);
      })
      .catch(() => {
        setLoading(false);
        setErrors(true);
      });
  };

  if (authenticated)
    return (
      <Redirect to={{ pathname: `/profile/${currentUser.id}` }}></Redirect>
    );

  return (
    <>
      <main css={loginWrap}>
        <div css={loginFormWrap}>
          <div css={loginImage}></div>
          <div css={loginInputsWrap}>
            <h1>Log in</h1>
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
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <button
                        css={loginFormSubmit}
                        disabled={!dirty || !isValid}
                        type="submit"
                      >
                        Submit
                      </button>
                    )}
                  </Form>
                );
              }}
            </Formik>
            <p>
              Don't have an account yet?{' '}
              <Link css={linkClass} to="/register">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        {hasErrors && (
          <Alert severity="error">
            Either your password is wrong or you haven't registered yet.
          </Alert>
        )}
      </main>
    </>
  );
};
