import { CssBaseline, ThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import lightTheme from "../styles/theme/lightTheme";

import "@fontsource/roboto";

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
};

export default MyApp;
