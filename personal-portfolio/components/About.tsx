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

  const [time, setTime] = useState("past");

  const handleTimeChange = (event: SyntheticEvent, value: any) => {
    setTime(value);
  };

  let aboutContent: JSX.Element = null;
  switch (time) {
    case "past":
      aboutContent = (
        <Typography maxWidth={1000} variant="h5">
          Born in Vietnam, immigrated to the States at 8. Always been fond of
          computers, I started learning Python in middle school. In highschool,
          I quickly found my place as a member of STEM Club, joining various
          engineering and robotics competitions.
        </Typography>
      );
      break;
    case "present":
      aboutContent = (
        <Typography maxWidth={1000} variant="h5">
          At UCSD, I joined IEEE. First in Micromouse, then as a software
          developer on RoboCup soccer eventually becomming the software lead. I
          gaduated with a degree in Cognitive Science, specializing in Machine
          Learning and Neural Computation.
        </Typography>
      );
      break;
    case "future":
      aboutContent = (
        <Typography maxWidth={1000} variant="h5">
          I started learning web development near the end of my senior year. I
          wanted to build a personal porfolio. I figured I might as well make a
          career out of it. I just want to program stuff.
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
      <Box>
        <Typography variant="h2" fontSize={96} fontWeight="bold">
          ABOUT
        </Typography>
        <Paper
          component={motion.div}
          elevation={6}
          sx={{
            p: 8,
            borderRadius: 8,
          }}
          onViewportEnter={() => {
            setNavValue("about");
          }}
          viewport={{ amount: "all" }}
        >
          <Tabs value={time} onChange={handleTimeChange}>
            <Tab value="past" label="Past" />
            <Tab value="present" label="Present" />
            <Tab value="future" label="Future" />
          </Tabs>
          <Stack spacing={2}>{aboutContent}</Stack>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
