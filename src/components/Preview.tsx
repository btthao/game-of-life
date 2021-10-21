import p5Types from "p5";
import React from "react";
import Sketch from "react-p5";
import { useAppSelector } from "../app/hooks";
import { selectGridInfo } from "../features/gridInfoSlice";
import { selectGridPos } from "../features/gridPosSlice";
import { selectTheme } from "../features/themeSlice";
import { numCols, numRows } from "../utils/constants";

const Preview: React.FC = () => {
  const { grid } = useAppSelector(selectGridInfo);
  const { xPos, yPos, containerHeight, containerWidth, squareSize } =
    useAppSelector(selectGridPos);
  const { canvasfill } = useAppSelector(selectTheme);
  const multiplier = 2;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(numCols * multiplier, numRows * multiplier).parent(
      canvasParentRef
    );
  };

  const draw = (p5: p5Types) => {
    if (document.documentElement.classList.contains("dark")) {
      p5.background(31, 41, 55);
      p5.stroke(31, 41, 55);
    } else {
      p5.background(228, 231, 235);
      p5.stroke(228, 231, 235);
    }
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        let x = c * multiplier;
        let y = r * multiplier;
        if (grid[r][c] === 0) {
          p5.fill(0, 0, 0, 0);
        } else {
          p5.fill(canvasfill);
        }

        p5.strokeWeight(0.1);
        p5.rect(x, y, multiplier, multiplier);
      }
    }
  };

  return (
    <div className=" w-max relative  border border-gray-600  ">
      <div
        style={{
          left: `${Math.ceil((xPos * multiplier) / squareSize) * -1 - 2}px`,
          top: `${Math.ceil((yPos * multiplier) / squareSize) * -1 - 2}px`,
          width: `${
            Math.ceil((multiplier * containerWidth) / squareSize) + 4
          }px`,
          height: `${
            Math.ceil((multiplier * containerHeight) / squareSize) + 4
          }px`,
        }}
        className="absolute z-10 border-2 border-gray-800 dark:border-gray-400"
      />
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default Preview;
