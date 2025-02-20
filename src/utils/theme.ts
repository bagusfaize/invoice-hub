import { createTheme } from "@mui/material/styles";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const theme = createTheme({
  typography: {
    fontFamily: openSans.style.fontFamily, // Set Open Sans as default font
  },
});

export default theme;