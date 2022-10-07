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

const CongressionalAppChallenge = (props: Props) => {
  return (
    <Accordion elevation={6}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction="row" spacing={2}>
          <Box component="div" width={700}>
            <Typography>Congressional App Challenge</Typography>
            <Typography>Petri</Typography>
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
              src="/images/competitions/NEDC/NEDC 2nd Place.jpg"
              title="Petri Gameplay, Fast-Forwarded"
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
              Create a video game that educates the player on a concept.
            </Typography>
          </Box>
          <Box component="div">
            <Divider>
              <Chip label="Submission" />
            </Divider>
            <Typography>
              Inspired by Conway's game of life, Petri is an evolution sim based
              on cellular automata. Each cell has a list of commands (such as
              move, eat, photosynthesize) that combine into a DNA program. When
              a cell reproduces, it passes on its DNA, with a chance to mutate.
              After running this for a while, you might end up with something
              interesting.
            </Typography>
          </Box>
          <Box component="div">
            <Divider>
              <Chip label="Contribution" />
            </Divider>
            <Typography>I did the design, programming, and art.</Typography>
          </Box>
        </Stack>
      </Stack>
    </Accordion>
  );
};

export default CongressionalAppChallenge;
