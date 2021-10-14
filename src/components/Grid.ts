export const example = "hi";
// import React, { useEffect, useRef, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import {
//   clickCell,
//   createLives,
//   selectGridInfo,
// } from "../features/gridInfoSlice";
// import {
//   adjustWhenResize,
//   selectGridPos,
//   setContainerSize,
// } from "../features/gridPosSlice";
// import { numCols } from "../utils/constants";
// import MoveGrid from "./MoveGrid";
// import { useCalculateSize } from "./useCalculateSize";
// import Zoom from "./Zoom";

// const Grid: React.FC = () => {
//   const [isSelecting, setIsSelecting] = useState(false);
//   const gridContainerRef = useRef<HTMLDivElement>(null);
//   const { width, height } = useCalculateSize(gridContainerRef);
//   const { xPos, yPos, squareSize } = useAppSelector(selectGridPos);
//   const { grid } = useAppSelector(selectGridInfo);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     const pressShift = (e: any) => {
//       if (e.key === "Shift") {
//         if (e.type === "keydown") {
//           setIsSelecting(true);
//         } else if (e.type === "keyup") {
//           setIsSelecting(false);
//         }
//       }
//     };
//     window.addEventListener("keydown", pressShift);
//     window.addEventListener("keyup", pressShift);
//     return () => {
//       window.removeEventListener("keydown", pressShift);
//       window.removeEventListener("keyup", pressShift);
//     };
//   }, []);

//   useEffect(() => {
//     dispatch(setContainerSize({ width, height }));
//     dispatch(adjustWhenResize());
//   }, [width, height, dispatch]);

//   return (
//     <div
//       ref={gridContainerRef}
//       className="w-full h-100vw max-h-35rem   relative   m-auto   bg-gray-100 dark:bg-gray-500  "
//     >
//       <MoveGrid />
//       <Zoom />
//       <div
//         className="absolute grid"
//         style={{
//           left: `${xPos}px`,
//           top: `${yPos}px`,
//           gridTemplateColumns: `repeat(${numCols}, ${squareSize}px)`,
//         }}
//       >
//         {grid.map((row, r) =>
//           row.map((_col, c) => (
//             <div
//               key={`${r}-${c}`}
//               style={{
//                 width: `${squareSize}px`,
//                 height: `${squareSize}px`,
//               }}
//               className={` border-t border-r border-gray-300 dark:border-gray-600 ${
//                 grid[r][c] === 1 ? "bg-pink-300" : ""
//               }`}
//               onClick={() => {
//                 dispatch(clickCell({ r, c }));
//               }}
//               onMouseOver={() => {
//                 if (!isSelecting) return;
//                 dispatch(createLives({ r, c }));
//               }}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Grid;
