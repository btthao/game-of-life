import React from "react";
import { useAppSelector } from "./app/hooks";
import Canvas from "./components/Canvas";
import Commands from "./components/Commands";
import DarkMode from "./components/DarkMode";
import GridInfo from "./components/GridInfo";
import Information from "./components/Information";
import Preview from "./components/Preview";
import { selectTheme } from "./features/themeSlice";

const App: React.FC = () => {
  const { text } = useAppSelector(selectTheme);
  return (
    <section className="max-w-3xl px-6 min-w-sm m-auto text-gray-800 dark:text-gray-200">
      <div className="sm:px-4 py-6 flex w-full items-center justify-between">
        <h1 className={`font-bowlby text-4xl font-semibold ${text} `}>
          Game of Life
        </h1>
        <DarkMode />
      </div>
      <div className="grid place-items-center sm:flex sm:justify-between sm:mx-4 md:mx-10 ">
        <GridInfo />
        <Preview />
      </div>
      <Commands />
      <div className=" w-full h-100vw max-h-35rem bg-gray-400 dark:bg-gray-700 overflow-hidden p-2 rounded-md  ">
        <Canvas />
      </div>
      <Information />
    </section>
  );
};

export default App;
