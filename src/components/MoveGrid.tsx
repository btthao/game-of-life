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
  const btnStyle = `${text} disabled:opacity-60 disabled:cursor-default`;
  return (
    <div className="absolute bg-gray-500 dark:bg-gray-700  top-2 left-2 w-24 p-1  grid place-items-center z-10 rounded-lg ">
      <button
        disabled={yPos === containerHeight - squareSize * numRows}
        className={btnStyle}
      >
        <ChevronUpIcon
          className={iconStyle}
          onClick={() => dispatch(moveUp())}
        />
      </button>
      <div className=" w-full flex items-center justify-between h-6 ">
        <button
          disabled={xPos === containerWidth - squareSize * numCols}
          className={btnStyle}
        >
          <ChevronLeftIcon
            onClick={() => dispatch(moveLeft())}
            className={iconStyle}
          />
        </button>
        <button disabled={xPos === 0} className={btnStyle}>
          <ChevronRightIcon
            onClick={() => dispatch(moveRight())}
            className={iconStyle}
          />
        </button>
      </div>
      <button disabled={yPos === 0} className={btnStyle}>
        <ChevronDownIcon
          onClick={() => dispatch(moveDown())}
          className={iconStyle}
        />
      </button>
    </div>
  );
};

export default MoveGrid;
