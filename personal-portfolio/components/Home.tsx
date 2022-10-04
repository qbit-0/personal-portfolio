import { Box, Container, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";
import HomeCanvas from "./HomeBackground/HomeCanvas";
import NavBar from "./NavBar";

type Props = {};

const Home: FC<Props> = (props) => {
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
        <Box component="div" position="absolute" display="flex" p={4}>
          <Paper
            variant="outlined"
            sx={{
              bgcolor: "transparent",
              backdropFilter: "blur(2px) brightness(200%)",
            }}
          >
            <NavBar orientation="vertical" />
          </Paper>
        </Box>
        <Container
          sx={{
            position: "relative",
            zIndex: 2000,
            height: "100%",
            py: 8,
            display: "flex",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <Typography variant="h1" fontWeight="bold" fontSize={120}>
            Hi, I'm <span style={{ color: "red" }}>Duy</span>
            . <br /> Your Front-End Web Developer.
          </Typography>
        </Container>
      </Paper>
    </Box>
  );
};

export default Home;
