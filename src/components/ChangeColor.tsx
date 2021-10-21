import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useAppDispatch } from "../app/hooks";
import { changeTheme } from "../features/themeSlice";
import { theme } from "../utils/style";

const ChangeColor: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <FormControl className="flex w-52">
      <FormLabel className="text-lg font-medium " htmlFor="color">
        Color:
      </FormLabel>
      <Select
        name="color"
        id="color"
        onChange={(e) => {
          dispatch(changeTheme(theme[parseInt(e.target.value)]));
        }}
        className=" border-gray-600 h-7 font-medium"
      >
        {theme.map((color, i) => (
          <option key={color.name} value={i}>
            {color.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default ChangeColor;
