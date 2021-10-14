import React, { useCallback, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { automation, clear, selectGridInfo } from "../features/gridInfoSlice";
import Button from "./Button";

interface CommandsProps {}

const Commands: React.FC<CommandsProps> = () => {
  const dispatch = useAppDispatch();
  const { population, speed } = useAppSelector(selectGridInfo);
  const [isRunning, setIsRunning] = useState(false);
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  const runSimulation = useCallback(() => {
    if (!isRunningRef.current) return;
    dispatch(automation());
    setTimeout(runSimulation, speed);
  }, [dispatch, speed]);
  return (
    <div className="flex">
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
      <Button disabled={isRunning} onClick={() => dispatch(clear())}>
        Clear
      </Button>
      <Button
        disabled={isRunning || population === 0}
        onClick={() => dispatch(automation())}
      >
        Next
      </Button>
    </div>
  );
};

export default Commands;
