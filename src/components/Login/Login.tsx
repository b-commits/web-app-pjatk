/** @jsxImportSource @emotion/react */
import React from 'react';
import { Formik, Form } from 'formik';
import FormikField from '../Register/FormikField';
import { Button } from '@material-ui/core';
import { homeMain } from '../Register/Register.style';
import { validationSchema } from './LoginValidationSchema';

interface FormValues {
  email?: string;
  password?: string;
  isRedirect: boolean;
}

const initialValues: FormValues = {
  email: '',
  password: '',
  isRedirect: false,
};

const handleSubmit = (values: FormValues): void => {
  alert(JSON.stringify(values));
};

export const Login: React.FC<FormValues> = ({ isRedirect }) => {
  if (isRedirect) {
    return <div>Wtf</div>;
  }

  return (
    <>
      <main css={homeMain}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
