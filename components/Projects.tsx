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
            image="images/website_previews/doom_scroll_preview.png"
            url="https://doomscroll.duypham.tech"
            github_url="https://github.com/qbit-0/doom-scroll-v2"
            description="Filter Reddit posts by sentiment."
          />
        </Stack>
        <Stack component={motion.div} spacing={8} alignItems="center" mt={8}>
          <ProjectCard
            name="Collapse"
            image="images/website_previews/collapse_preview.png"
            url="https://collapse.duypham.tech"
            github_url="https://github.com/qbit-0/wave-function-collapse"
            description="Generate procedural worlds with wave-function collapse."
          />
        </Stack>
        <Stack component={motion.div} spacing={8} alignItems="center" mt={8}>
          <ProjectCard
            name="Flocks"
            image="images/website_previews/flocks_preview.png"
            url="https://flocks.duypham.tech"
            github_url="https://github.com/qbit-0/flocks"
            description="Simulate flocks of birds."
          />
        </Stack>
      </Container>
    </>
  );
};

export default Projects;
