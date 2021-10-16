import React from 'react';
import { Formik } from 'formik';
import { Button, Checkbox, TextField } from '@material-ui/core';

export const Register: React.FC = () => {
  return (
    <div>
      Register
      <Formik
        initialValues={{
          nickname: 'Nickname...',
          email: 'E-mail...',
          password: 'Password...',
          passwordConfirm: 'Password...',
        }}
        onSubmit={(data) => {
          // todo form submit
          console.log(data);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="nickname"
              placeholder="Nickname..."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              name="email"
              placeholder={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              type="password"
              name="password"
              placeholder={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              type="password"
              name="passwordConfirm"
              placeholder={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Checkbox id="checkboxNewsletter" />
            <label>I want to receive a monthly newsletter</label>
            <Checkbox />
            <label>I agree to terms and conditions</label>
            <Button type="submit">SIGN UP</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
