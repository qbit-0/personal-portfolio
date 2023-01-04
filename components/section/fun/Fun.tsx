import { Box, Container, Typography } from "@mui/material";
import NEDC from "./CompetitiveProjects/NEDC";
import Petri from "./CompetitiveProjects/Petri";
import RoboCup from "./CompetitiveProjects/RoboCup";
import Soccerbot from "./CompetitiveProjects/Soccerbot";

type Props = {};

const Fun = (props: Props) => {
  return (
    <Box component="section">
      <Container>
        <Typography variant="h3" fontWeight="bold">
          What I do for fun.
        </Typography>
      </Container>
      <Container>
        <Box component="div" mt={8}>
          <RoboCup />
          <NEDC />
          <Petri />
          <Soccerbot />
        </Box>
      </Container>
    </Box>
  );
};

export default Fun;
