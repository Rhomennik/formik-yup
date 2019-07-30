import React from "react";

import * as yup from "yup";
import PropType from "prop-types";
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";

import "./Form.css";

const validations = yup.object().shape({
  user: yup
    .string()
    .email("Email invalido")
    .required(),
  password: yup
    .string()
    .min(6)
    .required()
});

const Form = ({ initialValues, handleSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validations}
  >
    <FormikForm className="Form">
      <div className="Form-Group">
        <Field
          className="Form-Field"
          name="user"
          placeholder="User"
          type="text"
        />
        <ErrorMessage className="Form-Error" component="span" name="user" />
        <Field
          className="Form-Field"
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>

      <button className="Form-Btn" type="submit">
        Login
      </button>
    </FormikForm>
  </Formik>
);

Form.propType = {
  initialValues: PropType.object.isRequired,
  onSubmit: PropType.func.isRequired
};

export default Form;
