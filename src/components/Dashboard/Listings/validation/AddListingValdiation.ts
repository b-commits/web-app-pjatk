import * as Yup from 'yup';
import {
  TITLE_MIN_CHARS,
  TITLE_MAX_CHARS,
  REG_NO_WHITESPACE,
} from './ValidationConsts';

/*
  This function uses Yup which is a form validation library.
  We pass it as a prop in the Register component's form.
  It's important that the object that is being passed to Yup.object().shape({}) has
  the exact same fields names as those specified in the [name=""] prop in <FormikField/> component.
*/
export const validationSchema = Yup.object().shape({
  id: Yup.number().required('Required'),
  title: Yup.string()
    .matches(REG_NO_WHITESPACE, 'No whitespaces, please.')
    .min(
      TITLE_MIN_CHARS,
      `Title must be ${TITLE_MIN_CHARS} characters or less.`
    )
    .max(
      TITLE_MAX_CHARS,
      `Title must be ${TITLE_MAX_CHARS} characters or less.`
    )
    .required('Required'),
  maxPlayers: Yup.number().required('Required'),
  gameId: Yup.number().required('Required'),
});
