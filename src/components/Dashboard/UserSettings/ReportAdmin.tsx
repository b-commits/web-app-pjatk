/** @jsxImportSource @emotion/react */
import React, { FC, useState, useContext } from 'react';
import Alert from '@material-ui/lab/Alert';
import { Formik, Form } from 'formik';
import { submitButton } from '../css/UserSettingsDashboard.style';
import { AuthContext } from '../../../context/AuthContext';
import { postAdminReport } from '../ApiCalls';
import FormikField from './FormikField';

interface FormValues {
  content: string;
  reporter: number;
}

export const ReportAdmin: FC = () => {
  const [sentSucess, setSentSuccess] = useState<boolean>(false);
  const { currentUser } = useContext(AuthContext);

  const initialValues: FormValues = {
    content: '',
    reporter: currentUser.id,
  };

  const handleReport = async (values: FormValues) => {
    postAdminReport(values).then((res: any) => {
      if (res == 200) {
        setSentSuccess(true);
      }
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleReport(values)}
      >
        {() => {
          return (
            <Form>
              <FormikField
                name="content"
                label="Enter your report..."
                type="textarea"
                required
              />
              <button css={submitButton} type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
      {sentSucess && (
        <Alert severity="info">We have received your report. Thank you!</Alert>
      )}
    </>
  );
};
