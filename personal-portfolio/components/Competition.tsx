import {
  Accordion,
  AccordionSummary,
  Box,
  Chip,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomImageListItem from "./CustomImageListItem";
import NEDC from "./CompetitiveProjects/NEDC";
import Petri from "./CompetitiveProjects/Petri";
import Gauntlet from "./CompetitiveProjects/Gauntlet";
import Soccerbot from "./CompetitiveProjects/Soccerbot";
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
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 16,
      }}
    >
      <Box
        component={motion.div}
        onViewportEnter={() => {
          setNavValue("competition");
        }}
      >
        <Typography variant="h2" fontSize={96} fontWeight="bold">
          COMPETITION / FUN
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          A longtime hobby of mine is participating in various engineering and
          programming contests, usually with a team of my friends. Good times.
        </Typography>

        <RoboCup />
        <NEDC />
        <Petri />
        <Gauntlet />
        <Soccerbot />
      </Box>
    </Container>
  );
};

export default Competition;
