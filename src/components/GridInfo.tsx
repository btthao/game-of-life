import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectGridInfo } from "../features/gridInfoSlice";

interface GridInfoProps {}

const GridInfo: React.FC<GridInfoProps> = () => {
  const { population, numGenerations } = useAppSelector(selectGridInfo);
  return (
    <div>
      <div>Generation: {numGenerations}</div>
      <div>Population: {population}</div>
    </div>
  );
};

export default GridInfo;
