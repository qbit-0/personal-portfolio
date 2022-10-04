import { Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects: FC<Props> = (props) => {
  const { setNavValue, navCallbacks } = useContext(NavContext);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navCallbacks.projects.setNavCallback(() => () => {
      navRef.current?.scrollIntoView();
    });
  }, [navRef]);

  return (
    <>
      <Container
        component={motion.div}
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
        >
          <ProjectCard
            name="DoomScroll"
            url="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
          />
          <ProjectCard
            name="DoomScroll"
            url="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
            flipped
          />
        </Stack>
      </Container>
    </>
  );
};

export default Projects;
