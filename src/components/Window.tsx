import { PlusSquareIcon } from "@chakra-ui/icons";
import p5Types from "p5";
import React from "react";
import Sketch from "react-p5";
import { useAppSelector } from "../app/hooks";
import { selectGridInfo } from "../features/gridInfoSlice";
import { selectGridPos } from "../features/gridPosSlice";
import { selectTheme } from "../features/themeSlice";
import { numCols, numRows } from "../utils/constants";

const Window: React.FC = () => {
  const { grid } = useAppSelector(selectGridInfo);
  const {
    xPos,
    yPos,
    windowXPos,
    windowYPos,
    containerHeight,
    containerWidth,
    squareSize,
    move,
  } = useAppSelector(selectGridPos);
  const { canvasfill } = useAppSelector(selectTheme);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(numCols * 2, numRows * 2).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    // p5.resizeCanvas(squareSize * numCols, squareSize * numRows);
    if (document.documentElement.classList.contains("dark")) {
      p5.background(106, 114, 128);
    } else {
      p5.background(209, 213, 218);
    }
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        let x = c * 2;
        let y = r * 2;
        if (grid[r][c] === 0) {
          p5.fill(0, 0, 0, 0);
        } else {
          p5.fill(canvasfill);
        }
        // p5.stroke(0);
        if (document.documentElement.classList.contains("dark")) {
          p5.stroke(106, 114, 128);
        } else {
          p5.stroke(209, 213, 218);
        }
        p5.strokeWeight(0.1);
        p5.rect(x, y, 2, 2);
      }
    }
  };

  return (
    <div className="my-10 w-max relative ml-10 ">
      <div
        style={{
          left: `${windowXPos - 2}px`,
          top: `${yPos * -1 - 2}px`,
          width: `${
            Math.ceil((2 * numCols * containerWidth) / (squareSize * numCols)) +
            4
          }px`,
          height: `${
            Math.ceil(
              (2 * numRows * containerHeight) / (squareSize * numRows)
            ) + 4
          }px`,
        }}
        className="absolute z-10 border-2 border-gray-300"
      ></div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default Window;
