import * as Yup from 'yup';
import {
  TITLE_MIN_CHARS,
  TITLE_MAX_CHARS,
  DESCRIPTION_MAX_CHARS,
} from './ValidationConsts';

export const validationSchema = Yup.object().shape({
  description: Yup.string()
    .max(
      DESCRIPTION_MAX_CHARS,
      `Description can't have more than ${DESCRIPTION_MAX_CHARS} chars.`
    )
    .required('Required'),
  maxPlayers: Yup.number().required('Required'),
  game: Yup.number()
  .required('Required'),
});
