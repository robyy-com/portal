import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ButtonLoader from "./ButtonLoader";

interface ButtonProps {
  isIcon?: boolean;
  loading?: boolean;
  disabled?: boolean;
  title?: string;
  className?: string;
  width?: number;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  isIcon = false,
  loading = false,
  className,
  disabled,
  title = "SHOP NOW",
  width = 42,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={`${className} outline-none text-sm text-white font-bold py-3 px-4 bg-primaryColor hover:bg-primaryColorHover transition duration-300 ease-in-out flex items-center justify-center rounded-lg ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title} {isIcon && <FaArrowRightLong className="ml-4" />}
      <ButtonLoader loading={loading} />
    </button>
  );
};

export default Button;
