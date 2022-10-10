import { Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import { NavContext } from "../utility/context/NavProvider";
import { fadeInProps } from "../utility/other/fadeInProps";
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
          py: 16,
        }}
        maxWidth="md"
        onViewportEnter={() => {
          setNavValue("projects");
        }}
        viewport={{ amount: 0.5 }}
      >
        <Typography variant="h2" textAlign="center" {...fadeInProps}>
          PROJECTS
        </Typography>
        <Stack component={motion.div} spacing={8} alignItems="center" mt={8}>
          <ProjectCard
            name="DoomScroll"
            url="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
          />
        </Stack>
      </Container>
    </>
  );
};

export default Projects;
