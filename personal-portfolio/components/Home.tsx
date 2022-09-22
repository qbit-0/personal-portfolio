import { Box, Container, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";
import NavBar from "./NavBar";

type Props = {};

const Home: FC<Props> = (props) => {
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.home.setNavCallback(() => () => {
      navRef.current?.scrollIntoView({});
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
          backgroundImage: "url(https://picsum.photos/2000/2000)",
          borderRadius: 0,
        }}
        onViewportEnter={() => {
          setNavValue("home");
        }}
        viewport={{ amount: "some" }}
      >
        <Box position="absolute" display="flex" p={4}>
          <Paper
            variant="outlined"
            sx={{
              bgcolor: "transparent",
              backdropFilter: "blur(10px) brightness(120%)",
            }}
          >
            <NavBar orientation="vertical" />
          </Paper>
        </Box>
        <Container
          sx={{ height: "100%", py: 8, display: "flex", alignItems: "center" }}
        >
          <Typography variant="h1" fontWeight="bold" fontSize={120}>
            Hi, I'm Duy Pham. <br /> Your Front-End Web Developer.
          </Typography>
        </Container>
      </Paper>
    </Box>
  );
};

export default Home;
