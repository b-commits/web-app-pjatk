/** @jsxImportSource @emotion/react */
import React from 'react';
import FormikField from './FormikField';
import Alert from '@material-ui/lab/Alert';
import { Formik, Form, Field } from 'formik';
import { Button, Checkbox } from '@material-ui/core';
import { RegisterBanner } from './RegisterBanner';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import {
  registerImage,
  labelAbout,
  registerWrap,
  registerFormWrap,
  registerInputsWrap,
  registerFormSubmit,
} from './Register.style';
import { validationSchema } from './RegistrationValidationSchema';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { postUser } from './ApiCalls';

interface FormValues {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  newsletter: boolean;
}

const initialValues: FormValues = {
  nickname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  newsletter: false,
};

export const Register: React.FC = () => {
  const [authorized, setAuthorized] = useState(false);
  const [hasErrors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleRegistration = (values: FormValues) => {
    setLoading(true);
    postUser(values)
      .then(() => {
        setAuthorized(true);
        setLoading(false);
      })
      .catch((err) => {
        setErrors(true);
      });
  };

  if (authorized) return <Redirect to="/login"></Redirect>;
  else
    return (
      <>
        <main css={registerWrap}>
          <div css={registerFormWrap}>
            <div css={registerImage}></div>
            <div css={registerInputsWrap}>
              <h1>Register</h1>
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
                      <div>
                        <Field name="newsletter" type="checkbox" as={Checkbox}>
                          I want to sign up for a newsletter
                        </Field>
                        <label>I want to receive a monthly newsletter.</label>
                      </div>
                      <div>
                        <Checkbox color="primary" />
                        <label
                          css={labelAbout}
                          onClick={() => {
                            history.push('/about');
                          }}
                        >
                          I know what this is all about!
                        </label>
                      </div>
                      {loading ? (
                        <CircularProgress />
                      ) : (
                        <button
                          css={registerFormSubmit}
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
            </div>
          </div>
          {hasErrors && (
            <Alert severity="error">
              That email or nickname is already taken.
            </Alert>
          )}
        </main>
      </>
    );
};
