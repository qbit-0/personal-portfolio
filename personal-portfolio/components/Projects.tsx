import {
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { NavContext } from "../utility/context/NavProvider";
import SplitablePaper from "./SplitablePaper";

const url =
  "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik";

type Props = {};

const Projects: FC<Props> = (props) => {
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.projects.setNavCallback(() => () => {
      navRef.current?.scrollIntoView({ block: "center" });
    });
  }, [navRef]);

  const [isSplit, setIsSplit] = useState(false);

  return (
    <Container
      ref={navRef}
      sx={{
        minHeight: "100vh",
        my: 16,
      }}
    >
      <Typography variant="h2" fontSize={96} fontWeight="bold">
        PROJECTS
      </Typography>
      <Stack
        component={motion.div}
        spacing={8}
        alignItems="center"
        onViewportEnter={() => {
          setNavValue("projects");
        }}
        viewport={{ amount: "all" }}
        whileInView={{ scale: 1.025 }}
      >
        <SplitablePaper
          width="1000px"
          height="600px"
          elevation={6}
          borderRadius={16}
          splitDirection="vertical"
          animate={isSplit ? "split" : "joined"}
        >
          <Paper sx={{ flex: 1 }}>
            <Stack height="100%" justifyContent="center" alignItems="center">
              <Typography variant="h4" display="block">
                DoomScroll
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  setIsSplit(!isSplit);
                }}
              >
                View Project
              </Button>
            </Stack>
          </Paper>
          <Paper sx={{ flex: 1, overflow: "clip" }}>
            <iframe
              src={url}
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </Paper>
        </SplitablePaper>
      </Stack>
    </Container>
  );
};

export default Projects;
