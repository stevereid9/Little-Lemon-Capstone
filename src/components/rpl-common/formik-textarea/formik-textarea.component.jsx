import React from "react";
import { useFormikContext } from "formik";

import "./formik-textarea.style.css";

const FormikTextarea = ({ name, label }) => {
  const { getFieldProps, touched, errors } = useFormikContext();

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} {...getFieldProps(name)} />
      {touched[name] && errors[name] ? (
        <span className="rpl-error-message">{errors[name]}</span>
      ) : null}
    </>
  );
};

export default FormikTextarea;
