import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch } from "../app/hooks";
import { changeTheme } from "../features/themeSlice";
import { theme } from "../utils/style";

interface UserInputProps {}

// color speed
const UserInput: React.FC<UserInputProps> = () => {
  const dispatch = useAppDispatch();

  return (
    <FormControl>
      <FormLabel htmlFor="color">Color</FormLabel>
      <Select
        name="color"
        id="color"
        onChange={(e) => {
          dispatch(changeTheme(theme[parseInt(e.target.value)]));
        }}
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

export default UserInput;
