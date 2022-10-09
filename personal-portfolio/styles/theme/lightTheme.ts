import { createTheme, ThemeOptions } from "@mui/material/styles";

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
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: "5rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h6: {
      fontSize: "0.75rem",
    },
  },
  shape: {
    borderRadius: 16,
  },
};

const lightTheme = createTheme(lightThemeOptions);
lightTheme.typography.h1 = {
  ...lightTheme.typography.h1,
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "8rem",
  },
};
lightTheme.typography.h2 = {
  ...lightTheme.typography.h2,
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "6rem",
  },
};
lightTheme.typography.h3 = {
  ...lightTheme.typography.h3,
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
};

export default lightTheme;
