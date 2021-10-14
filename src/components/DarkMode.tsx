import React, { useEffect, useState } from "react";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAppSelector } from "../app/hooks";
import { selectTheme } from "../features/themeSlice";
interface DarkModeProps {}

const DarkMode: React.FC<DarkModeProps> = () => {
  const [isDark, setIsDark] = useState(true);
  const { name } = useAppSelector(selectTheme);
  useEffect(() => {
    window.localStorage.removeItem("chakra-ui-color-mode");
    // window.localStorage.setItem("chakra-ui-color-mode", "dark");
  }, []);

  useEffect(() => {
    // console.log("change");
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <FormControl className="w-max" display="flex" alignItems="center">
      <FormLabel htmlFor="theme" className="m-0">
        <SunIcon className="text-yellow-500 text-lg dark:text-gray-600" />
      </FormLabel>
      <Switch
        id="theme"
        colorScheme={name}
        size="md"
        isChecked={isDark}
        onChange={() => setIsDark(!isDark)}
        className="mx-2 mt-1"
      />
      <FormLabel htmlFor="theme" className="m-0">
        <MoonIcon className="text-gray-400 text-lg  dark:text-white" />
      </FormLabel>
    </FormControl>
  );
};

export default DarkMode;
