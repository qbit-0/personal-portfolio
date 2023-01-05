import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import "../styles/globals.css";
import lightTheme from "../styles/theme/lightTheme";

import "@fontsource/public-sans";
import "@fontsource/roboto";
import { enableMapSet } from "immer";
import { useEffect } from "react";

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  useEffect(() => {
    enableMapSet();
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
