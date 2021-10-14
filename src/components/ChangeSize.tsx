import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectGridPos, zoomIn, zoomOut } from "../features/gridPosSlice";
import { selectTheme } from "../features/themeSlice";

const ChangeSize: React.FC = () => {
  const { text } = useAppSelector(selectTheme);
  const btnStyle = `bg-gray-800 ${text} h-5 grid place-items-center w-10 disabled:cursor-default disabled:opacity-40 `;
  const { squareSize } = useAppSelector(selectGridPos);

  const dispatch = useAppDispatch();
  return (
    <div className="absolute top-2 right-2 z-10 bg-gray-500 dark:bg-gray-700 w-28 h-7 rounded-sm p-1 flex items-center justify-between ">
      <button
        onClick={() => {
          dispatch(zoomOut());
        }}
        disabled={squareSize === 16}
        className={`${btnStyle} text-sm rounded-l-sm`}
      >
        <MinusIcon />
      </button>
      <span className="text-gray-200 text-sm font-semibold">{squareSize}</span>
      <button
        onClick={() => {
          dispatch(zoomIn());
        }}
        disabled={squareSize === 28}
        className={`${btnStyle} text-xs rounded-r-sm`}
      >
        <AddIcon />
      </button>
    </div>
  );
};

export default ChangeSize;
