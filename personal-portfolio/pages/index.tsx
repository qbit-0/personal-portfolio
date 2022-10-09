import { Box } from "@mui/material";
import { FC } from "react";
import About from "../components/About";
import Competition from "../components/Competition";
import Contact from "../components/Contact";
import FixedNavBar from "../components/FixedNavBar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import HomeCanvas from "../components/HomeBackground/HomeCanvas";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import NavProvider from "../utility/context/NavProvider";

type HomeProps = {};

const Index: FC<HomeProps> = (props) => {
  return (
    <NavProvider>
      <Box component="div" minHeight="100vh">
        {/* <Box component="div" position="absolute" width="100%" height="100%">
          <HomeCanvas />
        </Box> */}
        <FixedNavBar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Competition />
        <Contact />
        <Footer />
      </Box>
    </NavProvider>
  );
};

export default Index;
