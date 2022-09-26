import { Box, Container, Paper, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
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
        viewport={{ amount: "some" }}
      >
        <Box position="absolute" width="100%" height="100%">
          <HomeCanvas />
        </Box>
        <Box position="absolute" display="flex" p={4}>
          <Paper
            variant="outlined"
            sx={{
              bgcolor: "transparent",
              backdropFilter: "blur(2px) brightness(105%)",
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
          }}
        >
          <Typography variant="h1" fontWeight="bold" fontSize={120}>
            Hi, I'm <span style={{ color: "orange" }}>Duy</span>
            . <br /> Your Front-End Web Developer.
          </Typography>
        </Container>
      </Paper>
    </Box>
  );
};

export default Home;
