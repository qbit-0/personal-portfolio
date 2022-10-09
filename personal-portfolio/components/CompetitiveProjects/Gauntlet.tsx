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

const Gauntlet = (props: Props) => {
  const theme = useTheme();
  const largeLayout = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Accordion elevation={1} {...fadeInProps}>
      <CompetitiveProjectSummary
        competition={"MESA Virtual Computer Science Competition"}
        submission={"Gauntlet"}
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
              src="/videos/competitions/Gauntlet/Gauntlet Boss.mkv"
              title="Gauntlet Gameplay"
              isVideo
            />
          </ImageList>
        </Box>
        <Stack flex={1} spacing={2}>
          <Box component="div" display="flex" justifyContent="center">
            <Link
              width="100%"
              href="https://drive.google.com/file/d/0B6DTdB1TtAv-WDRkYkdLel9uNnc/view?usp=sharing&resourcekey=0-JNHLjAnEu1VLtDXwJAAKbg"
              target="_blank"
            >
              <Button variant="contained" fullWidth>
                Download Gauntlet
              </Button>
            </Link>
          </Box>
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
