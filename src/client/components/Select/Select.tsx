// Select component for multi-selecting options (checkboxes)
import React from "react";
import InputField from "../InputField/InputField";
import type { SelectProps } from "./types";

const Select: React.FC<SelectProps> = ({
  options,
  selected,
  onChange,
  max = 3,
  className = "flex flex-col px-2 py-2 gap-1",
}) => (
  <div className={className}>
    {options.map((option) => (
      <label
        key={option}
        className="flex items-center px-3 py-1 cursor-pointer hover:bg-gray justify-start"
      >
        <InputField
          id={option}
          name={option}
          type="checkbox"
          checked={selected.includes(option)}
          onChange={() => onChange(option)}
          disabled={!selected.includes(option) && selected.length >= max}
          label={null}
          className="flex items-center"
          inputClassName="mr-2 border-black hover:cursor-pointer hover:border-gray"
        />
        <span className="text-black select-none ml-2 text-left w-full">
          {option}
        </span>
      </label>
    ))}
  </div>
);

export default Select;
