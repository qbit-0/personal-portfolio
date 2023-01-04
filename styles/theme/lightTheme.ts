import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#f00",
    },
    secondary: {
      main: "#00f",
    },
  },
  components: {},
  shape: {
    borderRadius: 8,
  },
};

const lightTheme = responsiveFontSizes(createTheme(lightThemeOptions));

export default lightTheme;
