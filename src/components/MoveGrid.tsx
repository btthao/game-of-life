import React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  selectGridPos,
} from "../features/gridPosSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { numCols, numRows } from "../utils/constants";
import { selectTheme } from "../features/themeSlice";

const MoveGrid: React.FC = () => {
  const { xPos, yPos, containerHeight, containerWidth, squareSize } =
    useAppSelector(selectGridPos);
  const { text } = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const iconStyle = "h-6 text-2xl bg-gray-800 rounded-full";
  const btnStyle = `${text} disabled:opacity-50 disabled:cursor-default`;
  return (
    <div className="absolute bg-gray-500 dark:bg-gray-700 top-2 left-2 w-24 p-1 grid place-items-center z-10 rounded-lg ">
      <button
        disabled={yPos === 0}
        className={btnStyle}
        onClick={() => dispatch(moveUp())}
      >
        <ChevronUpIcon className={iconStyle} />
      </button>
      <div className=" w-full flex items-center justify-between h-6 ">
        <button
          disabled={xPos === 0}
          className={btnStyle}
          onClick={() => dispatch(moveLeft())}
        >
          <ChevronLeftIcon className={iconStyle} />
        </button>
        <button
          disabled={xPos === containerWidth - squareSize * numCols}
          className={btnStyle}
          onClick={() => dispatch(moveRight())}
        >
          <ChevronRightIcon className={iconStyle} />
        </button>
      </div>
      <button
        disabled={yPos === containerHeight - squareSize * numRows}
        className={btnStyle}
        onClick={() => dispatch(moveDown())}
      >
        <ChevronDownIcon className={iconStyle} />
      </button>
    </div>
  );
};

export default MoveGrid;
