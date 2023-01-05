import { Box, Stack } from "@mui/material";
import React from "react";
import About from "./section/about/About";
import Fun from "./section/fun/Fun";
import Welcome from "./section/welcome/Welcome";
import Projects from "./section/projects/Projects";
import Skills from "./section/skills/Skills";

type Props = {};

const Main = (props: Props) => {
  return (
    <Box component="main" flex="1">
      <Stack spacing={32}>
        <Welcome />
        <About />
        <Projects />
        <Skills />
        <Fun />
      </Stack>
    </Box>
  );
};

export default Main;
