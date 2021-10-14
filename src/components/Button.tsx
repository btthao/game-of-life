import React, { ButtonHTMLAttributes } from "react";
import { useAppSelector } from "../app/hooks";
import { selectTheme } from "../features/themeSlice";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { bg } = useAppSelector(selectTheme);
  return (
    <button
      {...props}
      className={`${bg} w-20 h-8 rounded-lg grid place-items-center text-gray-700 font-bold disabled:opacity-40 disabled:cursor-default`}
    />
  );
};

export default Button;
