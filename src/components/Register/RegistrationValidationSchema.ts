import * as Yup from 'yup'
import {
    PASS_MIN_CHARS,
    REG_NO_WHITESPACE,
    NICK_MAX_CHARS,
    REG_INC_NUMERIC,
  } from './ValidationConsts';

/*
  This function uses Yup which is a form validation library.
  We pass it as a prop in the Register component's form.
  It's important that the object that is being passed to Yup.object().shape({}) has
  the exact same fields names as those specified in the [name=""] prop in <FormikField/> component.
*/
export const validationSchema = Yup.object().shape({
    nickname: Yup.string()
      .matches(REG_NO_WHITESPACE, 'No whitespaces, please.')
      .max(
        NICK_MAX_CHARS,
        `Nickname must be ${NICK_MAX_CHARS} characters or less.`
      )
      .required('Required'),
    email: Yup.string().email('E-mail must be valid.').required('Required'),
    password: Yup.string()
      .matches(REG_NO_WHITESPACE, 'No whitespaces, please.')
      .matches(REG_INC_NUMERIC, 'Must include a numeric character')
      .min(
        PASS_MIN_CHARS,
        `Password must be at least ${PASS_MIN_CHARS} characters long`
      )
      .required('Required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Required'),
  });
  