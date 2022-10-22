import { useState } from "react";

import { themeList, ThemeData, ThemeName } from "../Themes/themeList";

interface ThemeProps extends ThemeData {
  setColor: (color: string) => void;
  setTheme: (theme: ThemeName) => void;
  themeList: ThemeData[];
}

const useTheme = (index: number): ThemeProps => {
  const [theme, setTheme] = useState<ThemeName>(themeList[index].theme);
  const [color, setColor] = useState("#f4ce9d");

  const { title, explain } = themeList.find((t) => t.theme === theme) || {
    title: "",
    explain: "",
  };
  const colors = themeList.find((t) => t.theme === theme)?.colors || [];

  return {
    theme,
    title,
    explain,
    color,
    setColor,
    setTheme,
    themeList,
    colors,
  };
};

export default useTheme;
