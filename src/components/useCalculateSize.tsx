import { useState, useEffect, useCallback } from "react";

export const useCalculateSize = (ref: React.MutableRefObject<any>) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const calculate = useCallback(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, [ref]);

  useEffect(() => {
    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [ref, calculate]);

  return { width, height };
};
