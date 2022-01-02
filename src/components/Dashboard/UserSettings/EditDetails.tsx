/** @jsxImportSource @emotion/react */
import { FC, useState, useContext } from 'react';
import Alert from '@material-ui/lab/Alert';
import { Formik, Form } from 'formik';
import { submitButton } from '../css/UserSettingsDashboard.style';
import { validationSchema } from './validation/ChangePassValidation';
import FormikField from './FormikField';
import { AuthContext } from '../../../context/AuthContext';
import { changeUsername } from '../ApiCalls';
import { CircularProgress } from '@material-ui/core';

interface FormValues {
  id: number;
  nickname: string;
}

export const EditDetails: FC = () => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, isSuccess] = useState<boolean>(false);
  const [taken, isTaken] = useState<boolean>(false);

  const initialValues = {
    id: 0,
    nickname: '',
  };

  const handleNicknameChange = (values: FormValues) => {
    setLoading(true);
    changeUsername(values)
      .then((res: any) => {
        res === 200 ? isSuccess(true) : isTaken(true);
        setLoading(false);
      })
      .catch((error: any) => {});
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleNicknameChange(values)}
      >
        {() => {
          return (
            <Form>
              <FormikField
                name="nickname"
                label="New Name"
                type="text"
                required
              />
              {loading ? (
                <CircularProgress />
              ) : (
                <button css={submitButton} type="submit">
                  Submit
                </button>
              )}
            </Form>
          );
        }}
      </Formik>
      {success && (
        <Alert severity="info">
          Your username has been changed! The change will be visible soon.
        </Alert>
      )}
      {taken && (
        <Alert severity="error">Sorry, this username is already taken!</Alert>
      )}
    </>
  );
};
