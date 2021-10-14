import React from "react";
import Commands from "./components/Commands";
import DarkMode from "./components/DarkMode";
import GridInfo from "./components/GridInfo";
import Canvas from "./components/Canvas";
import UserInput from "./components/UserInput";
import Window from "./components/Window";
import { useAppSelector } from "./app/hooks";
import { selectTheme } from "./features/themeSlice";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const { text } = useAppSelector(selectTheme);
  return (
    <div className="max-w-3xl m-auto text-gray-700 dark:text-gray-200">
      <div className=" px-10 py-3   m-auto flex w-full items-center justify-between">
        <h1 className={` font-bowlby text-4xl ${text} `}>Game of Life</h1>
        <DarkMode />
      </div>

      <div>
        <GridInfo />
        <Commands />
        <UserInput />
      </div>
      <Window />
      <div className=" m-3 md:m-8 lg:mx-12 bg-gray-400 dark:bg-gray-600 p-2 rounded-md ">
        <Canvas />
      </div>
    </div>
  );
};

export default App;
