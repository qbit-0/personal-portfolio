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

const RoboCup = (props: Props) => {
  const theme = useTheme();
  const largeLayout = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Accordion elevation={1} {...fadeInProps}>
      <CompetitiveProjectSummary
        competition={"IEEE RoboCup"}
        submission={"Tritons"}
        type={"University"}
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
          <ImageList cols={largeLayout ? 2 : 1}>
            <CustomImageListItem
              src="/images/competitions/RoboCup/RoboCup CAD.png"
              title="CAD Model"
            />
            <CustomImageListItem
              src="/images/competitions/RoboCup/RoboCup WIP Bot.png"
              title="WIP Robot"
            />
            <CustomImageListItem
              src="/images/competitions/RoboCup/RoboCup Module Structure.svg"
              title="Modules"
              description="Each module has inputs and outputs. We use RabbitMQ to communicate between modules."
            />
            <CustomImageListItem
              src="/images/competitions/RoboCup/RoboCup Node Grid.png"
              title="Node Grid"
              description="For pathfinding, we use a simple grid of nodes and adjust pentalties based on the expected position of future robots."
            />
            <CustomImageListItem
              src="/images/competitions/RoboCup/RoboCup JPS.png"
              title="Jump-Point Search"
              description="Jump-Point Search is an optimization for A* that is significantly faster than our previous usage of any-angle Theta*."
            />
            <CustomImageListItem
              src="/images/competitions/RoboCup/RoboCup Simplifying Via LoS Checks.png"
              title="Line of Sight"
              description="To further improve pathfinding, we simplify via line of sight checks. This results in beter paths than JPS alone."
            />
          </ImageList>
        </Box>
        <Stack flex={1} spacing={2}>
          <Stack spacing={2} alignItems="center">
            <Link width="100%" href="/pdf/2021_TDP_Tritons-RCSC.pdf" download>
              <Button variant="contained" fullWidth>
                2021 Team Description Paper
              </Button>
            </Link>
            <Link width="100%" href="/pdf/2022_TDP_Tritons-RCSC.pdf" download>
              <Button variant="contained" fullWidth>
                2022 Team Description Paper
              </Button>
            </Link>
          </Stack>
          <Box component="div">
            <Divider>
              <Chip label="Prompt" />
            </Divider>
            <Typography>
              Teams of students compete to build a set of robots to play
              miniture soccer. The project involved collaboration between
              mechanical engineers, electrical engineers, and software
              engineers.
            </Typography>
          </Box>
          <Box component="div">
            <Divider>
              <Chip label="Triton Soccer AI" />
            </Divider>
            <Typography>
              As a member of the AI side on software, I developed the
              centralized off-field AI software to simultaneously coordinate a
              team of 6 independent on-field robots. This program was
              responsible for pathfinding, decision-making, and sending movement
              and kicking commands. It was written in Java.
            </Typography>
          </Box>

          <Box component="div">
            <Divider>
              <Chip label="TritonBot" />
            </Divider>
            <Typography>
              I also developed TritonBot, a python program to control the actual
              wheels for each individual robot by tranforming the high-level
              commands sent by the AI. It was written in Python.
            </Typography>
          </Box>

          <Box component="div">
            <Divider>
              <Chip label="Status" />
            </Divider>
            <Typography>
              After two years, I was asked to lead software development.
              Unfortunately, due to the Covid-19 pandemic, we were unable to
              finish the physical robots in time. Our aspirations for RoboCup
              soccer is still ongoing, and hopefully we'll get it done this
              year. Since I've already graduated, I'm mostly just an advisor
              nowadays.
            </Typography>
          </Box>

          <Box component="div">
            <Divider>
              <Chip label="Other" />
            </Divider>
            <Typography>
              We wrote two papers describing our progress for 2021 and 2022.
              Check them out, if you want to learn more.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Accordion>
  );
};

export default RoboCup;
