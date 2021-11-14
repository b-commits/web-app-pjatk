import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('E-mail must be valid.').required('Required'),
    password: Yup.string().required('Required'),
  });