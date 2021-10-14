import p5Types from "p5";
import React, { useEffect, useRef, useState } from "react";
import Sketch from "react-p5";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  createLives,
  killCells,
  selectGridInfo,
} from "../features/gridInfoSlice";
import { selectGridPos, setContainerSize } from "../features/gridPosSlice";
import { numCols, numRows } from "../utils/constants";
import { isValidCell } from "../utils/grid";
import MoveGrid from "./MoveGrid";
import { useCalculateSize } from "./useCalculateSize";
import Zoom from "./ChangeSize";
import { selectTheme } from "../features/themeSlice";

const Canvas: React.FC = () => {
  const { grid } = useAppSelector(selectGridInfo);
  const { xPos, yPos, squareSize } = useAppSelector(selectGridPos);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useCalculateSize(gridContainerRef);
  const dispatch = useAppDispatch();
  const [clickedPos, setClickedPos] = useState({ r: -1, c: -1 });
  const [isPressed, setIsPressed] = useState(false);
  const [isDel, setIsDel] = useState(false);
  const { canvasfill } = useAppSelector(selectTheme);
  // for click
  useEffect(() => {
    if (clickedPos.r < 0 && clickedPos.c < 0) return;
    const check = isValidCell(clickedPos.r, clickedPos.c, squareSize);
    if (check !== null) {
      const { r, c } = check;
      if (isDel) {
        dispatch(killCells({ r, c }));
      } else {
        dispatch(createLives({ r, c }));
      }
    }
    setClickedPos({ r: -1, c: -1 });
  }, [clickedPos, squareSize, isDel, dispatch]);

  useEffect(() => {
    dispatch(setContainerSize({ width, height }));
  }, [width, height, dispatch]);

  useEffect(() => {
    const pressShift = (e: any) => {
      if (e.key === "Shift") {
        if (e.type === "keydown") {
          setIsDel(true);
        } else if (e.type === "keyup") {
          setIsDel(false);
        }
      }
    };
    window.addEventListener("keydown", pressShift);
    window.addEventListener("keyup", pressShift);
    return () => {
      window.removeEventListener("keydown", pressShift);
      window.removeEventListener("keyup", pressShift);
    };
  }, []);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const c = p5
      .createCanvas(squareSize * numCols, squareSize * numRows)
      .parent(canvasParentRef);

    c.mousePressed(() => {
      setIsPressed(true);
    });

    c.mouseReleased(() => {
      setIsPressed(false);
      const r = p5.mouseY;
      const c = p5.mouseX;
      setClickedPos({ r, c });
    });

    p5.frameRate(1000);
  };

  const draw = (p5: p5Types) => {
    p5.resizeCanvas(squareSize * numCols, squareSize * numRows);

    if (document.documentElement.classList.contains("dark")) {
      p5.background(106, 114, 128);
    } else {
      p5.background(209, 213, 218);
    }

    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        let x = c * squareSize;
        let y = r * squareSize;
        if (grid[r][c] === 0) {
          p5.fill(0, 0, 0, 0);
        } else {
          p5.fill(canvasfill);
        }
        p5.stroke(0);
        p5.rect(x, y, squareSize, squareSize);
      }
    }
  };

  const selectByDrag = (p5: p5Types) => {
    if (isPressed) {
      const check = isValidCell(p5.mouseY, p5.mouseX, squareSize);
      if (check !== null) {
        const { r, c } = check;
        if (isDel) {
          dispatch(killCells({ r, c }));
        } else {
          dispatch(createLives({ r, c }));
        }
      }
    }
  };

  return (
    <div
      ref={gridContainerRef}
      className="w-full h-100vw max-h-35rem   relative   m-auto   bg-gray-100 dark:bg-gray-500 overflow-hidden "
    >
      <MoveGrid />
      <Zoom />
      <div
        style={{
          left: `${xPos}px`,
          top: `${yPos}px`,
        }}
        className="absolute"
      >
        <Sketch setup={setup} draw={draw} mouseDragged={selectByDrag} />
      </div>
    </div>
  );
};

export default Canvas;
