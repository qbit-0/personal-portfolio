import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <Box component="section" id="skills">
      <Container>
        <Typography variant="h3" fontWeight="bold">
          My skills.
        </Typography>
      </Container>
      <Container maxWidth="sm">
        <Grid2 container mt={8} spacing={4}>
          <Grid2 xs={6} display="flex">
            <Skill name={"React"} image={"images/blank-react.svg"} />
          </Grid2>
          <Grid2 xs={6} display="flex">
            <Skill name={"Material UI"} image={"images/blank-mui.svg"} />
          </Grid2>
          <Grid2 xs={6} display="flex">
            <Skill name={"Java"} image={"images/blank-java.svg"} />
          </Grid2>
          <Grid2 xs={6} display="flex">
            <Skill name={"TypeScript"} image={"images/blank-ts.svg"} />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Skills;
