import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectTheme } from "../features/themeSlice";

const Information: React.FC = () => {
  const { text } = useAppSelector(selectTheme);
  return (
    <div className="my-16 ">
      <p className="mb-10 text-lg">
        <span className={`font-extrabold ${text} `}>Conway's Game of Life</span>{" "}
        is a cellular automaton devised by the British mathematician John Horton
        Conway in 1970. It is a zero-player game, meaning that its evolution is
        determined by its initial state, requiring no further input. One
        interacts with the Game of Life by creating an initial configuration and
        observing how it evolves through generations.
      </p>
      <h3 className={`font-extrabold ${text} text-2xl mb-2`}>Rules:</h3>
      <ul className="ml-10 list-disc mb-10">
        <li>
          Any live cell with fewer than two live neighbours dies, as if by
          underpopulation.
        </li>
        <li>
          Any live cell with two or three live neighbours lives on to the next
          generation.
        </li>
        <li>
          Any live cell with more than three live neighbours dies, as if by
          overpopulation.
        </li>
        <li>
          Any dead cell with exactly three live neighbours becomes a live cell,
          as if by reproduction.
        </li>
      </ul>
      <h3 className={`font-extrabold ${text} text-2xl mb-2`}>Grid of cells:</h3>
      <p className="ml-5 mb-10">
        This grid is drawn on canvas using p5.js. You can change color of the
        cells, change their dimension using the +/- buttons on the right, and
        change the canvas' position using the arrow buttons on the left. The
        minimum cell size is 16px x 16px. The maximum cell size is 28px x 28px.{" "}
      </p>
      <h3 className={`font-extrabold ${text} text-2xl mb-2`}>How to play:</h3>
      <ul className="ml-10 list-disc mb-10">
        <li>
          To <span>create lives</span>: Click on a cell or click and drag over
          multiple cells.
        </li>
        <li>
          To <span>kill cells</span>: Click on a cell or click and drag over
          multiple cells while pressing the Shift key.
        </li>
        <li>
          To <span>start the automation</span>: Click Evolve.
        </li>
        <li>
          To <span>end the automation</span>: Click Stop.
        </li>
        <li>
          To <span>kill all cells</span>: Click Clear.
        </li>
        <li>
          To see the <span>next generation</span>: Click Next.
        </li>
        <li>
          To <span>generate random live cells</span>: Click Random.
        </li>
      </ul>
      <small>Source: Wikipedia</small>
    </div>
  );
};

export default Information;
