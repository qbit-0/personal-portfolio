import { Box, Container, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <Box component="section" id="projects">
      <Container>
        <Typography variant="h3" fontWeight="bold">
          Some of my projects.
        </Typography>
      </Container>
      <Container>
        <Grid2 container spacing={8} mt={8}>
          <Grid2 xs={12} md={6} display="flex" flexDirection="column">
            <ProjectCard
              name="Two Pills"
              desc="Go down user-generated rabbitholes."
              image="images/website_previews/two_pills_preview.png"
              url="https://two-pills.duypham.tech/"
              github="https://github.com/DuyAndShin/two-pills"
            />
          </Grid2>
          <Grid2 xs={12} md={6} display="flex" flexDirection="column">
            <ProjectCard
              name="DoomScroll"
              desc="Filter Reddit by sentiment."
              image="images/website_previews/doom_scroll_preview.png"
              url="https://doomscroll.duypham.tech/"
              github="https://github.com/qbit-0/doom-scroll-v2"
            />
          </Grid2>
          <Grid2 xs={12} md={6} display="flex" flexDirection="column">
            <ProjectCard
              name="Flocks"
              desc="Simulate flocks of birds."
              image="images/website_previews/flocks_preview.png"
              url="https://flocks.duypham.tech/"
              github="https://github.com/qbit-0/flocks"
            />
          </Grid2>
          <Grid2 xs={12} md={6} display="flex" flexDirection="column">
            <ProjectCard
              name="Collapse"
              desc="Generate pixel landscapes."
              image="images/website_previews/collapse_preview.png"
              url="https://collapse.duypham.tech/"
              github="https://github.com/qbit-0/wave-function-collapse"
            />
          </Grid2>
          {/* <Grid2 xs={12} md={6} display="flex" flexDirection="column">
            <ProjectCard
              name="Personal Portfolio"
              desc="You're looking at it. Here's the source code."
              image="images/website_previews/personal_portfolio_preview.png"
              url="https://duypham.tech/"
              github="https://github.com/qbit-0/personal-portfolio"
            />
          </Grid2> */}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Projects;
