import { Box, Container, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <Box component="section">
      <Container>
        <Typography variant="h3">Some of my projects.</Typography>
      </Container>
      <Container>
        <Grid2 container spacing={8} mt={8}>
          <Grid2 xs={6}>
            <ProjectCard
              name="DoomScroll"
              desc="Filter Reddit by sentiment."
              image="/images/website_previews/doom_scroll_preview.png"
              url="https://doomscroll.duypham.tech/"
              github="https://github.com/qbit-0/doom-scroll-v2"
            />
          </Grid2>
          <Grid2 xs={6}>
            <ProjectCard
              name="Flocks"
              desc="Simulate flocks of birds."
              image="/images/website_previews/flocks_preview.png"
              url="https://doomscroll.duypham.tech/"
              github="https://github.com/qbit-0/doom-scroll-v2"
            />
          </Grid2>
          <Grid2 xs={6}>
            <ProjectCard
              name="Collapse"
              desc="Generate pixel landscapes."
              image="/images/website_previews/collapse_preview.png"
              url="https://doomscroll.duypham.tech/"
              github="https://github.com/qbit-0/doom-scroll-v2"
            />
          </Grid2>
          <Grid2 xs={6}>
            <ProjectCard
              name="Personal Portfolio"
              desc="You're looking at it. Here's the source code."
              image="/images/website_previews/doom_scroll_preview.png"
              url="https://duypham.tech/"
              github="https://github.com/qbit-0/personal-portfolio"
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Projects;
