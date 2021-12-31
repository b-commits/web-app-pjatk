import * as Yup from 'yup';
import {
  PASS_MIN_CHARS,
  REG_NO_WHITESPACE,
  REG_INC_NUMERIC,
} from './ValidationConsts';

export const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .matches(REG_NO_WHITESPACE, 'No whitespaces, please.')
    .matches(REG_INC_NUMERIC, 'Must include a numeric character')
    .min(
      PASS_MIN_CHARS,
      `Password must be at least ${PASS_MIN_CHARS} characters long`
    )
    .required('Required'),
  newPasswordConfirm: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Password must match')
    .required('Required'),
});
