import React, { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  automation,
  clear,
  random,
  selectGridInfo,
} from "../features/gridInfoSlice";
import Button from "./Button";

const Commands: React.FC = () => {
  const dispatch = useAppDispatch();
  const { population, numGenerations } = useAppSelector(selectGridInfo);
  const [isRunning, setIsRunning] = useState(false);
  const [showText, setShowText] = useState(false);
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  const runSimulation = useCallback(() => {
    if (!isRunningRef.current) return;
    dispatch(automation());
    setTimeout(runSimulation, 1);
  }, [dispatch]);

  useEffect(() => {
    if (isRunning && !population) {
      setIsRunning(false);
      setShowText(true);
    }
  }, [isRunning, population]);

  return (
    <>
      <div className="flex justify-center my-5">
        <Button
          disabled={isRunning || population === 0}
          onClick={() => {
            setIsRunning(true);
            isRunningRef.current = true;
            runSimulation();
          }}
        >
          Evolve
        </Button>
        <Button disabled={!isRunning} onClick={() => setIsRunning(false)}>
          Stop
        </Button>
        <Button
          disabled={isRunning || (population === 0 && numGenerations === 0)}
          onClick={() => {
            setShowText(false);
            dispatch(clear());
          }}
        >
          Clear
        </Button>
        <Button
          disabled={isRunning || population === 0}
          onClick={() => dispatch(automation())}
        >
          Next
        </Button>
        <Button
          disabled={isRunning}
          onClick={() => {
            setShowText(false);
            dispatch(random());
          }}
        >
          Random
        </Button>
      </div>
      {showText && (
        <div className="text-center font-semibold my-5">
          No live cells left. Simulation has been stopped.
        </div>
      )}
    </>
  );
};

export default Commands;
