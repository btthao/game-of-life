import { useState, useEffect, useCallback } from "react";

export const useCalculateSize = (ref: React.MutableRefObject<any>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  // console.log("run size function");

  const calculate: any = useCallback(() => {
    //console.log("run callbackfunc");
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
