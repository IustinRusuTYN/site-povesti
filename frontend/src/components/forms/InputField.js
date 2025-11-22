import React, { forwardRef } from "react";

const InputField = forwardRef((props, ref) => {
  const {
    type,
    placeholder,
    value,
    onChange,
    required = false,
    className = "",
    datalistId,
    options,
    ...rest
  } = props;

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref} // acum accepta ref
        className={`w-full px-4 py-2 rounded-md border ... ${className}`}
        required={required}
        list={datalistId}
        {...rest}
      />
      {datalistId && options && (
        <datalist id={datalistId}>
          {options.map((opt, idx) => (
            <option key={idx} value={opt} />
          ))}
        </datalist>
      )}
    </>
  );
});

export default InputField;
