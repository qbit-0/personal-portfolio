import { Box } from "@mui/material";
import { FC } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import FixedNavBar from "../components/FixedNavBar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import NavProvider from "../utility/context/NavProvider";

type HomeProps = {};

const Index: FC<HomeProps> = (props) => {
  return (
    <NavProvider>
      <Box minHeight="100vh">
        <FixedNavBar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Box>
    </NavProvider>
  );
};

export default Index;
