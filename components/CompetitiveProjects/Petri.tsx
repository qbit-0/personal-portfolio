import {
  Accordion,
  Box,
  Button,
  Chip,
  Divider,
  ImageList,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { fadeInProps } from "../../utility/other/fadeInProps";
import CustomImageListItem from "../CustomImageListItem";
import CompetitiveProjectSummary from "./CompetitiveProjectSummary";

type Props = {};

const CongressionalAppChallenge = (props: Props) => {
  const theme = useTheme();
  const largeLayout = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Accordion elevation={1} {...fadeInProps}>
      <CompetitiveProjectSummary
        competition={"Congressional App Challenge"}
        submission={"Petri"}
        type={"High School"}
      />
      <Divider />
      <Stack
        direction={largeLayout ? "row" : "column"}
        spacing={2}
        divider={
          <Divider orientation={largeLayout ? "vertical" : "horizontal"} />
        }
        p={2}
      >
        <Box component="div" flex={2}>
          <ImageList cols={1}>
            <CustomImageListItem
              src="/videos/competitions/Petri/Petri Fast Forward.mp4"
              title="Petri, 13 Minutes Fast-Forwarded"
              isVideo
            />
          </ImageList>
        </Box>
        <Stack flex={1} spacing={2}>
          <Box component="div" display="flex" justifyContent="center">
            <Link
              width="100%"
              href="https://drive.google.com/file/d/0B6DTdB1TtAv-V3BVWTF3NkZLaHc/view?usp=sharing&resourcekey=0-vIF8uJbfBsVN7hpLBhro0g"
              target="_blank"
            >
              <Button variant="contained" fullWidth>
                Download Petri
              </Button>
            </Link>
          </Box>
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
