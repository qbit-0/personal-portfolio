import {
  Accordion,
  Box,
  Chip,
  Divider,
  ImageList,
  Stack,
  Typography,
} from "@mui/material";
import CustomImageListItem from "./CustomImageListItem";
import CompetitiveProjectSummary from "./CompetitiveProjectSummary";

type Props = {};

const Soccerbot = (props: Props) => {
  return (
    <Accordion elevation={1}>
      <CompetitiveProjectSummary
        competition={"MESA Soccer Bot Competition"}
        submission={"Bolsa Grande High School Soccerbot"}
        type={"High School"}
      />
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" />}
        p={2}
      >
        <Box component="div" flex={1}>
          <ImageList cols={1}>
            <CustomImageListItem
              src="/videos/competitions/Soccerbot/Soccerbot.mp4"
              title="Scoring a Goal"
              isVideo
            />
          </ImageList>
        </Box>
        <Stack flex={2} spacing={2}>
          <Box component="div">
            <Divider>
              <Chip label="Prompt" />
            </Divider>
            <Typography>
              Build a robot to kick a soccer ball into a goal.
            </Typography>
          </Box>
          <Box component="div">
            <Divider>
              <Chip label="Submission" />
            </Divider>
            <Typography>
              We built a robot with Arduino, wires everywhere, and some tape.
              There might have been an LCD display too.
            </Typography>
          </Box>
          <Box component="div">
            <Divider>
              <Chip label="Contribution" />
            </Divider>
            <Typography>
              This was my first introduction to Arduino programming. Took a
              while to get the robot to move straight. Knowing PID would have
              made this a lot easier.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Accordion>
  );
};

export default Soccerbot;
