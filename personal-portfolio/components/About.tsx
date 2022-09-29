import {
  Box,
  Container,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  FC,
  SyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { NavContext } from "../utility/context/NavProvider";

type Props = {};

const About: FC<Props> = (props) => {
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.about.setNavCallback(() => () => {
      navRef.current?.scrollIntoView();
    });
  }, [navRef]);

  const [section, setSection] = useState("past");

  const handleSectionChange = (event: SyntheticEvent, value: any) => {
    setSection(value);
  };

  let aboutContent: JSX.Element = <></>;
  switch (section) {
    case "past":
      aboutContent = (
        <Typography maxWidth={1000} variant="h5">
          I was born in Vietnam, and I emigrated to the US when I was eight
          years old. Entering into elementary school not knowing a bit of
          English, I had to learn fast.
          <br />
          <br />
          I'm a proud graduate of UCSD with a degree in Cognitive Science,
          specializing in Machine Learning and Neural Computation.
        </Typography>
      );
      break;

    case "informalEducation":
      aboutContent = (
        <Typography maxWidth={1000} variant="h5">
          My first experience with programming started as just a hobby. During
          middle school, I stayed up way too late past midnight doing Python
          courses on Codecademy. I wanted to make video games. I still remember
          spending my summers on Unity and UE4. And on my quest, I've
          independently learned Java, C#, C++, as well as a whole host of other
          languages I'll never use in a web development job.
        </Typography>
      );
      break;
    case "competition":
      aboutContent = (
        <Typography maxWidth={1000} variant="h5">
          If there's one thing I'm known for, it's probably my obsession with
          competition.
          <br />
          <br />
          It started in High School in STEM Club, this thing where me and a few
          of my friends would enter into various programming and engineering
          competitions. There was that time where we made a robot to kick tiny
          soccer balls. Or when I made a little platforming game called
          Gauntlet. Or a petri dish evolution thing.
          <br />
          <br />
          But by far my biggest acomplishment is this wooden beast of a machine
          that could be used to sort a stack of labeled paper in alphabetical
          order. Got second place in MESA's National Engineering Design
          Competition with that thing. Had to fly all the way to Philadelphia to
          compete for that. We spoke in front of a crowd of fellow students all
          over the nation. The machine was a bit inconsistent (to say the
          least), but I managed to get it working just the night before the big
          presentation, phew.
        </Typography>
      );
      break;
    case "competition2":
      aboutContent = (
        <Typography maxWidth={1000} variant="h5">
          My competitive spirit didn't die out in High School. When I eventually
          began studying at UCSD, I ended up joining IEEE, pretty much
          exclusively because they were doing robotics competitions. First, I
          began small with Micromouse, where me and a group of far more
          experience students built a tiny robot to run a maze.
          <br />
          <br />
          But shortly afterwards, I took an interest in RoboCup Soccer, where me
          and a large group of students were to design and fabricate a team of
          robots to play tiny soccer. I was on the programming team, and ended
          up becoming the programming lead after a few years.
        </Typography>
      );
      break;
  }

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
      <Box component="div">
        <Typography variant="h2" fontSize={96} fontWeight="bold">
          MY STORY
        </Typography>
        <Stack spacing={2}>
          <Paper
            component={motion.div}
            elevation={6}
            sx={{
              p: 4,
            }}
            onViewportEnter={() => {
              setNavValue("about");
            }}
          >
            <Typography maxWidth={1000} variant="h5">
              Welcome to my portfolio! I'm a font-end React developer currently
              looking for a full-time job.
            </Typography>
          </Paper>
          <Paper
            component={motion.div}
            elevation={6}
            sx={{
              p: 4,
            }}
            onViewportEnter={() => {
              setNavValue("about");
            }}
            viewport={{ amount: "all" }}
          >
            <Tabs value={section} onChange={handleSectionChange}>
              <Tab label="A Bit of My Past" value="past" />
              <Tab label="Informal Education" value="informalEducation" />
              <Tab label="STEM Club" value="competition" />
              <Tab label="IEEE Projects" value="competition2" />
              {/* <Tab label="Other Interests" value="interests" /> */}
              {/* <Tab label="A Bit of My Future" value="future" /> */}
            </Tabs>
            <Box component="div" mt={2}>
              {aboutContent}
            </Box>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
