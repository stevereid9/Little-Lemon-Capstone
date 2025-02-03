import React from "react";
import { useFormikContext } from "formik";

import "./formik-input.style.css";

const FormikInput = ({ name, label, type = "text", ...otherProps }) => {
  const { getFieldProps, touched, errors } = useFormikContext();

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        {...otherProps}
        {...getFieldProps(name)}
        className={touched[name] && errors[name] ? "rpl-input-error" : null}
        aria-label={label}
        aria-invalid={!(touched[name] && errors[name])}
        aria-describedby={`${name}Error`}
      />
      {touched[name] && errors[name] ? (
        <span data-testid={`${name}Error`} className="rpl-error-message">
          {errors[name]}
        </span>
      ) : null}
    </>
  );
};

export default FormikInput;
