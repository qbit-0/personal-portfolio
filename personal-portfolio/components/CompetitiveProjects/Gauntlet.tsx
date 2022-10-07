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

const Gauntlet = (props: Props) => {
  return (
    <Accordion elevation={6}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction="row" spacing={2}>
          <Box component="div" width={700}>
            <Typography>MESA Virtual Computer Science Competition</Typography>
            <Typography>Gauntlet</Typography>
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
              src="/videos/competitions/Gauntlet/Gauntlet Trailer.mp4"
              title="Gauntlet Gameplay"
              isVideo
            />
          </ImageList>
        </Box>
        <Stack flex={1} spacing={2}>
          <Box component="div">
            <Divider>
              <Chip label="Prompt" />
            </Divider>
            <Typography>Create a video game with Greenfoot.</Typography>
          </Box>
          <Box component="div">
            <Divider>
              <Chip label="Submission" />
            </Divider>
            <Typography>
              Gauntlet is a simple action platformer. You can slash and jump and
              that's about it. There's a boss at the end. Music ripped straight
              from Cave Story.
            </Typography>
          </Box>
          <Box component="div">
            <Divider>
              <Chip label="Contribution" />
            </Divider>
            <Typography>
              Did basically everything except for level design.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Accordion>
  );
};

export default Gauntlet;
