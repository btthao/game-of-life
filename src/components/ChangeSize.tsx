import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectGridPos,
  incSquareSize,
  decSquareSize,
} from "../features/gridPosSlice";
import { selectTheme } from "../features/themeSlice";
import { maxSquareSize, minSquareSize } from "../utils/constants";

const ChangeSize: React.FC = () => {
  const { text } = useAppSelector(selectTheme);

  const btnStyle = `bg-gray-800 ${text} h-5 grid place-items-center w-11 disabled:cursor-default disabled:opacity-50 `;

  const { squareSize } = useAppSelector(selectGridPos);

  const dispatch = useAppDispatch();

  return (
    <div className="absolute top-2 right-2 z-10 bg-gray-500 dark:bg-gray-700 w-32  h-7 rounded-2xl  p-1 flex items-center justify-between ">
      <button
        onClick={() => {
          dispatch(decSquareSize());
        }}
        disabled={squareSize === minSquareSize}
        className={`${btnStyle} text-sm rounded-l-xl`}
      >
        <MinusIcon />
      </button>
      <span className="text-gray-200  font-semibold">{squareSize}</span>
      <button
        onClick={() => {
          dispatch(incSquareSize());
        }}
        disabled={squareSize === maxSquareSize}
        className={`${btnStyle} text-xs rounded-r-xl`}
      >
        <AddIcon />
      </button>
    </div>
  );
};

export default ChangeSize;
