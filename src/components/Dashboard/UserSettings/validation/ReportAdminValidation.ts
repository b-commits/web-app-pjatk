import * as Yup from 'yup';
import { REPORT_MIN_CHARS, REG_NO_WHITESPACE } from './ValidationConsts';

/*
  This function uses Yup which is a form validation library.
  We pass it as a prop in the Register component's form.
  It's important that the object that is being passed to Yup.object().shape({}) has
  the exact same fields names as those specified in the [name=""] prop in <FormikField/> component.
*/
export const validationSchema = Yup.object().shape({
  report: Yup.string()
    .matches(REG_NO_WHITESPACE, 'No whitespaces, please.')
    .max(
      REPORT_MIN_CHARS,
      `Report must be ${REPORT_MIN_CHARS} characters or less.`
    )
    .required('Required'),
});
