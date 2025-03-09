import React from "react";

interface inputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  errorMessage?: string;
  size?: number;
  isRequired?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  label,
  placeholder,
  isRequired,
  disabled,
  errorMessage,
  value,
  onChange,
  type = "text",
}: inputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={label}
          className="block text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          {label}{" "}
          {isRequired && <span className="text-red-600 text-regular">*</span>}
        </label>
      )}
      <input
        disabled={disabled}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="block w-full rounded-md border py-4 px-4 text-gray-900 bg-white placeholder:text-gray-400  focus:ring-1 focus:ring-inset focus:ring-textColor sm:text-sm "
      />
      {errorMessage && <p className="text-red-500"> {errorMessage}</p>}
    </div>
  );
}
