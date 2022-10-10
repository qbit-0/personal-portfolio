import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";

import { fadeInProps } from "../utility/other/fadeInProps";
import Gauntlet from "./CompetitiveProjects/Gauntlet";
import NEDC from "./CompetitiveProjects/NEDC";
import Petri from "./CompetitiveProjects/Petri";
import RoboCup from "./CompetitiveProjects/RoboCup";

type Props = {};

const Competition: FC<Props> = (props) => {
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.competition.setNavCallback(() => () => {
      navRef.current?.scrollIntoView();
    });
  }, [navRef]);

  return (
    <Container
      ref={navRef}
      component={motion.div}
      maxWidth="md"
      sx={{
        py: 16,
      }}
      onViewportEnter={() => {
        setNavValue("competition");
      }}
      viewport={{ amount: 0.5 }}
    >
      <Typography variant="h2" textAlign="center" {...fadeInProps}>
        COMPETITION / FUN
      </Typography>
      <Typography variant="h4" mt={8} {...fadeInProps}>
        One of my hobbies is participating in engineering and programming
        contests, usually with a team of my friends. Good times.
      </Typography>

      <Box mt={8} {...fadeInProps}>
        <RoboCup />
        <NEDC />
        <Petri />
        <Gauntlet />
      </Box>
    </Container>
  );
};

export default Competition;
