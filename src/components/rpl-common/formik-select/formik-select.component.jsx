import React from "react";
import { useFormikContext } from "formik";

const FormikSelect = ({ name, label, options, fieldId }) => {
  const { getFieldProps, touched, errors } = useFormikContext();

  return (
    <>
      <label htmlFor={fieldId}>{label}</label>
      <select
        id={fieldId}
        name={name}
        {...getFieldProps(name)}
        className={touched[name] && errors[name] ? "rpl-input-error" : null}
      >
        <option value="" disabled>
          Choose {name}...
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {touched[name] && errors[name] ? (
        <span className="rpl-error-message">{errors[name]}</span>
      ) : null}
    </>
  );
};

export default FormikSelect;
