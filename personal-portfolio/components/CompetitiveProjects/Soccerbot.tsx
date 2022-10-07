import {
  Accordion,
  AccordionSummary,
  Stack,
  Typography,
  Divider,
  ImageList,
  Chip,
  Box,
} from "@mui/material";
import React from "react";
import CustomImageListItem from "../CustomImageListItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {};

const Soccerbot = (props: Props) => {
  return (
    <Accordion elevation={6}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction="row" spacing={2}>
          <Box component="div" width={700}>
            <Typography>MESA Soccer Bot Competition</Typography>
            <Typography>Soccerbot</Typography>
          </Box>
          <Box component="div">
            <Typography>High School</Typography>
          </Box>
        </Stack>
      </AccordionSummary>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" />}
        p={2}
      >
        <Box component="div" flex={1}>
          <ImageList>
            <CustomImageListItem
              src="/videos/competitions/Soccerbot/Soccerbot.mp4"
              title="Scoring a Goal"
              isVideo
            />
          </ImageList>
        </Box>
        <Stack flex={1} spacing={2}>
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
