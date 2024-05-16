import { createTheme } from "@mantine/core";
const theme = createTheme({
  // xs: "1.4",
  // sm: "1.45",
  // md: "1.55",
  // lg: "1.6",
  // xl: "1.65",
  breakpoints: {
    xs: "600px",
    sm: "800px",
    md: "1000px",
    lg: "1200px",
    xl: "1400px",
  },
  colors: {
    X: [
      "#f4ebff",
      "#e4d1fb",
      "#c79ef9",
      "#a967f8",
      "#903bf7",
      "#8021f7",
      "#7916f8",
      "#670cdd",
      "#5b07c5",
      "#4e00ad",
    ],
  },
  primaryColor: "X",
});

export const useTheme = () => theme;
