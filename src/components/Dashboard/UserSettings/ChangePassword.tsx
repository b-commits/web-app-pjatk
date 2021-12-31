/** @jsxImportSource @emotion/react */
import { FC, useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import { submitButton } from '../css/UserSettingsDashboard.style';
import { validationSchema } from './validation/ChangePassValidation';
import { changePassword } from '../ApiCalls';
import Alert from '@material-ui/lab/Alert';
import FormikField from './FormikField';
import { AuthContext } from '../../../context/AuthContext';

interface FormValues {
  newPassword: string;
  newPasswordConfirm: string;
}

export const ChangePassword: FC = () => {
  const [success, setSuccess] = useState(false);
  const [error, hasError] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const initialValues: FormValues = {
    newPassword: '',
    newPasswordConfirm: '',
  };

  const handlePasswordChange = (values: FormValues) => {
    changePassword({ id: currentUser.id, newPassword: values.newPassword })
      .then((res: any) => {
        res === 200 ? setSuccess(true) : hasError(true);
      })
      .catch((error: any) => {});
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handlePasswordChange(values)}
      >
        {() => {
          return (
            <Form>
              <FormikField
                name="newPassword"
                label="New Password"
                type="password"
                required
              />
              <FormikField
                name="newPasswordConfirm"
                label="Confirm New Password"
                type="password"
                required
              />
              <button css={submitButton} type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
      {success && <Alert severity="info">Password has been changed.</Alert>}
      {error && <Alert severity="error">Something went wrong.</Alert>}
    </>
  );
};
