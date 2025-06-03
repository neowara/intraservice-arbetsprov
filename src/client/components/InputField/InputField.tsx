// InputField component for text, email, checkbox, and radio inputs
import React from "react";
import type { InputFieldProps } from "./types";

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  className = "mb-4",
  inputClassName = "w-full ring px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-action-blue transition-colors hover:ring-2 hover:ring-action-gray",
  type = "text",
  ...props
}) => {
  // For checkbox/radio, render differently for accessibility and layout
  if (type === "checkbox" || type === "radio") {
    return (
      <div className={className + " flex items-center"}>
        <input
          id={id}
          name={name}
          type={type}
          className={inputClassName}
          {...props}
        />
        <label
          htmlFor={id}
          className="ml-2 font-medium text-black cursor-pointer"
        >
          {label}
        </label>
      </div>
    );
  }
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block font-medium mb-1 cursor-text text-black"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={inputClassName}
        {...props}
      />
    </div>
  );
};

export default InputField;
