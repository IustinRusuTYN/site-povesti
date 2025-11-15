import React from "react";

export default function InputField({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  datalistId,
  options,
  ...props
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder} // deja tradus în componenta părinte
        value={value}
        onChange={onChange}
        list={datalistId}
        className={`w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-300 ${className}`}
        required={required}
        {...props}
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
}
