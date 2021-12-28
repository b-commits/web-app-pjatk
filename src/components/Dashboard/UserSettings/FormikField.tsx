import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { TextField } from '@material-ui/core';

interface FormikFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

/*
  This component is nothing else than a [Field] object from Formik library
  It receives a MaterialUI's TextField so as to make it inherit MaterialUI TextField's css. 
*/
const FormikField: React.FC<FormikFieldProps> = ({
  name,
  label,
  type = 'text',
  required = false,
}) => {
  return (
    <div className='FormikField'>
      <Field
        required={required}
        name={name}
        as={TextField}
        autoComplete='off'
        label={label}
        helperText={<ErrorMessage name={name} />}
        fullWidth
        type={type}
      />
    </div>
  );
};

export default FormikField;
