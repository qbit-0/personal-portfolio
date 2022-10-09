import { Box, Container, Paper, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";
import HomeCanvas from "./HomeBackground/HomeCanvas";
import NavBar from "./NavBar";

type Props = {};

const Home: FC<Props> = (props) => {
  const theme = useTheme();

  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.home.setNavCallback(() => () => {
      navRef.current?.scrollIntoView();
    });
  }, [navRef]);

  return (
    <Box
      component="div"
      ref={navRef}
      position="relative"
      top={0}
      zIndex={100}
      width="100%"
      height="100vh"
    >
      <Paper
        component={motion.div}
        elevation={24}
        sx={{
          height: "100%",
          borderRadius: 0,
        }}
        onViewportEnter={() => {
          setNavValue("home");
        }}
      >
        <Box component="div" position="absolute" width="100%" height="100%">
          <HomeCanvas />
        </Box>
        <Box component="div" position="absolute" width="100%">
          <NavBar />
        </Box>
        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            height: "100%",
            py: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <Box component="div">
            <Typography variant="h1">
              Hey, I'm <span id="name">Duy</span>.
            </Typography>
            <Typography variant="h2">Your Front-End Web Developer.</Typography>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};

export default Home;
