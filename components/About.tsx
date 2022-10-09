import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";
import { fadeInProps } from "../utility/other/fadeInProps";
import Sample from "./Sample/Sample";

type Props = {};

const About: FC<Props> = (props) => {
  const theme = useTheme();
  const showSample = useMediaQuery(theme.breakpoints.up("sm"));

  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.about.setNavCallback(() => () => {
      navRef.current?.scrollIntoView();
    });
  }, [navRef]);

  return (
    <Container
      ref={navRef}
      component={motion.div}
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        py: 16,
      }}
      onViewportEnter={() => {
        setNavValue("about");
      }}
      viewport={{ amount: 0.5 }}
    >
      <Typography variant="h2" textAlign="center" {...fadeInProps}>
        ABOUT
      </Typography>
      <Typography variant="h4" mt={8} {...fadeInProps}>
        I became addicted to programming in middle school, staying up late at
        night learning Python on Codecademy. Now I'm a front-end web developer
        specializing in React.
      </Typography>
      {showSample && (
        <Box component="div" mt={8}>
          <Sample />
        </Box>
      )}
    </Container>
  );
};

export default About;
