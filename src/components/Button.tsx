import React, { ButtonHTMLAttributes } from "react";
import { useAppSelector } from "../app/hooks";
import { selectTheme } from "../features/themeSlice";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { bg } = useAppSelector(selectTheme);
  return (
    <button
      {...props}
      className={`${bg} w-20 mx-1 h-8  rounded-lg grid place-items-center text-gray-700 font-bold disabled:opacity-30 disabled:cursor-default`}
    />
  );
};

export default Button;
