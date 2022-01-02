/** @jsxImportSource @emotion/react */
import React, { FC, useState, useContext } from 'react';
import Alert from '@material-ui/lab/Alert';
import { Formik, Form } from 'formik';
import { submitButton } from '../css/UserSettingsDashboard.style';
import { AuthContext } from '../../../context/AuthContext';
import { postAdminReport } from '../ApiCalls';
import FormikField from './FormikField';
import { CircularProgress } from '@material-ui/core';

interface FormValues {
  content: string;
  reporter: number;
}

export const ReportAdmin: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sentSucess, setSentSuccess] = useState<boolean>(false);
  const { currentUser } = useContext(AuthContext);

  const initialValues: FormValues = {
    content: '',
    reporter: 0,
  };

  const handleReport = async (values: FormValues) => {
    setLoading(true);
    postAdminReport(values).then((res: any) => {
      if (res == 200) {
        setSentSuccess(true);
        setLoading(false);
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
      {sentSucess && (
        <Alert severity="info">We have received your report. Thank you!</Alert>
      )}
    </>
  );
};
