import React from "react";
import { useFormikContext } from "formik";

const FormikDateInput = ({ name, label, min, handleChange, fieldId }) => {
  const { getFieldProps, touched, errors } = useFormikContext();

  return (
    <>
      <label htmlFor={fieldId}>{label}</label>
      <input
        type="date"
        id={fieldId}
        name={name}
        min={min}
        {...getFieldProps(name)}
        onChange={(e) => {
          getFieldProps(name).onChange(e);
          if (handleChange) handleChange(e);
        }}
        className={touched[name] && errors[name] ? "rpl-input-error" : null}
      />
      {touched[name] && errors[name] ? (
        <span className="rpl-error-message">{errors[name]}</span>
      ) : null}
    </>
  );
};

export default FormikDateInput;
