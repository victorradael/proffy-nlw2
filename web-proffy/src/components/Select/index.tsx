import React, { SelectHTMLAttributes } from "react";
import "./styles.css";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  placeholder: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<ISelectProps> = ({
  label,
  name,
  options,
  placeholder,
  ...rest
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
