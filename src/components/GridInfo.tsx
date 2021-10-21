import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectGridInfo } from "../features/gridInfoSlice";
import ChangeColor from "./ChangeColor";

const GridInfo: React.FC = () => {
  const { population, numGenerations } = useAppSelector(selectGridInfo);
  return (
    <div className="font-bowlby text-center font-medium mt-4 mb-7 text-lg sm:text-left">
      <div>Generation: {numGenerations}</div>
      <div>Population: {population}</div>
      <ChangeColor />
    </div>
  );
};

export default GridInfo;
